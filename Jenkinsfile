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

      office365ConnectorSend color: '#ff0000',
        message: "Build failed: model-definitions ${env.BRANCH_NAME} (<${env.BUILD_URL}>)",
        status: 'FAILURE',
        // ci-builds
        webhookUrl: 'https://outlook.office.com/webhook/4829f4a1-35aa-4dca-9ad7-89ac07833f0a@aecc8a99-f9b2-4dad-9cf1-038b83a3ff5f/JenkinsCI/f708a35d1e664c1fb5834c370e974533/cdfdcb89-4370-47bb-95e6-921ab334adb2'

      throw e

    }
  }
}
