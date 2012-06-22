/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.menu = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
		// INSTANTIATION
		var style 			= App.UI.menu.style;
		App.UI.menu.win		= Ti.UI.createWindow(style.win);
		App.UI.menu.tempWin;
		
		var vwContainer		= Ti.UI.createView(style.vwContainer);
		var vwImage			= Ti.UI.createView(style.vwImage);
		var vwLine			= Ti.UI.createView(style.vwLine);
		var vwImageLogo		= Ti.UI.createView(style.vwImageLogo);
		App.UI.menu.vwOpenClose		= Ti.UI.createView(style.vwOpenClose);
		
		var vmtrueloveFm	= Ti.UI.createView(style.vmtrueloveFm);
		var vwSettings		= Ti.UI.createView(style.vwSettings);
		var vwCalendar		= Ti.UI.createView(style.vwCalendar);
		var vwFavorites		= Ti.UI.createView(style.vwFavorites);
		
		var lbltrueLove		= Ti.UI.createLabel(style.lbltrueLove);
		var lblCalendar		= Ti.UI.createLabel(style.lblCalendar);
		var lblSettings		= Ti.UI.createLabel(style.lblSettings);
		var lblFavorites    = Ti.UI.createLabel(style.lblFavorites);
		
		App.UI.menu.flag='0';
	
		// STYLING
		TL.merge(lbltrueLove,{
			text:'truelove.fm'
		});
		TL.merge(lblCalendar,{
			text:'Calendar'
		});
		TL.merge(lblSettings,{
			text:'Settings'
		});
		TL.merge(lblFavorites,{
			text:'Favorites'
		});
				
		// ADDITIONS
		//vwImage.add()
		
		vmtrueloveFm.add(lbltrueLove);
		vwSettings.add(lblSettings);
		vwCalendar.add(lblCalendar);
		vwFavorites.add(lblFavorites);
		
		vwContainer.add(vwImage);
		vwImage.add(vwImageLogo);
		vwImage.add(vwLine);
		vwImage.add(App.UI.menu.vwOpenClose);
		vwContainer.add(vmtrueloveFm);
		vwContainer.add(vwSettings);
		vwContainer.add(vwCalendar);
		vwContainer.add(vwFavorites);
		
		App.UI.menu.win.add(vwContainer);
				
		// CODE
		
		// LISTENERS
		vwImage.addEventListener('click',function(e){
			
			if(App.UI.menu.flag=='0'){
				
				App.UI.menu.win.animate({bottom:-60,duration:50});
				App.UI.menu.tempWin.animate({height:430,duration:50});
				
				TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
				
				App.UI.menu.flag='1'
			}
			else{
				App.UI.menu.flag='0';
				App.UI.menu.win.animate({bottom:0,duration:100});
				App.UI.menu.tempWin.animate({height:370,duration:100});
				
				TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowClose.png'
				});
			}
			
		});
		vmtrueloveFm.addEventListener('click',function(e){
			//alert('vmtrueloveFm');
			
			App.UI.menu.tempWin.close();
			App.UI.menu.tempWin = App.UI.webpage.init();
			App.UI.menu.tempWin.open();
			
			App.UI.menu.win.animate({bottom:-60,duration:50});
			App.UI.menu.tempWin.animate({height:430,duration:50});
			
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			App.UI.menu.flag='1'
		});
		vwSettings.addEventListener('click',function(e){
			//alert('vwSettings');
			
			App.UI.menu.tempWin.close();
			App.UI.menu.tempWin = App.UI.settings.init();
			App.UI.menu.tempWin.open();
			
			App.UI.menu.win.animate({bottom:-60,duration:50});
			App.UI.menu.tempWin.animate({height:430,duration:50});
			
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			App.UI.menu.flag='1'
		});
		vwCalendar.addEventListener('click',function(e){
			//alert('vwCalendar');
			
			App.UI.menu.tempWin.close();
			App.UI.menu.tempWin = App.UI.calendar.init();
			App.UI.menu.tempWin.open();
			
			App.UI.menu.win.animate({bottom:-60,duration:50});
			App.UI.menu.tempWin.animate({height:430,duration:50});
			
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			App.UI.menu.flag='1'
		});
		vwFavorites.addEventListener('click',function(e){
			//alert('vwFavorites');
			
			App.UI.menu.tempWin.close();
			App.UI.menu.tempWin = App.UI.save.init();
			App.UI.menu.tempWin.open();
			
			App.UI.menu.win.animate({bottom:-60,duration:50});
			App.UI.menu.tempWin.animate({height:430,duration:50});
			
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			App.UI.menu.flag='1'
		});
		
		App.UI.menu.tempWin = App.UI.calendar.init();
		App.UI.menu.tempWin.open();
		App.UI.menu.win.animate({bottom:-60,duration:0});
		App.UI.menu.tempWin.animate({height:430,duration:0});
		App.UI.menu.flag='1'
		return App.UI.menu.win;

		
		
		
		
		
	}
};