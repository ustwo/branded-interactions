# Project Info
Framer.Info =
	title: "Branded Interactions"
	author: "ustwo"
	twitter: "ustwo"
	description: "An ustwo internal prototyping tool that allows clients to build out visual cues for how their brand might play out as a series of screen-based interactions."
	
# Prototype Setup

# Use desktop cursor
document.body.style.cursor = "auto"

# Hide Share Info on top-right
# Framer.Extras.ShareInfo.disable()

ustwo = require "ustwoColours"

# Refits window on resize
window.onresize = ->
	location.reload()
	
left = new Layer
	width: Screen.width/2, height: Screen.height
	backgroundColor: ustwo.pot
	
slider = new SliderComponent
	width: left.width*0.5, height: 8
	parent: left
	midX: left.width/2, midY: left.height/2
	
	knobSize: 20
	
	min: 0
	max: 800
	value: 400
	
slider.knob.draggable.momentum = false


	
right = new PageComponent
	width: Screen.width/2, height: Screen.height
	x: Screen.width/2
	backgroundColor: ustwo.nonBlack
	
	scrollVertical: false
	scrollHorizontal: false
	
right.content.backgroundColor = null
# value = new Layer
# 	html: "#{slider.value}"
# 	backgroundColor: null


# Animation Setup

# tension = 400
tension = slider.value
friction = 20
velocity = 0

customCurve = "spring(#{tension}, #{friction}, #{velocity})"
customDelay = 0
customTime = 2

slider.on "change:value", ->
	print slider.value
	tension = this.value
	customCurve = "spring(#{tension}, #{friction}, #{velocity})"

# Example of how to overwrite
# customCurve = "ease-in"
# customTime = 1
# customCurve = "spring(400, 20, 0)"

# Final output
customAnimation =
	curve: customCurve
	delay: customDelay
	time: customTime






tension = slider.value
# Target Rotate
targetRotate = new Layer
	parent: right.content
	width: 100, height: 100
	midX: right.width/2, midY: right.height/2
	
targetRotate.states =
	end:
		rotation: 90
	animationOptions:
		customAnimation
		
targetRotate.onTap ->
	this.stateCycle()
	print customAnimation

slider.on "change:value", -> 
