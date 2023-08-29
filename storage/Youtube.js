const path3 = "storage/Youtube";

let Buscarvideosyoutubealeatorio = async () => {
    function nuevoorden(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let peticion = await fetch(`${path3}.json`);
    let res = await peticion.json();
    
    const originalcontenido = res.contents;
    const nuevocontenido = nuevoorden([...originalcontenido]);
    let seleccion = document.querySelector("#videoapiyou");

    seleccion.insertAdjacentHTML("beforeend",
        nuevocontenido.map(value => {
            if (value.type === "video") {
                return /*html*/ `
                    <div class="vid-list">
                        <a href="play-video.html"><img src=${value.video.thumbnails[0].url} class="thumbnail"></a>
                        <div class="flex-div">
                            <img src=${value.video.author.avatar[0].url}>
                            <div class="vid-info">
                                <a href="play-video.html">${value.video.title}</a>
                                <p>${value.video.author.title}</p>
                                <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>`;
            } else {
            }
        }).join("")
    );
};

Buscarvideosyoutubealeatorio();