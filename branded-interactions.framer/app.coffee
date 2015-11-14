# <@>
# Danny White
# NYC / 2015
# https://github.com/ustwo/branded-interactions

# ------------------------------------------------------
# overall setup
# ------------------------------------------------------
# document.body.style.cursor = "auto"

# modules

# bg colour switcher, and associated variables
module = require "colourTransition"
bgSpeed = 0.2
bgFR = 60 # frame rate

# specific ustwo colours
ustwoColours = require "ustwoColours"
# general text styles, colours
styles = require "styles"
# specific animation presets
presets = require "presets"

# make relevant modules global
global = [ustwoColours, styles, presets]
for i in global
	Utils.globalLayers i

# map colours to presets
sluggishFill = piglet
slowFill = honey
smoothFill = ohRa
dynamicFill = pot
snappyFill = blu
blitzFill = mare

# default to an independent speed
Framer.Defaults.Animation =
	time: 0.3
	curve: "ease"

# bg layer
bg = new BackgroundLayer
	backgroundColor: nonBlack

# ------------------------------------------------------
# left side
# ------------------------------------------------------
left = new Layer
	width: Screen.width/2, height: Screen.height
	backgroundColor: pot # match first present colour

# -----------------------------
# left side: slider setup
# -----------------------------
# slider sizing to reference later
sliderWidth = left.width/2
sliderSize =
	width: sliderWidth
	height: 24
sliderGutter = sliderSize.height * 5

# all sliders
sliderCanvas = new Layer
	width: sliderWidth
	height: (sliderSize.height * 3) + (sliderGutter * 2)
	midX: left.width/2, midY: left.height/2
	backgroundColor: null
	superLayer: left
	clip: false

# padded box behind
sliderHolder = new Layer
	width: sliderCanvas.width * 1.4
	height: sliderCanvas.height * 1.8
	midX: sliderCanvas.midX, midY: sliderCanvas.midY
	borderRadius: 8
	backgroundColor: white20
	superLayer: left
sliderCanvas.bringToFront()


# -----------------------------
# left side: sliders: spring
# -----------------------------
# array that will store our right page layers
allSliders = []

# loop to make a few sliders
for i in [0..2]
	slider = new SliderComponent
		y: i * (sliderSize.height + sliderGutter)
		width: sliderWidth, height: sliderSize.height
		backgroundColor: white20
		knobSize: 48
		min: 0
# 		max: 1, value: 0.5
		pixelAlign: true
		superLayer: sliderCanvas
		style: presetStyle
	slider.knob.draggable.momentum = false
	slider.fill.backgroundColor = white80
	allSliders.push(slider)

# rename for easy access
# "backwards" ordering for less headfuck for user
# see Noah Levin spring diagram
velocity = allSliders[0]
velocity.html = "velocity (wind-up)"
friction = allSliders[1]
friction.html = "friction (weight)"
tension = allSliders[2]
tension.html = "tension (bounciness)"
# adjust maximum values for each,
# make value exactly half as a generic starting point
tension.max = 1000
tension.value = 500

friction.max = 100
friction.value = 50

velocity.max = 100
velocity.value = 50

# -----------------------------
# slider logic: spring
# default
springCurve = "spring(#{tension.value}, #{friction.value}, #{velocity.value})"

# custom: dynamic preset (launch preset)
tension.value = dynamicTension
friction.value = dynamicFriction
velocity.value = dynamicVelocity
springCurve = "spring(#{tension.value}, #{friction.value}, #{velocity.value})"

# -----------------------------
# left side: presets (pages)
# -----------------------------
presets = new PageComponent
	midX: sliderHolder.midX, maxY: sliderHolder.y - 50
	width: sliderHolder.width
	height: 100
	scrollVertical: false
	superLayer: left

allPresets = []
# Create layers in a for-loop
for i in [0...6]
	preset = new Layer
		superLayer: presets.content
		width: 150
		height: 100
		clip: false
		x: 170 * i
		style: presetStyle
		borderRadius: 6
		opacity: 0.3
	allPresets.push(preset)

allPresets[0].html = "sluggish"
allPresets[0].name = "sluggish"
sluggish = allPresets[0]
allPresets[1].html = "slow"
allPresets[1].name = "slow"
slow = allPresets[1]
allPresets[2].html = "smooth"
allPresets[2].name = "smooth"
smooth = allPresets[2]
allPresets[3].html = "dynamic"
allPresets[3].name = "dynamic"
dynamic = allPresets[3]
allPresets[4].html = "snappy"
allPresets[4].name = "snappy"
snappy = allPresets[4]
allPresets[5].html = "blitz"
allPresets[5].name = "blitz"
blitz = allPresets[5]

