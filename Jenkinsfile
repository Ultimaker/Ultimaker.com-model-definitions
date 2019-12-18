#!usr/bin/env groovy

@Library('k8s-jenkins-tools') _

String label = generateLabel('model-definitions')

podTemplate(
  label: label,
  activeDeadlineSeconds: 900,
  containers: [
    containerTemplate(
      name: 'node',
      image: 'eu.gcr.io/um-website-193311/ultimaker.com/node:latest',
      command: 'cat',
      alwaysPullImage: true,
      ttyEnabled: true
    )
  ]
) {

  node (label) {

    checkout scm

    try {

      stage('install dependencies') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'npm ci'
        }
      }

      stage('check prebuilt files') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'du dist > prebuilt.txt'
        }
      }

      stage('build code') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'rm -rf dist'
          sh 'npm run tsc'
          sh 'du dist > built.txt'
        }
      }

      stage('compare prebuilt & built files') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'diff prebuilt.txt built.txt'
        }
      }

    } catch (e) {

      currentBuild.result = 'FAILURE'

      buildFailure(
        env.BUILD_URL,
        'Model Definitions',
        'Ultimaker.com-model-definitions',
        env.BRANCH_NAME,
        STAGE_NAME
      )

      throw e

    }
  }
}
