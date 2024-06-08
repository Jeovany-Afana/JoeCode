//--------------------------------------------------------------------------------------
let paragraph = document.getElementById("paragraph");
const badges=document.querySelectorAll('.badge')
const guide1 = document.querySelector(".guide__montre1");
const sous_guide_gauche = document.getElementById("sous_gauche");
const guide2 = document.querySelector(".guide__montre2");
const sous_guide_droite = document.getElementById("sous_droite");
const guide_space = document.querySelector(".guide__space");
const sous_guide_centre = document.getElementById("sous_centre");
let title = document.getElementById("target");
const toggle_title = document.getElementById("toggle_title");
const char_count = document.getElementById("char_count");
let char_show = 0;
const speed = document.getElementById("speed");
const word_speed=document.getElementById('word_speed');
const time = document.getElementById("time");
const typing_errors = document.getElementById("typing_errors");
const cupidon_2=document.getElementById('cupidon_2');
const typing_errors_background = document.getElementById("typing_errors_background");
let errors_count = 0;
const typing_pourcent = document.getElementById("typing_pourcent"); //Variable qui représente le span pour l'affichage du pourcentage d'érreur
let current_filter = 0;
const audio = new Audio(); //Déclaration d'un nouvel objet de type Audio pour le bip sonore lorsque l'utilisateur se trompe
let count_frappe = 0; //Variable qui permet de compter le nombre de frappes déjà éffectuer afin de savoir si on peut déjà enlever le background du caractère
let count_space = 0;
let WPM;
let timer_count_verifs = 0; //Variable qui va permettre de vérifier si le chronomètre est déjà en marche et ne plus le relancer une autre fois lorsqu'on touche le clavier

const reset_color = () => {
  document.body.addEventListener("keyup", () => {
    document.body.style.backgroundColor = "white";
    typing_errors_background.style.background = "var(--element-color)";
  });
}; // Réinitialise la couleur de fond lorsqu'une touche est relâchée

const random_number = (max_number) => {
  return Math.floor(Math.random() * max_number);
}; //Fonction qui permet de générer un nombre aléatoire entre 0 et un nombre maximal (donné en paramètre)
class Afficheur {
  timer;
  constructor() {
    this.timer = new Timer("time");

    this.keyboard = new Keyboard();

    this.nombre_total_de_caractere = 0;
    this.nombre_tours_d_affichage = 0;
    this.nombre_caractere_actuel = 0;

    this.array1;
    this.array2;
    this.pourcent_value = 0; //Attribut qui représente la valeur en poucentage pour la barre de progréssion
    this.nombre_de_tours;
    this.current_char = 0; //Attribut qui représente le caractère actuel (Celui que l'utilisateur doit saisir... Il est initialisé à 0)
    this.tour_actuel = 1; //Attribut qui représente le tour actuel(Car les occurences des chaînes seront affichées plusieurs fois)
    this.step_control = 12;

    this.count_number_of_words = this.count_number_of_words.bind(this);
    this.disableKeyPressEventListener = this.disableKeyPressEventListener.bind(this); // Lier la méthode à l'instance de l'objet Afficheur
  }

  calcul_pourcent_error() {
    if (char_show === 0) {
      typing_pourcent.innerHTML = 0 + "%";
    } else {
      typing_pourcent.innerHTML =
        Math.floor((errors_count / char_show) * 100) + "%";
    }
  }

  step_choose() {
 
    switch (this.step_control) {
      case 1:
        this.execute_saisie("la", 5, 1);
        break;
      case 2:
        this.execute_saisie("du", 20, 1);
        break;

      case 3:
        this.execute_saisie("ai il", 20, 1);
        break;

      case 4:
        this.execute_saisie("que par", 20, 1);
        break;

      case 5:
        this.execute_saisie("dans tout", 20, 1);
        break;

      case 6:
        this.execute_saisie("faire avoir", 20, 1);
        break;

      case 7:
        this.execute_saisie("feu pris", 20, 1);
        break;

      case 8:
        this.execute_saisie("ville ville foire foire", 3, 2);
        break;

      case 9:
        this.execute_saisie("ville foire", 20, 1);
        break;

      case 10:
        this.execute_saisie("mardi jeudi", 20, 1);
        break;

      case 11:
        this.execute_saisie("le feu a pris dans la ville", 3, 3);
        break;

      case 12:
        this.execute_saisie("la foire du mardi et du jeudi", 3, 3);
        break;

     default: ("Vous passez au niveau suivant");break;
    }

    this.verifLetter_left();
    this.verifLetter_rigth();
  }

