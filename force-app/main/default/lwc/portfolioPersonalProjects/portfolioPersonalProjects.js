/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 04-12-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioPersonalProjects extends LightningElement {

    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects = [
        {
            "name": "BMI Calculator App",
            "img": this.BMICalculator,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name": "Alarm Clock App",
            "img": this.AlarmClock,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name": "Currency Calculator App",
            "img": this.CurrencyCalculator,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name": "Weather App",
            "img": this.WeatherApp,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name": "Survey App",
            "img": this.SurveyApp,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0Ki09000000xyLu&surveyName=employee_servey&UUID=e43a57be-4f70-482f-88ab-b80ed948b877"
        },
        {
            "name": "Note Taking App",
            "img": this.NoteApp,
            "link": "https://makhovskaportfolio-dev-ed.develop.my.site.com/note-taking-app"
        },
    ]
}