// --------------------------------------------------------------------
// Panel Systèmes d'armement
// --------------------------------------------------------------------
// Lecture donnée multiposition : dataread_posit(KaTZPit_data["NomdelaData"],6)
// Lecture donnée analogique double : dataread_split_2(KaTZPit_data["NomdelaData"])[0] ou [1]




function panel_weapon_system(KaTZPit_data){

		// Données Switch Weapon dans KaTZPit_data["Wpn_SW_1"]
		// 6 - Master Arm SW
		// 5 - Master Arm Voyant armed
		// 4 - Master Arm Voyant safe
		// 3 - Gun Select LeftRightAll
		// 2 - Caliber Select 40-275-762
		// 1 - Rocket Pair Shoot Nb

		
		// Voyants MasterArm 
		if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) == 1) {$("#WPN-V-Armed").fadeIn()} else {$("#WPN-V-Armed").fadeOut()}
		if (dataread_posit(KaTZPit_data["Wpn_SW_1"],4) == 1) {$("#WPN-V-Safe").fadeIn()} else {$("#WPN-V-Safe").fadeOut()}
		
		// Position Master
		var Wpn_Master = dataread_posit(KaTZPit_data["Wpn_SW_1"],6)
		if (Wpn_Master ==1) {$("#WPN-SW-Master").attr('src','images/Switch-Metal-U.gif')}	
		if (Wpn_Master ==0) {$("#WPN-SW-Master").attr('src','images/Switch-Metal-L.gif')}	
		if (Wpn_Master ==-1) {$("#WPN-SW-Master").attr('src','images/Switch-Metal-D.gif')}	
		
		// Position Switch Calibre
		var Wpn_Calibre = dataread_posit(KaTZPit_data["Wpn_SW_1"],2)
		if (Wpn_Calibre ==1) {$("#WPN-SW-Calibre").attr('src','images/Switch-Metal-U.gif')}	
		if (Wpn_Calibre ==0) {$("#WPN-SW-Calibre").attr('src','images/Switch-Metal-R.gif')}	
		if (Wpn_Calibre ==-1) {$("#WPN-SW-Calibre").attr('src','images/Switch-Metal-D.gif')}	
		
		// Position Gun Select
		var Wpn_Gun = dataread_posit(KaTZPit_data["Wpn_SW_1"],3)
		if (Wpn_Gun ==1) {$("#WPN-SW-Gun").attr('src','images/Switch-Metal-U.gif')}	
		if (Wpn_Gun ==0) {$("#WPN-SW-Gun").attr('src','images/Switch-Metal-R.gif')}	
		if (Wpn_Gun ==-1) {$("#WPN-SW-Gun").attr('src','images/Switch-Metal-D.gif')}

		// Selecteur Rotatif de Rkt Pair
		// La position est encodée sur 0-7, on compense le -5 de la fonction dataread_posit
		Rotate_RktSel(dataread_posit(KaTZPit_data["Wpn_SW_1"],1) + 5 )		
		
		

}

function Rotate_RktSel(rkt){
		var r_origine = -36
		var r_gain = 36
	
		$("#WPN-RktPair").css({
			'-moz-transform':'rotate('+(r_origine+r_gain*rkt)+'deg)',
			'-webkit-transform':'rotate('+(r_origine+r_gain*rkt)+'deg)',
			'-ms-transform':'rotate('+(r_origine+r_gain*rkt)+'deg)',
		})
	
	}
	
	

function panel_weapon_flare(KaTZPit_data){	

		// Données Flare dans KaTZPit_data["Flr_SW_1"]
		// 4 - Switch Safe Arm
		// 3 - Lamp Arm
		// 1 et 2 - Nombre de Flares

		// Voyants Arm 
		if (dataread_posit(KaTZPit_data["Flr_SW_1"],3) == 1) {$("#Flare-V-Safe").fadeIn()} else {$("#Flare-V-Safe").fadeOut()}
		
		// Position Master
		var Wpn_Master = dataread_posit(KaTZPit_data["Flr_SW_1"],4)
		if (Wpn_Master ==1) {$("#Flare-SW").attr('src','images/Switch-Metal-U2.gif')}	
		if (Wpn_Master ==0) {$("#Flare-SW").attr('src','images/Switch-Metal-D2.gif')}	
		
		// Nombre de Flares (on ajoute + 5 à chaque digit pour compenser la fonction dataread_posit)
		document.getElementById('Flare-nb').innerHTML = (dataread_posit(KaTZPit_data["Flr_SW_1"],2) + 5 )* 10 + dataread_posit(KaTZPit_data["Flr_SW_1"],1) + 5


	
}


