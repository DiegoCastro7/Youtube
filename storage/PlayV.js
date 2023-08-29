let localID=localStorage.getItem('id')
let video = async()=>{
    let seleccion = document.querySelector(".play-video");
    let element =`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/erKosEQaaFc?si=sCnVoyhTNlOgsw5h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    `
    console.log(element)
    seleccion.insertAdjacentHTML("beforeend",element);
}
video()
// }
// function ponerVideo(parametro) {
//     let iframe = document.querySelector("#video-left");
//     iframe.insertAdjacentHTML('afterbegin', /HTML/
//     <iframe width="100%" height="730" src="https://www.youtube.com/embed/${parametro}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     )
// }