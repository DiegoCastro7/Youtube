const url = `https://youtube138.p.rapidapi.com/channel/videos/?cursor=Programaci%C3%B3n&hl=en&gl=US`;
let localID=localStorage.getItem('Id'); 

// const urlcinfo = 'https://youtube138.p.rapidapi.com/channel/details/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';
// const urlcvideos = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';
// const urlvinfo = 'https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US'; //edit
// const urlvcomments = 'https://youtube138.p.rapidapi.com/video/comments/?id=${localID}&hl=en&gl=US'; //edit
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbe6e0b399msh78cc9543d82095dp1ccee8jsn1f0109ca75d4',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};




const path3 = "storage/Youtube";

let Buscarvideosyoutubealeatorio = async () => {
    function nuevoorden(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    //let peticion = await fetch(`${path3}.json`);
    //let res = await peticion.json();
    const peticion = await fetch(url,options);
    const res = await peticion.json();  
    
    const originalcontenido = res.contents;
    const nuevocontenido = nuevoorden([...originalcontenido]);
    let seleccion = document.querySelector("#videoapiyou");

    seleccion.insertAdjacentHTML("beforeend",
        nuevocontenido.map(value => {
            if (value.type === "video") {
                return /*html*/ `
                    <div class="vid-list" data-video-id=${value.video.videoId}>
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

    const info3 = document.querySelectorAll(".vid-list")
    console.log(info3);

    info3.forEach(video =>{
        video.addEventListener("click", () => {
            let videoID = video.getAttribute("data-video-id")
            console.log(videoID);
            localStorage.setItem('id', videoID)
            window.location.href = 'play-video.html'
        })
    })
};

Buscarvideosyoutubealeatorio();