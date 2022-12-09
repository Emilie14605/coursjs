function verifPassword(){
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    if(password1.value == password2.value){
        if(password1.value.length >= 8){
            return true;
        } else {
            document.getElementById('message').innerHTML = "longueur du mot de passe incorrect";
            return false;
        }
    } else {
        document.getElementById('message').innerHTML = "Les 2 mots de passe ne correspondent pas";
        return false;
    }
}
function listeAge(min,max){
    if(max > min){
        let liste = document.getElementById('age');
        for(let i = min;i<=max;i++){
            liste.innerHTML +='<option value="'+i+'">'+i+' ans</option>';
        }
    } else {
        console.log("Attention problème avec les valeurs pour l'age");
    }
}
function listePays(){
    let liste = document.getElementById('pays');
    var tab = new Array();
    tab[0]="France";
    tab[1]="Belgique";
    tab[2]="Brésil";
    tab[3]="Suisse";
    for( let i = 0;i<=tab.length;i++){
        liste.innerHTML +='<option value="'+tab[i]+'">'+tab[i]+'</option>';
    }
}
function verifLength(element,longueur){
    let valeur = element.value;
    if(valeur.length >= longueur){
        booleen = true;
    } else {
        //alert('Ce champ doit contenir '+longueur+' caractères');
        booleen = false;
    }
    // On vérifie la longueur du mot de passe et on adapte le background en conséquence
    switch(valeur.length){
        case 6:
            element.style.background = 'red';
        break;
        case 8:
            element.style.background = 'orange';
        break;
        case 12:
            element.style.background = 'green';
        break;
    }
    return booleen;
}
//Fonction qui génere un mot de passe
function genereMdp(){
    // Chaine de caractères pour le mot de passe
    let caracteres = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNù*^$¨£%µéàçè0123456789';
    // Valeur aléatoire entre 0 et 8 pour le mot de passe
    let long = Math.floor(Math.random()*8);
    // Longueur minimum: 8 caractères, max: 16 caractères
    long = 8+long;
    // On instancier notre variable mot de passe
    let motdepasse = '';
    for(let i=0;i<=long;i++){
        motdepasse+= caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    document.getElementById('password1').value = motdepasse;
    document.getElementById('password2').value = motdepasse;
}
function voirMdp(){
    document.getElementById('password1').setAttribute('type','text');
    document.getElementById('password2').setAttribute('type','text');
}
function cacherMdp(){
    document.getElementById('password1').setAttribute('type','password');
    document.getElementById('password2').setAttribute('type','password');
}
function affiche5mdp(){
    voirMdp();
    let cache = setTimeout('cacherMdp()',5000);
}
function gerald(){
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    if(password1.getAttribute('type') == 'text' && password2.getAttribute('type') == 'text'){
        cacherMdp();
        document.getElementById('btn-affiche').innerText = 'Afficher le mot de passe';
    } else {
        voirMdp();
        document.getElementById('btn-affiche').innerText = 'Cacher le mot de passe';
    }
}
function verifAge(){
    let age = document.getElementById('age');
    if(age.value >= 18){
        document.getElementById('message').innerText = "Vous avez l'age nécessaire";
        document.getElementById('submit').removeAttribute('disabled');
        document.getElementById('submit').innerText = 'Inscription';
        if(age.value < 21){
            document.forms['javascript'].setAttribute('action','jeune.php');
        } else if(age.value > 40){
            document.forms['javascript'].setAttribute('action','vieux.php');
        } else {
            document.forms['javascript'].setAttribute('action','action.php');
        }
        return true;
    } else {
        document.getElementById('submit').setAttribute('disabled','disabled');
        document.getElementById('submit').innerText = 'Impossible de valider le formulaire';
        return false;
    }
}
function verifEmail(element){
    let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-_]{4,}.+[a-z]{2,}$/i;
    if(regex.test(element.value)){
        // La regex est ok
        element.style.background = 'green';
    } else {
        // La regex n'est pas ok
        element.style.background = 'red';
    }
}
function verifTel(element){
    let regex = /^[0-9]{10,10}$/i;
    if(regex.test(element.value)){
        element.style.background = 'green';
    } else {
        element.style.background = 'red';
    }
}
function verifForm(){
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let email = document.getElementById('email');
    if(nom.value != "" && prenom.value != "" && email.value != ""){
        // Si la personne a plus de 18 ans
        if(verifAge()){
            // On verifie si les mots de passes font plus de 8 caractères et si ils sont identiques
            if(verifPassword()){
                return true;
            } else {
                // Si les mots de passes ne sont pas identiques
                return false;
            }
        } else {
            // Si la personne est mineure
            return false;
        }
    } else {
        // Si un des champs n'est pas saisie
        if(nom.value == ''){
            document.getElementById('message').innerText = "Veuillez renseigner votre nom";
        }
        else if(prenom.value = ''){
            document.getElementById('message').innerText = "Veuillez renseigner votre prénom";
        }
        else if(email.value = ''){
            document.getElementById('message').innerText = "Veuillez renseigner votre email";
        }
        return false;
    }
}
listeAge(12,70);
verifAge();
listePays();