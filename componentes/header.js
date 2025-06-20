function llamarComponentes(el) {
    const selector = document.createElement("div"); //CREA EL ELEMENTO div.
    selector.innerHTML = 
    `<header class="header">
        <img src="componentes/logo.png" width="120px" height="50px" class="img__header"> 
        <button id="abrir" class="header__boton_abrir"><i class="fa-solid fa-bars"></i></button> 
        <div class="header__listas" id="menu"> 
        <button id="cerrar" class="header__boton_cerrar"><i class="fa-solid fa-xmark"></i></button>
          <ul class="header__ul">
        <a href= "index.html"> <li>Portafolio</li> </a>   
        <a href="servicios.html"> <li>Servicios</li> </a>
        <a href="contacto.html"> <li>Contacto</li> </a>
          </ul>
        </div>
    </header>`;
    console.log(selector); //MOSTRAR EN LA CONSOLA 

    const headerEl = selector.querySelector(".header"); 
    el.appendChild(headerEl); //Agrega la linea header
     
    //ACA COMIENZA EL CODIGO PARA QUE MENU SE ABRA O CIERRE
    const menu = document.getElementById("menu"); //llama al id
    const abrir = document.getElementById("abrir"); //llama al id
    const cerrar = document.getElementById ("cerrar") //llama al id

    abrir.addEventListener("click", ()=> {  
    menu.classList.add("visible");
    })
    cerrar.addEventListener("click", ()=> {
    menu.classList.remove("visible")
    })
}