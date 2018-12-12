import { View, Property } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';
import { DrawingPad as DrawingPadDefinition } from '.';

export abstract class DrawingPadBase extends View
  implements DrawingPadDefinition {
  public penColor: Color;
  public penWidth: number;

  public abstract clearDrawing(): void;
  public abstract getDrawing(): Promise<any>;
  public getTransparentDrawing(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve();
    });
  }
  public abstract getDrawingSvg(): Promise<string>;
}

export const penColorProperty = new Property<DrawingPadBase, Color>({
  name: 'penColor',
  valueConverter: v => new Color(v),
  equalityComparer: Color.equals
});
penColorProperty.register(DrawingPadBase);

export const penWidthProperty = new Property<DrawingPadBase, number>({
  name: 'penWidth',
  defaultValue: 1,
  valueConverter: v => +v
});
penWidthProperty.register(DrawingPadBase);
