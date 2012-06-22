/*
 * TrueLove API DataBase Module
 * Hugo FLores <harmando@itexio.com>
 * June 21, 2012
 */
App.API.DB = {
	/**
	* Initializes the DB
	* @param function [_callback] funtion to execute after call
	**/
	init: function(_callback) {
		
		var db = Ti.Database.open('TrueLove_DB');
		db.execute('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, cat TEXT, text TEXT, date TEXT, id_user INTEGER );');
		db.close();

		_callback();
		/*
		var insert = {
			id_user:1,
			cat:"Alcohol",
			text:"asasas sas asas asasas as a s a sasasasasa sasas asasas asasas asa sa s as as asasasa s as",
			date:"2012-06-21"
		};
		var lastID=App.API.DB.insertRecord(insert,function(){});
		
		Ti.API.info("lastID: "+lastID);
		App.API.DB.getMessages(1,function(_result){Ti.API.info(JSON.stringify(_result));});
		*/
	},
	/**
	 * insertRecord called to insert new message
	 * @param array [_insert] data of the message to insert
	 * @param function [_callback] funtion to execute after call
	 **/
	insertRecord: function(_insert,_callback) {
		
		var db = Ti.Database.open('TrueLove_DB');
		db.execute('INSERT INTO messages (cat,text,date,id_user) VALUES (?,?,?,?)', _insert.cat, _insert.text, _insert.date, _insert.id_user);
		var lastID = db.lastInsertRowId;
		db.close();
		
		_callback();
		
		return lastID;
		 
	},
	/**
	 * deleteRecord called to delete a message
	 * @param int [_id] message id
	 * @param function [_callback] funtion to execute after call
	 **/
	deleteRecord: function(_id,_callback) {
		
		var db = Ti.Database.open('TrueLove_DB');
		db.execute('DELETE FROM messages WHERE id=?', _id);

		db.close();
		
		_callback();
		 
	},
	/**
	 * getMessages called to get the message for an account
	 * @param string [_id] user token account
	 * @param function [_callback] funtion to execute after call
	 **/
	getMessages: function(_id,_callback) {
		
		var db = Ti.Database.open('TrueLove_DB');
		var result = db.execute('SELECT * FROM messages WHERE id_user=?',_id);
		var messagesArr = [];
		while (result.isValidRow())
		{
			messagesArr.push({
	      		id:result.fieldByName('id'),
				cat:result.fieldByName('cat'),
				text:result.fieldByName('text'),
				date:result.fieldByName('date'),
				id_user:result.fieldByName('id_user')
			});
		  
		  	result.next();
		}
		result.close();
		
		db.close();
		
		_callback(messagesArr);
		
		return messagesArr;
		 
	}
	
};



