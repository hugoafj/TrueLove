/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.app = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
		// INSTANTIATION
		//App.UI.app.win		= App.UI.calendar.init();
		
		var menu			= App.UI.menu.init();//--------->>>

		// STYLING
			
		// ADDITIONS
		
		// CODE
		//App.UI.app.win.open();
		//App.UI.calendar.init();
		
		menu.open();//--------->>>
			
		// LISTENERS
		//App.UI.login.init().open({modal:true});//--------->>>
		//App.UI.signup.init().open({modal:true});//--------->>>
		//App.UI.webpage.init().open({modal:true});;//--------->>>
		//App.UI.settings.init().open({modal:true});--------->>>
	}
};