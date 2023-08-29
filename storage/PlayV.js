const path4 = "storage/VideoI";
 let localID=localStorage.getItem('id')
 let video = async()=>{
     let seleccion = document.querySelector(".play-video");
     seleccion.insertAdjacentHTML("afterbegin",/*html*/`
     <iframe width="100%" height="16.5%" src="https:www.youtube.com/embed/${localID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     `);

     let peticion = await fetch(`${path4}.json`);
     let res = await peticion.json();
     let seleccion2 = document.querySelector(".publisher");
     seleccion2.insertAdjacentHTML("afterbegin",/*html*/`
     <img src=${res.author.avatar[2].url}>
        <div>
            <p>${res.author.title}</p>
            <span>${res.author.stats.subscribersText}</span>
        </div>
        <button type="button">Subscribe</button>
     `);
     let peticion2 = await fetch(`${path4}.json`);
     let res3 = await peticion2.json();
     let seleccion3 = document.querySelector(".vid-description");
     seleccion3.insertAdjacentHTML("afterbegin",/*html*/`
     <img src=${res3.author.avatar[2].url}>
     <p>Channel that makes learn easy</p>
     <p>Subscribe Easy tutorials to watch more turotials on web development</p>
     <hr>
     <h4>${res3.stats.comments} Comments</h4>
     <div class="add-comment">
         <img src="images/avatar.png">
         <input type="text" placeholder="Write comments...">
     </div>
     `);
 }
video()


