import { api, LightningElement} from 'lwc';

export default class ScoreInformation extends LightningElement {

    @api score;
    @api numberOfQuestions;

    get numberOfQuestionsCorrect(){
        return Math.floor((this.score / 100) * this.numberOfQuestions);
    }

    get numberOfQuestionsIncorect(){
        return (this.numberOfQuestions - this.numberOfQuestionsCorrect);
    }
}