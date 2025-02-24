import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    devFundamentalScore = 0;
    processAutomationScore = 0;
    userInterfaceScore = 0;
    testingDebbugingDeploymentScore = 0;

    certificationScore = 0;
    
    calculateScore(){
        this.certificationScore = (this.devFundamentalScore + this.processAutomationScore + this.userInterfaceScore + this.testingDebbugingDeploymentScore);
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