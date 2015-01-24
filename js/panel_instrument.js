// --------------------------------------------------------------------
// Panel Analogique du UH-1
// --------------------------------------------------------------------

// fonctions de gestion des instruments dans "instrument.js"

function panel_instrument_flight(KaTZPit_data){
	
		// Animation des jauges instrument de vol-------------------------------------------------------------------
		
		// Badin et Vario	
		instrument_Airspeed(KaTZPit_data["IAS"])
		instrument_Vario(KaTZPit_data["Vario"])
		
		// Altimetre Baro , 2 aiguilles  -------------------------------------------------------------
		var QNH_Aig = dataread_split_2(KaTZPit_data["QNH"])
		instrument_Altitude(QNH_Aig[1],QNH_Aig[0])

		
		// Altirad ------------------------------------------------------------------------------------
		// xxAB , où A = Flag Low Alti , B = Flag On
		var Altirad_index = dataread_split_2(KaTZPit_data["AltiRad_DX"])

		// Alarme Low Alti (deuxième digit des 
		if (dataread_posit(KaTZPit_data["AltiRad_FI"],2) == 1) {$("#Low_Altirad").fadeIn()} else {$("#Low_Altirad").fadeOut()}
		if (dataread_posit(KaTZPit_data["AltiRad_FI"],3) == 1) {$("#Hi_Altirad").fadeIn()} else {$("#Hi_Altirad").fadeOut()}
		
		//console.log(Altirad_index[0],Altirad_index[1])
		// Positionnement des Index
		instrument_Altirad(KaTZPit_data["QFE"],Altirad_index[0],Altirad_index[1] )

		// Gestion de l'affichage numérique de l'altitude radar
		if (dataread_posit(KaTZPit_data["AltiRad_D"],8) + 5  == 0) {
			document.getElementById('Val_Altirad1').style.display = "block"
			document.getElementById('Val_Altirad1').innerHTML = dataread_posit(KaTZPit_data["AltiRad_D"],7)+5}
		else {	
			document.getElementById('Val_Altirad1').style.display = "none"}
		
		
		if (dataread_posit(KaTZPit_data["AltiRad_D"],6) +5 == 0) {
			document.getElementById('Val_Altirad2').style.display = "block"
			document.getElementById('Val_Altirad2').innerHTML = dataread_posit(KaTZPit_data["AltiRad_D"],5)+5}
		else {	
			document.getElementById('Val_Altirad2').style.display = "none"}

		if (dataread_posit(KaTZPit_data["AltiRad_D"],4) +5  == 00) {
			document.getElementById('Val_Altirad3').style.display = "block"
			document.getElementById('Val_Altirad3').innerHTML = dataread_posit(KaTZPit_data["AltiRad_D"],3)+5 }
		else {	
			document.getElementById('Val_Altirad3').style.display = "none"}

		if (dataread_posit(KaTZPit_data["AltiRad_D"],2)+ 5 == 1) {
			document.getElementById('Val_Altirad4').style.display = "none"}

		else {	
			document.getElementById("Val_Altirad4").style.display = "block"
			document.getElementById('Val_Altirad4').innerHTML = dataread_posit(KaTZPit_data["AltiRad_D"],1)+5}

		
		// Cadran Bille et Side Split  ---------------------------------------------------------------
		var SpeedSplit = dataread_split_2(KaTZPit_data["EUP"])
		instrument_Bille(SpeedSplit[1], SpeedSplit[0])
		
		// Rotation HSI   --------------------------------------------------------------------------
		var i_Cap = 360 - KaTZPit_data["Cap"]/10
		var i_Way = (KaTZPit_data["Way"]/10)
		var i_Route = (KaTZPit_data["Route"]/10)
		instrument_HSI(i_Cap, i_Way, i_Route)	
			
		// ADI  -------------------------------------------------------------------------------------
		var ADI_Pitch = KaTZPit_data["Pitch"]
		
		// Calcul de variation de l'horizon artificiel range 0% à 100%
		var ADI_Pitch_A = Math.min(Math.max((ADI_Pitch + 200) / 400,0),1)
		
		document.getElementById('ADI_Pitch_V1').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
		document.getElementById('ADI_Pitch_V2').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
			
		instrument_ADI(SpeedSplit[0],KaTZPit_data["Bank"],ADI_Pitch_A)
		
}

		
		
