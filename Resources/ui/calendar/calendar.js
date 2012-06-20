/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.calendar = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style 				= App.UI.calendar.style;
		var win 				= Titanium.UI.createWindow(style.win_calendar);
		
		
		
	// STYLING
		
		
	// ADDITIONS
		
		
	// CODE
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		// Handle the XML data.
		//this.responseXML.documentElement;
		//Ti.API.info(this.responseText);
		Ti.API.info(JSON.parse(this.responseText));
	}
	anXhr.onerror = function() {
		alert('The HTTP request failedw');
	}
	
	// Send the request data.
	anXhr.open('GET','http://www.truelove.fm/app/admin/getMessages.php');
	anXhr.send();
	
	
		
	// LISTENERS
			
	return win;
		
	}
};