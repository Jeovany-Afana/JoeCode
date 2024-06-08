 class Afficheur2 extends Afficheur
   {
     constructor()
       {


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

        eventListenerType()
          {
            
             // Écouteur d'événements pour la pression des touches
             document.addEventListener('keydown', function(event) {
                // Vérifier si tout le texte n'a pas déjà été tapé
                if (this.current_char < this.array2.length) {
                    const typedChar = text[currentIndex];
                    // Vérifier si la touche pressée correspond au caractère attendu
                    if (event.key === typedChar) {
                        this.current_char; // Incrémenter l'index pour passer au prochain caractère
                        updateTypedChar(this.current_char - 1); // Mettre à jour l'affichage des caractères saisis
                    }
                }
            });

            // Initialiser l'affichage du texte
            paragraph.innerHTML = this.array2.split('').map(char => {
                return `<span class="typed-char">${char}</span>`;
            }).join('');
          }
          
   }