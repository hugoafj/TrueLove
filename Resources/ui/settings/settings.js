/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.settings = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style 			= App.UI.settings.style;
		var win				= Titanium.UI.createWindow(style.win);
		var btnLogout		= Ti.UI.createButton(style.btnLogout);
		var vwPicker 		= Titanium.UI.createView(style.vwPicker);
		var btnCategory		= Ti.UI.createButton(style.btnCategory);
		var vwline			= Ti.UI.createView(style.vwline);
		
		var btnCancel =  Titanium.UI.createButton({
			title:'Cancel',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		var btnDone =  Titanium.UI.createButton({
			title:'Save',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		var spacer =  Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var toolbar 		= Titanium.UI.createToolbar(style.toolbar);
		
		
	// STYLING
	
		TL.merge(toolbar, {
			items:[btnCancel,spacer,btnDone]
		});
		TL.merge(btnLogout, {
			title:'Log out'
		});
		TL.merge(btnCategory, {
			title:'Change Category'
		});
		
	
		
	// CODE
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e) {
	   	 		var picker 			= Titanium.UI.createPicker(style.picker);
	   	 		
	   	 		TL.merge(picker, {
					selectionIndicator:true
				});
	   	 		
	   	 		var data = JSON.parse(this.responseText);
	   	 		for(var i=0;i<data.length;i++){
	   	 			picker.add(Ti.UI.createPickerRow({title: data[i].name}));
	   	 		}
	   	 		vwPicker.add(picker);
	   	 	}
		});
	 	xhr.open('GET', 'http://www.truelove.fm/app/admin/getCategories.php');
		xhr.send();
			
	// ADDITIONS
		win.add(btnLogout);
		win.add(vwline);
		win.add(btnCategory);
		vwPicker.add(toolbar);
		win.add(vwPicker);
		
	// LISTENERS
	btnCategory.addEventListener('click',function(e){
		vwPicker.top=30;
	});
	btnCancel.addEventListener('click',function(e){
			vwPicker.top=280;
	
	});
	btnDone.addEventListener('click',function(e){
			vwPicker.top=280;
	});
	btnLogout.addEventListener('click',function(e){
			Ti.App.Properties.setString('Logged', 'false');
			App.UI.login.init().open();
			win.close();
	});
	
		
		return win;
	}
};