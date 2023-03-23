/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-23-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height = '';
    weight = '';
    bmiValue = '';
    result = '';

    inputHandler(event) {
        const { name, value } = event.target;
        if (name === 'height') {
            this.height = value;
        }
        if (name === 'weight') {
            this.weight = value;
        }

        //this[name] = value;
    }

    submitHandler(event) {
        event.preventDefault();
        console.log("height", this.height);
        console.log("weight", this.weight);
        this.calculate();
    }

    calculate() {
        //BMI = weight in KG / (height in M * height in M)
        let height = Number(this.height) / 100;
        let bmi = Number(this.weight) / (height * height);
        console.log("BMI Value is: ", bmi);
        this.bmiValue = Number(bmi.toFixed(2));

        if (this.bmiValue < 18.5) {
            this.result = "Underweight";
        } else if (this.bmiValue >= 18.5 && this.bmiValue < 25) {
            this.result = "Healthy";
        } else if (this.bmiValue >= 25 && this.bmiValue < 30) {
            this.result = "Overweight";
        } else {
            this.result = "Obese";
        }

        console.log("BMI Value is: ", this.bmiValue);
        console.log("Result is: ", this.result);
    }

    recalculate() {
        this.result = '';
        this.height = '';
        this.weight = '';
        this.bmiValue = '';
    }
}