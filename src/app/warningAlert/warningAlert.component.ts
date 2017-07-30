import {Component} from '@angular/core';

@Component({
    selector: 'warning-alert',
    template: '<div class="warning">Warning! Unauthorized access detected! Sending robots to eliminate intruder...</div>',
    styles: [`.warning {
        color: darkred;
         font-weight: bold;
    }`]
})
export class WarningAlertComponent {

}