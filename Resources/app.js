Titanium.UI.setBackgroundColor('#000');

var App = {
	API: {},
	UI: {}
};

Ti.include(
	"/com/merge.js",
	"/cfg/cfg_constants.js",
	"/cfg/cfg_includes.js",
	"/database_API/API_db.js"
);

App.API.DB.init(function(){});
//App.UI.app.init();

if(Ti.App.Properties.getString('Logged')=='true'){
	//App.API.DB.getMessages(Ti.App.Properties.getInt('idUser'),function(_result){Ti.API.info(JSON.stringify(_result));});
	App.UI.app.init();
}
else{
	App.UI.login.init().open();
	
}
