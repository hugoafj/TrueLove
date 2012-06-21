/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.messages = {
	/**
	 * Initializes the class
	 **/
	init: function(_nav) {
		
	// INSTANTIATION
		var style 			= App.UI.messages.style;
		var win				= Titanium.UI.createWindow(style.win);
		
		var table 			= Titanium.UI.createTableView();

		
		
	// STYLING
		
		
	// ADDITIONS
		win.add(table);
		
	// CODE
		var dataRows=[];
			
		var section = Titanium.UI.createTableViewSection({headerTitle:"Golden State"});
		section.headerTitle = "Golden State";
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"Scripture",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"Wisdom",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"Alcohol",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"Drug",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
		
		var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
		row.height 	= 60;
		var label 	= Ti.UI.createLabel({text:"Purity",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
		row.add(label);
		var label 	= Ti.UI.createLabel({text:"I tell you the truth, he who hears my word, and believes him who sent me, has eternal life, and does not come into judgment, but has passed out of death and has come into life eternal.",font:{fontSize:12}, color:"gray", left:6, top:25});
		row.add(label);
		section.add(row);
	
	
		dataRows.push(section);
		
		
		
		table.setData(dataRows);
		
	// LISTENERS 
	table.addEventListener("click",function(e){
			Ti.API.info(e.index);
			_nav.open(App.UI.message.init(_nav), {animated:true});
		});
		
		return win;
	}
};