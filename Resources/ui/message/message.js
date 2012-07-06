/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.message = {
	/**
	 * Initializes the class
	 **/
	//init: function(_nav,_text,_date,_cat) {
	init: function(_nav,_text,_fromwin) {
		
	// INSTANTIATION
		var style 			= App.UI.message.style;
		var win				= Titanium.UI.createWindow(style.win);
		var backBtn			= Ti.UI.createButton(style.backBtn);
		var favStar			= Ti.UI.createView(style.favStar);
		var share			= Ti.UI.createView(style.share);
		var date			= Ti.UI.createLabel(style.date);
		var type			= Ti.UI.createLabel(style.type);
		var line			= Ti.UI.createView(style.line);
		var scvMsg			= Ti.UI.createScrollView(style.scvMsg);			
		var txtMsg			= Ti.UI.createLabel(style.txtMsg);
		var login 			= Ti.Facebook.createLoginButton(style.login);
		
		var status=0;
		var shareStatus=0;
		var mytextApplication="";
		var dataApp="";
		var dataScripture="";
		var dataFavorites=""
		var x="";
		
		Titanium.Facebook.appid = "404794309570960";
		Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
		

			if(_fromwin=='calendar'){

				if(_text.application){
					for(var i = 0;i < _text.application.length;i++){
						if(_text.application.length>0)
						dataApp=_text.application[0].text;
						mytextApplication='_______________________________'+'\n'+'\n'+_text.application[0].text;
						
					}
				}
				dataScripture=_text.wisdom;
				x=_text.scripture+'\n'+'_______________________________'+'\n'+'\n'+_text.wisdom+'\n'+mytextApplication
			}
			if(_fromwin=='favorites'){
				dataFavorites=_text.text;
				
				Ti.API.info(JSON.stringify(_text));
				x=_text.text;
				
		Ti.API.info(JSON.stringify(_text));
			}	
				
				txtMsg.text=x;
			
		
		
		
	// ADDITIONS
		//win.add(backBtn);
		win.add(favStar);
		win.add(share);
		win.add(date);
		//win.add(type);
		win.add(line);
		win.add(scvMsg);
		scvMsg.add(txtMsg);
		
		//Ti.API.info(txtMsg);
		
	// CODE
			
			// Create a TableView.
		var aTableView = Ti.UI.createTableView({height:175,bottom:-200,scrollable:true});
		
		// Populate the TableView data.
		var data = [
			{title:'Facebook', hasChild:true, color:'blue', header:'Account'},
			{title:'Send SMS', hasChild:true, color:'green'},
			{title:'Send email', hasChild:true, color:'red'},
			{title:'Twitter', hasChild:true, color:'blue'}
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
			if(e.row.title=='Twitter'){
				
				aTableView.top=600;
				var myview= Ti.UI.createView({
					top : 0,
           			 width : 380,
		           	 height : 460,
		             backgroundLeftCap : 100,
		             backgroundTopCap : 100,
			 		 backgroundImage:'/images/view_background.png',
			 		 zIndex : 1000,
				});
				
				var viewBtn=Ti.UI.createButton({
					backgroundImage : '/images/iphone_help_button_cancel.png',
			        backgroundSelectedImage : '/images/iphone_help_button_cancel_pressed.png',
			        font : {
			            fontFamily: 'Knowledge-Bold',
			            fontSize : 12
			        },
			        top : 10,
			        right : 40,
			        height : 35,
			        width : 70,
			        title : 'Cancel'
					
				});
				
				myview.add(viewBtn);
				
				viewBtn.addEventListener('click',function(e){
					myview.hide();
					win.remove(myview);
					myView = null;
					
				});
	
					
					var mydata=  dataApp+dataScripture+dataFavorites;
					
					if(mydata.length > 140){
						mydata = mydata.substring(0, 136).trim() + "...";
					}
					
					Ti.API.info(mydata);
				var mwebview=Ti.UI.createWebView({
					url:"http://twitter.com/home?status="+mydata,
		 			top : 60,
	                width : 300,
	                height : 350
				});
				myview.add(mwebview);
				win.add(myview);
				
			
				
				
				/*
				var module	= require('de.marcelpociot.twitter');
				module.tweet({
					message: 	'Hey, this is some cool tweet!',
					urls: 		['http://www.marcelpociot.de'],
					images:		['http://www.marcelpociot.de/logo.png'],
					succes:		function(){
						alert("Tweet successfully sent");
					},
					cancel:		function(){
						alert("User canceled tweet");
					},
					error:		function(){
						alert("Unable to send tweet");
					}
				});

				*/
			}
			if(e.row.title=='Send email'){
				
				var emailDialog = Ti.UI.createEmailDialog()
				
				
				emailDialog.messageBody = txtMsg.text;
				
				
				emailDialog.open();
			}
			if(e.row.title=='Send SMS'){
				var module = require('com.omorandi');


		//instantiate the module
								
				//create the smsDialog object
				var smsDialog = module.createSMSDialog();
				
				//check if the feature is available on the device at hand
				if (!smsDialog.isSupported())
				{
					//falls here when executed on iOS versions < 4.0 and in the emulator
					var a = Ti.UI.createAlertDialog({title: 'warning', message: 'the required feature is not available on your device'});
					a.show();
				}
				else
				{
					//pre-populate the dialog with the info provided in the following properties
					smsDialog.recipients = [];
					smsDialog.messageBody = "";
					
					//set the color of the title-bar
					smsDialog.barColor = '#2979b0';
					
					//add an event listener for the 'complete' event, in order to be notified about the result of the operation
					smsDialog.addEventListener('complete', function(e){
						//Ti.API.info("Result: " + e.error);
						var a = Ti.UI.createAlertDialog({title: 'complete', message: 'Result: ' + e.error});
						//a.show();
					});
				
					//open the SMS dialog window with slide-up animation
					smsDialog.open({animated: true});
				}
				
				
				
				
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
		
		var arrDate = _text._date.split("-");
		
		if(parseInt(arrDate[1]) > 00)
			var m = months[parseInt(arrDate[1])-1].month
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
		
		
		if(shareStatus==0){
			aTableView.top=250;
			shareStatus=1;
		}
		else{
			aTableView.top=600;
			shareStatus=0;
		}
					
	});
	
	Ti.Facebook.addEventListener('login', function(e) {
		
	    if (e.success) {
	    	Ti.App.Properties.setString('face',"true");
	    	Ti.API.info(111);
	    	if(status==0){
		    	posttoFacebook();
		    	status=1;
	    	}
	    	Ti.API.info(e);
	    } else if (e.error) {
	        alert(e.error);
	    } else if (e.cancelled) {
	       // alert("Canceled");
	    }
	});
	

		favStar.addEventListener("click",function(){
			var insert = {
				id_user:Ti.App.Properties.getInt('idUser'),
				
				text:txtMsg.text,
				date:_text._date
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
				caption:"" ,
				picture: "http://truelove.fm/app/admin/images/logo.png",
				description: txtMsg.text,
				test: [ {foo:'Encoding test', bar:'Durp durp'}, 'test' ]
			};
			
			Titanium.Facebook.requestWithGraphPath('me/feed', data, 'POST', showRequestResult);
			status=0;
		}
		

		backBtn.addEventListener("click",function(){
			_nav.close(win, {animated:true});
		});
		
		return win;
		
		
		
	}
};