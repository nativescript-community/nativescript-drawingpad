import common = require("./signaturepad-common");
import color = require("color");

global.moduleMerge(common, exports);

export class SignaturePad extends common.SignaturePad {
    private _android: com.github.gcacace.signaturepad.views.SignaturePad;

    get android(): com.github.gcacace.signaturepad.views.SignaturePad {
        return this._android;
    }

    get _nativeView(): com.github.gcacace.signaturepad.views.SignaturePad {
        return this._android;
    }

    public _createUI() {

        this._android = new com.github.gcacace.signaturepad.views.SignaturePad(this._context, null);

        if (this.penColor)
            this._android.setPenColor(new color.Color(this.penColor).android);

        if (this.penWidth)
            this._android.setMinWidth(this.penWidth);

    }

    get drawing(): any {
        if (!this._android.isEmpty()) {
            return this._android.getTransparentSignatureBitmap();
        } else {
            throw new Error("No drawing in the pad.");
        }
    }

}