
/* JavaScript content from sharedResources/Store.js in folder common */
//Flag create or replace value to store collection
var initstore= 0;

//collections saving notification parameter value
var collections = {
	store : {
		searchFields : {
			name : 'string',
			value : 'boolean'
		}
	}
};

//store saving application language
var collections = {
		langue_store : {
			searchFields : {
				name : 'string',
				value : 'string'
			}
		}
	};


var receiveNotification = [ {
	_id : 0,
	json : {
		name : 'receive',
		value : true
	}
} ];
var soundNotification = [ {
	_id : 1,
	json : {
		name : 'sound',
		value : true
	}
} ];
var lightNotification = [ {
	_id : 2,
	json : {
		name : 'light',
		value : true
	}
} ];

var langue = [ {
	_id : 0,
	json : {
		name : 'langue',
		value : 'arabic'
	}
} ];