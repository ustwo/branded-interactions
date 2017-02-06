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
	friction: 100
	velocity: 2
	time: 0
	delay: 0
slow.curve = ("spring(#{slow.tension}, #{slow.friction}, #{slow.velocity})")

ease =
	tension: 0
	friction: 0
	velocity: 0
	time: 0.25
	delay: 0.2
ease.curve = ("ease")

# Default to ease
customAnimation =
	tension: ease.tension
	friction: ease.friction
	velocity: ease.velocity
	curve: ease.curve
	time: ease.time
	delay: ease.delay

currentPreset = "Yo"

# Set up target layer
target = new Layer
target.center()

target.states =
	one: scale: 0.75
	two: scale: 1.5
target.animationOptions = customAnimation

# HTML for target
targetText = new Layer
	html: "#{currentPreset}"
	parent: target
	backgroundColor: null
	style:
		"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
		"color": "white"
		"font-size": "0.5em"
		"text-align": "center"
		"padding-top": "80px"

# A function to refresh the animation values when presets are tapped
updateAnimation = (newAnimation) ->
# 	currentPreset = newAnimation
	customAnimation =
# 		curve: "spring(#{newAnimation.tension}, #{newAnimation.friction}, #{newAnimation.velocity})"
		tension: newAnimation.tension
		friction: newAnimation.friction
		velocity: newAnimation.velocity
		
		curve: newAnimation.curve
		time: newAnimation.time
		delay: newAnimation.delay
	# List all affected animations
	target.animationOptions = customAnimation

# Update sliders
updateSliders = (newAnimation) ->
	tensionSlider.animateToValue(newAnimation.tension)
	frictionSlider.animateToValue(newAnimation.friction)
	velocitySlider.animateToValue(newAnimation.velocity)
	timeSlider.animateToValue(newAnimation.time)
	delaySlider.animateToValue(newAnimation.delay)
	
# Slider setup
tensionSlider = new SliderComponent
	midY: Screen.height/2 - 400
	min: 0, max: 800, value: customAnimation.tension
	name: "Tension"
frictionSlider = new SliderComponent
	midY: Screen.height/2 - 350
	min: 0, max: 100, value: customAnimation.friction
	name: "Friction"
velocitySlider = new SliderComponent
	midY: Screen.height/2 - 300
	min: 0, max: 25, value: customAnimation.velocity
	name: "Velocity"
	
timeSlider = new SliderComponent
	midY: Screen.height/2 - 250
	min: 0, max: 2, value: customAnimation.time
	name: "Time"
delaySlider = new SliderComponent
	midY: Screen.height/2 - 200
	min: 0, max: 0.5, value: customAnimation.delay
	name: "Delay"
	
allSliders = [tensionSlider, frictionSlider, velocitySlider, timeSlider, delaySlider]
springSliders = [tensionSlider, frictionSlider, velocitySlider]
linearSliders = [timeSlider]

for slider in allSliders
# 	slider.parent = left
	slider.midX = Screen.width/2
	slider.knob.draggable.momentum = false
	slider.html = "#{slider.name} is #{slider.value} old"
	slider.style = 
		"font-family": "Px Grotesk, -apple-system,  Helvetica Neue"
		"color": "black"
		"padding-top": "10px"
		"font-size": "0.5em"
		
	slider.onValueChange ->
		print "Tension: #{customAnimation.tension}, Friction: #{customAnimation.friction}, Velocity: #{customAnimation.velocity}, Time: #{customAnimation.time}, Delay: #{customAnimation.delay}, Curve: #{customAnimation.curve}"
		this.html = "#{this.name} is #{this.value}"
		
		customAnimation.tension = tensionSlider.value
		customAnimation.friction = frictionSlider.value
		customAnimation.velocity = velocitySlider.value
		customAnimation.curve = "spring(#{tensionSlider.value}, #{frictionSlider.value}, #{velocitySlider.value})"
		
dimSliders = (sliderGroup) ->
	for slider in sliderGroup
		slider.opacity = 0.5		
		
for slider in linearSliders		
	slider.onValueChange ->
		dimSliders(springSliders)
		# UP TO HERE
for slider in springSliders
	slider.onValueChange ->
		print "spring sliders"
	# If the slider changed is timeSlider or delaySlider, dim the spring sliders
		# Visa versa
		
		
# 		print customAnimation
# 		updateAnimation(customAnimation)
# 		print customAnimation
		
# tensionSlider.onValueChange ->
# 	customAnimation.tension = this.value
# 	customAnimation.curve = "spring(#{tensionSlider.value}, #{frictionSlider.value}, #{velocitySlider.value})"




	
# Switch target layer states on click
target.onTap ->
	# Re-apply latest customAnimation
	this.animationOptions = customAnimation
	print target.animationOptions
# 	tensionSlider.animateToValue(100)
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
	updateSliders(snappy)
	
allToggles[1].onTap ->
	updateAnimation(slow)
	updateSliders(slow)
	
allToggles[2].onTap ->
	updateAnimation(ease)
	updateSliders(ease)