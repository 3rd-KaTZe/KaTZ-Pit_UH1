// --------------------------------------------------------------------
// Connection Panel et Toggle Panel
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){

	// Gestion des Alarmes
	// Voyent Master warning
	if (KaTZPit_data["Master_Warn"] ==1) {$("#VE_Alarm").fadeIn()} else {$("#VE_Alarm").fadeOut()}
	
	
	// Debug
	// Affichage des Valeurs tests affichées sous le bouton marche
	var total_error = total_error + KaTZPit_data["Error"]
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
	
	
}


function menu_Toggle(panel){
	
	// Toggle de la valeur du panel à changer 0>1 et 1>0
	Panel_On[panel] = (Panel_On[panel]+1) % 2
	console.log(panel," = ",Panel_On[panel])
	
	// Affichage des différents panneaux en fonction de leur valeur dans la liste "Panel_On"	
	
	if (Panel_On["Rotor"] == 0) {document.getElementById("Panel_Rotor").style.display = "none"}
	else {document.getElementById("Panel_Rotor").style.display = "block"}
	
	
	// Panel Hydro and Engine regroupé sous Start
	if (Panel_On["Start"] == 0) {
	document.getElementById("Panel_Engine").style.display = "none"
	document.getElementById("Panel_Hydro").style.display = "none"}
	else {
	document.getElementById("Panel_Engine").style.display = "block"
	document.getElementById("Panel_Hydro").style.display = "block"}
	
	// Panel AC and DC regroupé sous Electric
	if (Panel_On["Electric"] == 0) {
	document.getElementById("Panel_AC").style.display = "none"
	document.getElementById("Panel_DC").style.display = "none"}
	else {
	document.getElementById("Panel_AC").style.display = "block"
	document.getElementById("Panel_DC").style.display = "block"}

	// Panel Weapon et Flare regroupé sous Combat
	if (Panel_On["Combat"] == 0) {
	document.getElementById("Panel_Armement").style.display = "none"
	document.getElementById("Panel_Flare").style.display = "none"}
	else {
	document.getElementById("Panel_Armement").style.display = "block"
	document.getElementById("Panel_Flare").style.display = "block"}
	
	// Panel Radio-TS
	if (Panel_On["Radio_360"] == 0) {document.getElementById("Panel_Radio").style.display = "none"}
	else {document.getElementById("Panel_Radio").style.display = "block"}
	
	// CheckList
	if (Panel_On["CheckList"] == 0) {document.getElementById("Check_List").style.display = "none"}
	else {document.getElementById("Check_List").style.display = "block"}

	

	
}	