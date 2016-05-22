import common = require("./drawingpad-common");
import definition = require("nativescript-drawingpad");
import { Color } from "color";

global.moduleMerge(common, exports);

declare var SignatureView: any, CGRectMake: any;

export class DrawingPad extends common.DrawingPad {
    private _ios: SignatureView;

    get ios(): SignatureView {
        return this._ios;
    }

    get _nativeView(): SignatureView {
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
            this._ios = SignatureView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));

            if (this.penColor) {
                this._ios.foregroundLineColor = new Color(this.penColor).ios;
                this._ios.backgroundLineColor = new Color(this.penColor).ios;
            }

            if (this.penWidth) {
                this._ios.foregroundLineWidth = this.penWidth;
                this._ios.backgroundLineWidth = this.penWidth;
            }

        } catch (ex) {
            console.log(ex);
        }

        // if (isNaN(this.width) || isNaN(this.height)) {
        //     this.requestLayout();
        // }

    }

    public getDrawing():Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let data = this._ios.signatureData();
                resolve(data);
            } catch (err) {
                reject(err);
            }
        })
    }

    public clearDrawing(): any {
        try {
            this._ios.UILongPressGestureRecognizer();
        } catch (err) {
            console.log("Error clearing the DrawingPad: " + err);
        }
    }

}