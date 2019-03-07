declare class SignatureView extends UIImageView {
  static alloc(): SignatureView; // inherited from NSObject

  static appearance(): SignatureView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): SignatureView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(
    trait: UITraitCollection,
    ContainerClass: typeof NSObject
  ): SignatureView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(
    trait: UITraitCollection,
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): SignatureView; // inherited from UIAppearance

  static appearanceWhenContainedIn(
    ContainerClass: typeof NSObject
  ): SignatureView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(
    containerTypes: NSArray<typeof NSObject> | typeof NSObject[]
  ): SignatureView; // inherited from UIAppearance

  static new(): SignatureView; // inherited from NSObject

  backgroundLineColor: UIColor;

  backgroundLineWidth: number;

  foregroundLineColor: UIColor;

  foregroundLineWidth: number;

  recognizer: UILongPressGestureRecognizer;

  clear(): void;

  clearWithColor(color: UIColor): void;

  isSigned(): boolean;

  setLineColor(color: UIColor): void;

  setLineWidth(width: number): void;

  signatureData(): NSData;

  signatureImage(): UIImage;

  signatureSvg(): string;
}

declare var SignatureViewVersionNumber: number;

declare var SignatureViewVersionString: interop.Reference<number>;
