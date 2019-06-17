import { Color } from 'tns-core-modules/color';
import { View } from 'tns-core-modules/ui/core/view';

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
   * *** iOS Only ***
   * Gets/sets whether a long press will clear the view.
   */

  clearOnLongPress: boolean;

  /**
   * Returns native image.
   */
  getDrawing(): Promise<any>;

  /**
   * *** ANDROID ONLY ***
   * Returns a bitmap with a transparent background.
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
