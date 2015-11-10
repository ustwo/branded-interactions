# –––––––––––––––––––––––––––––––––––––––
# setup 1

# colours used throughout
mint = "#2DD7AA"
aqua = "#28affa"
purple = "#877DD7"
grey = "#333333"
dark = "#222222"
white = "#FFFFFF"
white80 = "rgba(255, 255, 255, 0.8)"
white20 = "rgba(255, 255, 255, 0.2)"
black50 = "rgba(0, 0, 0, 0.5)"

# style
textStyle = 
	"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
	"font-size": "18pt"
	"line-height": "600px"
	"text-align": "center"
	"text-transform": "uppercase"
	"color": black50

# animation presents
snappy = 
	curve: "spring(600, 30, 0)"
slow = 
	curve: "spring(120, 20, 0)"
easy = 
	time: 2
	curve: "ease-in-out"

# default to snappy
Framer.Defaults.Animation = snappy

# bg layer
bg = new BackgroundLayer
	backgroundColor: grey

# –––––––––––––––––––––––––––––––––––––––
# left pages
left = new PageComponent
	width: Screen.width/2, height: Screen.height
	scrollVertical: false
	backgroundColor: purple

# array that will store our left page layers
leftPages = []

# Array that will store our left indicator layers
leftIndicators = []	
leftIndicatorsAmount = 3
leftIndicatorsSize = 12

# generate page and indicator layers
for i in [0...leftIndicatorsAmount]
	leftPage = new Layer 
		width: left.width, height: left.height
		x: left.width * i, superLayer: left.content
		backgroundColor: null
		
	# store left page layers in an array
	leftPages.push(leftPage)
		
# 	indicator = new Layer 
# 		backgroundColor: white
# 		width: leftIndicatorsSize, height: leftIndicatorsSize
# 		x: 28 * i, y: left.maxY - 100
# 		borderRadius: "50%", opacity: 0.2
# 		superLayer: left
# 		
# 	# Stay centered regardless of the amount of cards
# 	indicator.x += (left.width / 2) - (leftIndicatorsSize * leftIndicatorsAmount)
# 	
# 	# States
# 	indicator.states.add active: opacity: 0.8, scale:1.2
# 	indicator.states.animationOptions = time: 0.5
# 	
# 	# Store indicators in our array
# 	leftIndicators.push(indicator)
# 
# # set indicator for our current left page
# leftCurrent = left.horizontalPageIndex(left.currentPage)
# leftIndicators[leftCurrent].states.switch("active")
	
# rename for easy access
leftOne = leftPages[0]
leftTwo = leftPages[1]
leftThree = leftPages[2]

leftOne.backgroundColor = purple
leftTwo.backgroundColor = mint
leftThree.backgroundColor = aqua


# –––––––––––––––––––––––––––––––––––––––
# right pages
right = new PageComponent
	x: Screen.width/2
	width: Screen.width/2, height: Screen.height
	scrollVertical: false
	backgroundColor: grey
	
# array that will store our right page layers
rightPages = []

# Array that will store our right indicator layers
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

# –––––––––––––––––––––––––––––––––––––––
# setup 2

# shared variables
squareSize = right.width/3
boundsSize = 
	width: squareSize
	height: squareSize
gutter = boundsSize.width*0.2

canvas = new Layer
	midX: rightOne.width/2, midY: rightOne.height/2
	width: (boundsSize.width * 2) + (gutter * 1)
	height: (boundsSize.height * 2) + (gutter * 1)
	backgroundColor: null
	superLayer: rightOne
	clip: false

# –––––––––––––––––––––––––––––––––––––––
# interactions
interactions = []
rows = 2
cols = 2

[0..rows-1].map (a) ->
	[0..cols-1].map (b) ->
		i = new Layer
			size: boundsSize
			x: a * (boundsSize.width + gutter)
			y: b * (boundsSize.height + gutter)
			backgroundColor: white20
			borderRadius: 12
			clip: false
			style: textStyle
			superLayer: canvas
				
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

# –––––––––––––––––––––––––––––––––––––––
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


# –––––––––––––––––––––––––––––––––––––––
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
	
# –––––––––––––––––––––––––––––––––––––––
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


# –––––––––––––––––––––––––––––––––––––––
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




# –––––––––––––––––––––––––––––––––––––––
# page changes

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
	
# –––––––––––––––––––––––––––––––––––––––
# page changes

left.on "change:currentPage", ->
	# change animation values
	if left.currentPage is leftTwo
		for i in interactionsTargets
			i.states.animationOptions = slow	
	else if left.currentPage is leftThree #last
		for i in interactionsTargets
			i.states.animationOptions = easy
		# also update overall component background to match
		left.backgroundColor = leftThree.backgroundColor
	else # leftOne or other
		for i in interactionsTargets
			i.states.animationOptions = snappy
		# also update overall component background to match
		left.backgroundColor = leftOne.backgroundColor
			
right.on "change:currentPage", ->
	# Update indicators: remove old
	indicator.states.switch("default") for indicator in rightIndicators
	# Update indicators: update new
	rightCurrent = right.horizontalPageIndex(right.currentPage)
	rightIndicators[rightCurrent].states.switch("active")
	
	# reset states
	scaleTarget.states.switch("default")
	# rotateTarget.states.switch("default")
	positionTarget.states.switch("default")
	opacityTarget.states.switch("default")
	
	
	

