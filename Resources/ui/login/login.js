/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.login = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
		// INSTANTIATION
		
		var style 			= App.UI.app.style;
		var win				= App.UI.calendar.init(style.win);
		var txtUser			= Ti.UI.createTextField(style.txtUser);
		var txtPass			= Ti.UI.createTextField(style.txtPass);
		
		
				
		// STYLING
		
		TL.merge(win, {
			title:'Log In'
		});
		
		
		// ADDITIONS
		
		// CODE
		win.open();
		menu.open();
		
		// LISTENERS
				
		
	}
};