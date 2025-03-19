import { api, LightningElement} from 'lwc';

export default class ScoreInformation extends LightningElement {

    @api score;
    @api numberOfQuestions;
    @api attemptId;

    get numberOfQuestionsCorrect(){
        return Math.floor((this.score / 100) * this.numberOfQuestions);
    }

    get numberOfQuestionsIncorect(){
        return (this.numberOfQuestions - this.numberOfQuestionsCorrect);
    }

    handleDeleteAttempt(){
        console.log("handleDeleteAttempt is cliked");
        const deleteEvent = new CustomEvent('deleteattempt', { detail:this.attemptId});
        this.dispatchEvent(deleteEvent);
    }
}