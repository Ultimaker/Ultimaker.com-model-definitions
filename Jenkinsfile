#!/usr/bin/groovy

@Library('k8s-jenkins-tools') _
import com.ultimaker.Slug
import com.ultimaker.Random

def random = new Random()
def podLabel = random.string(32)

podTemplate(label: "${podLabel}", inheritFrom: 'default', containers: [
  containerTemplate(name: 'node', image: 'node:10.13.0', ttyEnabled: true, command: 'cat')
]) {
  node("${podLabel}") {
      def scmVars = checkout scm
      def commitHash = scmVars.GIT_COMMIT
      def repo = scmVars.GIT_URL.replaceAll('https://github.com/', '').replaceAll('.git', '')


      stage('install dependencies') {
        container('node') {
          sh 'npm ci'
        }
      }

      stage('verify code') {
        parallel(
          "lint code": {
            container('node') {
              sh 'npm run lint'
            }
          }
        )
      }
  }
}
