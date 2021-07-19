const API_URL = 'https://api-free.deepl.com/v2/translate?';
const privateKey = "5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx";
const source_idiom = "EN";

function traslation() {

    const text = document.idiom.tToT;
    texto = text.value;
    texto = texto.toString();
    lista = document.idiom.lenguage
    elegido = lista.selectedIndex
    opcion = lista.options[elegido]
    idioma = opcion.value


    getconectionAsync(texto, idioma);
}

/*
getconection = (texto, idioma) => {
    parametros = 'auth_key=' + privateKey + '&text=' + texto + '&target_lang=' + idioma + '&source_lang=' + source_idiom;
    URLcall = API_URL + parametros;
    fetch(URLcall).then(response => response.json())
        .then(post => {
            console.log(post);
        })

}*/

const getconectionAsync = async(texto, idioma) => {
    parametros = 'auth_key=' + privateKey + '&text=' + texto + '&target_lang=' + idioma + '&source_lang=' + source_idiom;
    URLcall = API_URL + parametros;

    try {
        const resPos = await fetch(URLcall)
            //const post = await resPos.text();
        const post = await resPos.text();
        console.log(post);
        const arr = Array.from(post);

        console.log(arr);

        tam = arr.length - 5;
        traduc = "";
        cont = 0;
        //console.log(arr[25]);

        for (i = 0; i <= tam; i++) {
            //console.log(arr[i]);
            if (arr[i] == ":") {
                // console.log(arr[i]);
                cont++;
                console.log(cont);
            }
            if (cont >= 3) {
                traduc = traduc + arr[i + 1];
                console.log(traduc);
            }
        }
        console.log(traduc);

    } catch (error) {
        console.log(error)

        //



        // console.log(show);



    }
    document.getElementById("traduccion").innerHTML = traduc;
}