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
		var win				= Ti.UI.createWindow(style.win);
		var tempWin;
		
		var vwContainer		= Ti.UI.createView(style.vwContainer);
		var vwImage			= Ti.UI.createView(style.vwImage);
		var vwLine			= Ti.UI.createView(style.vwLine);
		var vwImageLogo		= Ti.UI.createView(style.vwImageLogo);
		var vwOpenClose		= Ti.UI.createView(style.vwOpenClose);
		
		var vmtrueloveFm	= Ti.UI.createView(style.vmtrueloveFm);
		var vwSettings		= Ti.UI.createView(style.vwSettings);
		var vwCalendar		= Ti.UI.createView(style.vwCalendar);
		var vwFavorites		= Ti.UI.createView(style.vwFavorites);
		
		var lbltrueLove		= Ti.UI.createLabel(style.lbltrueLove);
		var lblCalendar		= Ti.UI.createLabel(style.lblCalendar);
		var lblSettings		= Ti.UI.createLabel(style.lblSettings);
		var lblFavorites    = Ti.UI.createLabel(style.lblFavorites);
		
		var flag='0';
	
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
		vwImage.add(vwOpenClose);
		vwContainer.add(vmtrueloveFm);
		vwContainer.add(vwSettings);
		vwContainer.add(vwCalendar);
		vwContainer.add(vwFavorites);
		
		win.add(vwContainer);
				
		// CODE
		
		// LISTENERS
		vwImage.addEventListener('click',function(e){
			
			if(flag=='0'){
				
				win.animate({bottom:-60,duration:50});
				tempWin.animate({height:430,duration:50});
				
				TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
				
				flag='1'
			}
			else{
				flag='0';
				win.animate({bottom:0,duration:100});
				tempWin.animate({height:370,duration:100});
				
				TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowClose.png'
				});
			}
			
		});
		vmtrueloveFm.addEventListener('click',function(e){
			//alert('vmtrueloveFm');
			
			tempWin.close();
			tempWin = App.UI.webpage.init();
			tempWin.open();
			
			win.animate({bottom:-60,duration:50});
			tempWin.animate({height:430,duration:50});
			
			TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			flag='1'
		});
		vwSettings.addEventListener('click',function(e){
			//alert('vwSettings');
			
			tempWin.close();
			tempWin = App.UI.settings.init();
			tempWin.open();
			
			win.animate({bottom:-60,duration:50});
			tempWin.animate({height:430,duration:50});
			
			TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			flag='1'
		});
		vwCalendar.addEventListener('click',function(e){
			//alert('vwCalendar');
			
			tempWin.close();
			tempWin = App.UI.calendar.init();
			tempWin.open();
			
			win.animate({bottom:-60,duration:50});
			tempWin.animate({height:430,duration:50});
			
			TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			flag='1'
		});
		vwFavorites.addEventListener('click',function(e){
			//alert('vwFavorites');
			
			tempWin.close();
			tempWin = App.UI.save.init();
			tempWin.open();
			
			win.animate({bottom:-60,duration:50});
			tempWin.animate({height:430,duration:50});
			
			TL.merge(vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			
			flag='1'
		});
		
		tempWin = App.UI.calendar.init();
		tempWin.open();
		win.animate({bottom:-60,duration:0});
		tempWin.animate({height:430,duration:0});
		flag='1'
		return win;

		
		
		
		
		
	}
};