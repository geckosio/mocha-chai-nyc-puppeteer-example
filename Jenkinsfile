pipeline {

  agent any

  stages {  

    stage('Install Packages') {
      tools {
        nodejs 'NodeJS 10'
      }
      steps {
        timeout(10) {
          retry(3) {
            sh 'npm install'
          }
        }
      }
    }
    
    stage('Test on Node.js v10') {
      tools {
        nodejs 'NodeJS 10'
      }
      steps {
        timeout(1) {
          retry(3) {
            sh 'node --version'
            sh 'npm --version'
            sh 'npm test'
          }
        }
      }
    }

    stage('Save Code Coverage Report') {
      steps {
        // cobertura autoUpdateHealth: false, autoUpdateStability: false, classCoverageTargets: '80, 0, 40', coberturaReportFile: 'coverage/cobertura-coverage.xml', conditionalCoverageTargets: '80, 0, 40', enableNewApi: true, failUnhealthy: false, failUnstable: false, fileCoverageTargets: '80, 0, 40', lineCoverageTargets: '80, 0, 40', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 40', onlyStable: false, packageCoverageTargets: '80, 0, 40', sourceEncoding: 'ASCII', zoomCoverageChart: false
        // publishCoverage adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')], sourceFileResolver: sourceFiles('STORE_LAST_BUILD')
        // publishCoverage adapters: [istanbulCoberturaAdapter('coverage/cobertura-coverage.xml')], sourceFileResolver: sourceFiles('NEVER_STORE')
        cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'coverage/cobertura-coverage.xml', conditionalCoverageTargets: '70, 0, 0', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 0, 0', onlyStable: false, zoomCoverageChart: false
      }
    }

  }

  // post {
  //   always {
  //     cleanWs()
  //   }
  // }

}