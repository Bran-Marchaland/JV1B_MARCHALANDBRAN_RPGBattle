attaque = document.getElementById("attaque");
defense = document.getElementById("defense");
soin = document.getElementById("soin");
barre_pv = document.getElementById("barre_pv");
nombre_pv = document.getElementById("nombre_pv");
barre_mana = document.getElementById("barre_mana");
nombre_mana = document.getElementById("nombre_mana");
paladin_1 = document.getElementById("paladin_1");
paladin_2 = document.getElementById("paladin_2");
paladin_3 = document.getElementById("paladin_3");
paladin_4 = document.getElementById("paladin_4");
monstre_1 = document.getElementById("monstre_1");
monstre_2 = document.getElementById("monstre_2");
monstre_3 = document.getElementById("monstre_3");
log = document.getElementById("log");
L = document.getElementById("L");
XL = document.getElementById("XL");
XXL = document.getElementById("XXL");
affhero = document.getElementsByClassName("personnageType1")
soinPaladin_1_recharge = "0";
soinPaladin_2_recharge = "0";
soinPaladin_3_recharge = "0";
soinPaladin_4_recharge = "0";
cible = "0";
temps_initial_recharge_soin = 3;
totaleAction = 0;
heroVivant = 4;
monstreVivant = 3; 
fin = 0;


//------------------------------affichage------------------------------\\
L.onclick = function(){
    document.getElementById("ecranP").style.width = "1520px";
    document.getElementById("ecranP").style.height = "400px";
    document.getElementById("ecranS").style.width = "1520px";
    document.getElementById("ecranS").style.height = "160px";
    document.getElementById("affichage_stats").style.left = "520px";
    document.getElementById("affichage_stats").style.height = "50px";
    document.getElementById("affichage_stats").style.top = "358px";
    document.getElementById("log").style.marginLeft = "520px";
    document.getElementById("log").style.marginTop = "50px";
    document.getElementById("log").style.width = "500px";
    document.getElementById("log").style.height = "60px";
    document.getElementById("attaque").style.marginTop = "25px";
    document.getElementById("soin").style.marginTop = "25px";
    document.getElementById("defense").style.marginTop = "25px";
    document.getElementById("attaque").style.marginLeft = "160px";
    document.getElementById("paladin_1").style.width = "60px";
    document.getElementById("paladin_1").style.height = "50px";
    document.getElementById("paladin_2").style.width = "60px";
    document.getElementById("paladin_2").style.height = "50px";
    document.getElementById("paladin_3").style.width = "60px";
    document.getElementById("paladin_3").style.height = "50px";
    document.getElementById("paladin_4").style.width = "60px";
    document.getElementById("paladin_4").style.height = "50px";
    document.getElementById("monstre_1").style.width = "60px";
    document.getElementById("monstre_1").style.height = "50px";
    document.getElementById("monstre_2").style.width = "60px";
    document.getElementById("monstre_2").style.height = "50px";
    document.getElementById("monstre_3").style.width = "60px";
    document.getElementById("monstre_3").style.height = "50px";


}
XL.onclick = function(){
    document.getElementById("ecranP").style.background = "";
}
XXL.onclick = function(){
    document.getElementById("ecranP").style.background = "";
}




//------------------------------stats paladins------------------------------\\
var Pv_max_paladin_1 = 180;
var Pv_actuel_paladin_1 = 180;
var Pm_max_paladin_1 = 80;
var Pm_actuel_paladin_1 = 80;

var Pv_max_paladin_2 = 150;
var Pv_actuel_paladin_2 = 150;
var Pm_max_paladin_2 = 100;
var Pm_actuel_paladin_2 = 100;

var Pv_max_paladin_3 = 100;
var Pv_actuel_paladin_3 = 100;
var Pm_max_paladin_3 = 100;
var Pm_actuel_paladin_3 = 100;

var Pv_max_paladin_4 = 100;
var Pv_actuel_paladin_4 = 100;
var Pm_max_paladin_4 = 100;
var Pm_actuel_paladin_4 = 100;



//------------------------------stats monstres------------------------------\\
var Pv_max_monstre_1 = 200;
var Pv_actuel_monstre_1 = 200;
var Pm_max_monstre_1 = 40;
var Pm_actuel_monstre_1 = 40;

var Pv_max_monstre_2 = 250;
var Pv_actuel_monstre_2 = 250;
var Pm_max_monstre_2 = 100;
var Pm_actuel_monstre_2 = 100;

var Pv_max_monstre_3 = 180;
var Pv_actuel_monstre_3 = 180;
var Pm_max_monstre_3 = 80;
var Pm_actuel_monstre_3 = 80;


//------------------------------Fonctions------------------------------\\
function affich_stat(){
    barre_pv.style.visibility = "visible";
    nombre_pv.style.visibility = "visible";
    barre_mana.style.visibility = "visible";
    nombre_mana.style.visibility = "visible";
}



function cach_stat(){
    barre_pv.style.visibility = "hidden";
    nombre_pv.style.visibility = "hidden";
    barre_mana.style.visibility = "hidden";
    nombre_mana.style.visibility = "hidden";
}



