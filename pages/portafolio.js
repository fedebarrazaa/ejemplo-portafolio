function main() {
    //APIs que muestra solo page: se usa el content type
    const promesa = fetch("https://preview.contentful.com/spaces/b21pswcyodys/environments/master/entries?access_token=d1p0yMyXZdwsioAAwKoUcTocpKgmmiYYUiF0wPw2CDE&content_type=page");
    
    promesa.then(function (res) {
        return res.json(); //retorno la promesa
    }).then(function (json) {
        console.log(json);

        const textoDiv = document.createElement("div");
        textoDiv.classList.add("section_segunda_parte_contenedor");

        const h1 = document.createElement("h1"); //crei el elemento h1
        h1.textContent = json.items[0].fields.nombre; // busco en el json lo que yo quiero mostrar
        const p = document.createElement("p");
        p.textContent = json.items[0].fields.presentacion; 
        textoDiv.appendChild(h1);//lo termino de agregar h1 
        textoDiv.appendChild(p);//lo termino de agregar p


        const img = document.createElement("img");
        // Buscar la imagen en includes.Asset
        const imagenId = json.items[0].fields.imagenMia.sys.id;
        const asset = json.includes.Asset.find(
        (item) => item.sys.id === imagenId);
        if (asset) {
        const imageUrl = "https:" + asset.fields.file.url;
        img.src = imageUrl;
        }

        // Accedemos al nombre desde la estructura del JSON
        const divEl = document.querySelector(".section_segunda_parte"); //lo agrego el selector que cree en mi index.html 
        divEl.appendChild(textoDiv);
        divEl.appendChild(img);//lo termino de agregar img
        
    }).catch(function (error) {
        console.error("Error:", error);
    });
}

main();
