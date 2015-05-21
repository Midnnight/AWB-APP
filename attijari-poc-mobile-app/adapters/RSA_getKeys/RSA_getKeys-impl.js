

var getPrivateKeyStatement = WL.Server.createSQLStatement("select privatekey from serverkeys");
function getPrivateKey() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getPrivateKeyStatement,
		parameters : []
	});
}



var getPublicKeyStatement = WL.Server.createSQLStatement("select publickey from serverkeys");
function getPublicKey() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getPublicKeyStatement,
		parameters : []
	});
}

