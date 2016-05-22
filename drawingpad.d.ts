/**
 * Contains the DrawingPad class, which represents a drawing pad component.
 */

declare module "nativescript-drawingpad" {
    import { Property } from "ui/core/dependency-observable";
    import { View } from "ui/core/view";

    /**
     * Represents a Drawing Pad component.
     */
    export class DrawingPad extends View {
        public static penColorProperty: Property;
        public static penWidthProperty: Property;

        /**
         * Gets the native [android widget](https://github.com/gcacace/android-signaturepad) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* com.github.gcacace.signaturepad.views.SignaturePad */;

        /**
         * Gets the native [michalkonturek/SignatureView](https://cocoapods.org/pods/SignatureView) that represents the user interface for this component. Valid only when running on iOS.
         */
        ios: any /* SignatureView */;

        /**
        * Gets or set the stroke color attribute
        */
        penColor: string;

        /**
         * Gets or set the stroke width attribute
         */
        penWidth: number;

        /**
         * Use this to get the drawingpad
         */
        getDrawing: Function;

        /*
        * Use this to clear/erase the pad
        */
        clearDrawing: Function;
    }

}