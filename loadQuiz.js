var step = document.getElementById("step").value;

document.write(write1());

function write1(){
    return "Find the Password <br/>" +
                  "<span style='font-size:0.7em'> Pour avancer tu dois trouver le mot de passe </span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> Le premier mot de passe se cache la ou david n'a jamais mit le pied (ou son linge).</span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center'><a class='waves-effect waves-teal btn' onclick='validate_Password1()' id='btn'>Send</a>";
}

function write2(){
    return "Quiz <br/>" +
                  "<span style='font-size:0.7em'> Quand est ma fête </span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> Si tu trouve pas ca je pense qu'on a un problème il faut l'écrire comme ça (JOURS mois)</span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center'><a class='waves-effect waves-teal btn' onclick='validate_Quiz1()' id='btn'>Send</a>";
}

function write3(){
    return "Find the Password <br/>" +
                  "<span style='font-size:0.7em'> Pour avancer tu dois trouver le mot de passe </span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> Sans moi je pense que david serait perdu ( moi que sans toi mais bon ;) )</span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center'><a class='waves-effect waves-teal btn' onclick='validate_Password2()' id='btn'>Send</a>";
}

function write4(){
    return "Find the Password <br/>" +
                  "<span style='font-size:0.7em'> Pour avancer tu dois trouver le mot de passe </span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> Je fais des belles bulles </span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center'><a class='waves-effect waves-teal btn' onclick='validate_Password3()' id='btn'>Send</a>";
}
function write5(){
    return "Quiz <br/>" +
                  "<span style='font-size:0.7em'> Est-ce que tu apprécies ton expérience jusqu'à maintenant ?</span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> J'ai déjà répondu à la question pour toi ;) </span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center' value='Oui'><a class='waves-effect waves-teal btn' onclick='validate_Quiz2()' id='btn'>Send</a>";
}
function write6(){
    return "Find the Password <br/>" +
                  "<span style='font-size:0.7em'> Pour avancer tu dois trouver le mot de passe </span> <br/> <br/>" + 
                  "<span style='font-size:0.7em'> Fiou il commence à faire chaud SORT MOI D'ICI ! </span> <br/>" +
                  "<input id='password' type='text' class='validate' style='text-align:center'><a class='waves-effect waves-teal btn' onclick='validate_Password4()' id='btn'>Send</a>";
}

function validate_Password1(){
    if(document.getElementById("password").value === "ZQ225H"){
        document.getElementById("game").innerHTML = write2();
    }
}
function validate_Quiz1(){
    if(document.getElementById("password").value === "29 mars"){
        document.getElementById("game").innerHTML = write3();
    }
}
function validate_Password2(){
    if(document.getElementById("password").value === "MH543L"){
        document.getElementById("game").innerHTML = write4();
    }
}
function validate_Password3(){
    if(document.getElementById("password").value === "LP888Z"){
        document.getElementById("game").innerHTML = write5();
    }
}
function validate_Quiz2(){
    if(document.getElementById("password").value === "Oui"){
        document.getElementById("game").innerHTML = write6();
    }
}
function validate_Password4(){
    if(document.getElementById("password").value === "KR435A"){
        document.getElementById("game").innerHTML = "Joyeux Noël !! <br/>" + 
            "<span style='font-size:0.7em'> Ton cadeau est dans la 'cours' </span>";
    }
}