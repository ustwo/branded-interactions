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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvRGV2aWNlUGl4ZWxSYXRpby5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvY29sb3VyVHJhbnNpdGlvbi5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3ByZXNldHMuY29mZmVlIiwiL1VzZXJzL2Rhbm55L1Byb2plY3RzL3VzdHdvL2JyYW5kZWQtaW50ZXJhY3Rpb25zL2JyYW5kZWQtaW50ZXJhY3Rpb25zLmZyYW1lci9tb2R1bGVzL3N0eWxlcy5jb2ZmZWUiLCIvVXNlcnMvZGFubnkvUHJvamVjdHMvdXN0d28vYnJhbmRlZC1pbnRlcmFjdGlvbnMvYnJhbmRlZC1pbnRlcmFjdGlvbnMuZnJhbWVyL21vZHVsZXMvdXN0d29Db2xvdXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0lBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ2IsZ0JBQUMsQ0FBQSxHQUFELEdBQU8sU0FBQyxDQUFEO0FBRU4sUUFBQTtJQUFBLGFBQUEsR0FBZ0I7SUFHaEIsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsSUFBMEIsS0FBSyxDQUFDLFNBQU4s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cUIsSUFBQSxLQUFBLENBQU0sd0JBQU47O0FBQ3JCLE9BQU8sQ0FBQyxRQUFSLEdBQXVCLElBQUEsS0FBQSxDQUFNLHFCQUFOIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBieSBKb3JkYW4gUm9iZXJ0IERvYnNvbiAvIEBqb3JkYW5kb2Jzb24gb24gMTQgU2VwdGVtYmVyIDIwMTVcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvXG5cdEBnZXQgPSAodikgLT5cblx0XHQjIFN0b3JlIHRoZSBvcmlnaW5hbCBzbyB3ZSBjYW4gdmVyaWZ5IGlmIGl0J3MgY2hhbmdlZCBhdCBhbGwuXG5cdFx0b3JpZ2luYWxWYWx1ZSA9IHYgXG5cdFx0IyBJbnNpZGUgRnJhbWVyIFN0dWRpbyBpdCByZXBvcnRzIGRldmljZSBQaXhlbCBSYXRpb3MgYmFzZWQgb24gdGhlIGJyb3dzZXIgbm90IHRoZSBhY3R1YWwgZGV2aWNlXG5cdFx0IyBTbyB3ZSBoYXZlIHRvIHVwZGF0ZSB0aGUgdmFsdWUgbWFudWFsbHkuIEkgaGF2ZW4ndCBpbmNsdWRlZCBldmVyeXRoaW5nIGhlcmUgeWV0LlxuXHRcdGlmIFV0aWxzLmlzRnJhbWVyU3R1ZGlvKCkgb3IgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdCMgQ2hlY2sgZm9yIDJ4IGRldmljZXMgXG5cdFx0XHRmb3IgZGV2aWNlXzJ4IGluIFsnaXBob25lLTYtJywgJ2lwaG9uZS01JywgJ2lwYWQtYWlyJywgXCJuZXh1cy05XCIsIFwiYXBwbGV3YXRjaFwiXVxuXHRcdFx0XHR2ID0gdiAqIDIgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzJ4KVxuXHRcdFx0IyBDaGVjayBmb3IgM3ggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zeCBpbiBbJ2lwaG9uZS02cGx1cycsIFwibmV4dXMtNVwiXVxuXHRcdFx0XHR2ID0gdiAqIDMgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzN4KVxuXHRcdCMgUmV0dXJuIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLi4uIG90aGVyd2lzZSBjb250aW51ZVxuXHRcdHJldHVybiB2IHVubGVzcyBvcmlnaW5hbFZhbHVlIGlzIHZcblx0XHQjIFNldCBVbml0cyBiYXNlZCBvbiBEZXZpY2UgUGl4ZWwgUmF0aW8gRXhjZXB0IGRlc2t0b3Bcblx0XHR1bmxlc3MgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdGRldmljZVBpeGVsUmF0aW8gPSBVdGlscy5kZXZpY2VQaXhlbFJhdGlvKClcblx0XHRcdCMgaWYgaXQncyBncmVhdGVyIHRoYW4gMSB0aGVuIHVwZGF0ZSBpdCFcblx0XHRcdHYgPSB2ICogZGV2aWNlUGl4ZWxSYXRpbyBpZiBkZXZpY2VQaXhlbFJhdGlvID4gMVxuXHRcdCMgcmV0dXJuIHRoZSB2YWx1ZSBldmVuIGlmIGl0IGhhc24ndCBjaGFuZ2VkXG5cdFx0cmV0dXJuIHZcblxuIyBDcmVhdGUgYSBzaG9ydGhhbmQgdmVyc2lvbiBvZiBjbGFzcyBhYm92ZSBzbyB5b3UgY2FuIGp1c3QgdHlwZSBcIkRQUlwiXG5jbGFzcyBleHBvcnRzLkRQUiBleHRlbmRzIGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpbyIsIiMgc291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vbmlja21hbmdvcy9mcmFtZXItY29sb3VyLXRyYW5zaXRpb25cblxuZXhwb3J0cy5jb2xvdXJUcmFuc2l0aW9uID0gKGxheWVyLCBjb2xvdXIsIGR1cmF0aW9uLCBmcHMpIC0+XG5cdG9sZENvbG91ciA9IG51bGxcblx0bmV3Q29sb3VyID0gbnVsbFxuXHQjIHNldCBvbGQgYW5kIG5ldyBjb2xvdXJzIGFzIHZhcmlhYmxlc1xuXHRvbGRDb2xvdXIgPSBsYXllci5iYWNrZ3JvdW5kQ29sb3Jcblx0bmV3Q29sb3VyID0gY29sb3VyXG5cdG9sZENvbG91ciA9IG9sZENvbG91ci5zdWJzdHJpbmcoNSwgb2xkQ29sb3VyLmxlbmd0aCAtIDEpXG5cdG9sZENvbG91ciA9IG9sZENvbG91ci5zcGxpdCgnLCAnKVxuXHRuZXdDb2xvdXIgPSBuZXdDb2xvdXIuc3Vic3RyaW5nKDUsIG5ld0NvbG91ci5sZW5ndGggLSAxKVxuXHRuZXdDb2xvdXIgPSBuZXdDb2xvdXIuc3BsaXQoJywgJylcblxuXHRyID0gcGFyc2VGbG9hdChvbGRDb2xvdXJbMF0pXG5cdGcgPSBwYXJzZUZsb2F0KG9sZENvbG91clsxXSlcblx0YiA9IHBhcnNlRmxvYXQob2xkQ29sb3VyWzJdKVxuXHRhID0gcGFyc2VGbG9hdChvbGRDb2xvdXJbM10pXG5cblx0IyBDYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBjb2xvdXJzXG5cdHJEaWZmID0gb2xkQ29sb3VyWzBdIC0gbmV3Q29sb3VyWzBdXG5cdGdEaWZmID0gb2xkQ29sb3VyWzFdIC0gbmV3Q29sb3VyWzFdXG5cdGJEaWZmID0gb2xkQ29sb3VyWzJdIC0gbmV3Q29sb3VyWzJdXG5cdGFEaWZmID0gb2xkQ29sb3VyWzNdIC0gbmV3Q29sb3VyWzNdXG5cblx0IyBTZXRzIGEgZnJhbWUgZGVmYXVsdFxuXHRpZiBmcHMgPT0gdW5kZWZpbmVkXG5cdFx0ZnBzID0gMzBcblxuXHQjIENhbGN1bGF0ZSB0aGUgaW5jcmVtZW50c1xuXHRyRGlmZiA9IHJEaWZmIC8gKGZwcyAqIGR1cmF0aW9uKVxuXHRnRGlmZiA9IGdEaWZmIC8gKGZwcyAqIGR1cmF0aW9uKVxuXHRiRGlmZiA9IGJEaWZmIC8gKGZwcyAqIGR1cmF0aW9uKVxuXHRhRGlmZiA9IGFEaWZmIC8gKGZwcyAqIGR1cmF0aW9uKVxuXHQjIyBwcmludCBcIihyRGlmZiBJbmNyZW1lbnRzKVwiICsgckRpZmYgKyBcIihnRGlmZiBJbmNyZW1lbnRzKVwiICsgZ0RpZmYgKyBcIihiRGlmZiBJbmNyZW1lbnRzKVwiICsgYkRpZmYgKyBcIihhRGlmZiBJbmNyZW1lbnRzKVwiICsgYURpZmZcblx0aSA9IDBcblx0bXlJbnRlcnZhbCA9IG51bGxcblx0c3RhcnRJbnRlcnZhbCA9IC0+XG5cdFx0bXlJbnRlcnZhbCA9IFV0aWxzLmludGVydmFsICgxL2ZwcyksIC0+XG5cdFx0XHRpKytcblx0XHRcdHIgPSByIC0gckRpZmZcblx0XHRcdGcgPSBnIC0gZ0RpZmZcblx0XHRcdGIgPSBiIC0gYkRpZmZcblx0XHRcdGEgPSBhIC0gYURpZmZcblx0XHRcdCMgTnVtYmVycyBoYXZlIHRvIGJlIHdob2xlIHRvIHJlZ2VzdGVyIGFzIGEgcHJvcGVyIFJHQiB2YWx1ZS5cblx0XHRcdCMgUmVuZGVyIGNvbG91ciB1c2luZyB0aGUgY2hhbmdpbmcgdmFyaWFibGUuXG5cdFx0XHRsYXllci5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgnK01hdGgucm91bmQocikrJywgJytNYXRoLnJvdW5kKGcpKycsICcrTWF0aC5yb3VuZChiKSsnLCAnK2ErJyknXG5cdFx0XHRpZiBpID49IChmcHMqZHVyYXRpb24pXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcblx0XHRcdCMjIHByaW50IGkgKyBcIihSKVwiICsgTWF0aC5yb3VuZChyKSArIFwiKEcpXCIgKyBNYXRoLnJvdW5kKGcpICsgXCIoQilcIiArIE1hdGgucm91bmQoYikgKyBcIihBKVwiICsgYVxuXHRzdGFydEludGVydmFsKClcblx0IyMgVE9ET1xuXHQjIyBGaXggc3BsaXQgc3RyaW5nIGlzc3VlLlxuXHQjIyBTZXQgdGhlIHRydWUgY29sb3VyIHZhbHVlIGFmdGVyIGZhZGUgZW5kcy5cblx0IyMgQWJpbGl0eSB0byBzdG9wIG1pZC1mYWRlLlxuXHQjIyBSZW1vdmUgdGhlIG5lZWQgdG8gc2V0IHRoZSBvcmlnaW5hbCBjb2xvdXIgYXMgcmdiYVxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsImV4cG9ydHMuc2x1Z2dpc2hUZW5zaW9uID0gMjBcbmV4cG9ydHMuc2x1Z2dpc2hGcmljdGlvbiA9IDMwXG5leHBvcnRzLnNsdWdnaXNoVmVsb2NpdHkgPSAwXG5cbmV4cG9ydHMuc2xvd1RlbnNpb24gPSA1MFxuZXhwb3J0cy5zbG93RnJpY3Rpb24gPSAxNVxuZXhwb3J0cy5zbG93VmVsb2NpdHkgPSAwXG5cbmV4cG9ydHMuc21vb3RoVGVuc2lvbiA9IDEyMFxuZXhwb3J0cy5zbW9vdGhGcmljdGlvbiA9IDIwXG5leHBvcnRzLnNtb290aFZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLmR5bmFtaWNUZW5zaW9uID0gNjYzXG5leHBvcnRzLmR5bmFtaWNGcmljdGlvbiA9IDc2XG5leHBvcnRzLmR5bmFtaWNWZWxvY2l0eSA9IDE4XG5cbmV4cG9ydHMuc25hcHB5VGVuc2lvbiA9IDYwMFxuZXhwb3J0cy5zbmFwcHlGcmljdGlvbiA9IDMwXG5leHBvcnRzLnNuYXBweVZlbG9jaXR5ID0gMFxuXG5leHBvcnRzLmJsaXR6VGVuc2lvbiA9IDYyMFxuZXhwb3J0cy5ibGl0ekZyaWN0aW9uID0gMjBcbmV4cG9ydHMuYmxpdHpWZWxvY2l0eSA9IDEwXG5cbmV4cG9ydHMuY3VzdG9tVGVuc2lvbiA9IDUwMFxuZXhwb3J0cy5jdXN0b21GcmljdGlvbiA9IDUwXG5leHBvcnRzLmN1c3RvbVZlbG9jaXR5ID0gNTBcbiIsIiMgc3R5bGVzXG5cbiMgY3VzdG9tIGNvbG91cnNcbmV4cG9ydHMud2hpdGUgPSBuZXcgQ29sb3IoXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIpXG5leHBvcnRzLndoaXRlODAgPSBuZXcgQ29sb3IoXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIilcbmV4cG9ydHMud2hpdGUyMCA9IG5ldyBDb2xvcihcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiKVxuZXhwb3J0cy5ibGFjazUwID0gbmV3IENvbG9yKFwicmdiYSgwLCAwLCAwLCAwLjUpXCIpXG5leHBvcnRzLmJsYWNrMjAgPSBuZXcgQ29sb3IoXCJyZ2JhKDAsIDAsIDAsIDAuMilcIilcbmV4cG9ydHMuYmxhY2sxMCA9IG5ldyBDb2xvcihcInJnYmEoMCwgMCwgMCwgMC4xKVwiKVxuZXhwb3J0cy50cmFuc3BhcmVudCA9IG5ldyBDb2xvcihcInJnYmEoMCwgMCwgMCwgMClcIilcblxuZXhwb3J0cy5zcXVhcmVTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHQjIFwibGluZS1oZWlnaHRcIjogXCI4MCVcIlxuXHRcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0XCJjb2xvclwiOiBleHBvcnRzLmJsYWNrNTBcblxuZXhwb3J0cy5wcmVzZXRTdHlsZSA9XG5cdFwiZm9udC1mYW1pbHlcIjogXCJQeCBHcm90ZXNrLCAtYXBwbGUtc3lzdGVtLCAgSGVsdmV0aWNhIE5ldWVcIlxuXHRcImZvbnQtc2l6ZVwiOiBcIjE4cHRcIlxuXHRcImxpbmUtaGVpZ2h0XCI6IFwiMTAwcHhcIlxuXHRcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0XCJjb2xvclwiOiBleHBvcnRzLndoaXRlODBcbiMgXHRcInBhZGRpbmdcIjogXCIxMHB0IDYwcHRcIlxuXHRcImJhY2tncm91bmQtY29sb3JcIjogZXhwb3J0cy5ibGFjazIwXG5cbmV4cG9ydHMuc2xpZGVyU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0IyBcImxpbmUtaGVpZ2h0XCI6IFwiMTAwcHhcIlxuXHQjIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwicGFkZGluZ1wiOiBcIjI0cHggMCAwIDM2cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblx0IyBcImNvbG9yXCI6IGV4cG9ydHMuYmxhY2s1MFxuXHRcImNvbG9yXCI6IGV4cG9ydHMud2hpdGU1MFxuXG5cbmV4cG9ydHMuaXRlbVN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdCMgXCJsaW5lLWhlaWdodFwiOiBcIjYwMHB4XCJcblx0XCJwYWRkaW5nXCI6IFwiMzVweCA1MHB4IDBcIlxuXHQjIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiXG5cdFwidGV4dC10cmFuc2Zvcm1cIjogXCJsb3dlcmNhc2VcIlxuXHRcImNvbG9yXCI6IGV4cG9ydHMuYmxhY2s1MFxuXG5leHBvcnRzLnJlc2V0U3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0XCJsaW5lLWhlaWdodFwiOiBcIjE1MHB4XCJcblx0XCJwYWRkaW5nLWxlZnRcIjogXCIxNyVcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblxuZXhwb3J0cy5zYXZlU3R5bGUgPVxuXHRcImZvbnQtZmFtaWx5XCI6IFwiUHggR3JvdGVzaywgLWFwcGxlLXN5c3RlbSwgIEhlbHZldGljYSBOZXVlXCJcblx0XCJmb250LXNpemVcIjogXCIxOHB0XCJcblx0XCJsaW5lLWhlaWdodFwiOiBcIjE1MHB4XCJcblx0XCJwYWRkaW5nLWxlZnRcIjogXCIzMCVcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcblxuZXhwb3J0cy5zYXZlZFN0eWxlID1cblx0XCJmb250LWZhbWlseVwiOiBcIlB4IEdyb3Rlc2ssIC1hcHBsZS1zeXN0ZW0sICBIZWx2ZXRpY2EgTmV1ZVwiXG5cdFwiZm9udC1zaXplXCI6IFwiMThwdFwiXG5cdFwibGluZS1oZWlnaHRcIjogXCIxNTBweFwiXG5cdFwicGFkZGluZy1sZWZ0XCI6IFwiMjU0cHhcIlxuXHRcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCJcbiIsIiMgPEA+XG4jIERhbm55IFdoaXRlXG4jIHVzdHdvIC8gTllDIC8gMjAxNS0xNlxuIyBodHRwczovL2dpdGh1Yi5jb20vdXN0d28vdXN0d28tY29sb3Vyc1xuXG4jIEhvdyB0byB1c2UgdGhpczpcblxuIyAxLiAgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpbzpcbiMgICAgIHVzdHdvQ29sb3VycyA9IHJlcXVpcmUgXCJ1c3R3b0NvbG91cnNcIlxuIyAyLiAgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLiBFLmc6IHVzdHdvQ29sb3Vycy5waWdsZXRcblxuIyAzLiAgT3B0aW9uYWw6IGFkZCB0aGlzIGxpbmUgdG8gbm90IGhhdmUgdG8gdXNlIHRoZSB1c3R3b0NvbG91cnMgcHJlZml4OlxuIyAgICAgVXRpbHMuZ2xvYmFsTGF5ZXJzIHVzdHdvQ29sb3Vyc1xuIyAgICAgTm93IHlvdSBjYW4ganVzdCByZWZlcmVuY2UgZWFjaCBjb2xvdXIgdmVyYmF0aW0uIEUuZy4gcGlnbGV0XG5cbiMgUmVncyBjb2xvdXIgcGFsZXR0ZVxuZXhwb3J0cy5waWdsZXQgPSBuZXcgQ29sb3IoXCJyZ2JhKDIzNywgMCwgMTMwLCAxKVwiKVxuZXhwb3J0cy5wYXNzaW9uID0gbmV3IENvbG9yKFwicmdiYSgyMzAsIDEyLCA0MSwgMSlcIilcbmV4cG9ydHMub2hSYSA9IG5ldyBDb2xvcihcInJnYmEoMjU1LCA4NSwgMjUsIDEpXCIpXG5leHBvcnRzLmhvbmV5ID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDE5MSwgMCwgMSlcIilcbmV4cG9ydHMuamVlenogPSBuZXcgQ29sb3IoXCJyZ2JhKDE1MCwgMjA0LCAxNDEsIDEpXCIpXG5leHBvcnRzLnBvdCA9IG5ldyBDb2xvcihcInJnYmEoMjAsIDE5MiwgNzcsIDEpXCIpXG5leHBvcnRzLm1hcmUgPSBuZXcgQ29sb3IoXCJyZ2JhKDIyLCAyMTMsIDIxNywgMSlcIilcbmV4cG9ydHMuYmx1ID0gbmV3IENvbG9yKFwicmdiYSgwLCAxNTYsIDI0MywgMSlcIilcbmV4cG9ydHMubmF2eSA9IG5ldyBDb2xvcihcInJnYmEoMjAsIDYzLCAyMDQsIDEpXCIpXG5leHBvcnRzLnJhaW4gPSBuZXcgQ29sb3IoXCJyZ2JhKDk3LCAyMCwgMjA0LCAxKVwiKVxuXG4jIFNvZnQgY29sb3VyIHBhbGV0dGVcbmV4cG9ydHMuc1BpZ2xldCA9IG5ldyBDb2xvcihcInJnYmEoMjU1LCAxNjUsIDE5MCwgMSlcIilcbmV4cG9ydHMuc1Bhc3Npb24gPSBuZXcgQ29sb3IoXCJyZ2JhKDI1MCwgMTI1LCAxMjAsIDEpXCIpXG5leHBvcnRzLnNPaFJhID0gbmV3IENvbG9yKFwicmdiYSgyNTUsIDE5NSwgMTU1LCAxKVwiKVxuZXhwb3J0cy5zSG9uZXkgPSBuZXcgQ29sb3IoXCJyZ2JhKDI0NSwgMjMwLCAxMDAsIDEpXCIpXG5leHBvcnRzLnNKZWV6eiA9IG5ldyBDb2xvcihcInJnYmEoMjAwLCAyMzAsIDE0NSwgMSlcIilcbmV4cG9ydHMuc1BvdCA9IG5ldyBDb2xvcihcInJnYmEoMTY1LCAyNTAsIDE3NSwgMSlcIilcbmV4cG9ydHMuc01hcmUgPSBuZXcgQ29sb3IoXCJyZ2JhKDE2NSwgMjUwLCAyNTAsIDEpXCIpXG5leHBvcnRzLnNCbHUgPSBuZXcgQ29sb3IoXCJyZ2JhKDE2NSwgMjI1LCAyNTUsIDEpXCIpXG5leHBvcnRzLnNOYXZ5ID0gbmV3IENvbG9yKFwicmdiYSg5NSwgMTgyLCAyNTAsIDEpXCIpXG5leHBvcnRzLnNSYWluID0gbmV3IENvbG9yKFwicmdiYSgxOTUsIDEzMCwgMjMwLCAxKVwiKVxuXG4jIEdyZXlzY2FsZSBwYWxldHRlXG5leHBvcnRzLm5vbldoaXRlID0gbmV3IENvbG9yKFwicmdiYSgyNDgsIDI0OCwgMjQ4LCAxKVwiKVxuZXhwb3J0cy5ncmV5MDEgPSBuZXcgQ29sb3IoXCJyZ2JhKDIzNCwgMjM0LCAyMzQsIDEpXCIpXG5leHBvcnRzLmdyZXkwMiA9IG5ldyBDb2xvcihcInJnYmEoMTkxLCAxOTEsIDE5MSwgMSlcIilcbmV4cG9ydHMuZ3JleTAzID0gbmV3IENvbG9yKFwicmdiYSgxNTAsIDE1MCwgMTUwLCAxKVwiKVxuZXhwb3J0cy5ncmV5MDQgPSBuZXcgQ29sb3IoXCJyZ2JhKDEwMCwgMTAwLCAxMDAsIDEpXCIpXG5leHBvcnRzLm5vbkJsYWNrID0gbmV3IENvbG9yKFwicmdiYSg1MSwgNTEsIDUxLCAxKVwiKVxuIl19