//------------------------------Fonctions Paladins------------------------------\\
paladin_1.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_paladin_1 + "PV";
    nombre_mana.innerHTML = Pm_actuel_paladin_1 + "PM";
    barre_pv.value = Pv_actuel_paladin_1;
    barre_pv.max = Pv_max_paladin_1;
    barre_mana.value = Pm_actuel_paladin_1;
    barre_mana.max = Pm_max_paladin_1;
}

paladin_1.onmouseout = function(){
    cach_stat();
}



paladin_2.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_paladin_2 + "PV";
    nombre_mana.innerHTML = Pm_actuel_paladin_2 + "PM";
    barre_pv.value = Pv_actuel_paladin_2;
    barre_pv.max = Pv_max_paladin_2;
    barre_mana.value = Pm_actuel_paladin_2;
    barre_mana.max = Pm_max_paladin_2;
}

paladin_2.onmouseout = function(){
    cach_stat();
}



paladin_3.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_paladin_3 + "PV";
    nombre_mana.innerHTML = Pm_actuel_paladin_3 + "PM";
    barre_pv.value = Pv_actuel_paladin_3;
    barre_pv.max = Pv_max_paladin_3;
    barre_mana.value = Pm_actuel_paladin_3;
    barre_mana.max = Pm_max_paladin_3;
}

paladin_3.onmouseout = function(){
    cach_stat();
}



paladin_4.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_paladin_4 + "PV";
    nombre_mana.innerHTML = Pm_actuel_paladin_4 + "PM";
    barre_pv.value = Pv_actuel_paladin_4;
    barre_pv.max = Pv_max_paladin_4;
    barre_mana.value = Pm_actuel_paladin_4;
    barre_mana.max = Pm_max_paladin_4;
}

paladin_4.onmouseout = function(){
    cach_stat();
}




//------------------------------Fonctions Monstres------------------------------\\
monstre_1.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_monstre_1 + "PV";
    nombre_mana.innerHTML = Pm_actuel_monstre_1 + "PM";
    barre_pv.value = Pv_actuel_monstre_1;
    barre_pv.max = Pv_max_monstre_1;
    barre_mana.value = Pm_actuel_monstre_1;
    barre_mana.max = Pm_max_monstre_1;
}

monstre_1.onmouseout = function(){
    cach_stat();
}

monstre_1.addEventListener('click', function(){
    cible = "1";
    log.innerHTML += "</br>" + "> monstre 1 cibler";
    log.scrollTop = log.scrollHeight;
    couleurBTN();
})



monstre_2.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_monstre_2 + "PV";
    nombre_mana.innerHTML = Pm_actuel_monstre_2 + "PM";
    barre_pv.value = Pv_actuel_monstre_2;
    barre_pv.max = Pv_max_monstre_2;
    barre_mana.value = Pm_actuel_monstre_2;
    barre_mana.max = Pm_max_monstre_2;
}

monstre_2.onmouseout = function(){
    cach_stat();
}

monstre_2.addEventListener('click', function(){
    cible = "2";
    log.innerHTML += "</br>" + "> monstre 2 cibler";
    log.scrollTop = log.scrollHeight;
    couleurBTN();
})

monstre_3.onmouseover = function(){
    affich_stat();
    nombre_pv.innerHTML = Pv_actuel_monstre_3 + "PV";
    nombre_mana.innerHTML = Pm_actuel_monstre_3 + "PM";
    barre_pv.value = Pv_actuel_monstre_3;
    barre_pv.max = Pv_max_monstre_3;
    barre_mana.value = Pm_actuel_monstre_3;
    barre_mana.max = Pm_max_monstre_3;
}

monstre_3.onmouseout = function(){
    cach_stat();
}


monstre_3.addEventListener('click', function(){
    cible = "3";
    log.innerHTML += "</br>" + "> monstre 3 cibler";
    log.scrollTop = log.scrollHeight;
    couleurBTN();
})


selection=1;

monstre_1.onclick = function(){
    document.getElementById("monstre_1");
}



//------------------------------Fonctions indisponible------------------------------\\
function couleurBTN(){
    if (cible == 0) {
        attaque.style.background = "grey";
        defense.style.background = "grey";
        soin.style.background = "grey";
    } else {
        attaque.style.background = "blue";
        defense.style.background = "blue";
        soin.style.background = "blue";
    }
}

//------------------------------Fonctions actions------------------------------\\
attaque.onclick = function(){
    //document.getElementById("ecranP").style.background = "black";

    if (cible == 1){
        Pv_actuel_monstre_1 = Pv_actuel_monstre_1 - 20;
        totaleAction = totaleAction - (-1);
        log.innerHTML += "</br>" + "> monstre " + cible + " a subit 20 de dégâts";
        log.scrollTop = log.scrollHeight;
        tour();
    }else if(cible == 2){
        Pv_actuel_monstre_2 = Pv_actuel_monstre_2 - 20;
        totaleAction = totaleAction - (-1);
        log.innerHTML += "</br>" + "> monstre " + cible + " a subit 20 de dégâts";
        log.scrollTop = log.scrollHeight;
        tour();
    }else{
        Pv_actuel_monstre_3 = Pv_actuel_monstre_3 - 20;
        totaleAction = totaleAction - (-1);
        log.innerHTML += "</br>" + "> monstre " + cible + " a subit 20 de dégâts";
        log.scrollTop = log.scrollHeight;
        tour();
    }

    
   
}

