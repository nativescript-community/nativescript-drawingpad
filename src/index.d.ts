import { View } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";

export class DrawingPad extends View {
  android: any;
  ios: any;

  /**
   * Gets/sets the drawing color of the pen.
   */

  penColor: Color;
  /**
   * Gets/sets the drawing width of the pen.
   */

  penWidth: number;
  /**
   * Returns native image.
   */
  getDrawing(): Promise<any>;

  /**
   * Returns a bitmap with a transparent background *** ANDROID ONLY ***
   */
  getTransparentDrawing(): Promise<any>;

  /**
   * Returns a Scalable Vector Graphics document
   */
  getDrawingSvg(): Promise<string>;

  /**
   * Clears the drawing from the DrawingPad.
   */
  clearDrawing(): void;
}
