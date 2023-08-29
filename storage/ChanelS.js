const path = "storage/ChanelS";
const path2 = "storage/ChanelI";

let InfoCanal = async()=>{
    let peticion2 = await fetch(`${path2}.json`);
    let res2 = await peticion2.json();
    let seleccion2 = document.querySelector("#imgbanner");
    seleccion2.insertAdjacentHTML("beforeend",/*html*/`
    <img src="${res2.banner.desktop[5].url}">
    `);
}

let Buscarvideos = async()=>{

    function nuevoorden(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let peticion2 = await fetch(`${path2}.json`);
    let res2 = await peticion2.json();
    
    const originalcontenido = res.contents;
    const nuevocontenido = nuevoorden([...originalcontenido]);

    let seleccion = document.querySelector("#videoapi");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    ${nuevocontenido.map((value)=> /*html*/`
        <div class="vid-list">
            <a href="play-video.html"><img src=${value.video.thumbnails[3].url} class="thumbnail"></a>
            <div class="flex-div">
                <img src=${res2.avatar[2].url}>
                <div class="vid-info">
                    <a href="play-video.html">${value.video.title}</a>
                    <p>${res2.title}</p>
                    <p>${value.video.stats.views} Views &bull;  ${value.video.publishedTimeText}</p>
                </div>
            </div>
        </div>
        `).join("")}
    `);
}

InfoCanal();
Buscarvideos();