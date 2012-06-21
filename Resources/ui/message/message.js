/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.message = {
	/**
	 * Initializes the class
	 **/
	init: function(_nav) {
		
	// INSTANTIATION
		var style 			= App.UI.message.style;
		var win				= Titanium.UI.createWindow(style.win);
		var favStar			= Ti.UI.createView(style.favStar);
		var share			= Ti.UI.createView(style.share);
		var date			= Ti.UI.createLabel(style.date);
		var type			= Ti.UI.createLabel(style.type);
		var line			= Ti.UI.createView(style.line);
		var scvMsg			= Ti.UI.createScrollView(style.scvMsg);			
		var txtMsg			= Ti.UI.createLabel(style.txtMsg);
		
		
	// STYLING
		
		
	// ADDITIONS
		win.add(favStar);
		win.add(share);
		win.add(date);
		win.add(type);
		win.add(line);
		win.add(scvMsg);
		scvMsg.add(txtMsg);
		
	// CODE
		
		
	// LISTENERS 
	
		
		return win;
	}
};