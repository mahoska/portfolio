/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-14-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement, api, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Institution Name', fieldName: 'InstitutionName' },
    { label: 'Passing Year', fieldName: 'PassingYear' }
];
export default class PortfolioEducation extends LightningElement {

    tableData = [];
    columns = COLUMNS;

    @api recordId;
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Educations__r',
        fields: ['Education__c.InstitutionName__c', 'Education__c.Title__c', 'Education__c.PassingYear__c'],
        sortBy: ['Education__c.PassingYear__c']
    }) EducationHandler({ data, error }) {
        if (data) {
            console.log("EducationHandler data:", JSON.stringify(data));
            this.formatEducation(data);
        }
        if (error) {
            console.error("EducationHandler error:", error);
        }
    }

    formatEducation(data) {
        this.tableData = [...data.records].reverse().map(item => {
            let Id = item.id;
            const { InstitutionName__c, Title__c, PassingYear__c } = item.fields;
            let Education = Title__c.value;
            let InstitutionName = InstitutionName__c.value;
            let PassingYear = PassingYear__c.value;

            return { Id, Education, InstitutionName, PassingYear };
        })

        console.log("this.tableData:", JSON.stringify(this.tableData));
    }
}