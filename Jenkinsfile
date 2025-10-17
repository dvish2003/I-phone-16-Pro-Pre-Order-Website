pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/dvish2003/I-phone-16-Pro-Pre-Order-Website.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t dvish2003/iphone-16-preoder:${BUILD_NUMBER} .'                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhubpasswordnew', variable: 'dockerpw')]) {
                    script {
                        sh "docker login -u dvish2003 -p '${dockerpw}'"
                    }
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "docker push dvish2003/iphone-16-preoder:${BUILD_NUMBER}"
                }
            }
        }
        stage('Deploy to Vercel') {
            steps {
            withCredentials([string(credentialsId: 'VERCEL_ID', variable: 'VERCEL_TOKEN')]) {
                sh '''
                    npx vercel --prod --token $VERCEL_TOKEN --confirm
                '''
            }
    }
}

    }
    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}