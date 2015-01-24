var serverws = {
	// IP + Port de la machine qui fait tourner le KaTZ-Link
	ip : "192.168.0.10",
	port : 9000,
	auto_connect : false,   //true,
	delay : 15000,
	socket : null
};
	
var timer = null;


function serverws_connect(){

	console.log("Essai Connection " + serverws.ip + ":" + serverws.port);
	
	// Passage du voyant de connection de rouge >> orange
	$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")

	var url = "ws://" + serverws.ip + ":" + serverws.port + "/";
	serverws.socket = new WebSocket(url);
	
	try {
		serverws.socket.onopen = function() {
			console.log("connection serveur démarrée")
			// fonction dans panel.js
			//Passage du voyant de connection de orange >> vert
			$("#Led_Connect").attr("src","images/emergency/z_Led-Verte.gif")
			serverws_Open();
		} 
		
		serverws.socket.onmessage = function(event) {
	    	//console.log("data received");
	    	// fonction dans panel.js
			serverws_Message(event);
		} 

		serverws.socket.onclose = function(){
			//console.log("connection serveur stoppée")
			// fonction dans panel.js
			console.log("Deconnection du Serveur");
			$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.gif")
			serverws_Close();
			// Fonction de reconnection automatique
			//if(serverws.auto_connect){timer = setTimeout(serverws_connect,serverws.delay);}
		}

		serverws.socket.onerror = function(error){
			console.log("ERREUR connection serveur")
			//console.log("Erreur serveur : ");
			$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.gif")
		}

	} 

	catch(exception) {
		 //console.log("ERREUR connection serveur exception")
		 // fonction dans panel.js
		 serverws_Error(exception);
	}
}


function serverws_send(command){

	if(serverws.socket.readyState==1){
		serverws.socket.send(command);
		console.log("Envoi de la commande _ module serverws_send ..", command);
	}
}



