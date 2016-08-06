import { View } from "ui/core/view";
import { PropertyMetadata } from "ui/core/proxy";
import { Property, PropertyMetadataSettings } from "ui/core/dependency-observable";

var penColorProperty = new Property(
    "penColor",
    "DrawingPad",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var penWidthProperty = new Property(
    "penWidth",
    "DrawingPad",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

export class DrawingPad extends View {

    public static penColorProperty = penColorProperty;
    public static penWidthProperty = penWidthProperty;

    constructor() {
        super();
    }

    get penColor(): string {
        return this._getValue(DrawingPad.penColorProperty);
    }
    set penColor(value: string) {
        this._setValue(DrawingPad.penColorProperty, value);
    }

    get penWidth(): number {
        return this._getValue(DrawingPad.penWidthProperty);
    }
    set penWidth(value: number) {
        this._setValue(DrawingPad.penWidthProperty, value);
    }

    public clearDrawing(): void { }
    public getDrawing(): any { }

}