  count_number_of_words(nombre_tours) {
    WPM = Math.ceil((char_show - errors_count * 3) / (this.timer.seconds / 60));
    
    if (WPM < 0 || !isFinite(WPM)) {
      WPM = 0;
    }
    speed.innerHTML = WPM + " car/min";
    word_speed.innerHTML=Math.ceil((WPM/6))+" mts/min";
  }

  calcul_pourcent(nombre_tours) {
    this.pourcent_value = Math.floor(
      (100 * this.nombre_caractere_actuel) / (this.array2.length * nombre_tours)
    );
  }

setLevelTheme(backgroundImage,element_color)
  {
      // Définir la variable CSS --background-theme avec l'image de fond
  document.documentElement.style.setProperty('--background-theme', `url('${backgroundImage}')`);
  // Définir la variable CSS --element-color avec la couleur d'arrière-plan
  document.documentElement.style.setProperty('--element-color', element_color);
  }

  keyPressEventHandler(event) {
    // Appeler la fonctionnalité d'exécution de la saisie existante avec l'événement clavier
    this.execute_saisie(event.key,nombre_affichagenombre_tours_d_affichage /* autres paramètres nécessaires */);
}



  disableKeyPressEventListener() {
    // Supprimer l'écouteur d'événements de frappe de clavier
    document.removeEventListener('keypress', this.keyPressEventHandler);
}


  
  affiche_char(
    chaine,
    nombre_affichage,
    nombre_tours_d_affichage //Méthode qui permet d'afficher la chaine à saisir sur l'écran
  ) {
    this.array1 = new Array(nombre_affichage); //Tableau qui va contenir la chaine de caractère à afficher sur l'écran
    this.array1.fill(chaine); //On rempli toutes les cases du tableau avec la chaîne passée en paramètre au constructeur de l'objet Affiche
    this.nombre_de_tours = nombre_tours_d_affichage; //Attribut qui représente le nombre total de tour des occurences de la chaîne (Le nombre de fois que l'utilisateur va recommencer la chaîne)
    // paragraph.innerHTML = this.array1.join(" "); //On affiche les éléments du tableau dans le paragraphe en utilisant l'espace comme séparateur
    this.array2 = this.array1.join(" "); //Comme array1.join(' ') renvoie tous les éléments du tableau array1 séparer d'espaces comme étant une chaîne de caractère, on affecte le tout à array2 qui va donc
    //représenter notre chaîne et c'est sur elle que nous allons travailler
    this.calcul_pourcent(nombre_tours_d_affichage);
  }

  updateTypedChar(charIndex)
  {
     const typedChars = paragraph.querySelectorAll('.typed-char');

         // Parcourir chaque caractère
         typedChars.forEach((char, index) => {
             // Si l'index du caractère est inférieur ou égal à charIndex, le marquer comme saisi
             if (index <= charIndex) {
                 char.classList.add('typed');
             } else {
                 char.classList.remove('typed');
             }
         });}


    

  remove_key_background() {
    this.keyboard.verifLetter_toKeyboard_for_remove(
      this.array2[this.current_char-1]
    ); //Vérification de la lettre actuelle à saisir afin d'enlever sa couleur sur le clavier
  }

