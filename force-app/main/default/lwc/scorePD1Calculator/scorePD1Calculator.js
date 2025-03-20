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

    attemptHistory = [{Id:1, Score:15}, {Id:2, Score : 50}, {Id:3, Score:80}, {Id:4, Score:100}];

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
        let devFundScore = this.devFundamentalScore * devFundamentalWeight;
        let processAutomation = this.processAutomationScore * processAutomationWeight;
        let userInterface = this.userInterfaceScore * userInterfaceWeight;
        let testingDebbugingDeployment = this.testingDebbugingDeploymentScore * testingDebbugingDeploymentWeight;
        this.certificationScore = devFundScore + processAutomation + userInterface + testingDebbugingDeployment;

        this.showResourcesIfFailed();
        this.addAttemptHistory(this.certificationScore);
    }

    showResourcesIfFailed(){
        if(this.certificationScore < passingScore){
            this.showResources = true;
        } else{
            this.showResources = false;
        }
        this.showGoodJob = !this.showGoodJob;
    }
    
    addAttemptHistory(score) {
        try {
            this.currentHistoryId++;
            const attempt = {
                Id: this.currentHistoryId,
                Score: score
            };
            this.attemptHistory = [...this.attemptHistory, attempt];
        } catch (error) {
            // Handle the error here
            console.error('An error occurred while adding attempt history:', error);
        }
    }
    
    deleteAttemptHandler(event){
        let attemptId = event.detail;
        this.attemptHistory = this.attemptHistory.filter(attempt => attempt.Id != attemptId);
        //this.currentHistoryId--;
    }

    connectedCallback(){
        this.currentHistoryId = this.attemptHistory.length;
    }
}