defense.onclick = function(){
    document.getElementById("ecranP").style.background = "yellow";
}
soin.onclick = function(){
    document.getElementById("ecranP").style.background = "blue";
}

//------------------------------Fonctions tour------------------------------\\
tour = function(){
    couleurBTN();
    if (totaleAction == 0){
        log.innerHTML += "</br>" + "> C'est au tour de paladin 1 ";
        log.scrollTop = log.scrollHeight;
        
    } else if (totaleAction == 1){
        log.innerHTML += "</br>" + "> C'est au tour de paladin 2 ";
        log.scrollTop = log.scrollHeight;

    }else if (totaleAction == 2){
        log.innerHTML += "</br>" + "> C'est au tour de paladin 3 ";
        log.scrollTop = log.scrollHeight;

    }else if (totaleAction == 3){
        log.innerHTML += "</br>" + "> C'est au tour de paladin 4 ";
        log.scrollTop = log.scrollHeight;

    }else {
        log.innerHTML += "</br>" + "> Les monstre contre attaque ";
        log.scrollTop = log.scrollHeight;
        totaleAction = 0;
        contreattaque();
        tour();

        
    }
        
}

monstreEnVie = function(){
    if(Pv_actuel_monstre_1 <= 0){
        monstre_1_en_vie = 0;
        monstreVivant = monstreVivant - 1;
        log.innerHTML += "</br>" + "> il reste" + monstreVivant + "monstre en vie";
        document.getElementById("monstre_1").style.background = "dark";
    }else{}
}


contreattaque = function(){
    if (monstre_1_en_vie == 1){
        ciblePM1 = Math.random(3)
        if (ciblePM1 == 0){
            Pv_actuel_paladin_1 = Pv_actuel_paladin_1 - 30;
            log.innerHTML += "</br>" + "> Paladin 1 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else if (ciblePM1 == 1){
            Pv_actuel_paladin_2 = Pv_actuel_paladin_2 - 30;
            log.innerHTML += "</br>" + "> Paladin 2 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else if (ciblePM1 == 2){
            Pv_actuel_paladin_3 = Pv_actuel_paladin_3 - 30;
            log.innerHTML += "</br>" + "> Paladin 3 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else{
            Pv_actuel_paladin_4 = Pv_actuel_paladin_4 - 30;
            log.innerHTML += "</br>" + "> Paladin 4 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }
        
    }else{}

    if (monstre_2_en_vie == 1){
        ciblePM2 = Math.random(3)
            if (ciblePM2 == 0){
                Pv_actuel_paladin_1 = Pv_actuel_paladin_1 - 30;
                log.innerHTML += "</br>" + "> Paladin 1 subit 30 de dégâts";
                log.scrollTop = log.scrollHeight;
            }else if (ciblePM2 == 1){
                Pv_actuel_paladin_2 = Pv_actuel_paladin_2 - 30;
                log.innerHTML += "</br>" + "> Paladin 2 subit 30 de dégâts";
                log.scrollTop = log.scrollHeight;
            }else if (ciblePM2 == 2){
                Pv_actuel_paladin_3 = Pv_actuel_paladin_3 - 30;
                log.innerHTML += "</br>" + "> Paladin 3 subit 30 de dégâts";
                log.scrollTop = log.scrollHeight;
            }else{
                Pv_actuel_paladin_4 = Pv_actuel_paladin_4 - 30;
                log.innerHTML += "</br>" + "> Paladin 4 subit 30 de dégâts";
                log.scrollTop = log.scrollHeight;
            }
    }else{}

    if(monstre_3_en_vie == 1){
        ciblePM3 = Math.random(3)
        if (ciblePM3 == 0){
            Pv_actuel_paladin_1 = Pv_actuel_paladin_1 - 30;
            log.innerHTML += "</br>" + "> Paladin 1 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else if (ciblePM3 == 1){
            Pv_actuel_paladin_2 = Pv_actuel_paladin_2 - 30;
            log.innerHTML += "</br>" + "> Paladin 2 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else if (ciblePM3 == 2){
            Pv_actuel_paladin_3 = Pv_actuel_paladin_3 - 30;
            log.innerHTML += "</br>" + "> Paladin 3 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }else{
            Pv_actuel_paladin_4 = Pv_actuel_paladin_4 - 30;
            log.innerHTML += "</br>" + "> Paladin 4 subit 30 de dégâts";
            log.scrollTop = log.scrollHeight;
        }
    }else{}

}

conditionFin = function(){
    if(heroVivant == 0){
        fin = 1;
    }
    else if (monstreVivant == 0){
        fin = 2;
    }
    else{
        fin = 0;
    }
}



jeu = function(){
    while (fin!=0){
        conditionFin();
        tour();

    }
}

jeu();