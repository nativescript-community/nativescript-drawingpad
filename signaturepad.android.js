var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./signaturepad-common");
var color = require("color");
global.moduleMerge(common, exports);
var SignaturePad = (function (_super) {
    __extends(SignaturePad, _super);
    function SignaturePad() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(SignaturePad.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePad.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    SignaturePad.prototype._createUI = function () {
        this._android = new com.github.gcacace.signaturepad.views.SignaturePad(this._context, null);
        if (this.penColor)
            this._android.setPenColor(new color.Color(this.penColor).android);
        if (this.penWidth)
            this._android.setMinWidth(this.penWidth);
    };
    Object.defineProperty(SignaturePad.prototype, "drawing", {
        get: function () {
            if (!this._android.isEmpty()) {
                return this._android.getTransparentSignatureBitmap();
            }
            else {
                throw new Error("No drawing in the pad.");
            }
        },
        enumerable: true,
        configurable: true
    });
    return SignaturePad;
})(common.SignaturePad);
exports.SignaturePad = SignaturePad;
