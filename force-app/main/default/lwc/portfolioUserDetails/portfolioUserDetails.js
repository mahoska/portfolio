/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-07-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl

    downloadResume() {
        window.open(this.resumeUrl, "_blank");
        //"https://github.com/mahoska/makhovska-resume/raw/fe33d178cdb1a1f143f917ce3a4db77f986c4079/Makhovska_resume.pdf"
    }
}