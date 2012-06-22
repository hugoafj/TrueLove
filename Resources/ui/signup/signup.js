/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.signup = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
		// INSTANTIATION
		
		var style 			= App.UI.signup.style;
		var win				= Ti.UI.createWindow(style.win);
		var txtEmail		= Ti.UI.createTextField(style.txtEmail);
		var txtPass			= Ti.UI.createTextField(style.txtPass);
		var txtName			= Ti.UI.createTextField(style.txtName);
		var btnSignup		= Ti.UI.createButton(style.btnSignup);
		var btnCategory		= Ti.UI.createButton(style.btnCategory);
		var btnCancel2		= Ti.UI.createButton(style.btnCancel2);
		var lblName			= Ti.UI.createLabel(style.lblName);
		var lblUser			= Ti.UI.createLabel(style.lblUser);
		var lblPass			= Ti.UI.createLabel(style.lblPass);
		
		var id_selected		= 0;
		var vwPicker 		= Titanium.UI.createView(style.vwPicker);
		var pickerValue;
	
		var btnCancel =  Titanium.UI.createButton({
			title:'Cancel',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		var btnDone =  Titanium.UI.createButton({
			title:'Accept',
			style:Titanium.UI.iPhone.SystemButtonStyle.DONE
		});
		var spacer =  Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var toolbar 		= Titanium.UI.createToolbar(style.toolbar);
		
		
		// STYLING
		TL.merge(toolbar, {
			items:[btnCancel,spacer,btnDone]
		});
		
	
	
		TL.merge(win, {
			title:'Sign Up'
		});
		TL.merge(txtName, {
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
			hintText:'Full Name',
			autocorrect:false
		});
		TL.merge(txtEmail, {
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
			hintText:'E-mail',
			autocorrect:false
		});
		TL.merge(txtPass, {
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
			hintText:'Password',
			passwordMask:true,
			autocorrect:false
		});
		TL.merge(btnSignup, {
			title:'Register'
		});
		TL.merge(btnCategory, {
			title:'Select Category'
		});
		TL.merge(lblUser, {
			text:'Email:'
		});
		TL.merge(lblPass, {
			text:'Password:'			
		});
		TL.merge(lblName, {
			text:'Full Name:'
		});
		TL.merge(btnCancel2,{
			title:'Cancel'
		});
		
		// ADDITIONS
		
		//var tempPick = Ti.UI.createPickerRow({title: ''});
		//picker.add(tempPick);
		var xhr = Ti.Network.createHTTPClient({
   	 			onload: function(e) {
   	 				var picker 			= Titanium.UI.createPicker(style.picker);
   	 				TL.merge(picker, {
						selectionIndicator:true
					});
   	 				//Ti.API.info(this.responseText);
   	 				var data = JSON.parse(this.responseText);
   	 				for(var i=0;i<data.length;i++){
   	 					picker.add(Ti.UI.createPickerRow({title: data[i].name, idCat:data[i].id}));
   	 				}
   	 				//picker.remove(tempPick);
   	 				vwPicker.add(picker);
   	 				id_selected = data[0].id;
   	 				picker.addEventListener('change',function(e){
   	 					id_selected = e.row.idCat;
   	 					//Ti.API.info(id_selected);
   	 					pickerValue=e.selectedValue;
   	 				});
   	 				
   	 			}
			});
 			xhr.open('GET', 'http://www.truelove.fm/app/admin/getCategories.php');
			xhr.send();
		
		
		
		vwPicker.add(toolbar);
		
		
		win.add(lblName);
		win.add(txtName);
		win.add(lblUser);
		win.add(txtEmail);
		win.add(lblPass)
		win.add(txtPass);
		win.add(btnCategory);
		win.add(btnSignup);
		win.add(btnCancel2);
		win.add(vwPicker);
		
		btnSignup.addEventListener('click',function(e){
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if(txtEmail.value==''|| txtPass.value=='' || txtName.value==''){
				alert('You are missing to add some fields');
			}else if(!filter.test(txtEmail.value)){
				alert('Please provide a valid email address');
			}else{
				
				var data = {
    				name:txtName.value,
    				email:txtEmail.value,
    				pass:txtPass.value,
    				cat:id_selected
				};
 				//Ti.API.info(data);
 				
				var xhr = Ti.Network.createHTTPClient({
    				onload: function() {
    					var data = JSON.parse(this.responseText);
        					if (data.result>0){
        					Ti.App.Properties.setString('Logged', 'true');
        					Ti.App.Properties.setInt('Category',id_selected);
        					alert('User was created successfully');
        					App.UI.app.init();
        					win.close();
        					
        				}
        				else{
        					alert('There was an error\n creating an user');
        				}
    								
    					
    					
        			// handle the response
        				//Ti.API.info(this.responseText);
    				}
				});
 
				xhr.open('POST','http://www.truelove.fm/app/admin/signUp.php');
				// optional:
				// blogPost = JSON.stringify(blogPost);
				xhr.send(data);
				
			}
		});
		btnCategory.addEventListener('click',function(e){
			
			vwPicker.top=-100;
			//vwPicker.animate({top:-100,duration:50});
			
		});
		btnCancel.addEventListener('click',function(e){
			vwPicker.top=135;
	
		});
		btnDone.addEventListener('click',function(e){
			vwPicker.top=135;
			Ti.API.info(id_selected);
		});
		btnDone.addEventListener('click',function(e){
			vwPicker.top=135;
			Ti.API.info(id_selected);
		});
		btnCancel2.addEventListener('click',function(e){
			win.close();
		});
		
		
		
		
		return win
		// CODE
		//win.open();
		//menu.open();
		
		// LISTENERS
				
		
	}
};