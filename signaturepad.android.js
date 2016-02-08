var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./signaturepad-common");
global.moduleMerge(common, exports);
var SignaturePad = (function (_super) {
    __extends(SignaturePad, _super);
    function SignaturePad() {
        _super.call(this);
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
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        if (this.penColor)
            this._android.setPenColor(this.penColor.android);
        if (this.penWidth)
            this._android.setMinWidth(this.penWidth);
    };
    return SignaturePad;
})(common.SignaturePad);
exports.SignaturePad = SignaturePad;
