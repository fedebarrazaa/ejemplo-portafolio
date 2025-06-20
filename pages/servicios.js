function main() { 
    const promesa = fetch("https://preview.contentful.com/spaces/b21pswcyodys/environments/master/entries?access_token=d1p0yMyXZdwsioAAwKoUcTocpKgmmiYYUiF0wPw2CDE&content_type=sectionServicios");

    promesa.then(function (res) {
        return res.json(); // VA A RETORNAR EL JSON DE LA URL DE LA API  
    }).then(function(json) {
        console.log(json);

        const divElDos = document.querySelector(".section_tercer_parte_div");  //SE LLAMA AL SELECTOR CREANDO ANTES EL BLANCO
        const divElTres = document.querySelector(".section_tercer_parte_div_tres");
        const divElCuatro = document.querySelector(".section_tercer_parte_div_cuatro");

        //PRIMERA API
        const img = document.createElement("img"); //CREA ELEMENTO 
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        // Obtener la URL de la imagen
        const imgUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.img.sys.id).fields.file.url;
        img.src = `https:${imgUrl}`; //AGREGAR "https:" LLAMA A LA IMG
        h1.textContent = json.items[0].fields.titulo; //LLAMA AL TITULO DEL JSON 
        p.textContent = json.items[0].fields.desarrolloWeb;

        divElDos.appendChild(img); //TERMINA DE CREAR
        divElDos.appendChild(h1);
        divElDos.appendChild(p);

        //SEGUNDA API
        const imgDos = document.createElement("img");
        const h1Dos = document.createElement("h1");
        const pDos = document.createElement("p");

        const imgDosUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.imgDos.sys.id).fields.file.url;
        imgDos.src = `https:${imgDosUrl}`;
        h1Dos.textContent = json.items[0].fields.tituloDos;
        pDos.textContent = json.items[0].fields.animacionesParaWeb;

        divElTres.appendChild(imgDos);
        divElTres.appendChild(h1Dos);
        divElTres.appendChild(pDos);

        //TERCERA API
        const imgTres = document.createElement("img");
        const h1Tres = document.createElement("h1");
        const pTres = document.createElement("p");

        const imgTresUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.imgTres.sys.id).fields.file.url;
        imgTres.src = `https:${imgTresUrl}`;
        h1Tres.textContent = json.items[0].fields.tituloTres; 
        pTres.textContent = json.items[0].fields.desarrolloDeApps;

        divElCuatro.appendChild(imgTres);
        divElCuatro.appendChild(h1Tres);
        divElCuatro.appendChild(pTres);
    }) 
}
main();
