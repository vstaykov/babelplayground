pipeline {
  agent any
  options([
    parameters([
      booleanParam(defaultValue: true, description: 'Should install dependencies when run', name: 'InstallDependencies')
    ])
  ])
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
