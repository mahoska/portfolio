/**
 * @description       : 
 * @author            : Anna Makhovskaya
 * @group             : 
 * @last modified on  : 03-24-2023
 * @last modified by  : Anna Makhovskaya
**/
import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';

export default class AlarmClockApp extends LightningElement {

    clockImage = AlarmClockAssets + '/AlarmClockAssets/clock.png';
    currentTime = '';
    hours = [];
    minutes = [];
    meridians = ['AM', 'PM'];

    alarmTime;
    isAlarmSet = false;

    hourSelected;
    minSelected;
    meridianSelected;

    get isFieldNotSelected() {
        return !(this.hourSelected && this.minSelected && this.meridianSelected);
    }

    connectedCallback() {
        this.createHoursOptions();
        this.createMinutesOptions();
        this.currentTimeHandler();
    }

    currentTimeHandler() {
        setInterval(() => {
            let dateTime = new Date();
            let hour = dateTime.getHours();
            let min = dateTime.getMinutes();
            let sec = dateTime.getSeconds();
            let ampm = "AM";
            if (hour == 0) {
                hour = 12;
            } else if (hour >= 12) {
                hour = hour - 12;
                ampm = "PM";
            }

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            this.currentTime = `${hour}:${min}:${sec} ${ampm}`;
            if (this.alarmTime === `${hour}:${min} ${ampm}`) {
                console.log("Alarm Triggered!");
            }

        }, 1000);
    }

    createHoursOptions() {
        for (let i = 1; i <= 12; i++) {
            let val = i < 10 ? "0" + i : i;
            this.hours.push(val);
        }
    }

    createMinutesOptions() {
        for (let i = 0; i <= 59; i++) {
            let val = i < 10 ? "0" + i : i;
            this.minutes.push(val);
        }
    }

    optionHandler(event) {
        const { label, value } = event.detail;
        if (label === "Hour(s)") {
            this.hourSelected = value;
        } else if (label === "Minute(s)") {
            this.minSelected = value;
        } else if (label === "AM/PM") {
            this.meridianSelected = value;
        } else { }

        console.log("this.hourSelected: ", this.hourSelected);
        console.log("this.minSelected: ", this.minSelected);
        console.log("this.meridianSelected: ", this.meridianSelected);
    }

    setAlarmHandler() {
        this.alarmTime = `${this.hourSelected}:${this.minSelected} ${this.meridianSelected}`;
        this.isAlarmSet = true;
    }

}