import {
  Application,
  Color,
  Device,
  EventData,
  isAndroid,
  Page
} from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = <Page>args.object;
  page.bindingContext = new HelloWorldModel(page);

  if (isAndroid && Device.sdkVersion >= '21') {
    const window = Application.android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#336699').android);
  }
}
