/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-06-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';

export default class PortfolioBanner extends LightningElement {

    @api recordId //= "a010900002cfnUjAAI";
    @api linkedinUrl //= 'https://www.linkedin.com/in/anna-makhovskaya-61b410168/';
    @api githubUrl //= 'https://github.com/mahoska';
    @api facebookUrl //= 'https://www.facebook.com/profile.php?id=100000501810108';
    @api trailheadUrl //= 'https://trailblazer.me/id/makhovskaya';
    @api twitterUrl
    @api youtubeUrl
    @api blogUrl

    userPic = `${PortfolioAssets}/PortfolioAssets/userPicGirl.jpg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    facebook = `${PortfolioAssets}/PortfolioAssets/Social/facebook.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`;
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blog.svg`;



    @wire(getRecord, { recordId: '$recordId', fields: [FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION] })
    portfolioData
    /*portfolioHandler({ data, error }) {
        if (data) {
            console.log("record data: ", JSON.stringify(data));
        }
        if (error) {
            console.error("portfolio data error: ", error);
        }
    }*/

    get fullName() {
        console.log(getFieldValue(this.portfolioData.data, FULLNAME));
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }

    get companyLocation() {
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION);
    }

    get companyName() {
        return getFieldValue(this.portfolioData.data, COMPANY_NAME);
    }

    get designation() {
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }

}