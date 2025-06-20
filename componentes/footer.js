function llamarFooter(el) {
    const selectorTres = document.createElement("div");
    selectorTres.innerHTML = 
    `<footer class="footer">
        <div class="footer_dos">
          <img src="componentes/logo.png" width="120px" height="50px" class="img__footer">   
        </div>
        <div class="footer_tres">
            <div class="footer_i">
             <i class="fa-solid fa-house"></i>
             <p>Home</p>
            </div>
            <div class="footer_i_dos">
              <i class="fa-regular fa-user"></i>
              <p>Servicios</p>
            </div>
            <div class="footer_i_tres">
              <i class="fa-solid fa-phone"></i>
              <p>Contacto</p>
            </div>
        </div>
        <div class="footer_cuatro">
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="footer_cinco">
            <h3>©2025 - www.apx.school.com</h3> 
        </div>
    </footer>`;
    console.log(selectorTres);
    const footerEl = selectorTres.querySelector(".footer");
    el.appendChild(footerEl);
}