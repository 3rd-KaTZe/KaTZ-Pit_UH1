// function_convert_scale.js
// Script de convertion des échelles non linéaire en valeurs réelles
// Pour les données en échelle non linéaire
// la valeur dans KaTZ-Pit_Data est la valeur exporté (0-1000 , pour 0.0-1.0)
// On la transforme en valeur réelle pour les affichages numériques
// Pour l'animation de cadran, on utilise directement la valeur exportée
// Les formules de convertion utilisent les données de mainpanel_init.lua


// INUTILISE SUR HUEY UH-1H


function Alti_Rad(val){
	var i_altirad
	
	//A_036_RALT.input					= {0, 100, 300, 800}
	//A_036_RALT.output					= {0.0, 0.475, 0.625, 1.0}
	// basé sur les données BS-mainpanel_init.lua
	// gamme 0-100-300-800
	// pour valeur 0-475-625-1000
	// calcul linéaire sur chaque plage
	if (val<=475) {i_altirad = val / 475 * 100} 
	if (val>475) {i_altirad = 100 + (300-100) / (625-475) * (val-475) }
	if (val>625) {i_altirad = 300 + (800-300) / (1000-625) * (val-625) }
		
	return i_altirad
	
}

function Vario_L(val){
	var i_vario
	
	//Variometer_L.input		= {-30,  -20,   -10,   -5,    -2,    -1,    0, 1,    2,    5,    10,   20,   30}
	//Variometer_L.output		= {-1.0, -0.71, -0.43, -0.23, -0.09, -0.05, 0, 0.05, 0.09, 0.23, 0.43, 0.71, 1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°16
	
	var valabs = Math.abs(val)
	
	if (valabs < 50) {i_vario = val / 50 * 1} 
	if (valabs>50) {i_vario = 1 + (2-1) / (90-50)  * (valabs - 50) }
	if (valabs>90) {i_vario = 2 + (5-2) / (230-90)  * (valabs - 90) }
	if (valabs>230) {i_vario = 5 + (10-5) / (430-230)  * (valabs - 230) }
	if (valabs>430) {i_vario = 10 + (20-10) / (710-430)  * (valabs - 430) }
	if (valabs>710) {i_vario = 20 + (30-20) / (1000-710)  * (valabs - 710) }
	
	if (val ==0){i_vario = 0} else {i_vario = i_vario * val / valabs}
		
	return i_vario
		
}

function IAS_L(val){
	var i_ias
	
	//IAS_L.input				= {0.0, 13.5, 13.889, 27.78, 41.6, 55.5, 127.7}
	//IAS_L.output			= {0.0, 0.001, 0.028, 0.165, 0.277, 0.393, 1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°24
	
	if (val<=1) {i_ias = val / 1 * 13.5} 
	if (val>1) {i_ias = 13.5 + (13.899-13.5) / (28-1) * (val-1) }
	if (val>28) {i_ias = 13.899 + (27.78-13.899) / (165-28) * (val-28) }
	if (val>165) {i_ias = 27.78 + (41.6-27.78) / (277-165) * (val-165) }
	if (val>277) {i_ias = 41.6 + (55.5-41.6) / (393-277) * (val-277) }
	if (val>393) {i_ias = 55.5 + (127.7-55.5) / (1000-393) * (val-393) }
	
	// Conversion m/s en km/h
	i_ias = i_ias * 3.6
	
	return i_ias
	
}

function RotorPitch(val){
	var i_pitch
	
	//RotorPitch.input			= {1.0, 2.0,  3.0,  4.0,  5.0,  6.0,  7.0,  8.0, 9.0,  10.0, 11.0, 12.0, 13.0, 14.0, 15.0}
	//RotorPitch.output			= {0.0, 0.07, 0.14, 0.21, 0.29, 0.35, 0.43, 0.5, 0.57, 0.64, 0.71, 0.79, 0.86, 0.93, 1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°36
	
	if (val<=70) {i_pitch = val / 70 * 2} 
	if (val>70) {i_pitch = 2 + (3-2) / (140-70) * (val-70) }
	if (val>140) {i_pitch = 3 + 1 / (210-140) * (val-140) }
	if (val>210) {i_pitch = 4 + 1 / (290-210) * (val-210) }
	if (val>290) {i_pitch = 5 + 1 / (350-290) * (val-290) }
	if (val>350) {i_pitch = 6 + 1 / (430-350) * (val-350) }
	if (val>430) {i_pitch = 7 + 1 / (500-430) * (val-430) }
	if (val>500) {i_pitch = 8 + 1 / (570-500) * (val-500) }
	if (val>570) {i_pitch = 9 + 1 / (640-570) * (val-570) }
	if (val>640) {i_pitch = 10 + 1 / (710-640) * (val-640) }
	if (val>710) {i_pitch = 11 + 1 / (790-710) * (val-710) }
	if (val>790) {i_pitch = 12 + 1 / (860-790) * (val-790) }
	if (val>860) {i_pitch = 13 + 1 / (930-860) * (val-860) }
	if (val>930) {i_pitch = 14 + 1 / (1000-930) * (val-930) }
	
	
	return i_pitch
	
}

function APU_T(val){
	var i_temp
	
	//APU_temperature.input					= {0.0, 200.0, 400.0, 600.0, 800.0, 900.0}
	//APU_temperature.output					= {0.0, 0.2,   0.42,  0.69,  0.94,  1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°402
	
	if (val<=200) {i_temp = val / 200 * 200} 
	if (val>200) {i_temp = 200 + (400-200)/ (420-200) *(val-200) }
	if (val>420) {i_temp = 400 + (600-400)/ (690-420) *(val-420) }
	if (val>690) {i_temp = 600 + (800-600)/ (940-690) *(val-690) }
	if (val>940) {i_temp = 800 + (900-800)/ (1000-940) *(val-940) }
	
	
	return i_temp
	
}

function Fuel_Scale(val){
	var i_fuel
	
	//FuelScaleUpper.input				= {0.0,	200.0,	400.0,	800.0,	1600.0,	2000.0,	2400.0, 2800.0}
	//FuelScaleUpper.output				= {0.0,	0.131,	0.244,	0.414,	0.647,	0.705,	0.9,	1.0}
	// basé sur les données BS-mainpanel_init.lua , var n°62
	
	if (val<=131) {i_fuel = val / 131 * 200} 
	if (val>131) {i_fuel = 200 + (400-200) / (244-131) * (val-131) }
	if (val>244) {i_fuel = 400 + (800-400) / (414-244) * (val-244) }
	if (val>414) {i_fuel = 800 + (1600-800) / (647-414) * (val-414) }
	if (val>647) {i_fuel = 1600 + (2000-1600) / (705-647) * (val-647) }
	if (val>705) {i_fuel = 2000 + (2400-2000) / (900-705) * (val-705) }
	if (val>900) {i_fuel = 2400 + (2800-2400) / (1000-900) * (val-900) }
		
	return i_fuel
	
}