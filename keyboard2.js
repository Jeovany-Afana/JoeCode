class Keyboard2 {
    constructor() {
        // Mapping des lettres aux identifiants des touches
        this.keyMappings = {
            'a': 'A',
            'b': 'B',
            'c': 'C',
            'd': 'D',
            'e': 'E',
            'f': 'F',
            'g': 'G',
            'h': 'H',
            'i': 'I',
            'j': 'J',
            'k': 'K',
            'l': 'L',
            'm': 'M',
            'n': 'N',
            'o': 'O',
            'p': 'P',
            'q': 'Q',
            'r': 'R',
            's': 'S',
            't': 'T',
            'u': 'U',
            'v': 'V',
            'w': 'W',
            'x': 'X',
            'y': 'Y',
            'z': 'Z',
            '²': '²',
            '1': ['1','&'],
            '2': ['2','é','~'],
            '3': ['3','#','"'],
            '4': ['4',"'",'{'],
            '5':['5',"(",'['],
        };
    }

    // Méthode pour définir le fond de la touche correspondant à une lettre
    setKeyBackground(letter, color) {
        const keyIds = this.keyMappings[letter.toLowerCase()]; // Récupérer les identifiants de touche
        if (Array.isArray(keyIds)) { // Vérifier si plusieurs identifiants sont associés à la lettre
            keyIds.forEach(keyId => { // Parcourir chaque identifiant et définir le fond de chaque touche
                const keyElement = document.getElementById(`key-${keyId}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = color;
                }
            });
        } else { // Si un seul identifiant est associé à la lettre
            const keyId = keyIds;
            if (keyId) {
                const keyElement = document.getElementById(`key-${keyId}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = color;
                }
            }
        }
    }

    // Méthode pour supprimer le fond de la touche correspondant à une lettre
    removeKeyBackground(letter) {
        const keyIds = this.keyMappings[letter.toLowerCase()]; // Récupérer les identifiants de touche
        if (Array.isArray(keyIds)) { // Vérifier si plusieurs identifiants sont associés à la lettre
            keyIds.forEach(keyId => { // Parcourir chaque identifiant et supprimer le fond de chaque touche
                const keyElement = document.getElementById(`key-${keyId}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = ''; // Réinitialiser la couleur de fond
                }
            });
        } else { // Si un seul identifiant est associé à la lettre
            const keyId = keyIds;
            if (keyId) {
                const keyElement = document.getElementById(`key-${keyId}`);
                if (keyElement) {
                    keyElement.style.backgroundColor = ''; // Réinitialiser la couleur de fond
                }
            }
        }
    }
}

// Exemple d'utilisation
const keyboard2 = new Keyboard2();

let essai1=0;
  let joe=setInterval(()=>
  {
        essai1++;
      if(essai1%2==0)
        {
            keyboard2.setKeyBackground('(', 'red'); // Définir le fond de la touche 'A' en rouge
        }

      else
        {
            keyboard2.removeKeyBackground('(');
        }

  },1000);

