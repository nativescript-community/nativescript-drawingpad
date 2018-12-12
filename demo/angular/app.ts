import { Component } from '@angular/core';
import { DrawingPadExample } from './drawing-pad.component';

@Component({
  selector: 'app',
  template: `
    <StackLayout> <drawing-pad-example></drawing-pad-example> </StackLayout>
  `
})
export class App {}
