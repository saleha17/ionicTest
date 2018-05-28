import { Component } from '@angular/core';

/**
 * Generated class for the IonButtonsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-buttons',
  templateUrl: 'ion-buttons.html'
})
export class IonButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello IonButtonsComponent Component');
    this.text = 'Hello World';
  }

}
