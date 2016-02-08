var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view = require("ui/core/view");
var proxy_1 = require("ui/core/proxy");
var dependency_observable_1 = require("ui/core/dependency-observable");
var penColorProperty = new dependency_observable_1.Property("penColor", "SignaturePad", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var penWidthProperty = new dependency_observable_1.Property("penWidth", "SignaturePad", new proxy_1.PropertyMetadata(undefined, dependency_observable_1.PropertyMetadataSettings.None));
var SignaturePad = (function (_super) {
    __extends(SignaturePad, _super);
    function SignaturePad(options) {
        _super.call(this, options);
    }
    Object.defineProperty(SignaturePad.prototype, "penColor", {
        get: function () {
            return this._getValue(SignaturePad.penColorProperty);
        },
        set: function (value) {
            this._setValue(SignaturePad.penColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePad.prototype, "penWidth", {
        get: function () {
            return this._getValue(SignaturePad.penWidthProperty);
        },
        set: function (value) {
            this._setValue(SignaturePad.penWidthProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePad.prototype, "drawing", {
        get: function () {
            return this._getValue(SignaturePad.drawingProperty);
        },
        enumerable: true,
        configurable: true
    });
    SignaturePad.penColorProperty = penColorProperty;
    SignaturePad.penWidthProperty = penWidthProperty;
    return SignaturePad;
})(view.View);
exports.SignaturePad = SignaturePad;
