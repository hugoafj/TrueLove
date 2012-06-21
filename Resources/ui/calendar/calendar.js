/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.calendar = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var win 				= Titanium.UI.createWindow({height:370,top:0});
		var style 				= App.UI.calendar.style;
		var win_calendar 		= Titanium.UI.createWindow(style.win_calendar);
		var table 				= Titanium.UI.createTableView();
		
		var nav = Titanium.UI.iPhone.createNavigationGroup({
		   window: win_calendar
		});
		
		
				
	// STYLING
		
		
	// ADDITIONS
		win_calendar.add(table);
		win.add(nav);
		
		
		
	// CODE
	nav.open(win_calendar, {animated:true});
	
	var dataRows=[];
		
	var section = Titanium.UI.createTableViewSection({headerTitle:"JUNIO 2012"});
	section.headerTitle = "JUNIO 2012";
	
	var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
	row.height 	= 60;
	var label 	= Ti.UI.createLabel({text:"23",font:{fontSize:40}, color:"white", left:3, backgroundColor:"gray", width:50, textAlign:"center"});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"Golden Gate",font:{fontSize:18,fontWeight:"bold"}, left:60, top:7});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:60, top:25});
	row.add(label);
	section.add(row);
	
	var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
	row.height 	= 60;
	var label 	= Ti.UI.createLabel({text:"23",font:{fontSize:40}, color:"white", left:3, backgroundColor:"gray", width:50, textAlign:"center"});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"Golden Gate",font:{fontSize:18,fontWeight:"bold"}, left:60, top:7});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:60, top:25});
	row.add(label);
	section.add(row);
	
	var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
	row.height 	= 60;
	var label 	= Ti.UI.createLabel({text:"23",font:{fontSize:40}, color:"white", left:3, backgroundColor:"gray", width:50, textAlign:"center"});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"Golden Gate",font:{fontSize:18,fontWeight:"bold"}, left:60, top:7});
	row.add(label);
	var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:60, top:25});
	row.add(label);
	section.add(row);

	dataRows.push(section);
	
	
	
	table.setData(dataRows);
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		// Handle the XML data.
		//this.responseXML.documentElement;
		//Ti.API.info(this.responseText);
		Ti.API.info(JSON.parse(this.responseText));
	}
	anXhr.onerror = function() {
		alert('The HTTP request failedw');
	}
	
	// Send the request data.
	anXhr.open('GET','http://www.truelove.fm/app/admin/getMessages.php');
	anXhr.send();
	
	
		
	// LISTENERS
	table.addEventListener("click",function(e){
			Ti.API.info(e.index);
			nav.open(App.UI.messages.init(nav), {animated:true});
		});
			
	return win;
		
	}
};