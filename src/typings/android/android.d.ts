/* tslint:disable */ 
declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.gcacace.signaturepad.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export class DataBinderMapperImpl {
					public static class: java.lang.Class<com.github.gcacace.signaturepad.DataBinderMapperImpl>;
					public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: globalAndroid.view.View, param2: number): androidx.databinding.ViewDataBinding;
					public collectDependencies(): java.util.List<androidx.databinding.DataBinderMapper>;
					public constructor();
					public getLayoutId(param0: string): number;
					public convertBrIdToString(param0: number): string;
					public getDataBinder(param0: androidx.databinding.DataBindingComponent, param1: androidNative.Array<globalAndroid.view.View>, param2: number): androidx.databinding.ViewDataBinding;
				}
				export module DataBinderMapperImpl {
					export class InnerBrLookup {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.DataBinderMapperImpl.InnerBrLookup>;
					}
					export class InnerLayoutIdLookup {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.DataBinderMapperImpl.InnerLayoutIdLookup>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class Bezier {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.Bezier>;
						public startPoint: com.github.gcacace.signaturepad.utils.TimedPoint;
						public control1: com.github.gcacace.signaturepad.utils.TimedPoint;
						public control2: com.github.gcacace.signaturepad.utils.TimedPoint;
						public endPoint: com.github.gcacace.signaturepad.utils.TimedPoint;
						public constructor();
						public length(): number;
						public set(param0: com.github.gcacace.signaturepad.utils.TimedPoint, param1: com.github.gcacace.signaturepad.utils.TimedPoint, param2: com.github.gcacace.signaturepad.utils.TimedPoint, param3: com.github.gcacace.signaturepad.utils.TimedPoint): com.github.gcacace.signaturepad.utils.Bezier;
						public point(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class ControlTimedPoints {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.ControlTimedPoints>;
						public c1: com.github.gcacace.signaturepad.utils.TimedPoint;
						public c2: com.github.gcacace.signaturepad.utils.TimedPoint;
						public constructor();
						public set(param0: com.github.gcacace.signaturepad.utils.TimedPoint, param1: com.github.gcacace.signaturepad.utils.TimedPoint): com.github.gcacace.signaturepad.utils.ControlTimedPoints;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class SignaturePadBindingAdapter {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter>;
						public constructor();
						public static setOnSignedListener(param0: com.github.gcacace.signaturepad.views.SignaturePad, param1: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnSignedListener): void;
						public static setOnSignedListener(param0: com.github.gcacace.signaturepad.views.SignaturePad, param1: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnClearListener): void;
						public static setOnSignedListener(param0: com.github.gcacace.signaturepad.views.SignaturePad, param1: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnStartSigningListener): void;
						public static setOnSignedListener(param0: com.github.gcacace.signaturepad.views.SignaturePad, param1: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnStartSigningListener, param2: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnSignedListener, param3: com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnClearListener): void;
					}
					export module SignaturePadBindingAdapter {
						export class OnClearListener {
							public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnClearListener>;
							/**
							 * Constructs a new instance of the com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter$OnClearListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClear(): void;
							});
							public constructor();
							public onClear(): void;
						}
						export class OnSignedListener {
							public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnSignedListener>;
							/**
							 * Constructs a new instance of the com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter$OnSignedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSigned(): void;
							});
							public constructor();
							public onSigned(): void;
						}
						export class OnStartSigningListener {
							public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter.OnStartSigningListener>;
							/**
							 * Constructs a new instance of the com.github.gcacace.signaturepad.utils.SignaturePadBindingAdapter$OnStartSigningListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStartSigning(): void;
							});
							public constructor();
							public onStartSigning(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class SvgBuilder {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SvgBuilder>;
						public constructor();
						public clear(): void;
						public build(param0: number, param1: number): string;
						public append(param0: com.github.gcacace.signaturepad.utils.Bezier, param1: number): com.github.gcacace.signaturepad.utils.SvgBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class SvgPathBuilder {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SvgPathBuilder>;
						public static SVG_RELATIVE_CUBIC_BEZIER_CURVE: java.lang.Character;
						public static SVG_MOVE: java.lang.Character;
						public getLastPoint(): com.github.gcacace.signaturepad.utils.SvgPoint;
						public append(param0: com.github.gcacace.signaturepad.utils.SvgPoint, param1: com.github.gcacace.signaturepad.utils.SvgPoint, param2: com.github.gcacace.signaturepad.utils.SvgPoint): com.github.gcacace.signaturepad.utils.SvgPathBuilder;
						public constructor(param0: com.github.gcacace.signaturepad.utils.SvgPoint, param1: java.lang.Integer);
						public toString(): string;
						public getStrokeWidth(): java.lang.Integer;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class SvgPoint {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.SvgPoint>;
						public constructor(param0: com.github.gcacace.signaturepad.utils.TimedPoint);
						public toRelativeCoordinates(param0: com.github.gcacace.signaturepad.utils.SvgPoint): string;
						public toAbsoluteCoordinates(): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module utils {
					export class TimedPoint {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.utils.TimedPoint>;
						public x: number;
						public y: number;
						public timestamp: number;
						public constructor();
						public set(param0: number, param1: number): com.github.gcacace.signaturepad.utils.TimedPoint;
						public velocityFrom(param0: com.github.gcacace.signaturepad.utils.TimedPoint): number;
						public distanceTo(param0: com.github.gcacace.signaturepad.utils.TimedPoint): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module view {
					export class ViewCompat {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.view.ViewCompat>;
						public constructor();
						public static isLaidOut(param0: globalAndroid.view.View): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module view {
					export class ViewTreeObserverCompat {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.view.ViewTreeObserverCompat>;
						public constructor();
						public static removeOnGlobalLayoutListener(param0: globalAndroid.view.ViewTreeObserver, param1: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module gcacace {
			export module signaturepad {
				export module views {
					export class SignaturePad {
						public static class: java.lang.Class<com.github.gcacace.signaturepad.views.SignaturePad>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public clearView(): void;
						public getSignatureSvg(): string;
						public setOnSignedListener(param0: com.github.gcacace.signaturepad.views.SignaturePad.OnSignedListener): void;
						public getTransparentSignatureBitmap(): globalAndroid.graphics.Bitmap;
						public setMaxWidth(param0: number): void;
						public getPoints(): java.util.List<com.github.gcacace.signaturepad.utils.TimedPoint>;
						public setPenColorRes(param0: number): void;
						public setPenColor(param0: number): void;
						public setVelocityFilterWeight(param0: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public getTransparentSignatureBitmap(param0: boolean): globalAndroid.graphics.Bitmap;
						public isEmpty(): boolean;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public setMinWidth(param0: number): void;
						public getSignatureBitmap(): globalAndroid.graphics.Bitmap;
						public clear(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setSignatureBitmap(param0: globalAndroid.graphics.Bitmap): void;
					}
					export module SignaturePad {
						export class OnSignedListener {
							public static class: java.lang.Class<com.github.gcacace.signaturepad.views.SignaturePad.OnSignedListener>;
							/**
							 * Constructs a new instance of the com.github.gcacace.signaturepad.views.SignaturePad$OnSignedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStartSigning(): void;
								onSigned(): void;
								onClear(): void;
							});
							public constructor();
							public onStartSigning(): void;
							public onSigned(): void;
							public onClear(): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