# staging
presets.snapToPage(allPresets[3], false)
presets.currentPage.opacity = 1


# ------------------------------------------------------
# right side: pages, indicators, save
# ------------------------------------------------------
right = new PageComponent
	x: Screen.width/2
	width: Screen.width/2, height: Screen.height
	scrollVertical: false
	backgroundColor: nonBlack
	velocityThreshold: 2

# array that will store our right page layers
rightPages = []

# array that will store our right indicator layers
rightIndicators = []
rightIndicatorsAmount = 3
rightIndicatorsSize = 12

# generate page and indicator layers
for i in [0...rightIndicatorsAmount]
	rightPage = new Layer
		width: right.width, height: right.height
		x: right.width * i, superLayer: right.content
		backgroundColor: null

	# store right page layers in an array
	rightPages.push(rightPage)

	indicator = new Layer
		backgroundColor: white
		width: rightIndicatorsSize, height: rightIndicatorsSize
		x: 28 * i, y: right.maxY - 100
		borderRadius: "50%", opacity: 0.2
		superLayer: right

	# Stay centered regardless of the amount of cards
	indicator.x += (right.width / 2) - (rightIndicatorsSize * rightIndicatorsAmount)

	# States
	indicator.states.add active: opacity: 0.8, scale:1.2
	indicator.states.animationOptions = time: 0.5

	# Store indicators in our array
	rightIndicators.push(indicator)

# set indicator for our current right page
rightCurrent = right.horizontalPageIndex(right.currentPage)
rightIndicators[rightCurrent].states.switch("active")

# rename for easy access
rightOne = rightPages[0]
rightTwo = rightPages[1]
rightThree = rightPages[2]

# -----------------------------
# right side: basic interactions
# -----------------------------
squareSize = right.width/3
boundsSize =
	width: squareSize
	height: squareSize
gutter = boundsSize.width*0.2

squareCanvas = new Layer
	midX: rightOne.width/2, midY: rightOne.height/2
	width: (boundsSize.width * 2) + (gutter * 1)
	height: (boundsSize.height * 2) + (gutter * 1)
	backgroundColor: null
	superLayer: rightOne
	clip: false

# square interactions variables
interactions = []
rows = 2
cols = 2

# make the grid of squares
[0..rows-1].map (a) ->
	[0..cols-1].map (b) ->
		i = new Layer
			size: boundsSize
			x: a * (boundsSize.width + gutter)
			y: b * (boundsSize.height + gutter)
			backgroundColor: white20
			borderRadius: 12
			clip: false
			style: squareStyle
			superLayer: squareCanvas
		# push to array set up above
		interactions.push(i)

# rename these layers to make them handy
scale = interactions[0]
scale.name = "scale"
scale.html = scale.name

rotate = interactions[1]
rotate.name = "rotate"
rotate.html = rotate.name

position = interactions[2]
position.name = "position"
position.html = position.name

opacity = interactions[3]
opacity.name = "opacity"
opacity.html = opacity.name

interactionsTargets = []

# -----------------------------
# scale
scaleTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: white80
	borderRadius: 24
	superLayer: scale
interactionsTargets.push(scaleTarget)

scaleTarget.states.add
	last: scale: 0.95, borderRadius: 12

scale.on Events.Click, ->
	scaleTarget.states.next()


# -----------------------------
# rotate
rotateTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: white80
	borderRadius: 24
	superLayer: rotate
interactionsTargets.push(rotateTarget)

rotateTarget.states.add
	last: rotation: 90, borderRadius: 12

rotate.on Events.Click, ->
	rotateTarget.states.next()

# -----------------------------
# position
positionTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: white80
	borderRadius: 24
	superLayer: position
interactionsTargets.push(positionTarget)

positionTarget.states.add
	first: x: positionTarget.x - boundsSize.width/4
	last: x: positionTarget.x + boundsSize.width/4

position.on Events.Click, ->
	positionTarget.states.next()

# -----------------------------
# opacity
opacityTargetTop = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: null
	borderWidth: 5
	borderColor: white80
	borderRadius: 24
	superLayer: opacity

opacityTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: white80
	borderRadius: 24
	superLayer: opacity
interactionsTargets.push(opacityTarget)

opacityTarget.states.add
	last: opacity: 0

opacity.on Events.Click, ->
	opacityTarget.states.next()

