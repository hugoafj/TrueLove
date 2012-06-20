/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.share = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style 			= App.UI.share.style;
	
		var win_share 		= Titanium.UI.createWindow(style.win_share);
		var tab_share 		= Titanium.UI.createTab(style.tab_share);
		var label3 			= Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 3',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
	// STYLING
		TL.merge(tab_share, {
			window:win_share
		});
		
	// ADDITIONS
		win_share.add(label3);
		
	// CODE
		
	// LISTENERS
		
		
		
		return tab_share;
	}
};