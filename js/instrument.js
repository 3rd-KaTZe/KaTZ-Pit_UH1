// --------------------------------------------------------------------
// Fonction d'Animation des instruments
// --------------------------------------------------------------------

// Classé par ordre alpha

function instrument_ADI(bille,bank,pitch){
	var a_origine = 0
	var bi_gain = -0.02
	var ba_gain = -0.18
	
	var pitch_strech = 2 * pitch
	var pitch_origin = -160
	var pitch_gain = 320
	
	$("#ADI_Bille").css({
		'-moz-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
	})
	
	$("#ADI_Bank").css({
		'-moz-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-ms-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
	})
	
	// expansion compression de la zone Top
	// Top Bleu Clair, on fixe l'origine du "scale down" en haut
	$("#ADI_Pitch_T").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale vertical
	$("#ADI_Pitch_T").css({
	'-moz-transform':'scaleY('+pitch_strech+')',
	'-webkit-transform':'scaleY('+pitch_strech+')',
	'-ms-transform':'scaleY('+pitch_strech+')',
	})
	
	// Translation vers le bas , de la barre d'horizon
	
	$("#ADI_Pitch_C").css({
	'-moz-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-webkit-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-ms-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	})
}



	

	
function instrument_Airspeed(val){
	var a_origine = 0
	var l_gain = 0.34
	
	$("#AIG_Airspeed").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}

function instrument_Altirad(val,Lindex,Hindex){
	var a_origine = 180
	var l_gain = 0.36
	
	$("#AIG_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
	
	$("#LDX_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*Lindex)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*Lindex)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*Lindex)+'deg)',
	})
	
	$("#HDX_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*Hindex)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*Hindex)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*Hindex)+'deg)',
	})
}

function instrument_Altitude(aig1000,aig){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Altitude").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aig)+'deg)',
	})
	
	$("#AIG_Alti1000").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aig1000)+'deg)',
	})
}


function instrument_Bille(aiguille,bille){
	
	var a_origine = 0
	var l_gain = 0.025
	var r_gain = -0.028
	
	$("#AIG_Bille").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
	})

	$("#Bille_Bille").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
	})
}



function instrument_Exhaust(temp){

	var e_origine = 80
	var e_gain = 0.26
	
	$("#AIG_Exhaust").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*temp)+'deg)',
	})
}


function instrument_Fuel(press,qty){

	var origine_1 = 120
	var gain_1 = 0.30
	
	var origine_2 = 200
	var gain_2 = 0.31
	
	$("#AIG_FuelP").css({
		'-moz-transform':'rotate('+(origine_1+gain_1*press)+'deg)',
		'-webkit-transform':'rotate('+(origine_1+gain_1*press)+'deg)',
		'-ms-transform':'rotate('+(origine_1+gain_1*press)+'deg)',
	})
	
	$("#AIG_FuelQ").css({
		'-moz-transform':'rotate('+(origine_2+gain_2*qty)+'deg)',
		'-webkit-transform':'rotate('+(origine_2+gain_2*qty)+'deg)',
		'-ms-transform':'rotate('+(origine_2+gain_2*qty)+'deg)',
	})

}

function instrument_Gas(gas){

	var g_origine = 0
	var g_gain = 0.27
	
	$("#AIG_Gas").css({
		'-moz-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
		'-webkit-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
		'-ms-transform':'rotate('+(g_origine+g_gain*gas)+'deg)',
	})
}

function instrument_HSI(cap,way,route){
	var a_origine = 0
	var a_gain = 1
	
	$("#AN_Rosace").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
	})

	$("#AN_Way").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
	})

	$("#AN_Route").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
	})
}


function instrument_OilPress(Epress,Tpress){

	var origine_1 = 70
	var gain_1 = 0.25
	
	var origine_2 = 160
	var gain_2 = 0.25
	
	$("#AIG_EngP").css({
		'-moz-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
		'-webkit-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
		'-ms-transform':'rotate('+(origine_1+gain_1*Epress)+'deg)',
	})
	
	$("#AIG_TraP").css({
		'-moz-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
		'-webkit-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
		'-ms-transform':'rotate('+(origine_2+gain_2*Tpress)+'deg)',
	})

}


function instrument_OilTemp(Etemp,Ttemp){

	var e_origine = 180
	var e_gain = 0.16
	
	$("#AIG_EngD").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*Etemp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*Etemp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*Etemp)+'deg)',
	})
	
	$("#AIG_TraD").css({
		'-moz-transform':'rotate('+(e_origine+e_gain*Ttemp)+'deg)',
		'-webkit-transform':'rotate('+(e_origine+e_gain*Ttemp)+'deg)',
		'-ms-transform':'rotate('+(e_origine+e_gain*Ttemp)+'deg)',
	})

}

function instrument_Pitch(val){
	var a_origine = 255
	var l_gain = 0.21
	
	$("#AIG_Pitch").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}


// Rotation des aiguilles moteurs (left, right), avions Russes
// Le gain est ajusté pour faire correspondre 
// le placement de l'aiguille avec la valeur exacte

function instrument_RPM2(eng,rotor){
	var a_origine = -150
	
	var l_gain = 0.28
	var r_gain = 0.28 
	
	$("#AIG_RPM_Eng").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*eng)+'deg)',
	})

	$("#AIG_RPM_Rot").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*rotor)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*rotor)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*rotor)+'deg)',
	})
}	

function instrument_Torque(tor){
		
	var t_origine = 160
	var t_gain = 0.27
	
	$("#AIG_Torque").css({
		'-moz-transform':'rotate('+ (t_origine + t_gain * tor)+'deg)',
		'-webkit-transform':'rotate('+ (t_origine + t_gain * tor)+'deg)',
		'-ms-transform':'rotate('+ (t_origine + t_gain * tor)+'deg)',
	})
}

function instrument_Vario(val){
	
	var a_origine = -90
	// Valeur brute 1000 >> -30m/s >> 180°
	var l_gain = 0.18
	
	$("#AIG_Vario").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}

function instrument_Volt(ac,dc){

	var origine_1 = -50
	var gain_1 = 0.12
	
	var origine_2 = -60
	var gain_2 = 0.14
	
	$("#AIG_VoltAC").css({
		'-moz-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
		'-webkit-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
		'-ms-transform':'rotate('+(origine_1+gain_1*ac)+'deg)',
	})
	
	$("#AIG_VoltDC").css({
		'-moz-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
		'-webkit-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
		'-ms-transform':'rotate('+(origine_2+gain_2*dc)+'deg)',
	})

}













	
