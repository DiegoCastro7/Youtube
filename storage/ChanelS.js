const path = "storage/ChanelS";
const path2 = "storage/ChanelI";

let banner = async()=>{
    let peticion2 = await fetch(`${path2}.json`);
    let res2 = await peticion2.json();
    let seleccion2 = document.querySelector("#imgbanner");
    seleccion2.insertAdjacentHTML("beforeend",/*html*/`
    <img src="${res2.banner.desktop[5].url}">
    `);
}
let InfoCanal = async()=>{
    let peticion2 = await fetch(`${path2}.json`);
    let res2 = await peticion2.json();
    let seleccion3 = document.querySelector("#subls");
    seleccion3.insertAdjacentHTML("beforeend",/*html*/`
    <p>Subscriptions</p>
        <a href="index.html"><img src=${res2.avatar[2].url}><p style="margin-bottom:0">${res2.title}</p></a>
        <a href="https://www.youtube.com/@campuslands"><img src="images/campuslands.jpg"><p style="margin-bottom:0">Campuslands</p></a>
        <a href="https://www.youtube.com/@GYPZ"><img src="images/gypz.jpg"><p style="margin-bottom:0">GYPZ</p></a>
        <a href="https://www.youtube.com/@EDteam"><img src="images/edteam.jpg"><p style="margin-bottom:0">EDteam</p></a>
        <a href="https://www.youtube.com/@InformaticaDP"><img src="images/infomaticadp.jpg"><p style="margin-bottom:0">InformaticaDP</p></a>
        <a href="index.html"><img src="images/show-more.png"><p style="margin-bottom:0">Show More</p></a>
    `);
    let seleccion4 = document.querySelector("#infch");
    seleccion4.insertAdjacentHTML("beforeend",/*html*/`
    <div class="channel-info">
        <img id="imgvatar" src=${res2.avatar[2].url}>
        <div class="list-info-channel">
            <h3>${res2.title}</h3>
            <p><strong>${res2.username}</strong> ${res2.stats.subscribersText} ${res2.stats.videosText}</p>
            <a href=""><p>More about this channel<img src="images/derecha.png"></p></a>
        </div>        
    </div>
    <div class="button">
            <button type="button"><img src="images/notification.png"><h3>Subscribed<h3><img src="images/show-bg.png"></button>
        </div>
    `);
}

let Buscarvideosaleatorio = async()=>{

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
        <div class="vid-list" data-video-id=${value.video.videoId}>
            <a href="play-video.html"><img src=${value.video.thumbnails[3].url} class="thumbnail"></a>
            <div class="flex-div">
                <img src=${res2.avatar[2].url}>
                <div class="vid-info">
                    <a href="play-video.html">${value.video.title}</a>
                    <p>${res2.title}</p>
                    <p>${value.video.stats.views} views &bull;  ${value.video.publishedTimeText}</p>
                </div>
            </div>
        </div>
        `).join("")}
    `);
    
    const info = document.querySelectorAll(".vid-list")
    console.log(info);

    info.forEach(video =>{
        video.addEventListener("click", () => {
            let videoID = video.getAttribute("data-video-id")
            console.log(videoID);
            localStorage.setItem('id', videoID)
            window.location.href = 'play-video.html'
        })
    })
}
let Buscarvideos = async()=>{

    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let peticion2 = await fetch(`${path2}.json`);
    let res2 = await peticion2.json();

    let seleccion = document.querySelector("#videosder");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    ${res.contents.map((value)=> /*html*/`
        <div class="side-video-list">
            <a href="" class="small-thumbnail"><img src=${value.video.thumbnails[3].url}></a>
            <div class="vid-info">
                <a href="">${value.video.title}</a>
                <p>${res2.title}</p>
                <p>${value.video.stats.views} views &bull;  ${value.video.publishedTimeText}</p>
            </div>
        </div>
        `).join("")}
    `);
}
InfoCanal();
Buscarvideosaleatorio();
Buscarvideos();
banner();