require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"DevicePixelRatio":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.DevicePixelRatio = (function() {
  function DevicePixelRatio() {}

  DevicePixelRatio.get = function(v) {
    var devicePixelRatio, device_2x, device_3x, i, j, len, len1, originalValue, ref, ref1;
    originalValue = v;
    if (Utils.isFramerStudio() || Utils.isDesktop()) {
      ref = ['iphone-6-', 'iphone-5', 'ipad-air', "nexus-9", "applewatch"];
      for (i = 0, len = ref.length; i < len; i++) {
        device_2x = ref[i];
        if (_.startsWith(Framer.Device.deviceType, device_2x)) {
          v = v * 2;
        }
      }
      ref1 = ['iphone-6plus', "nexus-5"];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        device_3x = ref1[j];
        if (_.startsWith(Framer.Device.deviceType, device_3x)) {
          v = v * 3;
        }
      }
    }
    if (originalValue !== v) {
      return v;
    }
    if (!Utils.isDesktop()) {
      devicePixelRatio = Utils.devicePixelRatio();
      if (devicePixelRatio > 1) {
        v = v * devicePixelRatio;
      }
    }
    return v;
  };

  return DevicePixelRatio;

})();

exports.DPR = (function(superClass) {
  extend(DPR, superClass);

  function DPR() {
    return DPR.__super__.constructor.apply(this, arguments);
  }

  return DPR;

})(exports.DevicePixelRatio);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"presets":[function(require,module,exports){
exports.sluggishTension = 20;

exports.sluggishFriction = 30;

exports.sluggishVelocity = 0;

exports.slowTension = 50;

exports.slowFriction = 15;

exports.slowVelocity = 0;

exports.smoothTension = 120;

exports.smoothFriction = 20;

exports.smoothVelocity = 0;

exports.dynamicTension = 663;

exports.dynamicFriction = 76;

exports.dynamicVelocity = 18;

exports.snappyTension = 600;

exports.snappyFriction = 30;

exports.snappyVelocity = 0;

exports.blitzTension = 620;

exports.blitzFriction = 20;

exports.blitzVelocity = 10;

exports.customTension = 500;

exports.customFriction = 50;

exports.customVelocity = 50;


},{}],"styles":[function(require,module,exports){
exports.white = new Color("rgba(255, 255, 255, 1)");

exports.white80 = new Color("rgba(255, 255, 255, 0.8)");

exports.white20 = new Color("rgba(255, 255, 255, 0.2)");

exports.black50 = new Color("rgba(0, 0, 0, 0.5)");

exports.black20 = new Color("rgba(0, 0, 0, 0.2)");

exports.black10 = new Color("rgba(0, 0, 0, 0.1)");

exports.transparent = new Color("rgba(0, 0, 0, 0)");

exports.squareStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "text-align": "center",
  "text-transform": "uppercase",
  "color": exports.black50
};

exports.presetStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "line-height": "100px",
  "text-align": "center",
  "text-transform": "uppercase",
  "color": exports.white80,
  "background-color": exports.black20
};

exports.sliderStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "padding": "24px 0 0 36px",
  "text-transform": "uppercase",
  "color": exports.white50
};

exports.itemStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "padding": "35px 50px 0",
  "text-transform": "lowercase",
  "color": exports.black50
};

exports.resetStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "line-height": "150px",
  "padding-left": "17%",
  "text-transform": "uppercase"
};

exports.saveStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "line-height": "150px",
  "padding-left": "30%",
  "text-transform": "uppercase"
};

