function getPublicKey(){
	var getPublicKeyDB = WL.Server.invokeProcedure({
		adapter : 'RSA_getKeys',
		procedure : 'getPublicKey',
		parameters : []
	});
	if(getPublicKeyDB.isSuccessful){
		var publicKey = getPublicKeyDB.resultSet[0].publickey;
		return {state : true, publickey : publicKey};
	}
	return {state : false};
}

function getPrivateKey(){
	var getPrivateKeyDB = WL.Server.invokeProcedure({
		adapter : 'RSA_getKeys',
		procedure : 'getPrivateKey',
		parameters : []
	});
	if(getPrivateKeyDB.isSuccessful){
		var privateKey = getPrvKeyDB.resultSet[0].privatekey;
		return {state : true, privatekey : privateKey};
	}
	return {state : false};
}

function sendData(id, encryptedSKey , cypherText){
	var storeData = WL.Server.invokeProcedure({
		adapter : 'DBStore',
		procedure : 'storeCipherData',
		parameters : [id, encryptedSKey , cypherText]
	});
	
	if(storeData.isSuccessful == true && storeData.updateStatementResult.updateCount == 1)
		return {state : true};
		
	return {state : false};
}

