Titanium.UI.setBackgroundColor('#000');

var App = {
	API: {},
	UI: {}
};

Ti.include(
	"/com/merge.js",
	"/cfg/cfg_constants.js",
	"/cfg/cfg_includes.js"
);


//App.UI.app.init();

if(Ti.App.Properties.getString('Logged')=='true'){
	App.UI.app.init();
}
else{
	App.UI.login.init().open();
	
}
