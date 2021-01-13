import { Color, View } from '@nativescript/core';

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
   * Returns the image as base64 string.
   * @param format - The format of the image when converting to ImageSource. "png" | "jpg" | "jpeg". Default is "png".
   */
  getDrawingAsBase64(format: 'png' | 'jpg' | 'jpeg'): Promise<string>;

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
