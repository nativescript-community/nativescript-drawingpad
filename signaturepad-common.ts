import definition = require("signaturepad");
import view = require("ui/core/view");
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";

var penColorProperty = new Property(
    "penColor",
    "SignaturePad",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

var penWidthProperty = new Property(
    "penWidth",
    "SignaturePad",
    new PropertyMetadata(undefined, PropertyMetadataSettings.None)
);

export class SignaturePad extends view.View implements definition.SignaturePad {

    public static penColorProperty = penColorProperty;
    public static penWidthProperty = penWidthProperty;

    constructor(options?: definition.Options) {
        super(options);
    }

    get penColor(): number {
        return this._getValue(SignaturePad.penColorProperty);
    }
    set penColor(value: number) {
        this._setValue(SignaturePad.penColorProperty, value);
    }

    get penWidth(): number {
        return this._getValue(SignaturePad.penWidthProperty);
    }
    set penWidth(value: number) {
        this._setValue(SignaturePad.penWidthProperty, value);
    }

}