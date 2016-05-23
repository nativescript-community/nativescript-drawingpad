import common = require("./drawingpad-common");
import definition = require("nativescript-drawingpad");
import { Color } from "color";

global.moduleMerge(common, exports);

declare var SignatureView: any, CGRectMake: any;

export class DrawingPad extends common.DrawingPad {
    private _ios: any = SignatureView;

    get ios(): any {
        return this._ios;
    }

    get _nativeView(): any {
        return this._ios;
    }

    constructor() {
        super();
        this._ios = SignatureView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
        this._ios.clipsToBounds = true;
    }

    public onLoaded() {
        super.onLoaded();

        try {
            if (this.penColor) {
                let value = this.penColor;
                this._ios.setLineColor(new Color(value).ios);
            }

            if (this.penWidth) {
                let value = this.penWidth;
                this._ios.setLineWidth(value);
            }

        } catch (ex) {
            console.log(ex);
        }      

    }

    public getDrawing(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let isSigned = this._ios.isSigned();
                if (isSigned === true) {
                    let data = this._ios.signatureImage();
                    resolve(data);
                } else {
                    reject("DrawingPad is empty.");
                }
            } catch (err) {
                reject(err);
            }
        })
    }

    public clearDrawing(): any {
        try {
            this._ios.clear();
        } catch (err) {
            console.log("Error clearing the DrawingPad: " + err);
        }
    }

}