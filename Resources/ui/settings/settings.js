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
		var id_selected;
		var style 			= App.UI.settings.style;
		var win				= Titanium.UI.createWindow(style.win);
		var btnLogout		= Ti.UI.createButton(style.btnLogout);
		var vwPicker 		= Titanium.UI.createView(style.vwPicker);
		var btnCategory		= Ti.UI.createButton(style.btnCategory);
		var vwline			= Ti.UI.createView(style.vwline);
		
		var vwContainer		= Ti.UI.createView({height:40});
		var title			= Ti.UI.createLabel(style.title);
		var line			= Ti.UI.createView(style.line);
		var backBtn			= Ti.UI.createButton(style.backBtn);
		
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
	   	 		Ti.API.info('____________________----------->>>>'+JSON.stringify(data));
	   	 		for(var i=0;i<data.length;i++){
	   	 			picker.add(Ti.UI.createPickerRow({title: data[i].name,id:data[i].id}));
	   	 		}
	   	 		picker.addEventListener('change',function(e){
   	 					id_selected = e.row.id;
   	 				});
	   	 		vwPicker.add(picker);
	   	 	}
		});
	 	xhr.open('GET', 'http://www.truelove.fm/app/admin/getCategories.php');
		xhr.send();
			
	// ADDITIONS
		//vwContainer.add(backBtn);
		vwContainer.add(title);
		vwContainer.add(line);
		win.add(vwContainer);
		
		
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
			Ti.API.info(Ti.App.Properties.getString('idUser'));
			Ti.API.info(Ti.App.Properties.getString('Category'));
			
			var data = {
				id:Ti.App.Properties.getString('idUser'),
    			cat:id_selected
			};
 				//Ti.API.info(data);
 				
				var xhr = Ti.Network.createHTTPClient({
    				onload: function() {
    					var data = JSON.parse(this.responseText);
        					if (data.result>0){
        						Ti.App.Properties.setString('Category',id_selected.toString());
	        					alert('The category was updated successfully');
	        		
	        				}
	        				else{
	        					alert('There was an error\n updating the category');
	        				}
    								
    				}
				});
 
				xhr.open('POST','http://www.truelove.fm/app/admin/changeCategory.php');
				// optional:
				// blogPost = JSON.stringify(blogPost);
				xhr.send(data);
			
			
			
			
			
			
			
	});
	btnLogout.addEventListener('click',function(e){
			Ti.App.Properties.setString('Logged', 'false');
			Ti.Facebook.logout();
			Ti.App.Properties.setString('face',"false");
			App.UI.login.init().open();
			win.close();
	});
	
		
		return win;
	}
};