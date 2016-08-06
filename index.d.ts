import common = require("./drawingpad-common");
export declare class DrawingPad extends common.DrawingPad {
    android: any;
    ios: any;
    _nativeView: any;

    /**
     * Returns native image.
     */
    getDrawing(): Promise<any>;

    /**
     * Returns a bitmap with a transparent background *** ANDROID ONLY ***
     */
    getTransparentDrawing(): Promise<any>;

    /**
     * Returns a Scalable Vector Graphics document *** ANDROID ONLY ***
     */
    getDrawingSvg(): Promise<any>;

    /**
     * Clears the drawing from the DrawingPad.
     */
    clearDrawing(): any;
}