# -----------------------------
# right side: iphone #1
# -----------------------------
iphone = new Layer
	midX: rightOne.width/2, midY: rightOne.height/2
	width: 994, height: 2028
	scale: 0.5, opacity: 0.2
	image: "images/iphone.png"
	superLayer: rightTwo

iphoneTarget = new Layer
	width: boundsSize.width, height: boundsSize.height/2
	midX: rightOne.width/2, midY: rightOne.height/2
	backgroundColor: white80
	borderRadius: 6
	superLayer: rightTwo
	originX: 0.5
interactionsTargets.push(iphoneTarget)

iphoneTarget.states.add
	# opacity & position
	first:
		opacity: 0.6, maxY: 1000, width: (boundsSize.width + 100), midX: (rightOne.width/2)
	second: rotation: 90
	last: scale: 2

iphoneTarget.on Events.Click, ->
	iphoneTarget.states.next()

# ------------------------------------------------------
# overall functions, settings
# ------------------------------------------------------
# make each in interactionTargets adhere to springCurve
for i in interactionsTargets
	i.states.animationOptions = curve: springCurve

# function for reseting all interactive states
# on page scrolls etc
resetStates = ->
	for i in interactionsTargets
		i.states.switch("default")
		
# function for pushing updates in springCurve (updateCurve function)
pushStates = ->
	for i in interactionsTargets
		# push (assuming) above changes to states
		i.states.animationOptions = curve: springCurve
		# go to next state
		i.states.next()
		
# funciton for updating springCurve
updateCurve = (presetFill, presetTension, presetFriction, presetVelocity) ->
	module.colourTransition(left, presetFill, bgSpeed, bgFR)
	# seems like it doesn't work with animation only
	tension.animate properties: value: presetTension
	friction.animate properties: value: presetFriction
	velocity.animate properties: value: presetVelocity
	tension.value = presetTension
	friction.value = presetFriction
	velocity.value = presetVelocity
	springCurve = "spring(#{tension.value}, #{friction.value}, #{velocity.value})"
	# push these changes to the states
	pushStates()
		
# updateCurve2 = (preset) ->
	

# ------------------------------------------------------
# left side: sliders changes, presets changes
# ------------------------------------------------------
# update page on click
for i in allPresets
	i.on Events.Click, ->
		presets.snapToPage(this)
		
# update springCurve when sliders are changed
for i in allSliders
	i.on "change:value", ->
		if this is tension then tension.value = Math.round(tension.value)
		if this is friction then friction.value = Math.round(friction.value)
		if this is velocity then velocity.value = Math.round(velocity.value)

		springCurve = "spring(#{tension.value}, #{friction.value}, #{velocity.value})"
# 
	i.knob.on Events.DragEnd, ->
		pushStates()

presets.on "change:currentPage", ->
	# animate out previousPage
	presets.previousPage.animate
		properties:
			opacity: 0.3
		time: 0.4
	# animate in new currentPage
	presets.currentPage.animate
		properties:
			opacity: 1
		time: 0.4
		
	if presets.currentPage is sluggish
		updateCurve(sluggishFill, sluggishTension, sluggishFriction, sluggishVelocity)

	else if presets.currentPage is slow
		updateCurve(slowFill, slowTension, slowFriction, slowVelocity)

	else if presets.currentPage is smooth
		updateCurve(smoothFill, smoothTension, smoothFriction, smoothVelocity)

	else if presets.currentPage is dynamic
		updateCurve(dynamicFill, dynamicTension, dynamicFriction, dynamicVelocity)

	else if presets.currentPage is snappy
		updateCurve(snappyFill, snappyTension, snappyFriction, snappyVelocity)

	else if presets.currentPage is blitz
		updateCurve(blitzFill, blitzTension, blitzFriction, blitzVelocity)
	
	else # edge-cases, default speed
		updateCurve(dynamicFill, dynamicTension, dynamicFriction, dynamicVelocity)

# ------------------------------------------------------
# right side: changes
# ------------------------------------------------------
right.on "change:currentPage", ->
	# Update indicators: remove old
	indicator.states.switch("default") for indicator in rightIndicators
	# Update indicators: update new
	rightCurrent = right.horizontalPageIndex(right.currentPage)
	rightIndicators[rightCurrent].states.switch("active")

	# put back all the squares etc to default state
	resetStates()

# ------------------------------------------------------
# testing
# ------------------------------------------------------
# Utils.interval 0.5, ->
# 	print springCurve