exports.savedStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "line-height": "150px",
  "padding-left": "254px",
  "text-transform": "uppercase"
};


},{}],"ustwoColours":[function(require,module,exports){
exports.piglet = new Color("rgba(237, 0, 130, 1)");

exports.passion = new Color("rgba(230, 12, 41, 1)");

exports.ohRa = new Color("rgba(255, 85, 25, 1)");

exports.honey = new Color("rgba(255, 191, 0, 1)");

exports.jeezz = new Color("rgba(150, 204, 141, 1)");

exports.pot = new Color("rgba(20, 192, 77, 1)");

exports.mare = new Color("rgba(22, 213, 217, 1)");

exports.blu = new Color("rgba(0, 156, 243, 1)");

exports.navy = new Color("rgba(20, 63, 204, 1)");

exports.rain = new Color("rgba(97, 20, 204, 1)");

exports.sPiglet = new Color("rgba(255, 165, 190, 1)");

exports.sPassion = new Color("rgba(250, 125, 120, 1)");

exports.sOhRa = new Color("rgba(255, 195, 155, 1)");

exports.sHoney = new Color("rgba(245, 230, 100, 1)");

exports.sJeezz = new Color("rgba(200, 230, 145, 1)");

exports.sPot = new Color("rgba(165, 250, 175, 1)");

exports.sMare = new Color("rgba(165, 250, 250, 1)");

exports.sBlu = new Color("rgba(165, 225, 255, 1)");

exports.sNavy = new Color("rgba(95, 182, 250, 1)");

exports.sRain = new Color("rgba(195, 130, 230, 1)");

exports.nonWhite = new Color("rgba(248, 248, 248, 1)");

exports.grey01 = new Color("rgba(234, 234, 234, 1)");

exports.grey02 = new Color("rgba(191, 191, 191, 1)");

exports.grey03 = new Color("rgba(150, 150, 150, 1)");

exports.grey04 = new Color("rgba(100, 100, 100, 1)");

exports.nonBlack = new Color("rgba(51, 51, 51, 1)");


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvRGV2aWNlUGl4ZWxSYXRpby5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3ByZXNldHMuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3N0eWxlcy5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvdXN0d29Db2xvdXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ2IsZ0JBQUMsQ0FBQSxHQUFELEdBQU8sU0FBQyxDQUFEO0FBRU4sUUFBQTtJQUFBLGFBQUEsR0FBZ0I7SUFHaEIsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsSUFBMEIsS0FBSyxDQUFDLFNBQU4sQ0FBQSxDQUE3QjtBQUVDO0FBQUEsV0FBQSxxQ0FBQTs7UUFDQyxJQUFhLENBQUMsQ0FBQyxVQUFGLENBQWEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEzQixFQUF1QyxTQUF2QyxDQUFiO1VBQUEs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d0JBQU47O0FBQ3JCLE9BQU8sQ0FBQyxNQUFSLEdBQXFCLElBQUEsS0FBQSxDQUFNLHdCQUFOOztBQUNyQixPQUFPLENBQUMsTUFBUixHQUFxQixJQUFBLEtBQUEsQ0FBTSx3QkFBTjs7QUFDckIsT0FBTyxDQUFDLE1BQVIsR0FBcUIsSUFBQSxLQUFBLENBQU0sd0JBQU47O0FBQ3JCLE9BQU8sQ0FBQyxRQUFSLEdBQXVCLElBQUEsS0FBQSxDQUFNLHFCQUFOIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBieSBKb3JkYW4gUm9iZXJ0IERvYnNvbiAvIEBqb3JkYW5kb2Jzb24gb24gMTQgU2VwdGVtYmVyIDIwMTVcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvXG5cdEBnZXQgPSAodikgLT5cblx0XHQjIFN0b3JlIHRoZSBvcmlnaW5hbCBzbyB3ZSBjYW4gdmVyaWZ5IGlmIGl0J3MgY2hhbmdlZCBhdCBhbGwuXG5cdFx0b3JpZ2luYWxWYWx1ZSA9IHYgXG5cdFx0IyBJbnNpZGUgRnJhbWVyIFN0dWRpbyBpdCByZXBvcnRzIGRldmljZSBQaXhlbCBSYXRpb3MgYmFzZWQgb24gdGhlIGJyb3dzZXIgbm90IHRoZSBhY3R1YWwgZGV2aWNlXG5cdFx0IyBTbyB3ZSBoYXZlIHRvIHVwZGF0ZSB0aGUgdmFsdWUgbWFudWFsbHkuIEkgaGF2ZW4ndCBpbmNsdWRlZCBldmVyeXRoaW5nIGhlcmUgeWV0LlxuXHRcdGlmIFV0aWxzLmlzRnJhbWVyU3R1ZGlvKCkgb3IgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdCMgQ2hlY2sgZm9yIDJ4IGRldmljZXMgXG5cdFx0XHRmb3IgZGV2aWNlXzJ4IGluIFsnaXBob25lLTYtJywgJ2lwaG9uZS01JywgJ2lwYWQtYWlyJywgXCJuZXh1cy05XCIsIFwiYXBwbGV3YXRjaFwiXVxuXHRcdFx0XHR2ID0gdiAqIDIgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzJ4KVxuXHRcdFx0IyBDaGVjayBmb3IgM3ggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zeCBpbiBbJ2lwaG9uZS02cGx1cycsIFwibmV4dXMtNVwiXVxuXHRcdFx0XHR2ID0gdiAqIDMgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzN4KVxuXHRcdCMgUmV0dXJuIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLi4uIG90aGVyd2lzZSBjb250aW51ZVxuXHRcdHJldHVybiB2IHVubGVzcyBvcmlnaW5hbFZhbHVlIGlzIHZcblx0XHQjIFNldCBVbml0cyBiYXNlZCBvbiBEZXZpY2UgUGl4ZWwgUmF0aW8gRXhjZXB0IGRlc2t0b3Bcblx0XHR1bmxlc3MgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdGRldmljZVBpeGVsUmF0aW8gPSBVdGlscy5kZXZpY2VQaXhlbFJhdGlvKClcblx0XHRcdCMgaWYgaXQncyBncmVhdGVyIHRoYW4gMSB0aGVuIHVwZGF0ZSBpdCFcblx0XHRcdHYgPSB2ICogZGV2aWNlUGl4ZWxSYXRpbyBpZiBkZXZpY2VQaXhlbFJhdGlvID4gMVxuXHRcdCMgcmV0dXJuIHRoZSB2YWx1ZSBldmVuIGlmIGl0IGhhc24ndCBjaGFuZ2VkXG5cdFx0cmV0dXJuIHZcblxuIyBDcmVhdGUgYSBzaG9ydGhhbmQgdmVyc2lvbiBvZiBjbGFzcyBhYm92ZSBzbyB5b3UgY2FuIGp1c3QgdHlwZSBcIkRQUlwiXG5jbGFzcyBleHBvcnRzLkRQUiBleHRlbmRzIGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpbyIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLnNsdWdnaXNoVGVuc2lvbiA9IDIwXG5leHBvcnRzLnNsdWdnaXNoRnJpY3Rpb24gPSAzMFxuZXhwb3J0cy5zbHVnZ2lzaFZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLnNsb3dUZW5zaW9uID0gNTBcbmV4cG9ydHMuc2xvd0ZyaWN0aW9uID0gMTVcbmV4cG9ydHMuc2xvd1ZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLnNtb290aFRlbnNpb24gPSAxMjBcbmV4cG9ydHMuc21vb3RoRnJpY3Rpb24gPSAyMFxuZXhwb3J0cy5zbW9vdGhWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5keW5hbWljVGVuc2lvbiA9IDY2M1xuZXhwb3J0cy5keW5hbWljRnJpY3Rpb24gPSA3NlxuZXhwb3J0cy5keW5hbWljVmVsb2NpdHkgPSAxOFxuXG5leHBvcnRzLnNuYXBweVRlbnNpb24gPSA2MDBcbmV4cG9ydHMuc25hcHB5RnJpY3Rpb24gPSAzMFxuZXhwb3J0cy5zbmFwcHlWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5ibGl0elRlbnNpb24gPSA2MjBcbmV4cG9ydHMuYmxpdHpGcmljdGlvbiA9IDIwXG5leHBvcnRzLmJsaXR6VmVsb2NpdHkgPSAxMFxuXG5leHBvcnRzLmN1c3RvbVRlbnNpb24gPSA1MDBcbmV4cG9ydHMuY3VzdG9tRnJpY3Rpb24gPSA1MFxuZXhwb3J0cy5jdXN0b21WZWxvY2l0eSA9IDUwXG4iLCIjIHN0eWxlc1xuXG4jIGN1c3RvbSBjb2xvdXJzXG5leHBvcnRzLndoaXRlID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiKVxuZXhwb3J0cy53aGl0ZTgwID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCIpXG5leHBvcnRzLndoaXRlMjAgPSBuZXcgQ29sb3IoXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcIilcbmV4cG9ydHMuYmxhY2s1MCA9IG5ldyBDb2xvcihcInJnYmEoMCwgMCwgMCwgMC41KVwiKVxuZXhwb3J0cy5ibGFjazIwID0gbmV3IENvbG9yKFwicmdiYSgwLCAwLCAwLCAwLjIpXCIpXG5leHBvcnRzLmJsYWNrMTAgPSBuZXcgQ29sb3IoXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIilcbmV4cG9ydHMudHJhbnNwYXJlbnQgPSBuZXcgQ29sb3IoXCJyZ2JhKDAsIDAsIDAsIDApXCIpXG5cbmV4cG9ydHMuc3F1YXJlU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0IyBcImxpbmUtaGVpZ2h0XCI6IFwiODAlXCJcblx0XCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cdFwiY29sb3JcIjogZXhwb3J0cy5ibGFjazUwXG5cbmV4cG9ydHMucHJlc2V0U3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0XCJsaW5lLWhlaWdodFwiOiBcIjEwMHB4XCJcblx0XCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cdFwiY29sb3JcIjogZXhwb3J0cy53aGl0ZTgwXG4jIFx0XCJwYWRkaW5nXCI6IFwiMTBwdCA2MHB0XCJcblx0XCJiYWNrZ3JvdW5kLWNvbG9yXCI6IGV4cG9ydHMuYmxhY2syMFxuXG5leHBvcnRzLnNsaWRlclN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdCMgXCJsaW5lLWhlaWdodFwiOiBcIjEwMHB4XCJcblx0IyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInBhZGRpbmdcIjogXCIyNHB4IDAgMCAzNnB4XCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cdCMgXCJjb2xvclwiOiBleHBvcnRzLmJsYWNrNTBcblx0XCJjb2xvclwiOiBleHBvcnRzLndoaXRlNTBcblxuXG5leHBvcnRzLml0ZW1TdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHQjIFwibGluZS1oZWlnaHRcIjogXCI2MDBweFwiXG5cdFwicGFkZGluZ1wiOiBcIjM1cHggNTBweCAwXCJcblx0IyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwibG93ZXJjYXNlXCJcblx0XCJjb2xvclwiOiBleHBvcnRzLmJsYWNrNTBcblxuZXhwb3J0cy5yZXNldFN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMTclXCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cbmV4cG9ydHMuc2F2ZVN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMzAlXCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cbmV4cG9ydHMuc2F2ZWRTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHRcImxpbmUtaGVpZ2h0XCI6IFwiMTUwcHhcIlxuXHRcInBhZGRpbmctbGVmdFwiOiBcIjI1NHB4XCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG4iLCIjIDxAPlxuIyBEYW5ueSBXaGl0ZVxuIyB1c3R3byBOWUMgLyAyMDE1LTE2XG4jIGh0dHBzOi8vZ2l0aHViLmNvbS91c3R3by91c3R3by1jb2xvdXJzXG5cbiMgSG93IHRvIHVzZSB0aGlzOlxuXG4jIDEuICBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvOlxuIyAgICAgdXN0d29Db2xvdXJzID0gcmVxdWlyZSBcInVzdHdvQ29sb3Vyc1wiXG4jIDIuICBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUuIEUuZzogdXN0d29Db2xvdXJzLnBpZ2xldFxuXG4jIDMuICBPcHRpb25hbDogYWRkIHRoaXMgbGluZSB0byBub3QgaGF2ZSB0byB1c2UgdGhlIHVzdHdvQ29sb3VycyBwcmVmaXg6XG4jICAgICBVdGlscy5nbG9iYWxMYXllcnMgdXN0d29Db2xvdXJzXG4jICAgICBOb3cgeW91IGNhbiBqdXN0IHJlZmVyZW5jZSBlYWNoIGNvbG91ciB2ZXJiYXRpbS4gRS5nLiBwaWdsZXRcblxuIyBSZWdzIGNvbG91ciBwYWxldHRlXG5leHBvcnRzLnBpZ2xldCA9IG5ldyBDb2xvcihcInJnYmEoMjM3LCAwLCAxMzAsIDEpXCIpXG5leHBvcnRzLnBhc3Npb24gPSBuZXcgQ29sb3IoXCJyZ2JhKDIzMCwgMTIsIDQxLCAxKVwiKVxuZXhwb3J0cy5vaFJhID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDg1LCAyNSwgMSlcIilcbmV4cG9ydHMuaG9uZXkgPSBuZXcgQ29sb3IoXCJyZ2JhKDI1NSwgMTkxLCAwLCAxKVwiKVxuZXhwb3J0cy5qZWV6eiA9IG5ldyBDb2xvcihcInJnYmEoMTUwLCAyMDQsIDE0MSwgMSlcIilcbmV4cG9ydHMucG90ID0gbmV3IENvbG9yKFwicmdiYSgyMCwgMTkyLCA3NywgMSlcIilcbmV4cG9ydHMubWFyZSA9IG5ldyBDb2xvcihcInJnYmEoMjIsIDIxMywgMjE3LCAxKVwiKVxuZXhwb3J0cy5ibHUgPSBuZXcgQ29sb3IoXCJyZ2JhKDAsIDE1NiwgMjQzLCAxKVwiKVxuZXhwb3J0cy5uYXZ5ID0gbmV3IENvbG9yKFwicmdiYSgyMCwgNjMsIDIwNCwgMSlcIilcbmV4cG9ydHMucmFpbiA9IG5ldyBDb2xvcihcInJnYmEoOTcsIDIwLCAyMDQsIDEpXCIpXG5cbiMgU29mdCBjb2xvdXIgcGFsZXR0ZVxuZXhwb3J0cy5zUGlnbGV0ID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDE2NSwgMTkwLCAxKVwiKVxuZXhwb3J0cy5zUGFzc2lvbiA9IG5ldyBDb2xvcihcInJnYmEoMjUwLCAxMjUsIDEyMCwgMSlcIilcbmV4cG9ydHMuc09oUmEgPSBuZXcgQ29sb3IoXCJyZ2JhKDI1NSwgMTk1LCAxNTUsIDEpXCIpXG5leHBvcnRzLnNIb25leSA9IG5ldyBDb2xvcihcInJnYmEoMjQ1LCAyMzAsIDEwMCwgMSlcIilcbmV4cG9ydHMuc0plZXp6ID0gbmV3IENvbG9yKFwicmdiYSgyMDAsIDIzMCwgMTQ1LCAxKVwiKVxuZXhwb3J0cy5zUG90ID0gbmV3IENvbG9yKFwicmdiYSgxNjUsIDI1MCwgMTc1LCAxKVwiKVxuZXhwb3J0cy5zTWFyZSA9IG5ldyBDb2xvcihcInJnYmEoMTY1LCAyNTAsIDI1MCwgMSlcIilcbmV4cG9ydHMuc0JsdSA9IG5ldyBDb2xvcihcInJnYmEoMTY1LCAyMjUsIDI1NSwgMSlcIilcbmV4cG9ydHMuc05hdnkgPSBuZXcgQ29sb3IoXCJyZ2JhKDk1LCAxODIsIDI1MCwgMSlcIilcbmV4cG9ydHMuc1JhaW4gPSBuZXcgQ29sb3IoXCJyZ2JhKDE5NSwgMTMwLCAyMzAsIDEpXCIpXG5cbiMgR3JleXNjYWxlIHBhbGV0dGVcbmV4cG9ydHMubm9uV2hpdGUgPSBuZXcgQ29sb3IoXCJyZ2JhKDI0OCwgMjQ4LCAyNDgsIDEpXCIpXG5leHBvcnRzLmdyZXkwMSA9IG5ldyBDb2xvcihcInJnYmEoMjM0LCAyMzQsIDIzNCwgMSlcIilcbmV4cG9ydHMuZ3JleTAyID0gbmV3IENvbG9yKFwicmdiYSgxOTEsIDE5MSwgMTkxLCAxKVwiKVxuZXhwb3J0cy5ncmV5MDMgPSBuZXcgQ29sb3IoXCJyZ2JhKDE1MCwgMTUwLCAxNTAsIDEpXCIpXG5leHBvcnRzLmdyZXkwNCA9IG5ldyBDb2xvcihcInJnYmEoMTAwLCAxMDAsIDEwMCwgMSlcIilcbmV4cG9ydHMubm9uQmxhY2sgPSBuZXcgQ29sb3IoXCJyZ2JhKDUxLCA1MSwgNTEsIDEpXCIpXG4iXX0=
