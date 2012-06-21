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
		var txtUser			= Ti.UI.createTextField(style.txtUser);
		var txtPass			= Ti.UI.createTextField(style.txtPass);
		var txtName			= Ti.UI.createTextField(style.txtName);
		var btnSignup		= Ti.UI.createButton(style.btnSignup);
		var btnCategory		= Ti.UI.createButton(style.btnCategory);
		var lblName			= Ti.UI.createLabel(style.lblName);
		var lblUser			= Ti.UI.createLabel(style.lblUser);
		var lblPass			= Ti.UI.createLabel(style.lblPass);
		
		
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
		TL.merge(txtUser, {
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
			hintText:'E-mail',
			autocorrect:false
		});
		TL.merge(txtPass, {
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			//textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
			hintText:'Password',
			autocorrect:false
		});
		TL.merge(btnSignup, {
			title:'Sign Up'
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
		
		
		// ADDITIONS
		
		//var tempPick = Ti.UI.createPickerRow({title: ''});
		//picker.add(tempPick);
		var xhr = Ti.Network.createHTTPClient({
   	 			onload: function(e) {
   	 				var picker 			= Titanium.UI.createPicker(style.picker);
   	 				TL.merge(picker, {
						selectionIndicator:true
					});
   	 				Ti.API.info(this.responseText);
   	 				var data = JSON.parse(this.responseText);
   	 				for(var i=0;i<data.length;i++){
   	 					picker.add(Ti.UI.createPickerRow({title: data[i].name}));
   	 				}
   	 				//picker.remove(tempPick);
   	 				vwPicker.add(picker);
   	 				
   	 				picker.addEventListener('change',function(e){
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
		win.add(txtUser);
		win.add(lblPass)
		win.add(txtPass);
		win.add(btnCategory);
		win.add(btnSignup);
		win.add(vwPicker);
		
		btnSignup.addEventListener('click',function(e){
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if(txtUser.value==''|| txtPass=='' || txtName==''){
				alert('You are missing to add some fields');
			}else if(!filter.test(txtUser.value)){
				alert('Please provide a valid email address');
			}else{
				
				var data = {
    				name: 'Pepe',
    				email: 'Pepe@pepe.com',
    				pass:'pepe',
    				cat:'11'
				};
 
				var xhr = Ti.Network.createHTTPClient({
    				onload: function() {
        			// handle the response
        				Ti.API.info(this.responseText);
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
			vwPicker.top=105;
	
		});
		btnDone.addEventListener('click',function(e){
			vwPicker.top=105;
			
		});
		
		
		
		return win
		// CODE
		//win.open();
		//menu.open();
		
		// LISTENERS
				
		
	}
};