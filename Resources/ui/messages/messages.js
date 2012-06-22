/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.messages = {
	/**
	 * Initializes the class
	 **/
	init: function(_nav,_data) {
		
	// INSTANTIATION
		var style 			= App.UI.messages.style;
		var win				= Titanium.UI.createWindow(style.win);
		
		var table 			= Titanium.UI.createTableView();

		
		
	// STYLING
		
		
	// ADDITIONS
		win.add(table);
		
	// CODE
		var dataRows=[];
			
		var section = Titanium.UI.createTableViewSection({headerTitle:_data.topic});
		section.headerTitle = _data.topic;
		
		if(_data.scripture && _data.scripture.length > 1){
			var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
			row.height 	= 60;
			var label 	= Ti.UI.createLabel({text:"Scripture",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
			row.add(label);
			var label 	= Ti.UI.createLabel({text:_data.scripture,font:{fontSize:12}, color:"gray", left:6, top:25});
			row.add(label);
			section.add(row);
		}
		
		if(_data.wisdom && _data.wisdom.length > 1){
			var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
			row.height 	= 60;
			var label 	= Ti.UI.createLabel({text:"Wisdom",font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
			row.add(label);
			var label 	= Ti.UI.createLabel({text:_data.wisdom,font:{fontSize:12}, color:"gray", left:6, top:25});
			row.add(label);
			section.add(row);
		}
		
		for(var i = 0;i < _data.application.length;i++){
			var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
			row.height 	= 60;
			var label 	= Ti.UI.createLabel({text:_data.application[i].name,font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
			row.add(label);
			var label 	= Ti.UI.createLabel({text:_data.application[i].text,font:{fontSize:12}, color:"gray", left:6, top:25});
			row.add(label);
			section.add(row);
		}
	
		dataRows.push(section);
		
		
		
		table.setData(dataRows);
		
	// LISTENERS 
		table.addEventListener("click",function(e){
			App.UI.menu.flag='1';
			App.UI.menu.tempWin.animate({height:430,duration:50});
			TL.merge(App.UI.menu.vwOpenClose,{
					backgroundImage:'/images/arrowOpen.png'
				});
			App.UI.menu.win.animate({bottom:-60,duration:50});
			if(e.index == 0)
				_nav.open(App.UI.message.init(_nav,_data.scripture,_data._date,"Scripture"), {animated:true});
			else if(e.index == 1)
				_nav.open(App.UI.message.init(_nav,_data.wisdom,_data._date,"Wisdom"), {animated:true});
			else
				_nav.open(App.UI.message.init(_nav,_data.application[0].text,_data._date,_data.application[0].name), {animated:true});
		});
		
		return win;
	}
};