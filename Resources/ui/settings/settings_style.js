/*
 * Hugo FLores <hugoafj@gmail.com>
 * june 14, 2012
 */
App.UI.settings.style = {
  PORTRAIT: {},
  LANDSCAPE: {},
	win: {  
	    title:'Save',
	    backgroundColor:'white',
	    navBarHidden:true,
	    zIndex:0,
	    height:370,
	    top:0,
	    layout:'vertical'
	},
	btnLogout:{
		height:40,
		width:200,
		top:46,
		borderColor:'black',
		borderRadius:14,
		borderWidth:2,
		color:'black',
		font:{fontSize:20, fontWeight:'bold',fontFamily:'monospace'}
	},
	btnCategory:{
		height:40,
		width:200,
		top:25,
		borderColor:'black',
		borderRadius:14,
		borderWidth:2,
		color:'black',
		font:{fontSize:20, fontWeight:'bold',fontFamily:'monospace'}
	},
	vwPicker:{
		zIndex: 2,
		height:251,
		top:280
	},
	picker:{
		top:43		
	},
	toolbar:{
		top:0
	},
	vwline:{
		left:10,
		right:10,
		height:1,
		//backgroundColor:'black',
		setBackgroundRepeat:true,
		top:15,
		backgroundImage:'/images/dotedLine.png'
	},
	backBtn:{
		height:24,
		width:70,
		top:8,
		left:10,
		borderColor:'black',
		borderRadius:14,
		borderWidth:2,
		color:'black',
		font:{fontSize:15, fontWeight:'bold',fontFamily:'monospace'},
		title:"close"
	},
	title:{
		text:'Settings',
		top:10,
		font:{fontSize:18,fontWeight:"bold"}
	},
	line:{
		backgroundColor:"black",
		height:1,
		left:10,
		right:13,
		top:36
	}	
};