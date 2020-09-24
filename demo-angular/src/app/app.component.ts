import { Component } from '@angular/core';
import { DrawingPad } from '@nativescript-community/drawingpad';
import { registerElement } from '@nativescript/angular';

registerElement('DrawingPad', () => DrawingPad);

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './app.component.html'
})
export class AppComponent {}
