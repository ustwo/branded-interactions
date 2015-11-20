######################################################################
# Created by Jordan Robert Dobson / @jordandobson on 14 September 2015
######################################################################

class exports.DevicePixelRatio
	@get = (v) ->
		# Store the original so we can verify if it's changed at all.
		originalValue = v 
		# Inside Framer Studio it reports device Pixel Ratios based on the browser not the actual device
		# So we have to update the value manually. I haven't included everything here yet.
		if Utils.isFramerStudio() or Utils.isDesktop()
			# Check for 2x devices 
			for device_2x in ['iphone-6-', 'iphone-5', 'ipad-air', "nexus-9", "applewatch"]
				v = v * 2 if _.startsWith(Framer.Device.deviceType, device_2x)
			# Check for 3x devices
			for device_3x in ['iphone-6plus', "nexus-5"]
				v = v * 3 if _.startsWith(Framer.Device.deviceType, device_3x)
		# Return if the value changed... otherwise continue
		return v unless originalValue is v
		# Set Units based on Device Pixel Ratio Except desktop
		unless Utils.isDesktop()
			devicePixelRatio = Utils.devicePixelRatio()
			# if it's greater than 1 then update it!
			v = v * devicePixelRatio if devicePixelRatio > 1
		# return the value even if it hasn't changed
		return v

# Create a shorthand version of class above so you can just type "DPR"
class exports.DPR extends exports.DevicePixelRatio