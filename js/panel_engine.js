// --------------------------------------------------------------------
// Panel Engine
// --------------------------------------------------------------------

function panel_engine_update(KaTZPit_data){
	// Flag Divers et Moteur regroupées dans "Eng_Flag"
	// 1- Start Button
	// 2- Force Trim
	// 3- Hydro
	// 4- Lowrpm
	// 5- Fuel
	// 6- Gov Auto
	// 7- DeIce

	if (dataread_posit(KaTZPit_data["Eng_Flag"],4) ==1) {$("#ENG-Audio").attr('src','images/Switch-Metal-U2.gif')} else {$("#ENG-Audio").attr('src','images/Switch-Metal-D2.gif')}
	if (dataread_posit(KaTZPit_data["Eng_Flag"],5) ==1) {$("#ENG-Fuel").attr('src','images/engine/Btn-Sw-MetRed_U.gif')} else {$("#ENG-Fuel").attr('src','images/engine/Btn-Sw-MetRed_D.gif')}
	if (dataread_posit(KaTZPit_data["Eng_Flag"],6) ==1) {$("#ENG-Gov").attr('src','images/Switch-Metal-U2.gif')} else {$("#ENG-Gov").attr('src','images/Switch-Metal-D2.gif')}
	if (dataread_posit(KaTZPit_data["Eng_Flag"],7) ==1) {$("#ENG-Ice").attr('src','images/Switch-Metal-U2.gif')} else {$("#ENG-Ice").attr('src','images/Switch-Metal-D2.gif')}

}













