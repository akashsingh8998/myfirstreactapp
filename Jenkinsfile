pipeline {
    agent any
    stages {
        stage('Example clean') {
            steps {
				bat "npm install"
                bat "sonar-scanner"
            }
        }
    }
}