//var busyIndicator = null;
//busyIndicator = new WL.BusyIndicator('appBody');

var data="";
var Pic="";
var id="";
$("#send").on("click",sendData);

var PublicKey="";
var PrivatKey="";
var PassWord="";

function sendData(input){

	var parsed1 = input.Infoclient;
	var parsed2 = input.DetailProperty;
	var parsed3 = input.DetailCredit;
	var arr = [];
	var iForPic=0;
	for(var x in parsed1){
		if(iForPic == 0){
			Pic=parsed1[x];
			iForPic++;
		}
		else{
			arr.push(parsed1[x]);
		}
	}
	for(var x in parsed2){
		  arr.push(parsed2[x]);
		}
	for(var x in parsed3){
		  arr.push(parsed3[x]);
		}
	var str="";
	var i=0;
	for(i=0;i<arr.length;i++)
	{str=str+arr[i]+",";}
	
	id="id-000";
	data=str;
	//busyIndicator.show();
	var invocationData = {
			adapter : 'Main',
			procedure : 'getPublicKey',
			parameters : [],
			compressResponse: true
		};
	
	WL.Client.invokeProcedure(invocationData,{
		timeout : 60000,
		onSuccess : getPublicKeySuccess,
		onFailure : getPublicKeyFailure
	});
}

function getPublicKeySuccess(result){
	WL.Logger.debug("retreive public key success");
	if (result.invocationResult.pubkey != "error")
	{
		PublicKey = result.invocationResult.publickey;
		
		WL.Logger.debug("got public key");
		WL.Logger.debug("generationg secret key ...");
		PassWord=AESGeneratePSW();
		WL.Logger.debug("secret key generated"+PassWord);
		WL.Logger.debug("encrypting data with secret key ...");
		var cypherText = EncryptData(data,PassWord);
		WL.Logger.debug("data encrypted");
		WL.Logger.debug("encrypting secret key with the rsa public key ...");
		var encryptedSKey = Encrypt(PassWord,PublicKey);
		WL.Logger.debug("seecret key encrypted");
		WL.Logger.debug("sending the encrypted data and the encrypted secret key");
		alert(Pic);
		sendEncryptedData(cypherText, encryptedSKey, Pic);
	}
	else {
		//busyIndicator.hide();
		alert("error !");
	}
	
}

function sendEncryptedData(cypherText, encryptedSKey, Pic){
	var invocationData = {
			adapter : 'Main',
			procedure : 'sendData',
			parameters : [id, encryptedSKey , cypherText , Pic],
			compressResponse: true
		};
	
	WL.Client.invokeProcedure(invocationData,{
		timeout : 60000,
		onSuccess : sendEncryptedDataSuccess,
		onFailure : sendEncryptedDataFailure
	});
}

function sendEncryptedDataSuccess(result){
	WL.Logger.debug("Send encrypted data success");
	//busyIndicator.hide();
	if(result.invocationResult.isSuccessful && result.invocationResult.state){
		alert("Data sent successfuly ! ");
	}	
}

function sendEncryptedDataFailure(result){
	WL.Logger.error("Send encrypted data failure");
	//busyIndicator.hide();
	alert("Cannot send the data !");
	/*WL.SimpleDialog.show("Server", "Cannot send data !", 
			[{
				text : 'Reload App',
				handler : WL.Client.reloadApp
			}]);*/
}

function getPublicKeyFailure(result){
	WL.Logger.error("retreive public key failure");
	//busyIndicator.hide();
	alert("Server error !");
	/*WL.SimpleDialog.show("RSA", "Cannot get pblic key !", 
	[{
		text : 'Reload App',
		handler : WL.Client.reloadApp
	}]);*/
}


