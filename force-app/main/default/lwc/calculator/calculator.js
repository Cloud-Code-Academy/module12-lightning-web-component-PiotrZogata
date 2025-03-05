import { LightningElement } from 'lwc';

const devFundamentalWeight = 0.23;
const processAutomationWeight = 0.30;
const userInterfaceWeight = 0.25;
const testingDebbugingDeploymentWeight = 0.22;

export default class Calculator extends LightningElement {

    devFundamentalScore = 0;
    processAutomationScore = 0;
    userInterfaceScore = 0;
    testingDebbugingDeploymentScore = 0;

    certificationScore = 50;
    
    calculateScore(){
        let devFundamentalScore = devFundamentalScore * devFundamentalWeight;
        let processAutomationScore = processAutomationScore * processAutomationWeight;
        let userInterfaceScore = userInterfaceScore * 0.25;
        let testingDebbugingDeploymentWeight = testingDebbugingDeploymentScore * 0.22;
        this.certificationScore = (this.devFundamentalScoreScore + this.processAutomationScore + this.userInterfaceWeight + this.testingDebbugingDeploymentWeight);
    }

    handleChange(event){
        let value = Number(event.target.value);
        if(event.target.name === 'devFundamentals'){
            this.devFundamentalScore = value;
        }else if(event.target.name === 'process_Automation'){
            this.processAutomationScore = value;
        }else if(event.target.name === 'userInterface'){
            this.userInterfaceScore = value;
        }else if(event.target.name === 'testingDebbugingDeployment'){
            this.testingDebbugingDeploymentScore = value;
        }
    }
}