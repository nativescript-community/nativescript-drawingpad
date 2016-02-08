import common = require("./signaturepad-common");

global.moduleMerge(common, exports);

export class CardView extends common.SignaturePad {
    private _android: com.github.gcacace.signaturepad.views.SignaturePad;

    constructor() {
        super();
    }

    get android(): com.github.gcacace.signaturepad.views.SignaturePad {
        return this._android;
    }

    get _nativeView(): com.github.gcacace.signaturepad.views.SignaturePad {
        return this._android;
    }

    public _createUI() {

        this._android = new com.github.gcacace.signaturepad.views.SignaturePad(this._context, null);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        if (this.penColor)
            this._android.setPenColor(this.penColor.android);

        if (this.penWidth)
            this._android.setMinWidth(this.penWidth);

    }
}