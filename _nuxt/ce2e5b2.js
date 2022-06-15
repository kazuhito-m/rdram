(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect = function (target) {
    if ('getBBox' in target) {
        var box = target.getBBox();
        return Object.freeze({
            height: box.height,
            left: 0,
            top: 0,
            width: box.width,
        });
    }
    else { // if (target instanceof HTMLElement) { // also includes all other non-SVGGraphicsElements
        var styles = window.getComputedStyle(target);
        return Object.freeze({
            height: parseFloat(styles.height || '0'),
            left: parseFloat(styles.paddingLeft || '0'),
            top: parseFloat(styles.paddingTop || '0'),
            width: parseFloat(styles.width || '0'),
        });
    }
};
exports.ContentRect = ContentRect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29udGVudFJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQWU7SUFDaEMsSUFBSSxTQUFTLElBQUssTUFBNkIsRUFBRTtRQUM3QyxJQUFNLEdBQUcsR0FBSSxNQUE2QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7S0FDTjtTQUFNLEVBQUUsMEZBQTBGO1FBQy9GLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUN4QyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1lBQzNDLEdBQUcsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDekMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztTQUN6QyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQztBQUVPLGtDQUFXIn0=

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(834);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(29).default
var update = add("c1d8e262", content, true, {"sourceMap":false});

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(28);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-slider .v-slider__thumb,.theme--light.v-slider .v-slider__track-background,.theme--light.v-slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--dark.v-slider .v-slider__thumb,.theme--dark.v-slider .v-slider__track-background,.theme--dark.v-slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.v-slider{cursor:default;display:flex;align-items:center;position:relative;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;padding:0;width:100%;display:none}.v-slider__track-container{position:absolute;border-radius:0}.v-slider__thumb-container,.v-slider__track-background,.v-slider__track-fill{position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container{outline:none;top:50%}.v-slider__thumb-container:hover .v-slider__thumb:before{transform:scale(1)}.v-slider__thumb{width:12px;height:12px;left:-6px;top:50%;transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb,.v-slider__thumb:before{position:absolute;border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb:before{content:\"\";color:inherit;width:36px;height:36px;background:currentColor;opacity:.3;left:-12px;top:-12px;transform:scale(.1);pointer-events:none}.v-slider__thumb:after{content:\"\";width:42px;height:42px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.v-slider__tick,.v-slider__ticks-container{position:absolute}.v-slider__tick{opacity:0;background-color:rgba(0,0,0,.5);transition:.3s cubic-bezier(.25,.8,.5,1);border-radius:0}.v-slider__tick--filled{background-color:hsla(0,0%,100%,.5)}.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label{transform:none}.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(100%)}.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label{transform:none}.v-slider__tick-label{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.v-slider__thumb-label-container{top:0}.v-slider__thumb-label,.v-slider__thumb-label-container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--horizontal{min-height:32px;margin-left:8px;margin-right:8px}.v-slider--horizontal .v-slider__track-container{width:100%;height:2px;left:0;top:50%;transform:translateY(-50%)}.v-slider--horizontal .v-slider__track-background,.v-slider--horizontal .v-slider__track-fill{height:100%}.v-slider--horizontal .v-slider__ticks-container{left:0;height:2px;width:100%}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label{transform:translateX(0)}.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(-100%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{transform:translateX(100%)}.v-slider--horizontal .v-slider__tick .v-slider__tick-label{top:8px}.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(-50%)}.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label{transform:translateX(50%)}.v-slider--horizontal .v-slider__thumb-label{transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)}.v-slider--horizontal .v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider--vertical{min-height:150px;margin-top:12px;margin-bottom:12px}.v-slider--vertical .v-slider__track-container{height:100%;width:2px;left:50%;top:0;transform:translateX(-50%)}.v-slider--vertical .v-slider__track-background,.v-slider--vertical .v-slider__track-fill{width:100%}.v-slider--vertical .v-slider__thumb-container{left:50%}.v-slider--vertical .v-slider__ticks-container{top:0;width:2px;height:100%;left:50%;transform:translateX(-50%)}.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);left:12px}.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label,.v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label{transform:translateY(-50%);right:12px}.v-slider--vertical .v-slider__thumb-label>*{transform:rotate(-135deg)}.v-slider__thumb-container--focused .v-slider__thumb:before{transform:scale(1)}.v-slider--active .v-slider__tick{opacity:1}.v-slider__thumb-container--active .v-slider__thumb:before{transform:scale(1.5)!important}.v-slider--disabled{pointer-events:none}.v-slider--disabled .v-slider__thumb{width:8px;height:8px;left:-4px}.v-slider--disabled .v-slider__thumb:before{display:none}.v-slider__ticks-container--always-show .v-slider__tick{opacity:1}.v-input__slider.v-input--is-readonly>.v-input__control{pointer-events:none}.v-application--is-ltr .v-input__slider .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label,.v-application--is-rtl .v-input__slider .v-input__slot .v-label{margin-right:0;margin-left:12px}.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label{margin-left:0;margin-right:12px}.v-input__slider--vertical{align-items:center}.v-application--is-ltr .v-input__slider--vertical{flex-direction:column-reverse}.v-application--is-rtl .v-input__slider--vertical{flex-direction:column}.v-input__slider--vertical .v-input__append-outer,.v-input__slider--vertical .v-input__prepend-outer,.v-input__slider--vertical .v-input__slot{margin:0}.v-input__slider--vertical .v-messages{display:none}.v-input--has-state .v-slider__track-background{opacity:.4}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResizeObservation_1 = __webpack_require__(855);
var ResizeObserverEntry_1 = __webpack_require__(856);
var resizeObservers = [];
var ResizeObserver = /** @class */ (function () {
    function ResizeObserver(callback) {
        /** @internal */
        this.$$observationTargets = [];
        /** @internal */
        this.$$activeTargets = [];
        /** @internal */
        this.$$skippedTargets = [];
        var message = callbackGuard(callback);
        if (message) {
            throw TypeError(message);
        }
        this.$$callback = callback;
    }
    ResizeObserver.prototype.observe = function (target) {
        var message = targetGuard('observe', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index >= 0) {
            return;
        }
        this.$$observationTargets.push(new ResizeObservation_1.ResizeObservation(target));
        registerResizeObserver(this);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        var message = targetGuard('unobserve', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index < 0) {
            return;
        }
        this.$$observationTargets.splice(index, 1);
        if (this.$$observationTargets.length === 0) {
            deregisterResizeObserver(this);
        }
    };
    ResizeObserver.prototype.disconnect = function () {
        this.$$observationTargets = [];
        this.$$activeTargets = [];
        deregisterResizeObserver(this);
    };
    return ResizeObserver;
}());
exports.ResizeObserver = ResizeObserver;
function registerResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index < 0) {
        resizeObservers.push(resizeObserver);
        startLoop();
    }
}
function deregisterResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index >= 0) {
        resizeObservers.splice(index, 1);
        checkStopLoop();
    }
}
function callbackGuard(callback) {
    if (typeof (callback) === 'undefined') {
        return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (typeof (callback) !== 'function') {
        return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.";
    }
}
function targetGuard(functionName, target) {
    if (typeof (target) === 'undefined') {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (!(target && target.nodeType === window.Node.ELEMENT_NODE)) {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
    }
}
function findTargetIndex(collection, target) {
    for (var index = 0; index < collection.length; index += 1) {
        if (collection[index].target === target) {
            return index;
        }
    }
    return -1;
}
var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function (ro) {
        ro.$$activeTargets = [];
        ro.$$skippedTargets = [];
        ro.$$observationTargets.forEach(function (ot) {
            if (ot.isActive()) {
                var targetDepth = calculateDepthForNode(ot.target);
                if (targetDepth > depth) {
                    ro.$$activeTargets.push(ot);
                }
                else {
                    ro.$$skippedTargets.push(ot);
                }
            }
        });
    });
};
var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$activeTargets.length; });
};
var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$skippedTargets.length; });
};
var broadcastActiveObservations = function () {
    var shallowestTargetDepth = Infinity;
    resizeObservers.forEach(function (ro) {
        if (!ro.$$activeTargets.length) {
            return;
        }
        var entries = [];
        ro.$$activeTargets.forEach(function (obs) {
            var entry = new ResizeObserverEntry_1.ResizeObserverEntry(obs.target);
            entries.push(entry);
            obs.$$broadcastWidth = entry.contentRect.width;
            obs.$$broadcastHeight = entry.contentRect.height;
            var targetDepth = calculateDepthForNode(obs.target);
            if (targetDepth < shallowestTargetDepth) {
                shallowestTargetDepth = targetDepth;
            }
        });
        ro.$$callback(entries, ro);
        ro.$$activeTargets = [];
    });
    return shallowestTargetDepth;
};
var deliverResizeLoopErrorNotification = function () {
    var errorEvent = new window.ErrorEvent('ResizeLoopError', {
        message: 'ResizeObserver loop completed with undelivered notifications.',
    });
    window.dispatchEvent(errorEvent);
};
var calculateDepthForNode = function (target) {
    var depth = 0;
    while (target.parentNode) {
        target = target.parentNode;
        depth += 1;
    }
    return depth;
};
var notificationIteration = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopErrorNotification();
    }
};
var animationFrameCancelToken;
var startLoop = function () {
    if (animationFrameCancelToken)
        return;
    runLoop();
};
var runLoop = function () {
    animationFrameCancelToken = window.requestAnimationFrame(function () {
        notificationIteration();
        runLoop();
    });
};
var checkStopLoop = function () {
    if (animationFrameCancelToken && !resizeObservers.some(function (ro) { return !!ro.$$observationTargets.length; })) {
        window.cancelAnimationFrame(animationFrameCancelToken);
        animationFrameCancelToken = undefined;
    }
};
var install = function () {
    return window.ResizeObserver = ResizeObserver;
};
exports.install = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQsNkRBQTREO0FBRTVELElBQU0sZUFBZSxHQUFHLEVBQXNCLENBQUM7QUFFL0M7SUFVSSx3QkFBWSxRQUFnQztRQVA1QyxnQkFBZ0I7UUFDVCx5QkFBb0IsR0FBRyxFQUF5QixDQUFDO1FBQ3hELGdCQUFnQjtRQUNULG9CQUFlLEdBQUcsRUFBeUIsQ0FBQztRQUNuRCxnQkFBZ0I7UUFDVCxxQkFBZ0IsR0FBRyxFQUF5QixDQUFDO1FBR2hELElBQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNULE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxNQUFlO1FBQzFCLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUQsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLGtDQUFTLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsSUFBTSxPQUFPLEdBQUcs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

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(817);
var ResizeObservation = /** @class */ (function () {
    function ResizeObservation(target) {
        this.target = target;
        this.$$broadcastWidth = this.$$broadcastHeight = 0;
    }
    Object.defineProperty(ResizeObservation.prototype, "broadcastWidth", {
        get: function () {
            return this.$$broadcastWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizeObservation.prototype, "broadcastHeight", {
        get: function () {
            return this.$$broadcastHeight;
        },
        enumerable: true,
        configurable: true
    });
    ResizeObservation.prototype.isActive = function () {
        var cr = ContentRect_1.ContentRect(this.target);
        return !!cr
            && (cr.width !== this.broadcastWidth
                || cr.height !== this.broadcastHeight);
    };
    return ResizeObservation;
}());
exports.ResizeObservation = ResizeObservation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUM7SUFlSSwyQkFBWSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFWRCxzQkFBVyw2Q0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOENBQWU7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQU9NLG9DQUFRLEdBQWY7UUFDSSxJQUFNLEVBQUUsR0FBRyx5QkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsQ0FBQyxFQUFFO2VBQ0osQ0FDQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjO21CQUM3QixFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQ3hDLENBQUM7SUFDVixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBRVEsOENBQWlCIn0=

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(817);
var ResizeObserverEntry = /** @class */ (function () {
    function ResizeObserverEntry(target) {
        this.target = target;
        this.contentRect = ContentRect_1.ContentRect(target);
    }
    return ResizeObserverEntry;
}());
exports.ResizeObserverEntry = ResizeObserverEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNpemVPYnNlcnZlckVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTRDO0FBRTVDO0lBR0ksNkJBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFFUSxrREFBbUIifQ==

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(283);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(833);
/* harmony import */ var _src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlider_VSlider_sass__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(140);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(188);
/* harmony import */ var _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(127);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











 // Components


 // Mixins


 // Directives

 // Helpers



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])(_VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], _mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-slider',
  directives: {
    ClickOutside: _directives_click_outside__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"]
  },
  mixins: [_mixins_loadable__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"]],
  props: {
    disabled: Boolean,
    inverseLabel: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    thumbColor: String,
    thumbLabel: {
      type: [Boolean, String],
      default: undefined,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    thumbSize: {
      type: [Number, String],
      default: 32
    },
    tickLabels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    ticks: {
      type: [Boolean, String],
      default: false,
      validator: function validator(v) {
        return typeof v === 'boolean' || v === 'always';
      }
    },
    tickSize: {
      type: [Number, String],
      default: 2
    },
    trackColor: String,
    trackFillColor: String,
    value: [Number, String],
    vertical: Boolean
  },
  data: function data() {
    return {
      app: null,
      oldValue: null,
      thumbPressed: false,
      mouseTimeout: -1,
      isFocused: false,
      isActive: false,
      noClick: false,
      startOffset: 0
    };
  },
  computed: {
    classes: function classes() {
      return _objectSpread(_objectSpread({}, _VInput__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].options.computed.classes.call(this)), {}, {
        'v-input__slider': true,
        'v-input__slider--vertical': this.vertical,
        'v-input__slider--inverse-label': this.inverseLabel
      });
    },
    internalValue: {
      get: function get() {
        return this.lazyValue;
      },
      set: function set(val) {
        val = isNaN(val) ? this.minValue : val; // Round value to ensure the
        // entire slider range can
        // be selected with step

        var value = this.roundValue(Math.min(Math.max(val, this.minValue), this.maxValue));
        if (value === this.lazyValue) return;
        this.lazyValue = value;
        this.$emit('input', value);
      }
    },
    trackTransition: function trackTransition() {
      return this.thumbPressed ? this.showTicks || this.stepNumeric ? '0.1s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none' : '';
    },
    minValue: function minValue() {
      return parseFloat(this.min);
    },
    maxValue: function maxValue() {
      return parseFloat(this.max);
    },
    stepNumeric: function stepNumeric() {
      return this.step > 0 ? parseFloat(this.step) : 0;
    },
    inputWidth: function inputWidth() {
      var inputWidth = (this.roundValue(this.internalValue) - this.minValue) / (this.maxValue - this.minValue) * 100;
      return isNaN(inputWidth) ? 0 : inputWidth;
    },
    trackFillStyles: function trackFillStyles() {
      var _ref;

      var startDir = this.vertical ? 'bottom' : 'left';
      var endDir = this.vertical ? 'top' : 'right';
      var valueDir = this.vertical ? 'height' : 'width';
      var start = this.$vuetify.rtl ? 'auto' : '0';
      var end = this.$vuetify.rtl ? '0' : 'auto';
      var value = this.isDisabled ? "calc(".concat(this.inputWidth, "% - 10px)") : "".concat(this.inputWidth, "%");
      return _ref = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, endDir, end), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref, valueDir, value), _ref;
    },
    trackStyles: function trackStyles() {
      var _ref2;

      var startDir = this.vertical ? this.$vuetify.rtl ? 'bottom' : 'top' : this.$vuetify.rtl ? 'left' : 'right';
      var endDir = this.vertical ? 'height' : 'width';
      var start = '0px';
      var end = this.isDisabled ? "calc(".concat(100 - this.inputWidth, "% - 10px)") : "calc(".concat(100 - this.inputWidth, "%)");
      return _ref2 = {
        transition: this.trackTransition
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, startDir, start), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_ref2, endDir, end), _ref2;
    },
    showTicks: function showTicks() {
      return this.tickLabels.length > 0 || !!(!this.isDisabled && this.stepNumeric && this.ticks);
    },
    numTicks: function numTicks() {
      return Math.ceil((this.maxValue - this.minValue) / this.stepNumeric);
    },
    showThumbLabel: function showThumbLabel() {
      return !this.isDisabled && !!(this.thumbLabel || this.$scopedSlots['thumb-label']);
    },
    computedTrackColor: function computedTrackColor() {
      if (this.isDisabled) return undefined;
      if (this.trackColor) return this.trackColor;
      if (this.isDark) return this.validationState;
      return this.validationState || 'primary lighten-3';
    },
    computedTrackFillColor: function computedTrackFillColor() {
      if (this.isDisabled) return undefined;
      if (this.trackFillColor) return this.trackFillColor;
      return this.validationState || this.computedColor;
    },
    computedThumbColor: function computedThumbColor() {
      if (this.thumbColor) return this.thumbColor;
      return this.validationState || this.computedColor;
    }
  },
  watch: {
    min: function min(val) {
      var parsed = parseFloat(val);
      parsed > this.internalValue && this.$emit('input', parsed);
    },
    max: function max(val) {
      var parsed = parseFloat(val);
      parsed < this.internalValue && this.$emit('input', parsed);
    },
    value: {
      handler: function handler(v) {
        this.internalValue = v;
      }
    }
  },
  // If done in as immediate in
  // value watcher, causes issues
  // with vue-test-utils
  beforeMount: function beforeMount() {
    this.internalValue = this.value;
  },
  mounted: function mounted() {
    // Without a v-app, iOS does not work with body selectors
    this.app = document.querySelector('[data-app]') || Object(_util_console__WEBPACK_IMPORTED_MODULE_24__[/* consoleWarn */ "c"])('Missing v-app or a non-body wrapping element with the [data-app] attribute', this);
  },
  methods: {
    genDefaultSlot: function genDefaultSlot() {
      var children = [this.genLabel()];
      var slider = this.genSlider();
      this.inverseLabel ? children.unshift(slider) : children.push(slider);
      children.push(this.genProgress());
      return children;
    },
    genSlider: function genSlider() {
      return this.$createElement('div', {
        class: _objectSpread({
          'v-slider': true,
          'v-slider--horizontal': !this.vertical,
          'v-slider--vertical': this.vertical,
          'v-slider--focused': this.isFocused,
          'v-slider--active': this.isActive,
          'v-slider--disabled': this.isDisabled,
          'v-slider--readonly': this.isReadonly
        }, this.themeClasses),
        directives: [{
          name: 'click-outside',
          value: this.onBlur
        }],
        on: {
          click: this.onSliderClick,
          mousedown: this.onSliderMouseDown,
          touchstart: this.onSliderMouseDown
        }
      }, this.genChildren());
    },
    genChildren: function genChildren() {
      return [this.genInput(), this.genTrackContainer(), this.genSteps(), this.genThumbContainer(this.internalValue, this.inputWidth, this.isActive, this.isFocused, this.onFocus, this.onBlur)];
    },
    genInput: function genInput() {
      return this.$createElement('input', {
        attrs: _objectSpread({
          value: this.internalValue,
          id: this.computedId,
          disabled: true,
          readonly: true,
          tabindex: -1
        }, this.$attrs)
      });
    },
    genTrackContainer: function genTrackContainer() {
      var children = [this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
        staticClass: 'v-slider__track-background',
        style: this.trackStyles
      })), this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
        staticClass: 'v-slider__track-fill',
        style: this.trackFillStyles
      }))];
      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        ref: 'track'
      }, children);
    },
    genSteps: function genSteps() {
      var _this = this;

      if (!this.step || !this.showTicks) return null;
      var tickSize = parseFloat(this.tickSize);
      var range = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* createRange */ "i"])(this.numTicks + 1);
      var direction = this.vertical ? 'bottom' : this.$vuetify.rtl ? 'right' : 'left';
      var offsetDirection = this.vertical ? this.$vuetify.rtl ? 'left' : 'right' : 'top';
      if (this.vertical) range.reverse();
      var ticks = range.map(function (index) {
        var _style;

        var children = [];

        if (_this.tickLabels[index]) {
          children.push(_this.$createElement('div', {
            staticClass: 'v-slider__tick-label'
          }, _this.tickLabels[index]));
        }

        var width = index * (100 / _this.numTicks);
        var filled = _this.$vuetify.rtl ? 100 - _this.inputWidth < width : width < _this.inputWidth;
        return _this.$createElement('span', {
          key: index,
          staticClass: 'v-slider__tick',
          class: {
            'v-slider__tick--filled': filled
          },
          style: (_style = {
            width: "".concat(tickSize, "px"),
            height: "".concat(tickSize, "px")
          }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, direction, "calc(".concat(width, "% - ").concat(tickSize / 2, "px)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_style, offsetDirection, "calc(50% - ".concat(tickSize / 2, "px)")), _style)
        }, children);
      });
      return this.$createElement('div', {
        staticClass: 'v-slider__ticks-container',
        class: {
          'v-slider__ticks-container--always-show': this.ticks === 'always' || this.tickLabels.length > 0
        }
      }, ticks);
    },
    genThumbContainer: function genThumbContainer(value, valueWidth, isActive, isFocused, onFocus, onBlur) {
      var ref = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'thumb';
      var children = [this.genThumb()];
      var thumbLabelContent = this.genThumbLabelContent(value);
      this.showThumbLabel && children.push(this.genThumbLabel(thumbLabelContent));
      return this.$createElement('div', this.setTextColor(this.computedThumbColor, {
        ref: ref,
        key: ref,
        staticClass: 'v-slider__thumb-container',
        class: {
          'v-slider__thumb-container--active': isActive,
          'v-slider__thumb-container--focused': isFocused,
          'v-slider__thumb-container--show-label': this.showThumbLabel
        },
        style: this.getThumbContainerStyles(valueWidth),
        attrs: {
          role: 'slider',
          tabindex: this.isDisabled ? -1 : this.$attrs.tabindex ? this.$attrs.tabindex : 0,
          'aria-label': this.$attrs['aria-label'] || this.label,
          'aria-valuemin': this.min,
          'aria-valuemax': this.max,
          'aria-valuenow': this.internalValue,
          'aria-readonly': String(this.isReadonly),
          'aria-orientation': this.vertical ? 'vertical' : 'horizontal'
        },
        on: {
          focus: onFocus,
          blur: onBlur,
          keydown: this.onKeyDown
        }
      }), children);
    },
    genThumbLabelContent: function genThumbLabelContent(value) {
      return this.$scopedSlots['thumb-label'] ? this.$scopedSlots['thumb-label']({
        value: value
      }) : [this.$createElement('span', [String(value)])];
    },
    genThumbLabel: function genThumbLabel(content) {
      var size = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* convertToUnit */ "h"])(this.thumbSize);
      var transform = this.vertical ? "translateY(20%) translateY(".concat(Number(this.thumbSize) / 3 - 1, "px) translateX(55%) rotate(135deg)") : "translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_19__[/* VScaleTransition */ "d"], {
        props: {
          origin: 'bottom center'
        }
      }, [this.$createElement('div', {
        staticClass: 'v-slider__thumb-label-container',
        directives: [{
          name: 'show',
          value: this.isFocused || this.isActive || this.thumbLabel === 'always'
        }]
      }, [this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb-label',
        style: {
          height: size,
          width: size,
          transform: transform
        }
      }), [this.$createElement('div', content)])])]);
    },
    genThumb: function genThumb() {
      return this.$createElement('div', this.setBackgroundColor(this.computedThumbColor, {
        staticClass: 'v-slider__thumb'
      }));
    },
    getThumbContainerStyles: function getThumbContainerStyles(width) {
      var direction = this.vertical ? 'top' : 'left';
      var value = this.$vuetify.rtl ? 100 - width : width;
      value = this.vertical ? 100 - value : value;
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
        transition: this.trackTransition
      }, direction, "".concat(value, "%"));
    },
    onSliderMouseDown: function onSliderMouseDown(e) {
      var _this2 = this;

      var _e$target;

      e.preventDefault();
      this.oldValue = this.internalValue;
      this.isActive = true;

      if ((_e$target = e.target) != null && _e$target.matches('.v-slider__thumb-container, .v-slider__thumb-container *')) {
        this.thumbPressed = true;
        var domRect = e.target.getBoundingClientRect();
        var touch = 'touches' in e ? e.touches[0] : e;
        this.startOffset = this.vertical ? touch.clientY - (domRect.top + domRect.height / 2) : touch.clientX - (domRect.left + domRect.width / 2);
      } else {
        this.startOffset = 0;
        window.clearTimeout(this.mouseTimeout);
        this.mouseTimeout = window.setTimeout(function () {
          _this2.thumbPressed = true;
        }, 300);
      }

      var mouseUpOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true,
        capture: true
      } : true;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      var isTouchEvent = ('touches' in e);
      this.onMouseMove(e);
      this.app.addEventListener(isTouchEvent ? 'touchmove' : 'mousemove', this.onMouseMove, mouseMoveOptions);
      Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* addOnceEventListener */ "a"])(this.app, isTouchEvent ? 'touchend' : 'mouseup', this.onSliderMouseUp, mouseUpOptions);
      this.$emit('start', this.internalValue);
    },
    onSliderMouseUp: function onSliderMouseUp(e) {
      e.stopPropagation();
      window.clearTimeout(this.mouseTimeout);
      this.thumbPressed = false;
      var mouseMoveOptions = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* passiveSupported */ "z"] ? {
        passive: true
      } : false;
      this.app.removeEventListener('touchmove', this.onMouseMove, mouseMoveOptions);
      this.app.removeEventListener('mousemove', this.onMouseMove, mouseMoveOptions);
      this.$emit('mouseup', e);
      this.$emit('end', this.internalValue);

      if (!Object(_util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* deepEqual */ "k"])(this.oldValue, this.internalValue)) {
        this.$emit('change', this.internalValue);
        this.noClick = true;
      }

      this.isActive = false;
    },
    onMouseMove: function onMouseMove(e) {
      if (e.type === 'mousemove') {
        this.thumbPressed = true;
      }

      this.internalValue = this.parseMouseMove(e);
    },
    onKeyDown: function onKeyDown(e) {
      if (!this.isInteractive) return;
      var value = this.parseKeyDown(e, this.internalValue);
      if (value == null || value < this.minValue || value > this.maxValue) return;
      this.internalValue = value;
      this.$emit('change', value);
    },
    onSliderClick: function onSliderClick(e) {
      if (this.noClick) {
        this.noClick = false;
        return;
      }

      var thumb = this.$refs.thumb;
      thumb.focus();
      this.onMouseMove(e);
      this.$emit('change', this.internalValue);
    },
    onBlur: function onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    onFocus: function onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    parseMouseMove: function parseMouseMove(e) {
      var start = this.vertical ? 'top' : 'left';
      var length = this.vertical ? 'height' : 'width';
      var click = this.vertical ? 'clientY' : 'clientX';

      var _this$$refs$track$get = this.$refs.track.getBoundingClientRect(),
          trackStart = _this$$refs$track$get[start],
          trackLength = _this$$refs$track$get[length];

      var clickOffset = 'touches' in e ? e.touches[0][click] : e[click]; // It is possible for left to be NaN, force to number

      var clickPos = Math.min(Math.max((clickOffset - trackStart - this.startOffset) / trackLength, 0), 1) || 0;
      if (this.vertical) clickPos = 1 - clickPos;
      if (this.$vuetify.rtl) clickPos = 1 - clickPos;
      return parseFloat(this.min) + clickPos * (this.maxValue - this.minValue);
    },
    parseKeyDown: function parseKeyDown(e, value) {
      if (!this.isInteractive) return;
      var pageup = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pageup,
          pagedown = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].pagedown,
          end = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].end,
          home = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].home,
          left = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].left,
          right = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].right,
          down = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].down,
          up = _util_helpers__WEBPACK_IMPORTED_MODULE_23__[/* keyCodes */ "v"].up;
      if (![pageup, pagedown, end, home, left, right, down, up].includes(e.keyCode)) return;
      e.preventDefault();
      var step = this.stepNumeric || 1;
      var steps = (this.maxValue - this.minValue) / step;

      if ([left, right, down, up].includes(e.keyCode)) {
        var increase = this.$vuetify.rtl ? [left, up] : [right, up];
        var direction = increase.includes(e.keyCode) ? 1 : -1;
        var multiplier = e.shiftKey ? 3 : e.ctrlKey ? 2 : 1;
        value = value + direction * step * multiplier;
      } else if (e.keyCode === home) {
        value = this.minValue;
      } else if (e.keyCode === end) {
        value = this.maxValue;
      } else {
        var _direction = e.keyCode === pagedown ? 1 : -1;

        value = value - _direction * step * (steps > 100 ? steps / 10 : 10);
      }

      return value;
    },
    roundValue: function roundValue(value) {
      if (!this.stepNumeric) return value; // Format input value using the same number
      // of decimals places as in the step prop

      var trimmedStep = this.step.toString().trim();
      var decimals = trimmedStep.indexOf('.') > -1 ? trimmedStep.length - trimmedStep.indexOf('.') - 1 : 0;
      var offset = this.minValue % this.stepNumeric;
      var newValue = Math.round((value - offset) / this.stepNumeric) * this.stepNumeric + offset;
      return parseFloat(Math.min(newValue, this.maxValue).toFixed(decimals));
    }
  }
}));

/***/ })

}]);