  execute_saisie(chaine,nombre_affichage,nombre_tours_d_affichage //Méthode qui va gérer (La vérification du caractère, la saisie et le remplissage du deuxième paragraphe <<Celui qui montre les saisies de l'utilisateur>>)
  ) {

    this.disableKeyPressEventListener(); // Désactiver l'écouteur d'événements de frappe de clavier
    this.calcul_pourcent_error(); //Calcul du poucentage d'érreur

    this.affiche_char(chaine, nombre_affichage, nombre_tours_d_affichage); //Appel de la fonction pour l'affichage des caractères sur la page
    this.verifLetter_left(); //On vérifie si le caractère actuel(A SAISIR correspond aux caractères atteignables avec la main gauche)
    this.verifLetter_rigth(); //On vérifie si le caractère actuel(A SAISIR correspond aux caractères atteignables avec la main droite)

      // Écouteur d'événements pour la pression des touches
      this.keyboard.verifLetter_toKeyboard(this.array2[this.current_char],"#0d6efd"); //On vérifie le premier caractère (Avant le début de la saisie) afin de le colorier sur le clavier

      document.addEventListener('keypress',(event)=> {

        timer_count_verifs++;
        if (timer_count_verifs === 1) {//Cette condition a été mise afin de s'assurer que le chronomètre sera lancé uniquement après la première touche de clavier
              this.timer.startTimer();
        
                let execution_temps_erreurs = setInterval(() => {
                  this.count_number_of_words();
               }, 1000);
              }

        // Vérifier si tout le texte n'a pas déjà été tapé
        
            // Vérifier si la touche pressée correspond au caractère attendu
            if (event.key === this.array2[this.current_char]) {
               
                this.updateTypedChar(this.current_char); // Mettre à jour l'affichage des caractères saisis
               
                this.keyboard.verifLetter_toKeyboard_for_remove(this.array2[this.current_char]); //Vérification de la lettre actuelle à saisir afin la mettre en couleur sur le clavier
                  this.keyboard.verifLetter_toKeyboard(this.array2[this.current_char+1],"#0d6efd"); //Vérification de la lettre actuelle à saisir afin d'enlever la couleur sur le clavier
                  this.count_number_of_words(nombre_tours_d_affichage); //Calcul du nombre de caractères par minutes
                
                  this.current_char++; // Incrémenter l'index pour passer au prochain caractère
                 char_show++; //On incrémente le compteur de caractères(Pour afficher à l'écran les caractères déjà saisis par l'utilisateur)
                  char_count.innerHTML = char_show;
                
             this.calcul_pourcent_error(); //Calcul et affichage du pourcentage des fautes

             this.nombre_caractere_actuel++;

        this.keyboard.verifLetter_toKeyboard(this.array2[this.current_char],
          "#0d6efd"
        );
           
        this.calcul_pourcent(nombre_tours_d_affichage);
        updateProgressBar(this.pourcent_value);//Appel de la fonction qui permet de gérer la progréssion de la barre
           
        this.verifLetter_left(); //Verification du caractère actuel afin de guider l'utilisateur (Main droite)
        this.verifLetter_rigth(); //Vérification du caractère actuel afin de guider l'utilisateur (Main gauche)
           
        if (this.current_char === this.array2.length && this.tour_actuel < this.nombre_de_tours) {
          // Vérifier si tous les tours pour cette série de caractères ont été complétés
          // Si oui, passer au prochain tour
          this.current_char = 0;
          this.tour_actuel++;
          this.verifLetter_left();
          this.verifLetter_rigth();
      } else if (this.current_char == this.array2.length && this.tour_actuel == this.nombre_de_tours) {
          // Vérifier si tous les tours pour cette série de caractères ont été complétés
          // Si oui, passer à l'étape suivante
          this.current_char = 0;
          this.step_control++; // Incrémenter step_control uniquement lorsque tous les tours pour une série de caractères sont terminés
          updateProgressBar(0);
          this.pourcent_value = 0;
          this.tour_actuel = 1;
          this.nombre_caractere_actuel = 0;
          errors_count = 0;
          timer_count_verifs = 0;
          console.log(this.array2[this.current_char]);
          this.step_choose();
      }
      
            }

            else {
                  console.log("Tu as appuyé ici " +event.key+" au lieu d'ici: "+this.array2[this.current_char]);
                    
                    audio.play();
            
                    errors_count++;
                    typing_errors.innerHTML = errors_count;
                    typing_errors_background.style.background = "red";
            
                    this.calcul_pourcent_error(); //Calcul et affichage du pourcentage des fautes
              
                    let compteur = 1;
                    let clignotant = setInterval(() => {
                      compteur++;
                      if (compteur % 2 === 0) 
                        {
                        this.keyboard.verifLetter_toKeyboard(event.key, "#FF0000");
                        } 

                      else 
                        {
                        this.keyboard.verifLetter_toKeyboard_for_remove(event.key);
                        }
            
                      if (compteur > 10) {
                        this.keyboard.verifLetter_toKeyboard(
                          this.array2[this.current_char],
                          "#0d6efd"
                        );
                        clearInterval(clignotant);
                      }
                    }, 100);
                  }
        
    });

    reset_color(); //Fonction qui permet de renitialiser la couleur de fond de la pages

    // Initialiser l'affichage du texte
    paragraph.innerHTML = this.array2.split('').map(char => {
        return `<span class="typed-char">${char}</span>`;
    }).join('');
    
   }

