#!usr/bin/env groovy

// max length is 64 characters, UUID is 36
String label = "model-definitions-${UUID.randomUUID().toString()}"

podTemplate(
  label: label,
  activeDeadlineSeconds: 900,
  containers: [
    containerTemplate(
      name: 'jnlp',
      image: 'eu.gcr.io/um-website-193311/jenkins/jnlp-slave',
      args: '${computer.jnlpmac} ${computer.name}',
      ttyEnabled: true
    ),
    containerTemplate(
      name: 'node',
      image: 'node:10.15-alpine',
      command: 'cat',
      ttyEnabled: true
    )
  ]
) {

  node (label) {

    checkout scm

    try {

      stage('install dependencies') {
        container('node') {
          sh 'npm ci'
        }
      }

      stage('validate code') {
        container('node') {
          sh 'npm run lint'
        }
      }

      stage('check prebuilt files') {
        container('node') {
          sh 'du dist > prebuilt.txt'
        }
      }

      stage('build code') {
        container('node') {
          sh 'rm -rf dist'
          sh 'npm run tsc'
          sh 'du dist > built.txt'
        }
      }

      stage('compare prebuilt & built files') {
        container('node') {
          sh 'diff prebuilt.txt built.txt'
        }
      }

    } catch (e) {

      currentBuild.result = 'FAILURE'

      slackSend color: 'danger',
        channel: '#ci-builds',
        message: "Build failed: model-definitions ${env.BRANCH_NAME} (<${env.BUILD_URL}|Job>)"

      throw e

    }
  }
}
