import { LightningElement } from 'lwc';

const devFundamentalWeight = 0.23;
const processAutomationWeight = 0.30;
const userInterfaceWeight = 0.25;
const testingDebbugingDeploymentWeight = 0.22;
const passingScore = 68;

export default class ScorePD1Calculator extends LightningElement {
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingDebbugingDeploymentScore = 50;

    certificationScore = 900;

    showResources = false;
    showGoodJob = false

    attemptHistory = [{id:1, score:15}, {id:2, score : 50}, {id:3, score:80}];

    handleChange(event){
        console.log(event);
        console.log(event.target);
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

    calculateScore(){
        let devFundScore = devFundamentalScore * devFundamentalWeight;
        let processAutomation = processAutomationScore * processAutomationWeight;
        let userInterface = userInterfaceScore * userInterfaceWeight;
        let testingDebbugingDeployment = testingDebbugingDeploymentScore * testingDebbugingDeploymentWeight;
        this.certificationScore = (this.devFundScore + this.processAutomation + this.userInterface + this.testingDebbugingDeployment);

        this.showResourcesIfFailed();
    }

    showResourcesIfFailed(){
        if(this.certificationScore < passingScore){
            this.showResources = true;
            //this.showGoodJob = false;
        } else{
            this.showResources = false;
            //this.showGoodJob = true;
        }
        this.showGoodJob = !this.showGoodJob;
    }
}