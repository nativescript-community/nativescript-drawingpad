/**
 * Contains the SignaturePad class, which represents a drawing pad component.
 */

declare module "signaturepad" {
    import * as dependencyObservable from "ui/core/dependency-observable";
    import * as view from "ui/core/view";

    /**
     * Represents a Signature Pad (drawing pad) component.
     */
    export class Video extends view.View {
        public static penColorProperty: dependencyObservable.Property;
        public static penWidthProperty: dependencyObservable.Property;

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
        penColor: any;

        /**
         * Gets or set the stroke width attribute
         */
        penWidth: any;
    }

    /**
    * Provides common options for creating a signature pad (drawing pad)
    */
    export interface Options extends view.Options {

        /**
       * Gets or set the stroke color attribute
       */
        penColor: any;

        /**
         * Gets or set the stroke width attribute
         */
        penWidth: any;

    }

}