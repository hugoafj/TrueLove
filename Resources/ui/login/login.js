/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.login = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
		// INSTANTIATION
		
		var style 			= App.UI.login.style;
		var win				= Ti.UI.createWindow(style.win);
		var txtUser			= Ti.UI.createTextField(style.txtUser);
		var txtPass			= Ti.UI.createTextField(style.txtPass);
		var btnLogin		= Ti.UI.createButton(style.btnLogin);
		var lblUser			= Ti.UI.createLabel(style.lblUser);
		var lblPass			= Ti.UI.createLabel(style.lblPass);
		var btnSignup		= Ti.UI.createButton(style.btnSignup);
		var mycat;
		var vwContainer		= Ti.UI.createView({height:40});
		var title			= Ti.UI.createLabel(style.title);
		var line			= Ti.UI.createView(style.line);
		var backBtn			= Ti.UI.createButton(style.backBtn);
				
		// STYLING
		
		TL.merge(win, {
			title:'Log In'
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
			autocorrect:false,
			passwordMask:true
		});
		TL.merge(btnLogin, {
			title:'Log In'
		});
		TL.merge(btnSignup, {
			title:'Sign Up'
		});
		TL.merge(lblUser, {
			text:'Email:'
		});
		TL.merge(lblPass, {
			text:'Password:'
		});
		
		
		// ADDITIONS
		vwContainer.add(title);
		vwContainer.add(line);
		win.add(vwContainer);
		
		win.add(lblUser);
		win.add(txtUser);
		win.add(lblPass)
		win.add(txtPass);
		win.add(btnLogin);
		win.add(btnSignup);
		
		// LISTENERS
		btnLogin.addEventListener('click',function(e){
			Ti.API.info('btnLogin');
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if(txtUser.value==''|| txtPass.value==''){
				alert('You are missing to add some fields');
			}else if(!filter.test(txtUser.value)){
				alert('Please provide a valid email address');
			}else{
			
				var data = {
    				email: txtUser.value,
    				pass:txtPass.value   				
				};
 
				var xhr = Ti.Network.createHTTPClient({
    				onload: function() {
        			// handle the response
        				var data = JSON.parse(this.responseText);
        				mycat=(data.cat).toString();
        				
        				if (data.result=='0'){
        					alert('There was an error');
        				}
        				else{
        					Ti.App.Properties.setString('Logged', 'true');
        					Ti.App.Properties.setInt('Category',data.cat);
        					Ti.App.Properties.setInt('idUser',data.id);
        					App.UI.app.init();
        					win.close();
        				}
    				}
				});
 
				xhr.open('POST','http://www.truelove.fm/app/admin/setLogin.php');
				// optional:
				// blogPost = JSON.stringify(blogPost);
				xhr.send(data);				
			}
			//Ti.APP.Properties.setString('_cat','mycat');
			//Ti.API.info('¡¡¡¡¡¡¡¡¡'+Ti.App.Properties.getString('_cat'));
		});
		btnSignup.addEventListener('click',function(e){
			App.UI.signup.init().open();
		});
		
		return win
		// CODE
		//win.open();
		//menu.open();
		
		
		
	}
};