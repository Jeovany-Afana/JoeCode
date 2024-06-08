
class Level_one extends Afficheur
  {  
       

     step_choose()
       {
         
         switch(this.step_control)
           {
            case 1: 
                  this.execute_saisie("le",10,1);
                  break;
            case 2: 
                  this.execute_saisie("du au",20,1);
                  break;

            case 3: 
                  this.execute_saisie("ai il",20,1);
                  break;
            
            case 4:
                  this.execute_saisie("que par",20,1);
                  break;
            
            case 5:
                  this.execute_saisie("dans tout",20,1);
                  break;

            case 6:
                    this.execute_saisie("mardi jeudi",20,2);
                    break;
            
            case 7:
                    this.execute_saisie("feu pris",20,1);
                    break;

            case 8:
                    this.execute_saisie("ville ville foire foire",3,2);
                    break;
            
            case 9:
                     this.execute_saisie("ville foire",20,1);
                    break;

            case 10:
                     this.execute_saisie("mardi jeudi",20,1);
                     break;

            case 11:
                    this.execute_saisie("le feu a pris dans la ville",3,3);
                    break;

            case 12:
                    this.execute_saisie("je suis d'abord trop beau",3,3);
                    break;


            default:
                 this.nextStep();break;
               
           
        }
       }
  }