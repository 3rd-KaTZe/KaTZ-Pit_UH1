// --------------------------------------------------------------------
// Panel Electric
// --------------------------------------------------------------------

function panel_electric_system(KaTZPit_data){


	// Toutes les données regroupées dans "E_DC_SW"
	// 1- Switch Batterie
	// 2- Switch Stby Gen
	// 3- Switch Non Ess Bus
	// 4- Switch Voltmetre DC (rajouter +5)
	// 5- Non Utilisé
	// 6- Switch Voltmetre AC (rajouter +5)
	// 7- Switch Inverter
	// 8- Switch Pitot
	
	// AC Section ----------------------------------------------------------------------------------------------
	
	// Switch Inverter , Spare/OFF/Main
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==1) {$("#ELEC-Inverter").attr('src','images/Switch-Metal-U2.gif')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==0) {$("#ELEC-Inverter").attr('src','images/Switch-Metal-R2.gif')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==-1) {$("#ELEC-Inverter").attr('src','images/Switch-Metal-D2.gif')}

	
	// Selecteur Voltmetre AC
		var ACV = dataread_posit(KaTZPit_data["E_DC_SW"],6) + 5
		switch_ACVolt(ACV)
		
	
	// DC Section ----------------------------------------------------------------------------------------------
	
	// Switch Batterie, StyGen , NE Bus
		if (dataread_posit(KaTZPit_data["E_DC_SW"],1) ==1) {$("#ELEC-Batterie").attr('src','images/Switch-Metal-U2.gif')} else {$("#ELEC-Batterie").attr('src','images/Switch-Metal-D2.gif')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],2) ==1) {$("#ELEC-StbyGen").attr('src','images/Switch-Metal-U2.gif')} else {$("#ELEC-StbyGen").attr('src','images/Switch-Metal-D2.gif')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],3) ==1) {$("#ELEC-NeBus").attr('src','images/Switch-Metal-U2.gif')} else {$("#ELEC-NeBus").attr('src','images/Switch-Metal-D2.gif')}
		
	// Selecteur Voltmetre DC
		var DCV = dataread_posit(KaTZPit_data["E_DC_SW"],4) + 5
		switch_DCVolt(DCV)	



}

function switch_ACVolt(ac){
	var a_origine = -45
	var a_gain = 45
	
	$("#ELEC-AC-Volt").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*ac)+'deg)',
	})

}

function switch_DCVolt(dc){
	var d_origine = -90
	var d_gain = 45
	
	$("#ELEC-DC-Volt").css({
		'-moz-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
		'-webkit-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
		'-ms-transform':'rotate('+(d_origine+d_gain*dc)+'deg)',
	})

}
