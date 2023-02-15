
async function buscarDigimons() {
    const resultado = await fetch('https://digimon-api.vercel.app/api/digimon')
    const resultadoJson = await resultado.json()
    console.log(resultadoJson)

    document.getElementById('lista').innerHTML=''

    for (let index = 0; index < resultadoJson.length; index++) {
        const element = resultadoJson[index];
        const div = `
        <div id='digimon'>
        <h2>Nome: ${element.name}</h2>
        <img src='${element.img}'>
        <span>Level: ${element.level}</span>

        </div>
        `
        document.getElementById('lista').innerHTML+=div
    }

/*     resultadoJson.map(t=>{
        teste.innerHTML +=` 
        
        <li>${t.name}</li>
        <img src='${t.img}'>
        <li>${t.level}</li>
      
        </ul>`
    }) */
  //  teste.innerText = resultadoJson[0].name
}

buscarDigimons()




let teste = document.getElementById('teste')

