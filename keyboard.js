const keyboard=document.querySelector(".keyboard");
const key_list=document.querySelectorAll('.key');
const key_backquote=document.getElementById('key-Backquote');

  class Keyboard
    {

        constructor()
          {
            this.elementid;
            this.verif_etat;
            this.background_color;
            this.classColor;
          }

        set_key_background(color)
          {
            document.documentElement.style.setProperty('--maVariable',color);
            document.getElementById('key-'+this.elementid).classList.add('key-background');
          }

        remove_key_background()
          {
            document.getElementById('key-'+this.elementid).classList.remove('key-background');
          }

        verifLetter_toKeyboard(letter,color)//Méthode qui permet de vérifier le caractère actuel à saisir 
          {
             if(letter==='A'||letter==='a')
               {
                  this.elementid='A';
                 this.set_key_background(color);
               }

             else if(letter==='B'||letter==='b')
               {
                 this.elementid='B';
                   this.set_key_background(color);
               }

               else if(letter==='C'||letter==='c')
               {
                 this.elementid='C';
                   this.set_key_background(color);
               }

               else if(letter==='D'||letter==='d')
               {
                 this.elementid='D';
                   this.set_key_background(color);
               }

               else if(letter==='E'||letter==='e'||letter==='€')
               {
                 this.elementid='E';
                   this.set_key_background(color);
               }

               else if(letter==='F'||letter==='f')
               {
                 this.elementid='F';
                   this.set_key_background(color);
               }

               else if(letter==='G'||letter==='g')
               {
                 this.elementid='G';
                   this.set_key_background(color);
               }

               else if(letter==='H'||letter==='h')
               {
                 this.elementid='H';
                   this.set_key_background(color);
               }

               else if(letter==='I'||letter==='i')
               {
                 this.elementid='I';
                   this.set_key_background(color);
               }

               else if(letter==='J'||letter==='j')
               {
                 this.elementid='J';
                   this.set_key_background(color);
               }

               else if(letter==='k'||letter==='K')
               {
                 this.elementid='K';
                   this.set_key_background(color);
               }

               else if(letter==='L'||letter==='l')
               {
                 this.elementid='L';
                   this.set_key_background(color);
               }

               else if(letter==='M'||letter==='m')
               {
                 this.elementid='M';
                   this.set_key_background(color);
               }

               else if(letter==='N'||letter==='n')
               {
                 this.elementid='N';
                   this.set_key_background(color);
               }

               else if(letter==='O'||letter==='o')
               {
                 this.elementid='O';
                   this.set_key_background(color);
               }

               else if(letter==='P'||letter==='p')
               {
                 this.elementid='P';
                   this.set_key_background(color);
               }

               else if(letter==='Q'||letter==='q')
               {
                 this.elementid='Q';
                   this.set_key_background(color);
               }

               else if(letter==='R'||letter==='r')
               {
                 this.elementid='R';
                   this.set_key_background(color);
               }

               else if(letter==='S'||letter==='s')
               {
                 this.elementid='S';
                   this.set_key_background(color);
               }

               else if(letter==='T'||letter==='t')
               {
                 this.elementid='T';
                   this.set_key_background(color);
               }

               else if(letter==='U'||letter==='u')
               {
                 this.elementid='U';
                   this.set_key_background(color);
               }

               else if(letter==='V'||letter==='v')
               {
                 this.elementid='V';
                   this.set_key_background(color);
               }

               else if(letter==='W'||letter==='w')
               {
                 this.elementid='W';
                   this.set_key_background(color);
               }

               else if(letter==='X'||letter==='x')
               {
                 this.elementid='X';
                   this.set_key_background(color);
               }

               else if(letter==='Y'||letter==='y')
               {
                 this.elementid='Y';
                   this.set_key_background(color);
               }

               else if(letter==='Z'||letter==='z')
               {
                 this.elementid='Z';
                   this.set_key_background(color);
               }

               else if(letter==='²')
               {
                 this.elementid='Backquote';
                   this.set_key_background(color);
               }

               else if(letter==='&'||letter==='1')
               {
                 this.elementid='1';
                   this.set_key_background(color);
               }

               else if(letter==='é'||letter==='2'||letter==='~')
               {
                 this.elementid='2';
                   this.set_key_background(color);
               }

               else if(letter==='3'||letter==='"'||letter==='#')
               {
                 this.elementid='3';
                   this.set_key_background(color);
               }

               else if(letter==='4'||letter==="'"||letter==='{')
               {
                 this.elementid='4';
                   this.set_key_background(color);
               }

               else if(letter==='5'||letter==='('||letter==='[')
               {
                 this.elementid='5';
                   this.set_key_background(color);
               }

               else if(letter==='6'||letter==='-'||letter==='|')
               {
                 this.elementid='6';
                   this.set_key_background(color);
               }

               else if(letter==='7'||letter==='è'||letter==='`')
               {
                 this.elementid='7';
                   this.set_key_background(color);
               }

               else if(letter==='8'||letter==='_'||letter==="\\")
               {
                 this.elementid='8';
                   this.set_key_background(color);
               }

               else if(letter==='9'||letter==='ç'||letter==='^')
               {
                 this.elementid='9';
                   this.set_key_background(color);
               }

               else if(letter==='0'||letter==='à'||letter==='@')
               {
                 this.elementid='0';
                   this.set_key_background(color);
               }

               else if(letter==='$'||letter==='£'||letter==='¤')
               {
                 this.elementid='dollar';
                   this.set_key_background(color);
               }

               else if(letter==='*'||letter==='µ')
               {
                 this.elementid='etoile';
                   this.set_key_background(color);
               }

               else if(letter==='^'||letter==='¨')
               {
                 this.elementid='chapeau';
                   this.set_key_background(color);
               }

               else if(letter==='ù'||letter==='%')
               {
                 this.elementid='pourcent';
                   this.set_key_background(color);
               }

               else if(letter===' ')
               {
                  this.elementid='Space';
                 this.set_key_background(color);
               }
          }


          verifLetter_toKeyboard_for_remove(letter)//Méthode qui permet de vérifier le caractère actuel à saisir 
          {
             if(letter==='A'||letter==='a')
               {
                  this.elementid='A';
                 this.remove_key_background();
               }

             else if(letter==='B'||letter==='b')
               {
                 this.elementid='B';
                   this.remove_key_background();
               }

               else if(letter==='C'||letter==='c')
               {
                 this.elementid='C';
                   this.remove_key_background();
               }

               else if(letter==='D'||letter==='d')
               {
                 this.elementid='D';
                   this.remove_key_background();
               }

               else if(letter==='E'||letter==='e'||letter==='€')
               {
                 this.elementid='E';
                   this.remove_key_background();
               }

               else if(letter==='F'||letter==='f')
               {
                 this.elementid='F';
                   this.remove_key_background();
               }

               else if(letter==='G'||letter==='g')
               {
                 this.elementid='G';
                   this.remove_key_background();
               }

               else if(letter==='H'||letter==='h')
               {
                 this.elementid='H';
                   this.remove_key_background();
               }

               else if(letter==='I'||letter==='i')
               {
                 this.elementid='I';
                   this.remove_key_background();
               }

               else if(letter==='J'||letter==='j')
               {
                 this.elementid='J';
                   this.remove_key_background();
               }

               else if(letter==='k'||letter==='K')
               {
                 this.elementid='K';
                   this.remove_key_background();
               }

               else if(letter==='L'||letter==='l')
               {
                 this.elementid='L';
                   this.remove_key_background();
               }

               else if(letter==='M'||letter==='m')
               {
                 this.elementid='M';
                   this.remove_key_background();
               }

               else if(letter==='N'||letter==='n')
               {
                 this.elementid='N';
                   this.remove_key_background();
               }

               else if(letter==='O'||letter==='o')
               {
                 this.elementid='O';
                   this.remove_key_background();
               }

               else if(letter==='P'||letter==='p')
               {
                 this.elementid='P';
                   this.remove_key_background();
               }

               else if(letter==='Q'||letter==='q')
               {
                 this.elementid='Q';
                   this.remove_key_background();
               }

               else if(letter==='R'||letter==='r')
               {
                 this.elementid='R';
                   this.remove_key_background();
               }

               else if(letter==='S'||letter==='s')
               {
                 this.elementid='S';
                   this.remove_key_background();
               }

               else if(letter==='T'||letter==='t')
               {
                 this.elementid='T';
                   this.remove_key_background();
               }

               else if(letter==='U'||letter==='u')
               {
                 this.elementid='U';
                   this.remove_key_background();
               }

               else if(letter==='V'||letter==='v')
               {
                 this.elementid='V';
                   this.remove_key_background();
               }

               else if(letter==='W'||letter==='w')
               {
                 this.elementid='W';
                   this.remove_key_background();
               }

               else if(letter==='X'||letter==='x')
               {
                 this.elementid='X';
                   this.remove_key_background();
               }

               else if(letter==='Y'||letter==='y')
               {
                 this.elementid='Y';
                   this.remove_key_background();
               }

               else if(letter==='Z'||letter==='z')
               {
                 this.elementid='Z';
                   this.remove_key_background();
               }

               else if(letter==='²')
               {
                 this.elementid='Backquote';
                   this.remove_key_background();
               }

               else if(letter==='&'||letter==='1')
               {
                 this.elementid='1';
                   this.remove_key_background();
               }

               else if(letter==='é'||letter==='2'||letter==='~')
               {
                 this.elementid='2';
                   this.remove_key_background();
               }

               else if(letter==='3'||letter==='"'||letter==='#')
               {
                 this.elementid='3';
                   this.remove_key_background();
               }

               else if(letter==='4'||letter==="'"||letter==='{')
               {
                 this.elementid='4';
                   this.remove_key_background();
               }

               else if(letter==='5'||letter==='('||letter==='[')
               {
                 this.elementid='5';
                   this.remove_key_background();
               }

               else if(letter==='6'||letter==='-'||letter==='|')
               {
                 this.elementid='6';
                   this.remove_key_background();
               }

               else if(letter==='7'||letter==='è'||letter==='`')
               {
                 this.elementid='7';
                   this.remove_key_background();
               }

               else if(letter==='8'||letter==='_'||letter==="\\")
               {
                 this.elementid='8';
                   this.remove_key_background();
               }

               else if(letter==='9'||letter==='ç'||letter==='^')
               {
                 this.elementid='9';
                   this.remove_key_background();
               }

               else if(letter==='0'||letter==='à'||letter==='@')
               {
                 this.elementid='0';
                   this.remove_key_background();
               }

               else if(letter==='$'||letter==='£'||letter==='¤')
               {
                 this.elementid='dollar';
                   this.remove_key_background();
               }

               else if(letter==='*'||letter==='µ')
               {
                 this.elementid='etoile';
                   this.remove_key_background();
               }

               else if(letter==='^'||letter==='¨')
               {
                 this.elementid='chapeau';
                   this.remove_key_background();
               }

               else if(letter==='ù'||letter==='%')
               {
                 this.elementid='pourcent';
                   this.remove_key_background();
               }

               else if(letter===' ')
                 {
                    this.elementid='Space';
                   this.remove_key_background();
                 }
          }
    }

let essai=new Keyboard();

