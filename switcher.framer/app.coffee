# All custom values
snappy =
	tension: 400
	friction: 20
	velocity: 0
	time: 0
	delay: 0
snappy.curve = ("spring(#{snappy.tension}, #{snappy.friction}, #{snappy.velocity})")
	
slow =
	tension: 200
	friction: 2
	velocity: 100
	time: null
	delay: null
slow.curve = ("spring(#{slow.tension}, #{slow.friction}, #{slow.velocity})")

ease =
# 	tension: null
# 	friction: null
# 	velocity: null
	time: 0.1
	delay: 0
ease.curve = ("ease")

# Default to ease
customAnimation =
	curve: ease.curve
	time: ease.time
	delay: ease.delay

# Set up target layer
target = new Layer
target.center()

target.states =
	one: scale: 0.75
	two: scale: 1.5
target.animationOptions = customAnimation

# A function to refresh the animation values when presets are tapped
updateAnimation = (newAnimation) ->
	customAnimation =
# 		curve: "spring(#{newAnimation.tension}, #{newAnimation.velocity}, #{newAnimation.friction})"
		curve: newAnimation.curve
		time: newAnimation.time
		delay: newAnimation.delay
	# List all affected animations
	target.animationOptions = customAnimation
	print customAnimation

# Switch target layer states on click
target.onTap ->
	# Re-apply latest customAnimation
	this.animationOptions = customAnimation
	print target.animationOptions
	this.stateCycle("one", "two")

allToggles = []
for toggle in [1..3]
	toggle = new Layer
		width: 150, height: 50
		x: toggle*160, y: 0
		backgroundColor: "grey"
	allToggles.push(toggle)

	toggle.onTapStart ->
		this.backgroundColor = "black"
	toggle.onTapEnd ->
		this.backgroundColor = "grey"
		
allToggles[0].html = "Snappy"
allToggles[1].html = "Slow"
allToggles[2].html = "Ease"

allToggles[0].onTap ->
	updateAnimation(snappy)
allToggles[1].onTap ->
	updateAnimation(slow)
allToggles[2].onTap ->
	updateAnimation(ease)