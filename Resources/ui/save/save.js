/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.save = {
	/**
	 * Initializes the class
	 **/
	init: function() {
		
	// INSTANTIATION
		var style 			= App.UI.save.style;
		var win				= Titanium.UI.createWindow(style.win);
		
		var table 			= Titanium.UI.createTableView();

		
		
	// STYLING
		
		
	// ADDITIONS
		win.add(table);
		
	// CODE
		var dataRows=[];
			
		var section = Titanium.UI.createTableViewSection({headerTitle:"Favorites"});
		section.headerTitle = "Favorites";
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"November 8, Scripture",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"November 8, Wisdom",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"June 23, Alcohol",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"June 7, Drug",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
	
	
		dataRows.push(section);
		
		
		
		table.setData(dataRows);
		
	// LISTENERS
		
		return win;
	}
};