import { Color } from "color";
import {
  DrawingPadBase,
  penColorProperty,
  penWidthProperty
} from "./drawingpad-common";

declare var com: any;
const SignaturePad: any = com.github.gcacace.signaturepad.views.SignaturePad;

export * from "./drawingpad-common";

export class DrawingPad extends DrawingPadBase {
  get android() {
    return this.nativeView;
  }

  public createNativeView() {
    const signaturePad = new SignaturePad(this._context, null);

    if (this.penColor) {
      signaturePad.setPenColor(this.penColor.android);
    }

    if (this.penWidth) {
      signaturePad.setMinWidth(this.penWidth);
    }

    return signaturePad;
  }

  [penWidthProperty.getDefault](): number {
    return this.nativeView.minWidth;
  }
  [penWidthProperty.setNative](value: number) {
    this.nativeView.setMinWidth(value);
  }

  [penColorProperty.getDefault](): number {
    return this.nativeView.penColor;
  }
  [penColorProperty.setNative](value: Color | number) {
    const color = value instanceof Color ? value.android : value;
    this.nativeView.setPenColor(color);
  }

  public getDrawing(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.nativeView.isEmpty()) {
          let data = this.nativeView.getSignatureBitmap();
          resolve(data);
        } else {
          reject("DrawingPad is empty.");
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  public getTransparentDrawing(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.nativeView.isEmpty()) {
          let data = this.nativeView.getTransparentSignatureBitmap();
          resolve(data);
        } else {
          reject("DrawingPad is empty.");
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  public getDrawingSvg(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.nativeView.isEmpty()) {
          let data: string = this.nativeView.getSignatureSvg();

          // Append viewbox to the svg for correct scaling
          const svgHeaderRegEx = /<svg (.*) height="(\d+)" width="(\d+)"(.*)>/i;
          resolve(
            data.replace(
              svgHeaderRegEx,
              `<svg $1 viewBox="0, 0, $3, $2" height="$2" width="$3"$4>`
            )
          );
        } else {
          reject("DrawingPad is empty.");
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  public clearDrawing(): void {
    try {
      this.nativeView.clear();
    } catch (err) {
      console.log("Error in clearDrawing: " + err);
    }
  }
}
