# Set background
bg = new BackgroundLayer 
	backgroundColor: "#7DDD11"

# Create PageComponent
page = new PageComponent 
	width: (150*4) + (10*3)
	height: 150
	scrollVertical: false
	borderRadius: 6
	clip: true
	
page.center()	

pages = []
# Create layers in a for-loop
for i in [0...4]
	aPage = new Layer 
		superLayer: page.content
		width: 150
		height: 150
		backgroundColor: "#fff"
		borderRadius: 6
		opacity: 0.3
		x: 160 * i
	pages.push(aPage)
	
# Staging
# page.snapToNextPage()
page.currentPage.opacity = 1

# Update pages
page.on "change:currentPage", ->
	page.previousPage.animate 
		properties:
			opacity: 0.3
		time: 0.4
		
	page.currentPage.animate 
		properties:
			opacity: 1
		time: 0.4
		
for i in pages
	i.on Events.Click, ->
		page.snapToPage(this)
