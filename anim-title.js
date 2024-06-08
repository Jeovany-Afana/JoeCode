const target= document.getElementById("target");
const welcome_message=document.getElementById("welcome-message");
let wordIndex=0;
let letterIndex=0;

class Animator
  {
    
     constructor(message,id_element)
       {
          this.message=message;
          this.target=document.getElementById(id_element);
          this.array=[this.message];
          this.wordIndex=0;
          this.letterIndex=0;
       }

       createLetter()
         {
           const letter=document.createElement('span');//Création de l'élément qui va représenter les lettres
             this.target.appendChild(letter);//On ajoute la/les lettres à la balise qui est sensée contenir la lettre
              
              letter.textContent=this.array[this.wordIndex][this.letterIndex];//On utilise le principe des tableaux multidimentionnels pour parcourir chaque lettre de chaque mot dans notre tableau de mots
              setTimeout(()=>{ //setTimeout qui va nous permettre de supprimer les lettres après un certain temps (2800ms ici)
                letter.remove();
             },2800);

         }

        loop=()=>
          {
            setTimeout(()=>{
              if(this.wordIndex>=this.array.length)
                {
                  this.wordIndex=0;
                        this.letterIndex=0;
                        this.loop();
                }
            
                else if(this.letterIndex<this.array[this.wordIndex].length)//On vérifie si nous sommes déjà arrivés à la dernière lettre du mot sur lequel nous sommes actuellement
                   {
                        this.createLetter();//On crée une lettre span
                         this.letterIndex++;//On incrémente l'index des lettres pour passer à la lettre suivante
                          this.loop();//On appelle récursivement la méthode pour passer au mot suivant
                   }

                  else 
                    {
                      this.wordIndex++;
                       this.letterIndex=0;
                       setTimeout(()=>{//On attend 2800ms avant de passer au mot suivant du tableau
                                  this.loop();
                       },2800);
                    }
            },60);
          }
  }
let titre=new Animator("JoeDact ⌨⏱","target");
  titre.loop();

let titre2=new Animator("Astou NDOYE","welcome-message");
  titre2.loop();

  let toggle_title=new Animator("JoeDact ⌨⏱","toggle_title");

  toggle_title.loop();
