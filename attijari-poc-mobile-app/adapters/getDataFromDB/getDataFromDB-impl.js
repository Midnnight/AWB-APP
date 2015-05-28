 
var CImDataStatement = WL.Server.createSQLStatement("select * from demandecreditimmobilier");
function CImData(pubkey) {
	var DemandeCIm = WL.Server.invokeSQLStatement({
		preparedStatement : CImDataStatement,
		parameters : []
	});
	var jsonArr = [];
	var l = DemandeCIm.resultSet.length;
	var i=0;
	var id, cipherkey, cipherMsg, timedate, picbase64, decryptedData;
	
	var AESpassWord = WL.Server.invokeProcedure({
		adapter : 'AES_PSWGeneration',
		procedure : 'AESGeneratePSW',
		parameters : []
	});
	crypted_pswAES = cryptSKeyRSA(pubkey, AESpassWord.passWord)
	jsonArr.push({SK : 	crypted_pswAES.encryptedSKey});
	
	for(i=0;i<l;i++){
		id=			DemandeCIm.resultSet[i].id;
		cipherkey=	DemandeCIm.resultSet[i].cipherkey;
		cipherMsg=	DemandeCIm.resultSet[i].cipherMsg;
		timedate=	DemandeCIm.resultSet[i].timedate;
		picbase64=	DemandeCIm.resultSet[i].picbase64;
		
		decryptedData = dechiffrer(cipherkey, cipherMsg);
		encryptedData = cryptDataAES(decryptedData, AESpassWord.passWord);
		
		jsonArr.push({
			id_client : id,
			demandeCrIm : encryptedData,
			heure : timedate,
			pic : picbase64
			});  
	}
	return {result : jsonArr};
}


function dechiffrer(ckey, cMsg){
	var getPrivateKey;
	var getPrivateKeyDB = WL.Server.invokeProcedure({
		adapter : 'Main',
		procedure : 'getPrivateKey',
		parameters : []
	});
	if(getPrivateKeyDB.state){
		getPrivateKey = getPrivateKeyDB.privatekey;
	}
	var decryptedKey= WL.Server.invokeProcedure({
		adapter : 'RSA_Encryption',
		procedure : 'Decrypt',
		parameters : [ckey , getPrivateKey]
	});
	var decryptedData = WL.Server.invokeProcedure({
		adapter : 'AES_Encryption',
		procedure : 'DecrytData',
		parameters : [cMsg , decryptedKey.plainText]
	});
	
	return decryptedData.plainText;
}


function cryptDataAES(data, AESpassWord){
	
	var encryptedData = WL.Server.invokeProcedure({
		adapter : 'AES_Encryption',
		procedure : 'EncryptData',
		parameters : [data , AESpassWord]
	});
	
	return encryptedData.result;
	
}


function cryptSKeyRSA(publicKey, AESpassWord){
	
	var encryptedSKey = WL.Server.invokeProcedure({
		adapter : 'RSA_Encryption',
		procedure : 'Encrypt',
		parameters : [AESpassWord , publicKey]
	});
	
	return { encryptedSKey : encryptedSKey.resultat};
	
}



