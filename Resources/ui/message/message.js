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
		var login 			= Ti.Facebook.createLoginButton(style.login);
		
		Titanium.Facebook.appid = "404794309570960";
		Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
		
	// STYLING
		
		
	// ADDITIONS
		win.add(favStar);
		win.add(share);
		win.add(date);
		win.add(type);
		win.add(line);
		win.add(scvMsg);
		scvMsg.add(txtMsg);
		
		Ti.API.info(txtMsg);
		
	// CODE
		function showRequestResult(e) {
			var s = '';
			if (e.success) {
				s = "SUCCESS";
				if (e.result) {
					s += "; " + e.result;
				}
				if (e.data) {
					s += "; " + e.data;
				}
				if (!e.result && !e.data) {
					s = '"success", but no data from FB.  I am guessing you cancelled the dialog.';
				}
			} else if (e.cancelled) {
				s = "CANCELLED";
			} else {
				s = "FAIL";
				if (e.error) {
					s += "; " + e.error;
				}
			}
			alert(s);
		}
		
	// LISTENERS 
	share.addEventListener('click', function() {
	Ti.Facebook.authorize();
	var data = {
		link: "https://developer.mozilla.org/en/JavaScript",
		name: "Best online Javascript reference",
		message: "Use Mozilla's online Javascript reference",
		caption: "MDN Javascript Reference",
		picture: "http://truelove.fm/app/admin/images/logo.png",
		description: "This section of the site is dedicated to JavaScript-the-language, the parts that are not specific to web pages or other host environments...",
		test: [ {foo:'Encoding test', bar:'Durp durp'}, 'test' ]
	};
	Titanium.Facebook.requestWithGraphPath('me/feed', data, 'POST', showRequestResult);
});
	
		
		return win;
	}
};