  verifLetter_left = () => {
    if (
      this.array2[this.current_char] === "a" ||
      this.array2[this.current_char] === "A" ||
      this.array2[this.current_char] === "w" ||
      this.array2[this.current_char] === "W" ||
      this.array2[this.current_char] === "q" ||
      this.array2[this.current_char] === "Q" ||
      this.array2[this.current_char] === "&" ||
      this.array2[this.current_char] === "1"
    ) {
      guide1.innerHTML = "Auriculaire";
    } else if (
      this.array2[this.current_char] === "e" ||
      this.array2[this.current_char] === "E" ||
      this.array2[this.current_char] === "c" ||
      this.array2[this.current_char] === "C" ||
      this.array2[this.current_char] === '"' ||
      this.array2[this.current_char] === "'" ||
      this.array2[this.current_char] === "d" ||
      this.array2[this.current_char] === "D" ||
      this.array2[this.current_char] === "3" ||
      this.array2[this.current_char] === "4"
    ) {
      guide1.innerHTML = "Majeur";
    } else if (
      this.array2[this.current_char] === "s" ||
      this.array2[this.current_char] === "S" ||
      this.array2[this.current_char] === "x" ||
      this.array2[this.current_char] === "X" ||
      this.array2[this.current_char] === "é" ||
      this.array2[this.current_char] === "2" ||
      this.array2[this.current_char] === "z" ||
      this.array2[this.current_char] === "Z"
    ) {
      guide1.innerHTML = "Annulaire";
    } else if (
      this.array2[this.current_char] === "r" ||
      this.array2[this.current_char] === "R" ||
      this.array2[this.current_char] === "t" ||
      this.array2[this.current_char] === "T" ||
      this.array2[this.current_char] === "f" ||
      this.array2[this.current_char] === "F" ||
      this.array2[this.current_char] === "v" ||
      this.array2[this.current_char] === "V" ||
      this.array2[this.current_char] === "g" ||
      this.array2[this.current_char] === "G" ||
      this.array2[this.current_char] === "(" ||
      this.array2[this.current_char] === "b" ||
      this.array2[this.current_char] === "B" ||
      this.array2[this.current_char] === "-"
    ) {
      guide1.innerHTML = "Index";
    } else if (this.array2[this.current_char] === " ") {
      guide_space.innerHTML = "Pouce";
      guide1.innerHTML = "";
      guide2.innerHTML = "";
    } else {
      guide1.innerHTML = "";
      guide_space.innerHTML = "";
    }
  };

  verifLetter_rigth = () => {
    //------------------------------------MAIN DROITE-------------------------
    if (
      this.array2[this.current_char] === "h" ||
      this.array2[this.current_char] === "H" ||
      this.array2[this.current_char] === "j" ||
      this.array2[this.current_char] === "J" ||
      this.array2[this.current_char] === "n" ||
      this.array2[this.current_char] === "N" ||
      this.array2[this.current_char] === "u" ||
      this.array2[this.current_char] === "U" ||
      this.array2[this.current_char] === "y" ||
      this.array2[this.current_char] === "Y" ||
      this.array2[this.current_char] === "è" ||
      this.array2[this.current_char] === ","
    ) {
      guide2.innerHTML = "Index";
    } else if (
      this.array2[this.current_char] === "k" ||
      this.array2[this.current_char] === "K" ||
      this.array2[this.current_char] === "i" ||
      this.array2[this.current_char] === "I" ||
      this.array2[this.current_char] === ";" ||
      this.array2[this.current_char] === "_" ||
      this.array2[this.current_char] === "ç" ||
      this.array2[this.current_char] === "."
    ) {
      guide2.innerHTML = "Majeur";
    } else if (
      this.array2[this.current_char] === "o" ||
      this.array2[this.current_char] === "O" ||
      this.array2[this.current_char] === ":" ||
      this.array2[this.current_char] === "à" ||
      this.array2[this.current_char] === "l" ||
      this.array2[this.current_char] === "L" ||
      this.array2[this.current_char] === ")"
    ) {
      guide2.innerHTML = "Annulaire";
    } else if (
      this.array2[this.current_char] === "m" ||
      this.array2[this.current_char] === "M" ||
      this.array2[this.current_char] === "p" ||
      this.array2[this.current_char] === "P" ||
      this.array2[this.current_char] === "!" ||
      this.array2[this.current_char] === "ù" ||
      this.array2[this.current_char] === "^" ||
      this.array2[this.current_char] === "$" ||
      this.array2[this.current_char] === "*"
    ) {
      guide2.innerHTML = "Auriculaire";
    } else if (this.array2[this.current_char] === " ") {
      guide_space.innerHTML = "Pouce";
      guide1.innerHTML = "";
      guide2.innerHTML = "";
    } else {
      guide2.innerHTML = "";
      guide_space.innerHTML = "";
    }
  };
}

audio.src = "COMTelph_Bip de repondeur (ID 1616)_LS.mp3";
let compteur=1;
setInterval(() => {
 

  compteur++;
      if(compteur %2===0)
        {
           document.documentElement.style.setProperty('--myMarginTop','10%');
        }

      else
        {
          document.documentElement.style.setProperty('--myMarginTop','5%');
        }
  //Gestiond u changement de couleurs du logo JoeDact
  current_filter = random_number(720); //On génère un nombre aléatoire entre 0 et 720 qui sera utilisé pour choisir une couleur dans la roue dabatique

  title.style.filter = "hue-rotate(" + current_filter + "deg)";
}, 1000);


let test=new Afficheur();
test.step_choose();
test.setLevelTheme('3AXZVM.jpg','green');