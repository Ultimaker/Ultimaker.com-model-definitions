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

    try {

      checkout scm

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
      // This will run if something goes wrong
      currentBuild.result = 'FAILURE'

      throw e
    } finally {
      // This will always run

      def currentResult = currentBuild.result ?: 'SUCCESS'
      def previousResult = currentBuild.previousBuild?.result

      if (currentResult == 'UNSTABLE') {
        // This will run only if the run was marked as unstable
      }

      if (currentResult == 'ABORTED') {
        // This will run only if the run was aborted
      }

      if (currentResult == 'SUCCESS') {
        // This will run only if the run was marked as success
      }

      if (previousResult != null && previousResult != currentResult) {
        // This will run only if the state of the Pipeline has changed
        // For example, if the Pipeline was previously failing but is now successful
      }

    } // try/catch/finally
  }
}
