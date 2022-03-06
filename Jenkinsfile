pipeline {
    agent any
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!'
            }
        }
        stage('Stage 2') {
            steps {
                echo 'Clona il repository'
                sh 'rm -fr node-pipe'
                sh 'git clone https://github.com/redeluni/node-pipe.git'
            }
        }
        stage('Stage ultimo') {
            steps {
                echo 'FINE!'
            }
        }
    }
}
