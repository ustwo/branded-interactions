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


},{}],"colourTransition":[function(require,module,exports){
exports.colourTransition = function(layer, colour, duration, fps) {
  var a, aDiff, b, bDiff, g, gDiff, i, myInterval, newColour, oldColour, r, rDiff, startInterval;
  oldColour = null;
  newColour = null;
  oldColour = layer.backgroundColor;
  newColour = colour;
  oldColour = oldColour.substring(5, oldColour.length - 1);
  oldColour = oldColour.split(', ');
  newColour = newColour.substring(5, newColour.length - 1);
  newColour = newColour.split(', ');
  r = parseFloat(oldColour[0]);
  g = parseFloat(oldColour[1]);
  b = parseFloat(oldColour[2]);
  a = parseFloat(oldColour[3]);
  rDiff = oldColour[0] - newColour[0];
  gDiff = oldColour[1] - newColour[1];
  bDiff = oldColour[2] - newColour[2];
  aDiff = oldColour[3] - newColour[3];
  if (fps === void 0) {
    fps = 30;
  }
  rDiff = rDiff / (fps * duration);
  gDiff = gDiff / (fps * duration);
  bDiff = bDiff / (fps * duration);
  aDiff = aDiff / (fps * duration);
  i = 0;
  myInterval = null;
  startInterval = function() {
    return myInterval = Utils.interval(1 / fps, function() {
      i++;
      r = r - rDiff;
      g = g - gDiff;
      b = b - bDiff;
      a = a - aDiff;
      layer.backgroundColor = 'rgba(' + Math.round(r) + ', ' + Math.round(g) + ', ' + Math.round(b) + ', ' + a + ')';
      if (i >= (fps * duration)) {
        return clearInterval(myInterval);
      }
    });
  };
  return startInterval();
};


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
exports.white = "rgba(255, 255, 255, 1)";

exports.white80 = "rgba(255, 255, 255, 0.8)";

exports.white20 = "rgba(255, 255, 255, 0.2)";

exports.black50 = "rgba(0, 0, 0, 0.5)";

exports.black20 = "rgba(0, 0, 0, 0.2)";

exports.black10 = "rgba(0, 0, 0, 0.1)";

exports.transparent = "rgba(0, 0, 0, 0)";

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
exports.piglet = "rgba(237, 0, 130, 1)";

exports.passion = "rgba(230, 12, 41, 1)";

exports.ohRa = "rgba(255, 85, 25, 1)";

exports.honey = "rgba(255, 191, 0, 1)";

exports.jeezz = "rgba(150, 204, 141, 1)";

exports.pot = "rgba(20, 192, 77, 1)";

exports.mare = "rgba(22, 213, 217, 1)";

exports.blu = "rgba(0, 156, 243, 1)";

exports.navy = "rgba(20, 63, 204, 1)";

exports.rain = "rgba(97, 20, 204, 1)";

exports.sPiglet = "rgba(255, 165, 190, 1)";

exports.sPassion = "rgba(250, 125, 120, 1)";

exports.sOhRa = "rgba(255, 195, 155, 1)";

exports.sHoney = "rgba(245, 230, 100, 1)";

exports.sJeezz = "rgba(200, 230, 145, 1)";

exports.sPot = "rgba(165, 250, 175, 1)";

exports.sMare = "rgba(165, 250, 250, 1)";

exports.sBlu = "rgba(165, 225, 255, 1)";

exports.sNavy = "rgba(95, 182, 250, 1)";

exports.sRain = "rgba(195, 130, 230, 1)";

exports.nonWhite = "rgba(248, 248, 248, 1)";

exports.grey01 = "rgba(234, 234, 234, 1)";

exports.grey02 = "rgba(191, 191, 191, 1)";

exports.grey03 = "rgba(150, 150, 150, 1)";

exports.grey04 = "rgba(100, 100, 100, 1)";

exports.nonBlack = "rgba(51, 51, 51, 1)";


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvRGV2aWNlUGl4ZWxSYXRpby5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvY29sb3VyVHJhbnNpdGlvbi5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3ByZXNldHMuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3N0eWxlcy5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvdXN0d29Db2xvdXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ2IsZ0JBQUMsQ0FBQSxHQUFELEdBQU8sU0FBQyxDQUFEO0FBRU4sUUFBQTtJQUFBLGFBQUEsR0FBZ0I7SUFHaEIsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsSUFBMEIsS0FBSyxDQUFDLFNBQU4s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QUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLElBQVIsR0FBZTs7QUFDZixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFDaEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBR2hCLE9BQU8sQ0FBQyxRQUFSLEdBQW1COztBQUNuQixPQUFPLENBQUMsTUFBUixHQUFpQjs7QUFDakIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7O0FBQ2pCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsTUFBUixHQUFpQjs7QUFDakIsT0FBTyxDQUFDLFFBQVIsR0FBbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBDcmVhdGVkIGJ5IEpvcmRhbiBSb2JlcnQgRG9ic29uIC8gQGpvcmRhbmRvYnNvbiBvbiAxNCBTZXB0ZW1iZXIgMjAxNVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5jbGFzcyBleHBvcnRzLkRldmljZVBpeGVsUmF0aW9cblx0QGdldCA9ICh2KSAtPlxuXHRcdCMgU3RvcmUgdGhlIG9yaWdpbmFsIHNvIHdlIGNhbiB2ZXJpZnkgaWYgaXQncyBjaGFuZ2VkIGF0IGFsbC5cblx0XHRvcmlnaW5hbFZhbHVlID0gdiBcblx0XHQjIEluc2lkZSBGcmFtZXIgU3R1ZGlvIGl0IHJlcG9ydHMgZGV2aWNlIFBpeGVsIFJhdGlvcyBiYXNlZCBvbiB0aGUgYnJvd3NlciBub3QgdGhlIGFjdHVhbCBkZXZpY2Vcblx0XHQjIFNvIHdlIGhhdmUgdG8gdXBkYXRlIHRoZSB2YWx1ZSBtYW51YWxseS4gSSBoYXZlbid0IGluY2x1ZGVkIGV2ZXJ5dGhpbmcgaGVyZSB5ZXQuXG5cdFx0aWYgVXRpbHMuaXNGcmFtZXJTdHVkaW8oKSBvciBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0IyBDaGVjayBmb3IgMnggZGV2aWNlcyBcblx0XHRcdGZvciBkZXZpY2VfMnggaW4gWydpcGhvbmUtNi0nLCAnaXBob25lLTUnLCAnaXBhZC1haXInLCBcIm5leHVzLTlcIiwgXCJhcHBsZXdhdGNoXCJdXG5cdFx0XHRcdHYgPSB2ICogMiBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfMngpXG5cdFx0XHQjIENoZWNrIGZvciAzeCBkZXZpY2VzXG5cdFx0XHRmb3IgZGV2aWNlXzN4IGluIFsnaXBob25lLTZwbHVzJywgXCJuZXh1cy01XCJdXG5cdFx0XHRcdHYgPSB2ICogMyBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfM3gpXG5cdFx0IyBSZXR1cm4gaWYgdGhlIHZhbHVlIGNoYW5nZWQuLi4gb3RoZXJ3aXNlIGNvbnRpbnVlXG5cdFx0cmV0dXJuIHYgdW5sZXNzIG9yaWdpbmFsVmFsdWUgaXMgdlxuXHRcdCMgU2V0IFVuaXRzIGJhc2VkIG9uIERldmljZSBQaXhlbCBSYXRpbyBFeGNlcHQgZGVza3RvcFxuXHRcdHVubGVzcyBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0ZGV2aWNlUGl4ZWxSYXRpbyA9IFV0aWxzLmRldmljZVBpeGVsUmF0aW8oKVxuXHRcdFx0IyBpZiBpdCdzIGdyZWF0ZXIgdGhhbiAxIHRoZW4gdXBkYXRlIGl0IVxuXHRcdFx0diA9IHYgKiBkZXZpY2VQaXhlbFJhdGlvIGlmIGRldmljZVBpeGVsUmF0aW8gPiAxXG5cdFx0IyByZXR1cm4gdGhlIHZhbHVlIGV2ZW4gaWYgaXQgaGFzbid0IGNoYW5nZWRcblx0XHRyZXR1cm4gdlxuXG4jIENyZWF0ZSBhIHNob3J0aGFuZCB2ZXJzaW9uIG9mIGNsYXNzIGFib3ZlIHNvIHlvdSBjYW4ganVzdCB0eXBlIFwiRFBSXCJcbmNsYXNzIGV4cG9ydHMuRFBSIGV4dGVuZHMgZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvIiwiIyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrbWFuZ29zL2ZyYW1lci1jb2xvdXItdHJhbnNpdGlvblxuXG5leHBvcnRzLmNvbG91clRyYW5zaXRpb24gPSAobGF5ZXIsIGNvbG91ciwgZHVyYXRpb24sIGZwcykgLT5cblx0b2xkQ29sb3VyID0gbnVsbFxuXHRuZXdDb2xvdXIgPSBudWxsXG5cdCMgc2V0IG9sZCBhbmQgbmV3IGNvbG91cnMgYXMgdmFyaWFibGVzXG5cdG9sZENvbG91ciA9IGxheWVyLmJhY2tncm91bmRDb2xvclxuXHRuZXdDb2xvdXIgPSBjb2xvdXJcblx0b2xkQ29sb3VyID0gb2xkQ29sb3VyLnN1YnN0cmluZyg1LCBvbGRDb2xvdXIubGVuZ3RoIC0gMSlcblx0b2xkQ29sb3VyID0gb2xkQ29sb3VyLnNwbGl0KCcsICcpXG5cdG5ld0NvbG91ciA9IG5ld0NvbG91ci5zdWJzdHJpbmcoNSwgbmV3Q29sb3VyLmxlbmd0aCAtIDEpXG5cdG5ld0NvbG91ciA9IG5ld0NvbG91ci5zcGxpdCgnLCAnKVxuXG5cdHIgPSBwYXJzZUZsb2F0KG9sZENvbG91clswXSlcblx0ZyA9IHBhcnNlRmxvYXQob2xkQ29sb3VyWzFdKVxuXHRiID0gcGFyc2VGbG9hdChvbGRDb2xvdXJbMl0pXG5cdGEgPSBwYXJzZUZsb2F0KG9sZENvbG91clszXSlcblxuXHQjIENhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvIGNvbG91cnNcblx0ckRpZmYgPSBvbGRDb2xvdXJbMF0gLSBuZXdDb2xvdXJbMF1cblx0Z0RpZmYgPSBvbGRDb2xvdXJbMV0gLSBuZXdDb2xvdXJbMV1cblx0YkRpZmYgPSBvbGRDb2xvdXJbMl0gLSBuZXdDb2xvdXJbMl1cblx0YURpZmYgPSBvbGRDb2xvdXJbM10gLSBuZXdDb2xvdXJbM11cblxuXHQjIFNldHMgYSBmcmFtZSBkZWZhdWx0XG5cdGlmIGZwcyA9PSB1bmRlZmluZWRcblx0XHRmcHMgPSAzMFxuXG5cdCMgQ2FsY3VsYXRlIHRoZSBpbmNyZW1lbnRzXG5cdHJEaWZmID0gckRpZmYgLyAoZnBzICogZHVyYXRpb24pXG5cdGdEaWZmID0gZ0RpZmYgLyAoZnBzICogZHVyYXRpb24pXG5cdGJEaWZmID0gYkRpZmYgLyAoZnBzICogZHVyYXRpb24pXG5cdGFEaWZmID0gYURpZmYgLyAoZnBzICogZHVyYXRpb24pXG5cdCMjIHByaW50IFwiKHJEaWZmIEluY3JlbWVudHMpXCIgKyByRGlmZiArIFwiKGdEaWZmIEluY3JlbWVudHMpXCIgKyBnRGlmZiArIFwiKGJEaWZmIEluY3JlbWVudHMpXCIgKyBiRGlmZiArIFwiKGFEaWZmIEluY3JlbWVudHMpXCIgKyBhRGlmZlxuXHRpID0gMFxuXHRteUludGVydmFsID0gbnVsbFxuXHRzdGFydEludGVydmFsID0gLT5cblx0XHRteUludGVydmFsID0gVXRpbHMuaW50ZXJ2YWwgKDEvZnBzKSwgLT5cblx0XHRcdGkrK1xuXHRcdFx0ciA9IHIgLSByRGlmZlxuXHRcdFx0ZyA9IGcgLSBnRGlmZlxuXHRcdFx0YiA9IGIgLSBiRGlmZlxuXHRcdFx0YSA9IGEgLSBhRGlmZlxuXHRcdFx0IyBOdW1iZXJzIGhhdmUgdG8gYmUgd2hvbGUgdG8gcmVnZXN0ZXIgYXMgYSBwcm9wZXIgUkdCIHZhbHVlLlxuXHRcdFx0IyBSZW5kZXIgY29sb3VyIHVzaW5nIHRoZSBjaGFuZ2luZyB2YXJpYWJsZS5cblx0XHRcdGxheWVyLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKCcrTWF0aC5yb3VuZChyKSsnLCAnK01hdGgucm91bmQoZykrJywgJytNYXRoLnJvdW5kKGIpKycsICcrYSsnKSdcblx0XHRcdGlmIGkgPj0gKGZwcypkdXJhdGlvbilcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuXHRcdFx0IyMgcHJpbnQgaSArIFwiKFIpXCIgKyBNYXRoLnJvdW5kKHIpICsgXCIoRylcIiArIE1hdGgucm91bmQoZykgKyBcIihCKVwiICsgTWF0aC5yb3VuZChiKSArIFwiKEEpXCIgKyBhXG5cdHN0YXJ0SW50ZXJ2YWwoKVxuXHQjIyBUT0RPXG5cdCMjIEZpeCBzcGxpdCBzdHJpbmcgaXNzdWUuXG5cdCMjIFNldCB0aGUgdHJ1ZSBjb2xvdXIgdmFsdWUgYWZ0ZXIgZmFkZSBlbmRzLlxuXHQjIyBBYmlsaXR5IHRvIHN0b3AgbWlkLWZhZGUuXG5cdCMjIFJlbW92ZSB0aGUgbmVlZCB0byBzZXQgdGhlIG9yaWdpbmFsIGNvbG91ciBhcyByZ2JhXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiZXhwb3J0cy5zbHVnZ2lzaFRlbnNpb24gPSAyMFxuZXhwb3J0cy5zbHVnZ2lzaEZyaWN0aW9uID0gMzBcbmV4cG9ydHMuc2x1Z2dpc2hWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5zbG93VGVuc2lvbiA9IDUwXG5leHBvcnRzLnNsb3dGcmljdGlvbiA9IDE1XG5leHBvcnRzLnNsb3dWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5zbW9vdGhUZW5zaW9uID0gMTIwXG5leHBvcnRzLnNtb290aEZyaWN0aW9uID0gMjBcbmV4cG9ydHMuc21vb3RoVmVsb2NpdHkgPSAwXG5cbmV4cG9ydHMuZHluYW1pY1RlbnNpb24gPSA2NjNcbmV4cG9ydHMuZHluYW1pY0ZyaWN0aW9uID0gNzZcbmV4cG9ydHMuZHluYW1pY1ZlbG9jaXR5ID0gMThcblxuZXhwb3J0cy5zbmFwcHlUZW5zaW9uID0gNjAwXG5leHBvcnRzLnNuYXBweUZyaWN0aW9uID0gMzBcbmV4cG9ydHMuc25hcHB5VmVsb2NpdHkgPSAwXG5cbmV4cG9ydHMuYmxpdHpUZW5zaW9uID0gNjIwXG5leHBvcnRzLmJsaXR6RnJpY3Rpb24gPSAyMFxuZXhwb3J0cy5ibGl0elZlbG9jaXR5ID0gMTBcblxuZXhwb3J0cy5jdXN0b21UZW5zaW9uID0gNTAwXG5leHBvcnRzLmN1c3RvbUZyaWN0aW9uID0gNTBcbmV4cG9ydHMuY3VzdG9tVmVsb2NpdHkgPSA1MFxuIiwiIyBzdHlsZXNcblxuIyBjdXN0b20gY29sb3Vyc1xuZXhwb3J0cy53aGl0ZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG5leHBvcnRzLndoaXRlODAgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiXG5leHBvcnRzLndoaXRlMjAgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiXG5leHBvcnRzLmJsYWNrNTAgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiXG5leHBvcnRzLmJsYWNrMjAgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiXG5leHBvcnRzLmJsYWNrMTAgPSBcInJnYmEoMCwgMCwgMCwgMC4xKVwiXG5leHBvcnRzLnRyYW5zcGFyZW50ID0gXCJyZ2JhKDAsIDAsIDAsIDApXCJcblxuZXhwb3J0cy5zcXVhcmVTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHQjIFwibGluZS1oZWlnaHRcIjogXCI4MCVcIlxuXHRcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0XCJjb2xvclwiOiBleHBvcnRzLmJsYWNrNTBcblxuZXhwb3J0cy5wcmVzZXRTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHRcImxpbmUtaGVpZ2h0XCI6IFwiMTAwcHhcIlxuXHRcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0XCJjb2xvclwiOiBleHBvcnRzLndoaXRlODBcbiMgXHRcInBhZGRpbmdcIjogXCIxMHB0IDYwcHRcIlxuXHRcImJhY2tncm91bmQtY29sb3JcIjogZXhwb3J0cy5ibGFjazIwXG5cbmV4cG9ydHMuc2xpZGVyU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0IyBcImxpbmUtaGVpZ2h0XCI6IFwiMTAwcHhcIlxuXHQjIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwicGFkZGluZ1wiOiBcIjI0cHggMCAwIDM2cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0IyBcImNvbG9yXCI6IGV4cG9ydHMuYmxhY2s1MFxuXHRcImNvbG9yXCI6IGV4cG9ydHMud2hpdGU1MFxuXG5cbmV4cG9ydHMuaXRlbVN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdCMgXCJsaW5lLWhlaWdodFwiOiBcIjYwMHB4XCJcblx0XCJwYWRkaW5nXCI6IFwiMzVweCA1MHB4IDBcIlxuXHQjIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwidGV4dC10cmFuc2Zvcm1cIjogXCJsb3dlcmNhc2VcIlxuXHRcImNvbG9yXCI6IGV4cG9ydHMuYmxhY2s1MFxuXG5leHBvcnRzLnJlc2V0U3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0XCJsaW5lLWhlaWdodFwiOiBcIjE1MHB4XCJcblx0XCJwYWRkaW5nLWxlZnRcIjogXCIxNyVcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblxuZXhwb3J0cy5zYXZlU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0XCJsaW5lLWhlaWdodFwiOiBcIjE1MHB4XCJcblx0XCJwYWRkaW5nLWxlZnRcIjogXCIzMCVcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblxuZXhwb3J0cy5zYXZlZFN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMjU0cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcbiIsIiMgPEA+XG4jIERhbm55IFdoaXRlXG4jIE5ZQyAvIDIwMTVcbiMgaHR0cHM6Ly9naXRodWIuY29tL3VzdHdvL3VzdHdvLWNvbG91cnNcblxuIyBIb3cgdG8gdXNlIHRoaXM6XG5cbiMgMS4gIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW86XG4jICAgICB1c3R3b0NvbG91cnMgPSByZXF1aXJlIFwidXN0d29Db2xvdXJzXCJcbiMgMi4gIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZS4gRS5nOiB1c3R3b0NvbG91cnMucGlnbGV0XG5cbiMgMy4gIE9wdGlvbmFsOiBhZGQgdGhpcyBsaW5lIHRvIG5vdCBoYXZlIHRvIHVzZSB0aGUgdXN0d29Db2xvdXJzIHByZWZpeDpcbiMgICAgIFV0aWxzLmdsb2JhbExheWVycyB1c3R3b0NvbG91cnNcbiMgICAgIE5vdyB5b3UgY2FuIGp1c3QgcmVmZXJlbmNlIGVhY2ggY29sb3VyIHZlcmJhdGltLiBFLmcuIHBpZ2xldFxuXG5cbiMgUmVncyBjb2xvdXIgcGFsZXR0ZVxuZXhwb3J0cy5waWdsZXQgPSBcInJnYmEoMjM3LCAwLCAxMzAsIDEpXCJcbmV4cG9ydHMucGFzc2lvbiA9IFwicmdiYSgyMzAsIDEyLCA0MSwgMSlcIlxuZXhwb3J0cy5vaFJhID0gXCJyZ2JhKDI1NSwgODUsIDI1LCAxKVwiXG5leHBvcnRzLmhvbmV5ID0gXCJyZ2JhKDI1NSwgMTkxLCAwLCAxKVwiXG5leHBvcnRzLmplZXp6ID0gXCJyZ2JhKDE1MCwgMjA0LCAxNDEsIDEpXCJcbmV4cG9ydHMucG90ID0gXCJyZ2JhKDIwLCAxOTIsIDc3LCAxKVwiXG5leHBvcnRzLm1hcmUgPSBcInJnYmEoMjIsIDIxMywgMjE3LCAxKVwiXG5leHBvcnRzLmJsdSA9IFwicmdiYSgwLCAxNTYsIDI0MywgMSlcIlxuZXhwb3J0cy5uYXZ5ID0gXCJyZ2JhKDIwLCA2MywgMjA0LCAxKVwiXG5leHBvcnRzLnJhaW4gPSBcInJnYmEoOTcsIDIwLCAyMDQsIDEpXCJcblxuIyBTb2Z0IGNvbG91ciBwYWxldHRlXG5leHBvcnRzLnNQaWdsZXQgPSBcInJnYmEoMjU1LCAxNjUsIDE5MCwgMSlcIlxuZXhwb3J0cy5zUGFzc2lvbiA9IFwicmdiYSgyNTAsIDEyNSwgMTIwLCAxKVwiXG5leHBvcnRzLnNPaFJhID0gXCJyZ2JhKDI1NSwgMTk1LCAxNTUsIDEpXCJcbmV4cG9ydHMuc0hvbmV5ID0gXCJyZ2JhKDI0NSwgMjMwLCAxMDAsIDEpXCJcbmV4cG9ydHMuc0plZXp6ID0gXCJyZ2JhKDIwMCwgMjMwLCAxNDUsIDEpXCJcbmV4cG9ydHMuc1BvdCA9IFwicmdiYSgxNjUsIDI1MCwgMTc1LCAxKVwiXG5leHBvcnRzLnNNYXJlID0gXCJyZ2JhKDE2NSwgMjUwLCAyNTAsIDEpXCJcbmV4cG9ydHMuc0JsdSA9IFwicmdiYSgxNjUsIDIyNSwgMjU1LCAxKVwiXG5leHBvcnRzLnNOYXZ5ID0gXCJyZ2JhKDk1LCAxODIsIDI1MCwgMSlcIlxuZXhwb3J0cy5zUmFpbiA9IFwicmdiYSgxOTUsIDEzMCwgMjMwLCAxKVwiXG5cbiMgR3JleXNjYWxlIHBhbGV0dGVcbmV4cG9ydHMubm9uV2hpdGUgPSBcInJnYmEoMjQ4LCAyNDgsIDI0OCwgMSlcIlxuZXhwb3J0cy5ncmV5MDEgPSBcInJnYmEoMjM0LCAyMzQsIDIzNCwgMSlcIlxuZXhwb3J0cy5ncmV5MDIgPSBcInJnYmEoMTkxLCAxOTEsIDE5MSwgMSlcIlxuZXhwb3J0cy5ncmV5MDMgPSBcInJnYmEoMTUwLCAxNTAsIDE1MCwgMSlcIlxuZXhwb3J0cy5ncmV5MDQgPSBcInJnYmEoMTAwLCAxMDAsIDEwMCwgMSlcIlxuZXhwb3J0cy5ub25CbGFjayA9IFwicmdiYSg1MSwgNTEsIDUxLCAxKVwiXG4iXX0=
