// --------------------------------------------------------------------
// Panel Demarrage
// --------------------------------------------------------------------


	

function panel_oil_update(KaTZPit_data){	

	//  OIL PANEL
	// Affichage température couleur rouge si < 35°C , Vert = OK
		document.getElementById('O-Deg-G').innerHTML = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])[1]
		if (KaTZPit_data["Oil_L_deg"] < 30){document.getElementById('O-Deg-G').style.color = 'red'}
		else {document.getElementById('O-Deg-G').style.color = 'green'}

		document.getElementById('O-Deg-D').innerHTML = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])[0]
		if (KaTZPit_data["Oil_R_deg"] < 30){document.getElementById('O-Deg-D').style.color = 'red'}
		else {document.getElementById('O-Deg-D').style.color = 'green'}
	
		document.getElementById('O-Deg-GB').innerHTML = dataread_split_2(KaTZPit_data["GB_Oil_deg"])[0]
		if (KaTZPit_data["Oil_G_deg"] < -15){document.getElementById('O-Deg-GB').style.color = 'red'}
		else {document.getElementById('O-Deg-GB').style.color = 'green'}

	// Affichage pressions couleur rouge si < 2.0 kg/cm² , Vert = OK
		document.getElementById('O-Pre-G').innerHTML = ((dataread_split_2(KaTZPit_data["Eng_Oil_pre"])[1])/10).toFixed(1)
		if (KaTZPit_data["Oil_L_pre"] < 20){document.getElementById('O-Pre-G').style.color = 'red'}
		else {document.getElementById('O-Pre-G').style.color = 'green'}
		
		document.getElementById('O-Pre-D').innerHTML = ((dataread_split_2(KaTZPit_data["Eng_Oil_pre"])[0])/10).toFixed(1)
		if (KaTZPit_data["Oil_R_pre"] < 20){document.getElementById('O-Pre-D').style.color = 'red'}
		else {document.getElementById('O-Pre-D').style.color = 'green'}
		
		document.getElementById('O-Pre-GB').innerHTML =((dataread_split_2(KaTZPit_data["GB_Oil_pre"])[0])/10).toFixed(1)
		if (KaTZPit_data["Oil_G_pre"] < 5){document.getElementById('O-Pre-GB').style.color = 'red'}
		else {document.getElementById('O-Pre-GB').style.color = 'green'}
		
		var Temp_Eng = dataread_split_2(KaTZPit_data["Eng_temp"])
		document.getElementById('O-Deg-EG').innerHTML = Temp_Eng[1]
		document.getElementById('O-Deg-ED').innerHTML = Temp_Eng[0]
		
		
}

function Jauge_Fuel(Selection,Qty){

	var s_origine = -100
	var s_gain = 0.2
	
	var f_origine = -90
	var f_gain = 0.18
		
	// Rotation du selecteur de reservoir
	$("#FUEL-Select").css({
		'-moz-transform':'rotate('+(s_origine+s_gain*Selection)+'deg)',
		'-webkit-transform':'rotate('+(f_origine+s_gain*Selection)+'deg)',
		'-ms-transform':'rotate('+(s_origine+s_gain*Selection)+'deg)',
	})
	
	// Rotation de la jauge de Fuel
	$("#FUEL_Aig").css({
		'-moz-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
		'-webkit-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
		'-ms-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
	})

}

