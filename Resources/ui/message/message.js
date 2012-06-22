/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.message = {
	/**
	 * Initializes the class
	 **/
	init: function(_nav,_text,_date,_cat) {
		
	// INSTANTIATION
		var style 			= App.UI.message.style;
		var win				= Titanium.UI.createWindow(style.win);
		var favStar			= Ti.UI.createView(style.favStar);
		var share			= Ti.UI.createView(style.share);
		var date			= Ti.UI.createLabel(style.date);
		var type			= Ti.UI.createLabel(style.type);
		var line			= Ti.UI.createView(style.line);
		var scvMsg			= Ti.UI.createScrollView(style.scvMsg);			
		var txtMsg			= Ti.UI.createLabel(style.txtMsg);
		var login 			= Ti.Facebook.createLoginButton(style.login);
		var status=0;
		
		Titanium.Facebook.appid = "404794309570960";
		Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
		
	// STYLING
		TL.merge(type,{
			text:_cat
		});
		TL.merge(txtMsg,{
			text:_text
		});
		
	// ADDITIONS
		win.add(favStar);
		win.add(share);
		win.add(date);
		win.add(type);
		win.add(line);
		win.add(scvMsg);
		scvMsg.add(txtMsg);
		
		Ti.API.info(txtMsg);
		
	// CODE
			
			// Create a TableView.
		var aTableView = Ti.UI.createTableView({height:175,bottom:-200,scrollable:false});
		
		// Populate the TableView data.
		var data = [
			{title:'Facebook', hasChild:true, color:'blue', header:'Account'}
			];
		aTableView.setData(data);
		
		// Listen for click events.
		aTableView.addEventListener('click', function(e) {
			//alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
			//aTableView.setBottom(-100);
			//if(status)
			if(e.row.title=='Facebook'){
				aTableView.top=600;
				if(Ti.App.Properties.getString('face') == "false")
					Ti.Facebook.authorize();
				else
					posttoFacebook();
				//status='true';
			}
			
		});
		
		// Add to the parent view.
		win.add(aTableView);
		
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
		
		var arrDate = _date.split("-");
		
		if(parseInt(arrDate[1]) > 00)
			var m = months[parseInt(arrDate[1])].month
		else
			var m = "-------";
			
		TL.merge(date,{
			text:m+" "+arrDate[2]
		});
		
	
	
		function showRequestResult(e) {
			Ti.API.info(333);
			//status=0;
			var s = '';
			if (e.success) {
				s = "SUCCESS";
				if (e.result) {
					s += "; " + e.result;
					alert('The message was posted on Facebook');
				}
				if (e.data) {
					s += "; " + e.data;
				}
				if (!e.result && !e.data) {
					s = '"success", but no data from FB.  I am guessing you cancelled the dialog.';
				}
			} else if (e.cancelled) {
				s = "CANCELLED";
			} 
			
			else {
				s = "FAIL";
				if (e.error) {
					s += "; " + e.error;
					alert('There was an error posting\n the message on Facebook');
				}
			}
			//alert(s);
		}

		
		
	// LISTENERS 

	share.addEventListener('click', function() {
		
		aTableView.top=250;
				
	});
	
	Ti.Facebook.addEventListener('login', function(e) {
	    if (e.success) {
	    	Ti.App.Properties.setString('face',"true");
	    	Ti.API.info(111);
	    	if(status==0){
		    	posttoFacebook();
		    	status=1;
	    	}
	    	//status++;
	    } else if (e.error) {
	        alert(e.error);
	    } else if (e.cancelled) {
	       // alert("Canceled");
	    }
	});
	

		favStar.addEventListener("click",function(){
			var insert = {
				id_user:Ti.App.Properties.getInt('idUser'),
				cat:_cat,
				text:_text,
				date:_date
			};
			var lastID=App.API.DB.insertRecord(insert,function(){});
			if(lastID > 0)
				alert("Message save into Favorites");
			else
				alert("Please try again");
		});
		
		function posttoFacebook(){
			
			var data = {
				link: "http://truelovefm.com/",
				name: "Truelove.fm",
				message: "Download the application truelove",
				caption:_cat ,
				picture: "http://truelove.fm/app/admin/images/logo.png",
				description: _text,
				test: [ {foo:'Encoding test', bar:'Durp durp'}, 'test' ]
			};
			Ti.API.info(222);
			Titanium.Facebook.requestWithGraphPath('me/feed', data, 'POST', showRequestResult);
			status=0;
		}
		

		
		return win;
		
		
		
	}
};