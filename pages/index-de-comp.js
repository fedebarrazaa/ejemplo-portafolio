//FUNCION PARA LLAMAR A LOS COMPONENTES DE JS DE LA COMPARTE componentes

function main() {
  const componentes = document.querySelector(".header");
  llamarComponentes(componentes); //LLAMA AL NOMBRE DE LA FUNCION DEL HEADER.JS 

  const componentesTres = document.querySelector(".footer-contenedor");
  llamarFooter(componentesTres);
  
  const componentesDos = document.querySelector(".section"); //LLAMA AL NOMBRE DE LA FUNCION DEL FORM.JS
  llamarFormulario(componentesDos);

  
};
main()
