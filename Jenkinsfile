pipeline {
  agent any
  parameters {
    booleanParam(defaultValue: true, description: 'Should install dependencies when run', name: 'INSTALL_DEPENDENCIES')
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