function panel_instrument_engine(KaTZPit_data){

		//RPM Rotor et Moteur -----------------------------------------------------------------------
		var RPM_Eng = dataread_split_2(KaTZPit_data["Eng_rpm"])
		// Rotation de l'aiguille Moteur et de l'aiguille Rotor
		instrument_RPM2(RPM_Eng[1],KaTZPit_data["RPM_Rot"])
		
		// Paremètres Turbine à Gaz
		instrument_Torque(dataread_split_2(KaTZPit_data["TorGas"])[1])
		instrument_Gas(dataread_split_2(KaTZPit_data["TorGas"])[0])
		instrument_Exhaust(dataread_split_2(KaTZPit_data["ExhTemp"])[0])
		
		// Animation des cadrans de Parametre Huile
		// Variables : 250,Eng_Oil_deg,1 + 255,GB_Oil_deg,1 + 260,Eng_Oil_pre,1 + 265,GB_Oil_pre,1

		var EngOT = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])[1]
		var TransOT = dataread_split_2(KaTZPit_data["GB_Oil_deg"])[0]
		// Cadrans des températures huile moteur et transmission (même type de cadran)
		instrument_OilTemp(EngOT,TransOT)
		
		var EngOP = dataread_split_2(KaTZPit_data["Eng_Oil_pre"])[1]
		var TransOP = dataread_split_2(KaTZPit_data["GB_Oil_pre"])[0]
		// Cadrans des pressions huile moteur et transmission
		instrument_OilPress(EngOP,TransOP)

}

function panel_instrument_fuel(KaTZPit_data){

		// Variable : Fuel_AV
		var FuelP = dataread_split_2(KaTZPit_data["Fuel_AV"])[1]
		var FuelQ = dataread_split_2(KaTZPit_data["Fuel_AV"])[0]
		// Cadrans Pression et Quantité Fuel
		instrument_Fuel(FuelP,FuelQ)
}

function panel_instrument_electric(KaTZPit_data){
		var VoltAC = dataread_split_2(KaTZPit_data["ACDC_volt"])[1]
		var VoltDC = dataread_split_2(KaTZPit_data["ACDC_volt"])[0]
		// Voltmetres AC et DC
		instrument_Volt(VoltAC,VoltDC)
}



function panel_rotor_update(KaTZPit_data){		
		// TEMPORAIRE ROTOR PANEL
		// IAS en "km/h"
		// Echelle non linéaire conveti par la fonction IAS_L() de function_convert_scale.js
		document.getElementById('IAS_0').innerHTML = IAS_L(KaTZPit_data["IAS"]).toFixed(0)
		
		document.getElementById('Vario_0').innerHTML = Vario_L(KaTZPit_data["Vario"]).toFixed(1)
		
		// Pitch en degré
		// Echelle non linéaire conveti par la fonction RotorPitch() de function_convert_scale.js
		document.getElementById('RPM_Rot').innerHTML = KaTZPit_data["RPM_Rot"]
		document.getElementById('Pitch_Rot').innerHTML = RotorPitch(KaTZPit_data["Pitch_Rot"]).toFixed(1)	

		// Valeur en test
		document.getElementById('Test_val').innerHTML = KaTZPit_data["Start_Sel"]	
		
		if (IAS_L(KaTZPit_data["IAS"]) > 250) {$("#RV-Speed").fadeIn()} else {$("#RV-Speed").fadeOut()}
		if (IAS_L(KaTZPit_data["IAS"]) < 50 && Vario_L(KaTZPit_data["Vario"]) < -5) {$("#RV-Vortex").fadeIn()} else {$("#RV-Vortex").fadeOut()}
		
		
		
}	

