// serverws.ip = "IP MACHINE DCS"; // défaut localhost
// serverws.port = "PORT";	// défaut 9000
// serverws.auto_connect = true;
// serverws.delay = 5000;

var mydata;
var obj;
var mytimer;
var my2timer;
var paneldata = new Array();
var Panel_On = {};
var KaTZPit_data = {};
var Plane_data = {};
var FL_data = {};
var RWY_data = {};
var Weapon_data={};
var Order_List = new Array();
var Cmd_Capot = {};
var CmdDelay;




window.onload = function(){

// Chargement et indication de l'IP et Port
// Sur le panel Emergency
menu_connection(KaTZPit_data)

// Initialisation des Panels affichés
	Panel_On = panel_On_init();
	menu_Toggle("Init")
	
//mytimer = setInterval(main, 200);
}


function main(){

	// Iteration Principale, fréquence fixée dans mytimer
	
	//	Mise à jour du voyant de connection 
	menu_connection(KaTZPit_data)
	
	// INSTRUMENT PANEL ------------------------------------------------
	
	// Mise à jour des cadrans des instruments de vol
	panel_instrument_flight(KaTZPit_data)
	
	// Mise à jour des cadrans des instruments moteur (RPM, Huile)
	panel_instrument_engine(KaTZPit_data)
	
	// Mise à jour des cadrans de données carburant (Fuel)
	panel_instrument_fuel(KaTZPit_data)
	
	// Mise à jour des cadrans de données electrique (AC DC)
	panel_instrument_electric(KaTZPit_data)
	
	// Mise à jour des alarmes
	panel_alarm_update(KaTZPit_data)
	
		
	// SYSTEM PANEL ------------------------------------------------------
	
	// Lancement des subroutines en fonction des panneaux affichés dans le KaKZ_Pit
		
	if (Panel_On["Start"]==1){
	panel_engine_update(KaTZPit_data)
	panel_hydraulic_update(KaTZPit_data)}
	
	if (Panel_On["Electric"]==1){panel_electric_system(KaTZPit_data)}
	
	if (Panel_On["Combat"]==1){
	panel_weapon_system(KaTZPit_data)
	panel_weapon_flare(KaTZPit_data)}
	
	if (Panel_On["Radio_360"]==1){panel_radio_update(KaTZPit_data)}
		
	CmdSend()
}

// Fonction d'affichage des sous Panels, appelée depuis la barre de Launcher

	


// Fonction appelée par appui sur le bouton KaTZ-Pit START
function Pit_Start(plane){
	// Demarrage du Panel par appui sur le bouton Start
	console.log("Demarrage Panel")

	// Initialisation des données KaTZ-Pit
	KaTZPit_data = paneldata_init();
	// Initialisation des données de position de pistes
	RWY_data = RWY_init();
		
	// Initialisation de la Radio
	panel_radio_init(KaTZPit_data);

	// Affichage Initial
	main();
	//paneldata_update(KaTZPit_data)

	// Lancement de la procédure de connection
	serverws_connect();

}


function serverws_Open(){
	// Lancement de la boucle de rafraichissement du KaTZ-Pit
	// Vitesse de Rafraichissement du KaTZ-Pit ----------------------- millisecondes
	mytimer = setInterval(main, 100);
	//my2timer = setInterval(CmdSend(), 200);
}

function serverws_Message(event){

	received_msg = event.data

	// stockage du message sous forme d'objet
	var new_data = JSON.parse(received_msg)
	//console.log("message received",new_data);
	
	var dataref;
	
	// Transfert des données recues dans le tableau KaTZ-Pit_Data
	for (dataref in new_data){
		KaTZPit_data[dataref]=new_data[dataref]
		}
		
	// Si reception d'un Ping sur le canal 8, on répond sur le canal 7
	if (KaTZPit_data["Ping"] != KaTZPit_data["Ping_old"]){
		CmdSiocSpe(7, KaTZPit_data["Ping"])
		KaTZPit_data["Ping_old"] = KaTZPit_data["Ping"]
	}
		
}

function serverws_Close(){
	// Arrêt de la boucle de rafraichissement du KaTZ-Pit
	clearInterval(mytimer);
}

// Envoi de Commande vers Sioc>DCS, Argument Num voir Liste des Commandes DCS 







