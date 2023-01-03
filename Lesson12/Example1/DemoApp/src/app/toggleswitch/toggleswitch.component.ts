import { Component } from '@angular/core';

@Component({
    selector: 'app-toggleswitch',
    templateUrl: './toggleswitch.component.html',
    styleUrls: ['./toggleswitch.component.css']
})
export class ToggleswitchComponent {

    public isOn = false;
    
    clicked() { 
        this.isOn = !this.isOn; 
    }
    
    get status() {
        return `Toggleswitch is ${this.isOn ? 'on' : 'off'}`; 
    }

    get buttonLabel() {
        return `TURN ${this.isOn ? 'OFF' : 'ON'}`; 
    }   
}
