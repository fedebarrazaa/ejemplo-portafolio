function llamarFormulario(el) {
  const selectorDos = document.createElement("div");
  selectorDos.innerHTML = 
  `<section class="section">
      <div class="section_h1">
        <h1>Escribime</h1>
      </div>
    <form class="section_form">
      <div class="type_name">
          <div class="caja_section">
             <label class="label_name" for="name">Nombre</label>
             <input type="text" class="input_text" name="nombre" placeholder="Tu nombre">
          </div>

          <div class="caja_section">
             <label class="label_email" for="email">Email</label>
             <input type="email" class="input_email" name="email" placeholder="tu@email.com">
          </div>
      </div>

      <div class="caja_section">
            <label class="label_mensaje" for="mensaje">Mensaje</label>
            <textarea cols="20" rows="2" name="mensaje" class="texterea"></textarea>
      </div>
      <div class="caja_section">
             <button type="submit" class="boton">Enviar
               <i class="fa-regular fa-paper-plane"></i> 
             </button>
      </div>    
    </form>   
  </section>`;
  
  // .SECTION ENTERO
  const formSection = selectorDos.querySelector(".section");
  el.appendChild(formSection);

  // EMPIEZA EL REQUEST
  //LLAMA AL SELECTOR DONDO EMPIEZA EL FORM 
  const form = el.querySelector(".section_form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datosForm = {
      nombre: this.nombre.value,
      email: this.email.value,
      mensaje: this.mensaje.value
    };
   //INFO QUE PIDE EL EJERCICIO
    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: "tu-email-de-estudiante@gmail.com",
        message: "mensaje a enviar"
      })
    })
    .then((response) => response.json())
    .then((json) => {
      console.log("Respuesta del servidor:", json);
      alert("Mensaje enviado correctamente");
    })
    .catch((err) => {
      console.error("Error al enviar:", err);
      alert("Error al enviar el mensaje");
    });
  });

  
}
