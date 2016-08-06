import common = require("./drawingpad-common");
export declare class DrawingPad extends common.DrawingPad {
    private _android;
    android: any;
    _nativeView: any;
    _createUI(): void;
    getDrawing(): Promise<any>;
    getTransparentDrawing(): Promise<any>;
    getDrawingSvg(): Promise<any>;
    clearDrawing(): any;
}
