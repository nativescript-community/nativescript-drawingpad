import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { isAndroid, device } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color';
import { android } from 'tns-core-modules/application';
import { HelloWorldModel } from './main-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = <Page>args.object;
  page.bindingContext = new HelloWorldModel(page);

  if (isAndroid && device.sdkVersion >= '21') {
    const window = android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#336699').android);
  }
}
