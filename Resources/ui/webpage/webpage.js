/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.webpage = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style 		= App.UI.webpage.style;
		var win			= Titanium.UI.createWindow(style.win);
		var web			= Ti.UI.createWebView(style.web);
		
		
	// STYLING
		TL.merge(web, {
			url:'http://www.truelovefm.com/'
		});
		
	// ADDITIONS
		win.add(web);
		
	// CODE
		
	// LISTENERS
		
		return win;
	}
};