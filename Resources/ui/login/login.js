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
			autocorrect:false
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
			
			if(txtUser.value==''|| txtPass==''){
				alert('You are missing to add some fields');
			}else if(!filter.test(txtUser.value)){
				alert('Please provide a valid email address');
			}else{
			
				var data = {
    				email: 'Pepe@pepe.com',
    				pass:'pepe2'    				
				};
 
				var xhr = Ti.Network.createHTTPClient({
    				onload: function() {
        			// handle the response
        				Ti.API.info(this.responseText);
    				}
				});
 
				xhr.open('POST','http://www.truelove.fm/app/admin/setLogin.php');
				// optional:
				// blogPost = JSON.stringify(blogPost);
				xhr.send(data);
				
				
				
			}
			
		});
		
		return win
		// CODE
		//win.open();
		//menu.open();
		
		
		
	}
};