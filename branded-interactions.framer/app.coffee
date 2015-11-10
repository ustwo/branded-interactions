# –––––––––––––––––––––––––––––––––––––––
# setup

# shared variables
squareSize = Screen.width/5
# squareSize equals 400 on iPad Air
 
boundsSize = 
	width: squareSize
	height: squareSize
gutter = boundsSize.width*0.1

# colours used throughout
mint = "#2DD7AA"
aqua = "#28affa"
purple = "#877DD7"
# animation presents
snappy = 
	curve: "spring(600, 30, 0)"
slow = 
	curve: "spring(120, 20, 0)"
easy = 
	time: 2
	curve: "ease-in-out"

	
# the main toggle...
Framer.Defaults.Animation = snappy

# style
textStyle = 
	"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
	"font-size": "18pt"
	"line-height": "900px"
	"text-align": "center"
	"text-transform": "uppercase"
	"color": "rgba(0, 0, 0, 0.2)"

# Set background
bg = new BackgroundLayer
	backgroundColor: "#333"
	
# –––––––––––––––––––––––––––––––––––––––
# pages
page = new PageComponent
	width: Screen.width, height: Screen.height
	scrollVertical: false
	
pageOne = new Layer
	width: page.width, height: page.height
	superLayer: page.content
	backgroundColor: mint
	
pageTwo = new Layer
	width: page.width, height: page.height
	superLayer: page.content
	backgroundColor: null
page.addPage(pageTwo, "right")
	
pageThree = new Layer
	width: page.width, height: page.height
	superLayer: page.content
	backgroundColor: purple
page.addPage(pageThree, "right")

canvas = new Layer
	width: (boundsSize.width * 4) + (gutter * 3)
	height: boundsSize.height
	backgroundColor: null
	clip: false

window.onresize = ->
	canvas.center()
	
	
# –––––––––––––––––––––––––––––––––––––––
# interactions
interactions = []
for i in [0..3]
	i = new Layer
		size: boundsSize
		x: i * (boundsSize.width + gutter)
		backgroundColor: "rgba(255,255,255, 0.2)"
		borderRadius: 12
		clip: false
		superLayer: canvas
		style: textStyle
			
	interactions.push(i)
	
# rename these layers to make them handy
scaleConstraints = interactions[0]
scaleConstraints.name = "scale"
scaleConstraints.html = scaleConstraints.name

rotateConstraints = interactions[1]
rotateConstraints.name = "rotate"
rotateConstraints.html = rotateConstraints.name

positionConstraints = interactions[2]
positionConstraints.name = "position"
positionConstraints.html = positionConstraints.name

opacityConstraints = interactions[3]
opacityConstraints.name = "opacity"
opacityConstraints.html = opacityConstraints.name

interactionsTargets = []

# Center layers
canvas.center()
# –––––––––––––––––––––––––––––––––––––––
# scale
scaleTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: "#fff"
	borderRadius: 24
	superLayer: scaleConstraints
scaleTarget.states.add
	last: scale: 0.95, borderRadius: 12
interactionsTargets.push(scaleTarget)

scaleTarget.on Events.Click, ->
	this.states.next()


# –––––––––––––––––––––––––––––––––––––––
# rotate
rotateTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: "#fff"
	borderRadius: 24
	superLayer: rotateConstraints
rotateTarget.states.add
	last: rotation: 90, borderRadius: 12
interactionsTargets.push(rotateTarget)

rotateTarget.on Events.Click, ->
	this.states.next()
	
# –––––––––––––––––––––––––––––––––––––––
# position
positionTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: "#fff"
	borderRadius: 24
	superLayer: positionConstraints
positionTarget.states.add
	first: x: positionTarget.x - boundsSize.width/4
	last: x: positionTarget.x + boundsSize.width/4
interactionsTargets.push(positionTarget)

positionTarget.on Events.Click, ->
	this.states.next()


# –––––––––––––––––––––––––––––––––––––––
# opacity
opacityTargetTop = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: null
	borderWidth: 5
	borderColor: "#fff"
	borderRadius: 24
	superLayer: opacityConstraints
	
opacityTarget = new Layer
	size: boundsSize
	scale: 0.5
	backgroundColor: "#fff"
	borderRadius: 24
	superLayer: opacityConstraints
opacityTarget.states.add
	last: opacity: 0
interactionsTargets.push(opacityTarget)
	
opacityTarget.on Events.Click, ->
	this.states.next()
	
	
# –––––––––––––––––––––––––––––––––––––––
# page changes

page.on "change:currentPage", ->
	# reset states
	scaleTarget.states.switch("default")
# 	rotateTarget.states.switch("default")
	positionTarget.states.switch("default")
	opacityTarget.states.switch("default")
	
	# change animation values
	if page.currentPage is pageTwo
		
		bg.backgroundColor = "red"
		for i in interactionsTargets
			i.states.animationOptions = slow	
	else if page.currentPage is pageThree
		for i in interactionsTargets
			i.states.animationOptions = easy
	else
		for i in interactionsTargets
			i.states.animationOptions = snappy


