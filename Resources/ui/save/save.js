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
		var win 			= Titanium.UI.createWindow({height:430,top:0});
		var win_favs		= Titanium.UI.createWindow(style.win);
		var nav = Titanium.UI.iPhone.createNavigationGroup({
		   window: win_favs
		});
		var title			= Ti.UI.createLabel(style.title);
		var line			= Ti.UI.createView(style.line);
		var table 			= Titanium.UI.createTableView({top:43});

		
		
	// STYLING
		
		
	// ADDITIONS
		win_favs.add(title);
		win_favs.add(line);
		win_favs.add(table);
		win.add(nav);
		
	// CODE
		var months=[];
		months.push({month:"January"});
		months.push({month:"February"});
		months.push({month:"March"});
		months.push({month:"April"});
		months.push({month:"May"});
		months.push({month:"June"});
		months.push({month:"July"});
		months.push({month:"August"});
		months.push({month:"September"});
		months.push({month:"October"});
		months.push({month:"November"});
		months.push({month:"December"});
		
		var dataRows=[];
			
		var section = Titanium.UI.createTableViewSection();
		//section.headerTitle = "Favorites";
		
		var arrResult = App.API.DB.getMessages(Ti.App.Properties.getInt('idUser'),function(_result){
		
			for(var i = 0;i < _result.length;i++){
				var arrDate = _result[i]._date.split("-");
		
				if(parseInt(arrDate[1]) > 00)
					//var m = months[parseInt(arrDate[1])].month+" "+arrDate[2]+", "+_result[i].cat;
					var m = months[parseInt(arrDate[1])-1].month+" "+arrDate[2]+" ";
				else
					//var m = "------- --"+", "+_result[i].cat;
					var m = "------- --";
				var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
				row.height 	= 60;
				var label 	= Ti.UI.createLabel({text:m,font:{fontSize:18,fontWeight:"bold"}, left:6, top:7});
				row.add(label);
				var label 	= Ti.UI.createLabel({text:_result[i].text,font:{fontSize:12}, color:"gray", left:6, top:25});
				row.add(label);
				section.add(row);
			}
		});

	
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
			App.UI.menu.tempWin = App.UI.message.init(nav,arrResult[e.index]);
			App.UI.menu.windows.push({win:App.UI.menu.tempWin,nav:nav});
			//nav.open(App.UI.menu.tempWin, {animated:true});
			//nav.open(App.UI.message.init(nav,arrResult[e.index].text,arrResult[e.index].date,arrResult[e.index].cat), {animated:true});
			Ti.API.info(JSON.stringify(arrResult[e.index]));
			Ti.App.Properties.setString('fromwin', 'favorites');
			//nav.open(App.UI.message.init(nav,arrResult[e.index]), {animated:true});
			nav.open(App.UI.menu.tempWin, {animated:true});

		});
		
		
		return win;
	}
};