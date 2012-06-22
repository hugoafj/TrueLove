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
			
		// Create an HTTPClient.
		var anXhr = Ti.Network.createHTTPClient();
		anXhr.setTimeout(10000);
		
		var months=[];
		months.push({month:"JANUARY"});
		months.push({month:"FEBRUARY"});
		months.push({month:"MARCH"});
		months.push({month:"APRIL"});
		months.push({month:"MAY"});
		months.push({month:"JUNE"});
		months.push({month:"JULY"});
		months.push({month:"AUGUST"});
		months.push({month:"SEPTEMBER"});
		months.push({month:"OCTOBER"});
		months.push({month:"NOVEMBER"});
		months.push({month:"DECEMEBER"});
		// Define the callback.
		var data;
		anXhr.onload = function() {
			// Handle the XML data.
			data = JSON.parse(this.responseText);
			//Ti.API.info(JSON.stringify(data));
			var myDate = "";
			var tempSection;
			for(var i = 0;i < data.length;i++){
				//Ti.API.info(data[i]._date);
				var arrDate = data[i]._date.split("-");
				//Ti.API.info(JSON.stringify(arrDate));
				if(parseInt(arrDate[1]) > 00)
					var m = months[parseInt(arrDate[1])].month
				else
					var m = "-------";
				
				//Ti.API.info(myDate+" ::: "+m+" "+arrDate[0]);
				if(myDate != m+" "+arrDate[0]){
					if(myDate != "")
						dataRows.push(tempSection);
					myDate = m+" "+arrDate[0];
					tempSection = Titanium.UI.createTableViewSection({headerTitle:myDate});
					tempSection.headerTitle = myDate;
				}
				
				var row		= Titanium.UI.createTableViewRow({backgroundColor:'white', hasChild:true});
				row.height 	= 60;
				var label 	= Ti.UI.createLabel({text:arrDate[2],font:{fontSize:40}, color:"white", left:3, backgroundColor:"gray", width:50, textAlign:"center"});
				row.add(label);
				var label 	= Ti.UI.createLabel({text:data[i].topic,font:{fontSize:18,fontWeight:"bold"}, left:60, top:7});
				row.add(label);
				var label 	= Ti.UI.createLabel({text:data[i].scripture,font:{fontSize:12}, color:"gray", left:60, top:25});
				row.add(label);
				tempSection.add(row);
				
			}
			dataRows.push(tempSection);
			table.setData(dataRows);
			
		}
		anXhr.onerror = function() {
			alert('The HTTP request failedw');
		}
		
		// Send the request data.
		anXhr.open('GET','http://www.truelove.fm/app/admin/getMessages.php');
		anXhr.send();
			
		
	// LISTENERS
		table.addEventListener("click",function(e){
			//Ti.API.info(data[e.index].application);
			nav.open(App.UI.messages.init(nav,data[e.index]), {animated:true});
		});
			
	return win;
		
	}
};