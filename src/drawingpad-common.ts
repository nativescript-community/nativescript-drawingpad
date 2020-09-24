import { View, Property, Color } from '@nativescript/core';

export abstract class DrawingPadBase extends View {
  public penColor: Color;
  public penWidth: number;
  public clearOnLongPress: boolean;

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
  valueConverter: (v) => new Color(v),
  equalityComparer: Color.equals,
});
penColorProperty.register(DrawingPadBase);

export const penWidthProperty = new Property<DrawingPadBase, number>({
  name: 'penWidth',
  defaultValue: 1,
  valueConverter: (v) => +v,
});
penWidthProperty.register(DrawingPadBase);

export const clearOnLongPressProperty = new Property<DrawingPadBase, boolean>({
  name: 'clearOnLongPress',
  defaultValue: true,
});
clearOnLongPressProperty.register(DrawingPadBase);
