import { LightningElement} from 'lwc';

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

    certificationScore = 90;
    numberOfQuestions = 60;

    showResources = false;
    showGoodJob = false;

    currentHistoryId = 0;

    //@track
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

    handleClick(){
        let devFundScore = devFundamentalScore * devFundamentalWeight;
        let processAutomation = processAutomationScore * processAutomationWeight;
        let userInterface = userInterfaceScore * userInterfaceWeight;
        let testingDebbugingDeployment = testingDebbugingDeploymentScore * testingDebbugingDeploymentWeight;
        this.certificationScore = devFundScore + processAutomation + userInterface + testingDebbugingDeployment;

        this.showResourcesIfFailed();
        this.addAttemptHistory(this.score);
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

    // addAttempHistory(score){
    //     this.attemptHistory.push({
    //         id : Math.floor(Math.random * 100), Score:score
    //     }) 
    // }   

    addAttemptHistory(score){
        currentHistoryId++;
        const attempt = 
        {
            id : this.currentHistoryId, score:score
        } 
        this.attemptHistory =[...this.attemptHistory, attempt];
    }   

    deleteAttemptHandler(event){
        let attemptid = event.detail;
        this.attemptHistory = this.attemptHistory(filter(attempt => attempt.Id != attemptId))

    }

    connectedCallback(){
        this.currentHistoryId = this.attemptHistory.length;
    }
}