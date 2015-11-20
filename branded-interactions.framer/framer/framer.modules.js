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
  "line-height": "600px",
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
  "padding-left": "116px",
  "text-transform": "uppercase"
};

exports.saveStyle = {
  "font-family": "Px Grotesk, -apple-system,  Helvetica Neue",
  "font-size": "18pt",
  "line-height": "150px",
  "padding-left": "218px",
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvRGV2aWNlUGl4ZWxSYXRpby5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvY29sb3VyVHJhbnNpdGlvbi5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3ByZXNldHMuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3N0eWxlcy5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvdXN0d29Db2xvdXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ2IsZ0JBQUMsQ0FBQSxHQUFELEdBQU8sU0FBQyxDQUFEO0FBRU4sUUFBQTtJQUFBLGFBQUEsR0FBZ0I7SUFHaEIsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsSUFBMEIsS0FBSyxDQUFDLFNBQU4sQ0FBQSxDQUE3QjtBQUVDO0FBQUEsV0FBQSxxQ0FBQTs7UUFD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QUNoQixPQUFPLENBQUMsSUFBUixHQUFlOztBQUNmLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUNoQixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFHaEIsT0FBTyxDQUFDLFFBQVIsR0FBbUI7O0FBQ25CLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsTUFBUixHQUFpQjs7QUFDakIsT0FBTyxDQUFDLE1BQVIsR0FBaUI7O0FBQ2pCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUNqQixPQUFPLENBQUMsUUFBUixHQUFtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgYnkgSm9yZGFuIFJvYmVydCBEb2Jzb24gLyBAam9yZGFuZG9ic29uIG9uIDE0IFNlcHRlbWJlciAyMDE1XG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpb1xuXHRAZ2V0ID0gKHYpIC0+XG5cdFx0IyBTdG9yZSB0aGUgb3JpZ2luYWwgc28gd2UgY2FuIHZlcmlmeSBpZiBpdCdzIGNoYW5nZWQgYXQgYWxsLlxuXHRcdG9yaWdpbmFsVmFsdWUgPSB2IFxuXHRcdCMgSW5zaWRlIEZyYW1lciBTdHVkaW8gaXQgcmVwb3J0cyBkZXZpY2UgUGl4ZWwgUmF0aW9zIGJhc2VkIG9uIHRoZSBicm93c2VyIG5vdCB0aGUgYWN0dWFsIGRldmljZVxuXHRcdCMgU28gd2UgaGF2ZSB0byB1cGRhdGUgdGhlIHZhbHVlIG1hbnVhbGx5LiBJIGhhdmVuJ3QgaW5jbHVkZWQgZXZlcnl0aGluZyBoZXJlIHlldC5cblx0XHRpZiBVdGlscy5pc0ZyYW1lclN0dWRpbygpIG9yIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHQjIENoZWNrIGZvciAyeCBkZXZpY2VzIFxuXHRcdFx0Zm9yIGRldmljZV8yeCBpbiBbJ2lwaG9uZS02LScsICdpcGhvbmUtNScsICdpcGFkLWFpcicsIFwibmV4dXMtOVwiLCBcImFwcGxld2F0Y2hcIl1cblx0XHRcdFx0diA9IHYgKiAyIGlmIF8uc3RhcnRzV2l0aChGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUsIGRldmljZV8yeClcblx0XHRcdCMgQ2hlY2sgZm9yIDN4IGRldmljZXNcblx0XHRcdGZvciBkZXZpY2VfM3ggaW4gWydpcGhvbmUtNnBsdXMnLCBcIm5leHVzLTVcIl1cblx0XHRcdFx0diA9IHYgKiAzIGlmIF8uc3RhcnRzV2l0aChGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUsIGRldmljZV8zeClcblx0XHQjIFJldHVybiBpZiB0aGUgdmFsdWUgY2hhbmdlZC4uLiBvdGhlcndpc2UgY29udGludWVcblx0XHRyZXR1cm4gdiB1bmxlc3Mgb3JpZ2luYWxWYWx1ZSBpcyB2XG5cdFx0IyBTZXQgVW5pdHMgYmFzZWQgb24gRGV2aWNlIFBpeGVsIFJhdGlvIEV4Y2VwdCBkZXNrdG9wXG5cdFx0dW5sZXNzIFV0aWxzLmlzRGVza3RvcCgpXG5cdFx0XHRkZXZpY2VQaXhlbFJhdGlvID0gVXRpbHMuZGV2aWNlUGl4ZWxSYXRpbygpXG5cdFx0XHQjIGlmIGl0J3MgZ3JlYXRlciB0aGFuIDEgdGhlbiB1cGRhdGUgaXQhXG5cdFx0XHR2ID0gdiAqIGRldmljZVBpeGVsUmF0aW8gaWYgZGV2aWNlUGl4ZWxSYXRpbyA+IDFcblx0XHQjIHJldHVybiB0aGUgdmFsdWUgZXZlbiBpZiBpdCBoYXNuJ3QgY2hhbmdlZFxuXHRcdHJldHVybiB2XG5cbiMgQ3JlYXRlIGEgc2hvcnRoYW5kIHZlcnNpb24gb2YgY2xhc3MgYWJvdmUgc28geW91IGNhbiBqdXN0IHR5cGUgXCJEUFJcIlxuY2xhc3MgZXhwb3J0cy5EUFIgZXh0ZW5kcyBleHBvcnRzLkRldmljZVBpeGVsUmF0aW8iLCIjIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL25pY2ttYW5nb3MvZnJhbWVyLWNvbG91ci10cmFuc2l0aW9uXG5cbmV4cG9ydHMuY29sb3VyVHJhbnNpdGlvbiA9IChsYXllciwgY29sb3VyLCBkdXJhdGlvbiwgZnBzKSAtPlxuXHRvbGRDb2xvdXIgPSBudWxsXG5cdG5ld0NvbG91ciA9IG51bGxcblx0IyBzZXQgb2xkIGFuZCBuZXcgY29sb3VycyBhcyB2YXJpYWJsZXNcblx0b2xkQ29sb3VyID0gbGF5ZXIuYmFja2dyb3VuZENvbG9yXG5cdG5ld0NvbG91ciA9IGNvbG91clxuXHRvbGRDb2xvdXIgPSBvbGRDb2xvdXIuc3Vic3RyaW5nKDUsIG9sZENvbG91ci5sZW5ndGggLSAxKVxuXHRvbGRDb2xvdXIgPSBvbGRDb2xvdXIuc3BsaXQoJywgJylcblx0bmV3Q29sb3VyID0gbmV3Q29sb3VyLnN1YnN0cmluZyg1LCBuZXdDb2xvdXIubGVuZ3RoIC0gMSlcblx0bmV3Q29sb3VyID0gbmV3Q29sb3VyLnNwbGl0KCcsICcpXG5cblx0ciA9IHBhcnNlRmxvYXQob2xkQ29sb3VyWzBdKVxuXHRnID0gcGFyc2VGbG9hdChvbGRDb2xvdXJbMV0pXG5cdGIgPSBwYXJzZUZsb2F0KG9sZENvbG91clsyXSlcblx0YSA9IHBhcnNlRmxvYXQob2xkQ29sb3VyWzNdKVxuXG5cdCMgQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gY29sb3Vyc1xuXHRyRGlmZiA9IG9sZENvbG91clswXSAtIG5ld0NvbG91clswXVxuXHRnRGlmZiA9IG9sZENvbG91clsxXSAtIG5ld0NvbG91clsxXVxuXHRiRGlmZiA9IG9sZENvbG91clsyXSAtIG5ld0NvbG91clsyXVxuXHRhRGlmZiA9IG9sZENvbG91clszXSAtIG5ld0NvbG91clszXVxuXG5cdCMgU2V0cyBhIGZyYW1lIGRlZmF1bHRcblx0aWYgZnBzID09IHVuZGVmaW5lZFxuXHRcdGZwcyA9IDMwXG5cblx0IyBDYWxjdWxhdGUgdGhlIGluY3JlbWVudHNcblx0ckRpZmYgPSByRGlmZiAvIChmcHMgKiBkdXJhdGlvbilcblx0Z0RpZmYgPSBnRGlmZiAvIChmcHMgKiBkdXJhdGlvbilcblx0YkRpZmYgPSBiRGlmZiAvIChmcHMgKiBkdXJhdGlvbilcblx0YURpZmYgPSBhRGlmZiAvIChmcHMgKiBkdXJhdGlvbilcblx0IyMgcHJpbnQgXCIockRpZmYgSW5jcmVtZW50cylcIiArIHJEaWZmICsgXCIoZ0RpZmYgSW5jcmVtZW50cylcIiArIGdEaWZmICsgXCIoYkRpZmYgSW5jcmVtZW50cylcIiArIGJEaWZmICsgXCIoYURpZmYgSW5jcmVtZW50cylcIiArIGFEaWZmXG5cdGkgPSAwXG5cdG15SW50ZXJ2YWwgPSBudWxsXG5cdHN0YXJ0SW50ZXJ2YWwgPSAtPlxuXHRcdG15SW50ZXJ2YWwgPSBVdGlscy5pbnRlcnZhbCAoMS9mcHMpLCAtPlxuXHRcdFx0aSsrXG5cdFx0XHRyID0gciAtIHJEaWZmXG5cdFx0XHRnID0gZyAtIGdEaWZmXG5cdFx0XHRiID0gYiAtIGJEaWZmXG5cdFx0XHRhID0gYSAtIGFEaWZmXG5cdFx0XHQjIE51bWJlcnMgaGF2ZSB0byBiZSB3aG9sZSB0byByZWdlc3RlciBhcyBhIHByb3BlciBSR0IgdmFsdWUuXG5cdFx0XHQjIFJlbmRlciBjb2xvdXIgdXNpbmcgdGhlIGNoYW5naW5nIHZhcmlhYmxlLlxuXHRcdFx0bGF5ZXIuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoJytNYXRoLnJvdW5kKHIpKycsICcrTWF0aC5yb3VuZChnKSsnLCAnK01hdGgucm91bmQoYikrJywgJythKycpJ1xuXHRcdFx0aWYgaSA+PSAoZnBzKmR1cmF0aW9uKVxuXHRcdFx0XHRjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG5cdFx0XHQjIyBwcmludCBpICsgXCIoUilcIiArIE1hdGgucm91bmQocikgKyBcIihHKVwiICsgTWF0aC5yb3VuZChnKSArIFwiKEIpXCIgKyBNYXRoLnJvdW5kKGIpICsgXCIoQSlcIiArIGFcblx0c3RhcnRJbnRlcnZhbCgpXG5cdCMjIFRPRE9cblx0IyMgRml4IHNwbGl0IHN0cmluZyBpc3N1ZS5cblx0IyMgU2V0IHRoZSB0cnVlIGNvbG91ciB2YWx1ZSBhZnRlciBmYWRlIGVuZHMuXG5cdCMjIEFiaWxpdHkgdG8gc3RvcCBtaWQtZmFkZS5cblx0IyMgUmVtb3ZlIHRoZSBuZWVkIHRvIHNldCB0aGUgb3JpZ2luYWwgY29sb3VyIGFzIHJnYmFcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLnNsdWdnaXNoVGVuc2lvbiA9IDIwXG5leHBvcnRzLnNsdWdnaXNoRnJpY3Rpb24gPSAzMFxuZXhwb3J0cy5zbHVnZ2lzaFZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLnNsb3dUZW5zaW9uID0gNTBcbmV4cG9ydHMuc2xvd0ZyaWN0aW9uID0gMTVcbmV4cG9ydHMuc2xvd1ZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLnNtb290aFRlbnNpb24gPSAxMjBcbmV4cG9ydHMuc21vb3RoRnJpY3Rpb24gPSAyMFxuZXhwb3J0cy5zbW9vdGhWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5keW5hbWljVGVuc2lvbiA9IDY2M1xuZXhwb3J0cy5keW5hbWljRnJpY3Rpb24gPSA3NlxuZXhwb3J0cy5keW5hbWljVmVsb2NpdHkgPSAxOFxuXG5leHBvcnRzLnNuYXBweVRlbnNpb24gPSA2MDBcbmV4cG9ydHMuc25hcHB5RnJpY3Rpb24gPSAzMFxuZXhwb3J0cy5zbmFwcHlWZWxvY2l0eSA9IDBcblxuZXhwb3J0cy5ibGl0elRlbnNpb24gPSA2MjBcbmV4cG9ydHMuYmxpdHpGcmljdGlvbiA9IDIwXG5leHBvcnRzLmJsaXR6VmVsb2NpdHkgPSAxMFxuXG5leHBvcnRzLmN1c3RvbVRlbnNpb24gPSA1MDBcbmV4cG9ydHMuY3VzdG9tRnJpY3Rpb24gPSA1MFxuZXhwb3J0cy5jdXN0b21WZWxvY2l0eSA9IDUwXG4iLCIjIHN0eWxlc1xuXG4jIGN1c3RvbSBjb2xvdXJzXG5leHBvcnRzLndoaXRlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCJcbmV4cG9ydHMud2hpdGU4MCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCJcbmV4cG9ydHMud2hpdGUyMCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXCJcbmV4cG9ydHMuYmxhY2s1MCA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCJcbmV4cG9ydHMuYmxhY2syMCA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCJcbmV4cG9ydHMuYmxhY2sxMCA9IFwicmdiYSgwLCAwLCAwLCAwLjEpXCJcbmV4cG9ydHMudHJhbnNwYXJlbnQgPSBcInJnYmEoMCwgMCwgMCwgMClcIlxuXG5leHBvcnRzLnNxdWFyZVN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCI2MDBweFwiXG5cdFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwidGV4dC10cmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIlxuXHRcImNvbG9yXCI6IGV4cG9ydHMuYmxhY2s1MFxuXG5leHBvcnRzLnByZXNldFN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxMDBweFwiXG5cdFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwidGV4dC10cmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIlxuXHRcImNvbG9yXCI6IGV4cG9ydHMud2hpdGU4MFxuIyBcdFwicGFkZGluZ1wiOiBcIjEwcHQgNjBwdFwiXG5cdFwiYmFja2dyb3VuZC1jb2xvclwiOiBleHBvcnRzLmJsYWNrMjBcblxuZXhwb3J0cy5zbGlkZXJTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHQjIFwibGluZS1oZWlnaHRcIjogXCIxMDBweFwiXG5cdCMgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcblx0XCJwYWRkaW5nXCI6IFwiMjRweCAwIDAgMzZweFwiXG5cdFwidGV4dC10cmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIlxuXHQjIFwiY29sb3JcIjogZXhwb3J0cy5ibGFjazUwXG5cdFwiY29sb3JcIjogZXhwb3J0cy53aGl0ZTUwXG5cblxuZXhwb3J0cy5pdGVtU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0IyBcImxpbmUtaGVpZ2h0XCI6IFwiNjAwcHhcIlxuXHRcInBhZGRpbmdcIjogXCIzNXB4IDUwcHggMFwiXG5cdCMgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcImxvd2VyY2FzZVwiXG5cdFwiY29sb3JcIjogZXhwb3J0cy5ibGFjazUwXG5cbmV4cG9ydHMucmVzZXRTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHRcImxpbmUtaGVpZ2h0XCI6IFwiMTUwcHhcIlxuXHRcInBhZGRpbmctbGVmdFwiOiBcIjExNnB4XCJcblx0XCJ0ZXh0LXRyYW5zZm9ybVwiOiBcInVwcGVyY2FzZVwiXG5cbmV4cG9ydHMuc2F2ZVN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMjE4cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblxuZXhwb3J0cy5zYXZlZFN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMjU0cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcbiIsIiMgPEA+XG4jIERhbm55IFdoaXRlXG4jIE5ZQyAvIDIwMTVcbiMgaHR0cHM6Ly9naXRodWIuY29tL3VzdHdvL3VzdHdvLWNvbG91cnNcblxuIyBIb3cgdG8gdXNlIHRoaXM6XG5cbiMgMS4gIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW86XG4jICAgICB1c3R3b0NvbG91cnMgPSByZXF1aXJlIFwidXN0d29Db2xvdXJzXCJcbiMgMi4gIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZS4gRS5nOiB1c3R3b0NvbG91cnMucGlnbGV0XG5cbiMgMy4gIE9wdGlvbmFsOiBhZGQgdGhpcyBsaW5lIHRvIG5vdCBoYXZlIHRvIHVzZSB0aGUgdXN0d29Db2xvdXJzIHByZWZpeDpcbiMgICAgIFV0aWxzLmdsb2JhbExheWVycyB1c3R3b0NvbG91cnNcbiMgICAgIE5vdyB5b3UgY2FuIGp1c3QgcmVmZXJlbmNlIGVhY2ggY29sb3VyIHZlcmJhdGltLiBFLmcuIHBpZ2xldFxuXG5cbiMgUmVncyBjb2xvdXIgcGFsZXR0ZVxuZXhwb3J0cy5waWdsZXQgPSBcInJnYmEoMjM3LCAwLCAxMzAsIDEpXCJcbmV4cG9ydHMucGFzc2lvbiA9IFwicmdiYSgyMzAsIDEyLCA0MSwgMSlcIlxuZXhwb3J0cy5vaFJhID0gXCJyZ2JhKDI1NSwgODUsIDI1LCAxKVwiXG5leHBvcnRzLmhvbmV5ID0gXCJyZ2JhKDI1NSwgMTkxLCAwLCAxKVwiXG5leHBvcnRzLmplZXp6ID0gXCJyZ2JhKDE1MCwgMjA0LCAxNDEsIDEpXCJcbmV4cG9ydHMucG90ID0gXCJyZ2JhKDIwLCAxOTIsIDc3LCAxKVwiXG5leHBvcnRzLm1hcmUgPSBcInJnYmEoMjIsIDIxMywgMjE3LCAxKVwiXG5leHBvcnRzLmJsdSA9IFwicmdiYSgwLCAxNTYsIDI0MywgMSlcIlxuZXhwb3J0cy5uYXZ5ID0gXCJyZ2JhKDIwLCA2MywgMjA0LCAxKVwiXG5leHBvcnRzLnJhaW4gPSBcInJnYmEoOTcsIDIwLCAyMDQsIDEpXCJcblxuIyBTb2Z0IGNvbG91ciBwYWxldHRlXG5leHBvcnRzLnNQaWdsZXQgPSBcInJnYmEoMjU1LCAxNjUsIDE5MCwgMSlcIlxuZXhwb3J0cy5zUGFzc2lvbiA9IFwicmdiYSgyNTAsIDEyNSwgMTIwLCAxKVwiXG5leHBvcnRzLnNPaFJhID0gXCJyZ2JhKDI1NSwgMTk1LCAxNTUsIDEpXCJcbmV4cG9ydHMuc0hvbmV5ID0gXCJyZ2JhKDI0NSwgMjMwLCAxMDAsIDEpXCJcbmV4cG9ydHMuc0plZXp6ID0gXCJyZ2JhKDIwMCwgMjMwLCAxNDUsIDEpXCJcbmV4cG9ydHMuc1BvdCA9IFwicmdiYSgxNjUsIDI1MCwgMTc1LCAxKVwiXG5leHBvcnRzLnNNYXJlID0gXCJyZ2JhKDE2NSwgMjUwLCAyNTAsIDEpXCJcbmV4cG9ydHMuc0JsdSA9IFwicmdiYSgxNjUsIDIyNSwgMjU1LCAxKVwiXG5leHBvcnRzLnNOYXZ5ID0gXCJyZ2JhKDk1LCAxODIsIDI1MCwgMSlcIlxuZXhwb3J0cy5zUmFpbiA9IFwicmdiYSgxOTUsIDEzMCwgMjMwLCAxKVwiXG5cbiMgR3JleXNjYWxlIHBhbGV0dGVcbmV4cG9ydHMubm9uV2hpdGUgPSBcInJnYmEoMjQ4LCAyNDgsIDI0OCwgMSlcIlxuZXhwb3J0cy5ncmV5MDEgPSBcInJnYmEoMjM0LCAyMzQsIDIzNCwgMSlcIlxuZXhwb3J0cy5ncmV5MDIgPSBcInJnYmEoMTkxLCAxOTEsIDE5MSwgMSlcIlxuZXhwb3J0cy5ncmV5MDMgPSBcInJnYmEoMTUwLCAxNTAsIDE1MCwgMSlcIlxuZXhwb3J0cy5ncmV5MDQgPSBcInJnYmEoMTAwLCAxMDAsIDEwMCwgMSlcIlxuZXhwb3J0cy5ub25CbGFjayA9IFwicmdiYSg1MSwgNTEsIDUxLCAxKVwiXG4iXX0=
