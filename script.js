var     nom=document.getElementById("nom"),
 prenom=document.getElementById("prenom"), 
 groupe=document.getElementById("groupe"),
 bio=document.getElementById("bio"), 
 btn_img=document.getElementById("files"),
 img= document.getElementById("img_users"),
 btn_ajout=document.getElementById("creer"), 
 btn_init=document.getElementById("reint");
 var conta=document.querySelector("#contact");

 var table_pers=[];

 var personne={
     pnom:nom.value, 
     pprenom:prenom.value, 
     pgroupe:groupe.value, 
     pbio:bio.value, 
     dire:function(){
         console.log("insertion "+this.pnom+" "+this.pprenom+" bio"+this.pbio+" groupe "+this.pgroupe)
        }
    
 }
if(btn_img!=null)
{

  
  btn_img.addEventListener('change',previewImage);

  function previewImage(event)
  {
      
      var file  = btn_img.files;

      if(file!=null&&file.length>0)
      {
          var fileReader = new FileReader();

          fileReader.onload = function(event)
          {
              //img= document.getElementById("img_users");
              img.setAttribute("src",event.target.result);
          }
          fileReader.readAsDataURL(file[0]);
      }

  }
 
}
 

btn_ajout.addEventListener('click', ajout);
btn_init.addEventListener('click', initialisation);
btn_img.addEventListener('change', ajouter_img)
function ajout(Ev) {


    table_pers.push(personne);
    creation_item(nom.value+" "+prenom.value, bio.value, groupe.value )
    Ev.preventDefault();
    
    
}
function initialisation(Ev) {
    
    prenom.value="";
    nom.value="";
    bio.value="";
    console.log('del');
    Ev.preventDefault();
}

function creation_item(nom_contact, Bio_contact, groupe_contact){
    var contenu_item=document.createElement("div");
    contenu_item.classList.add("contenaire_items");
    var contenu_sup=document.createElement('div');
    contenu_sup.classList.add("del");

    var sup_item=document.createElement('a');
    sup_item.id="supprime";
    sup_item.classList.add('supp');
    sup_item.setAttribute("href","#");
    sup_item.innerHTML="X";
    sup_item.addEventListener('click', suppr_item);
    contenu_sup.appendChild(sup_item);
    contenu_item.appendChild(contenu_sup);

    var body_item=document.createElement("div");
    body_item.classList.add("contenaire_item");
    

    var contenu_img=document.createElement("div");
    contenu_img.classList.add("use_img");
    body_item.appendChild(contenu_img);
    var util_img=document.createElement("img");
    util_img.classList.add('user_image');
    util_img.setAttribute("src",img.getAttribute("src"));
    
    var contenu_text=document.createElement('div');
    contenu_text.classList.add('texte');
    body_item.appendChild(contenu_text);

    var tnom= document.createElement('h3');
    var tgroupe= document.createElement('h4');
    var tbio= document.createElement('p');
    tnom.classList.add('t_nom');
    tgroupe.classList.add('t_groupe');
    tbio.classList.add('t_bio');
    contenu_text.appendChild(tnom);
    contenu_text.appendChild(tbio);
    contenu_text.appendChild(tgroupe);

    contenu_item.appendChild(body_item);
    contenu_img.appendChild(util_img);    
    conta.appendChild(contenu_item);

    tnom.innerText=nom_contact;
    tbio.innerText=Bio_contact;
    tgroupe.innerText=groupe_contact;
}
function suppr_item(Event)
{
    Event.preventDefault();
    var elt = Event.target;
    var elt1 = elt.parentNode.parentNode.parentNode;
    
    elt1.remove();
}
