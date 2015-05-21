 
var storeKeysStatement1 = WL.Server.createSQLStatement("insert into devicepublickey values ( ? , ?)");
var storeKeysStatement2 = WL.Server.createSQLStatement("update devicepublickey set publickey = ? where id = ?");
function storeKeys(id,pubk) {
	var exist = IDExist(id);
	if(exist){
		// update the keys in the table with the new ones
		return WL.Server.invokeSQLStatement({
			preparedStatement : storeKeysStatement2,
			parameters : [pubk,id]
		});
	}
	else{
		// insert a new line in the table for the new detected device 
		return WL.Server.invokeSQLStatement({
			preparedStatement : storeKeysStatement1,
			parameters : [id,pubk]
		});
	}
}

var storeCipherDataStatement = WL.Server.createSQLStatement("insert into cipherdata values ( ? , ? , ? , now() ) ");
function storeCipherData(id, cipherkey, cipherMsg) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : storeCipherDataStatement,
		parameters : [id, cipherkey, cipherMsg]
	});
}



var SelectAllStatement = WL.Server.createSQLStatement("select * from devicepublickey");
function SelectAllfromDB() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : SelectAllStatement,
		parameters : []
	});
}

function IDExist(id){
	var DBTable = SelectAllfromDB();
	var l = DBTable.resultSet.length;
	var i=0;
	var exist=false;
	for(i=0;i<l;i++){
		if(DBTable.resultSet[i].id == id){
			exist = true;
			break;
		}
	}
	return exist;
}

var requete="update serverkeys set publickey = ? , privatekey = ? where publickey in (select publickey from (select * from serverkeys) as tempTable)";
var storeServerKeysStatement = WL.Server.createSQLStatement(requete);
function storeServerKeys(publicKey, privatKey){
	return WL.Server.invokeSQLStatement({
		preparedStatement : storeServerKeysStatement,
		parameters : [publicKey, privatKey]
	});
}

