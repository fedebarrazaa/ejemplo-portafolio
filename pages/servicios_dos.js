function main() {
    const promesaDos = fetch("https://preview.contentful.com/spaces/b21pswcyodys/environments/master/entries?access_token=d1p0yMyXZdwsioAAwKoUcTocpKgmmiYYUiF0wPw2CDE&content_type=sectionDosServicios");
    
    promesaDos.then(function (res) {
        return res.json(); //retorna el json de la url de la APIs 
    }).then(function(json){
        console.log(json); 

        const divElUno = document.querySelector(".section_tercer_parte_div"); 
        const divElTres = document.querySelector(".section_tercer_parte_div_tres");
        const divElCuatro = document.querySelector(".section_tercer_parte_div_cuatro");

        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const p = document.createElement("p"); 

        const imgUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.img.sys.id).fields.file.url;
        img.src = `https:${imgUrl}`; //AGREGAR "https:" LLAMA A LA IMG
        h1.textContent = json.items[0].fields.titulo;
        p.textContent = json.items[0].fields.descripcion;

        divElUno.appendChild(img);
        divElUno.appendChild(h1);
        divElUno.appendChild(p);

        const imgDos = document.createElement("img");
        const h1Dos = document.createElement("h1");
        const pDos = document.createElement("p"); 

        const imgDosUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.imgDos.sys.id).fields.file.url;
        imgDos.src = `https:${imgDosUrl}`;
        h1Dos.textContent = json.items[0].fields.tituloDos; 
        pDos.textContent = json.items[0].fields.descripcionDos;

        divElTres.appendChild(imgDos);
        divElTres.appendChild(h1Dos);
        divElTres.appendChild(pDos);

        const imgTres = document.createElement("img");
        const h1Tres = document.createElement("h1");
        const pTres = document.createElement("p"); 

        const imgTresUrl = json.includes.Asset.find(asset => asset.sys.id === json.items[0].fields.imgTres.sys.id).fields.file.url;
        imgTres.src = `https:${imgTresUrl}`;
        h1Tres.textContent = json.items[0].fields.tituloTres; 
        pTres.textContent = json.items[0].fields.descripcionTres;

        divElCuatro.appendChild(imgTres);
        divElCuatro.appendChild(h1Tres);
        divElCuatro.appendChild(pTres);
    }) 
}
main()