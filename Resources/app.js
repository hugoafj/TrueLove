Titanium.UI.setBackgroundColor('#000');

var App = {
	API: {},
	UI: {}
};

Ti.include(
	"/com/merge.js",
	"/cfg/cfg_constants.js",
	"/cfg/cfg_includes.js",
	"/database_API/API_db.js",
	"/urbanairship/urbanairship.js"
);
App.UI.urbanairship.init();
App.API.DB.init(function(){});
//App.UI.app.init();

//App.UI.urbanairship.init();

Ti.App.addEventListener('resume',function(e){
		Ti.API.info("app is resuming from the background");
		Titanium.UI.iPhone.appBadge = 0
});

if(Ti.App.Properties.getString('Logged')=='true'){
	//App.API.DB.getMessages(Ti.App.Properties.getInt('idUser'),function(_result){Ti.API.info(JSON.stringify(_result));});
	App.UI.app.init();
}
else{
	App.UI.login.init().open();
	
}