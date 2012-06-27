/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.urbanairship = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		

	//CODE BEGIN
	/*
	* Demonstrates how to set up your UA Airmail Mailbox,
	* and how to display the messages from it via the picker interface.
	*/

	// Urban Airship Setup
	
	var UrbanAirship = require('ti.urbanairship');
	
	UrbanAirship.options = {
	    APP_STORE_OR_AD_HOC_BUILD: false,
	    PRODUCTION_APP_KEY: '=== YOUR PROD APP KEY ===',
	    PRODUCTION_APP_SECRET: '=== YOUR PROD APP SECRET ===',
	    DEVELOPMENT_APP_KEY: 'bDYLuFEfQzaHGx64AqUJnA',
	    DEVELOPMENT_APP_SECRET: 'PhZpmDgIRrqjHxIHs-TUkg ',
	    LOGGING_ENABLED: true
	};
	
	// UrbanAirship.autoBadge = true;
	// UrbanAirship.autoResetBadge = true;
	
	Ti.Network.registerForPushNotifications({
	    types:[
	        Ti.Network.NOTIFICATION_TYPE_BADGE,
	        Ti.Network.NOTIFICATION_TYPE_ALERT,
	        Ti.Network.NOTIFICATION_TYPE_SOUND
	    ],
	    success: function(e) {
	        var token = e.deviceToken;
	        //alert(e.deviceToken);
	        //Ti.API.log(token);
	        UrbanAirship.registerDevice(token, {
	            tags: [ 'testing', 'appcelerator', 'my-tags' ],
	            alias: 'testDevice-iOS'
	        });
	
	        //alert('Registered remotely!');
	       
	    },
	    error: function(e) {
	        alert("Error: " + e.error);
	    },
	    callback: function(e) {
	    	App.UI.menu.tempWin.close();
			App.UI.menu.tempWin = App.UI.calendar.init();
			App.UI.menu.tempWin.open();
			
			App.UI.menu.win.animate({bottom:-60,duration:50});
			App.UI.menu.tempWin.animate({height:430,duration:50});
			
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			App.UI.menu.flag='1'
	    	UrbanAirship.handleNotification(e.data);
	        alert(e.data.alert);
	    }
	});
		
		//CODE END
		
		
	}
};