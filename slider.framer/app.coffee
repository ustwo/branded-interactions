# Setup

# Show Hints
Framer.Extras.Hints.disable()

# Use desktop cursor
document.body.style.cursor = "auto"
# Modules
# Firebase module
{Firebase} = require "firebase"
firebase = new Firebase
	projectID: "branded-interactions"
	secret: "h1NUDPhiTKoazHFExBgAzt1FvhVbmcgIrJ5RbhEl"
# Global variables
defaulty =
	tension: 800
	friction: 100
	velocity: 0
	time: null
	delay: null


# Snappy variables
snappy =
	tension: 400
	friction: 20
	velocity: 0
	time: null
	delay: null

# snappyAnimation = 
# 	curve: "spring(#{snappyTension}, #{snappyVelocity}, #{snappyFriction})"
# 	time: defaultTime
# 	delay: defaultDelay

# Slow variables
slowTension = 400
slowFriction = 20
slowVelocity = 0

updateAnimation = (newAnimation) ->
	curve: "spring(#{newAnimation.tension}, #{newAnimation.velocity}, #{newAnimation.friction})"
	time: newAnimation.time
	delay: newAnimation.time

# Default to Snappy
updateAnimation(snappy)

customAnimation = updateAnimation
print customAnimation.curve



left = new Layer
	width: Screen.width/2, height: Screen.height
	
snappyButton = new Layer
	parent: left
	midX: left.width/2, y: 100
	height: 48
	html: "Snappy"
	style:
		"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
		"text-align": "center"
		
right = new Layer
	width: Screen.width/2, height: Screen.height, x: Screen.width/2
	backgroundColor: "rgb(51, 51, 51)"

# Target layers
targetRotate = new Layer
	parent: right
	midX: right.width/2, midY: Screen.height/2 - 150
targetScale = new Layer
	parent: right
	midX: right.width/2, midY: Screen.height/2 + 150

# Slider components setup
tensionSlider = new SliderComponent
	midY: Screen.height/2 + 50
	min: 0, max: 800, value: customAnimation.tension
frictionSlider = new SliderComponent
	midY: Screen.height/2 + 100
	min: 0, max: 100, value: customAnimation.friction
velocitySlider = new SliderComponent
	midY: Screen.height/2 + 150
	min: 0, max: 25, value: customAnimation.velocity
	
allSliders = [tensionSlider, frictionSlider, velocitySlider]

updateCurves = (newCustomAnimation) ->
	customAnimation = newCustomAnimation
	print customAnimation
	

for slider in allSliders
	slider.parent = left
	slider.midX = left.width/2
	slider.knob.draggable.momentum = false
	slider.html = "#{slider.value}"
	slider.style = 
		"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
		"color": "black"
		"padding-top": "10px"
		"font-size": "0.5em"
	
	slider.onValueChange ->
		customAnimation =
			curve: "spring(#{Utils.round(tensionSlider.value)}, #{Utils.round(frictionSlider.value)}, #{Utils.round(velocitySlider.value)})"
		this.html = Utils.round("#{this.value}")
		targetRotate.states.animationOptions =
			customAnimation
		targetScale.states.animationOptions =
			customAnimation
			
		updateCurves(customAnimation)
		
snappyButton.onTap ->
# 	tensionSlider.animateToValue(snappyTension)
	updateCurves(snappyAnimation)




targetRotate.states = 
	end: rotation: 90
	animationOptions:
		curve: "spring(#{Utils.round(tensionSlider.value)}, #{frictionSlider.value}, #{Utils.round(velocitySlider.value)})"

targetRotate.onTap ->
	this.stateCycle()

targetScale.states =
	end: scale: 0.5
	animationOptions:
		curve: "spring(#{Utils.round(tensionSlider.value)}, #{frictionSlider.value}, #{Utils.round(velocitySlider.value)})"

targetScale.onTap ->
	this.stateCycle()

# snappyButton.onTap ->
# 	defaultTension = snappyTension
# 	defaultFriction = snappyFriction
# Save button

saveButton = new Layer
	parent: left
	midX: left.width/2, maxY: Screen.height-50
	height: 48
	html: "Save"
	style:
		"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
		"text-align": "center"
		
# saveCurve = new Layer
# 	parent: left
# 	midX: left.width/2, maxY: Screen.height
# 	backgroundColor: null
# 	html: customAnimation.curve

saveButton.onTap ->
	firebase.put("/sliderValue", customAnimation)
# 	saveCurve.html = customAnimation.curve


