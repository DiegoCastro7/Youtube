const path4 = "storage/VideoI";
const path5 = "storage/VideoC";
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
     
     <p>aaaaaaa</p>
     <hr>
     <h4>${res3.stats.comments} Comments</h4>
     <div class="add-comment">
         <img src="images/avatar.png">
         <input type="text" placeholder="Write comments...">
     </div>
     `);
     let peticion3 = await fetch(`${path4}.json`);
     let res4 = await peticion3.json();
     let seleccion4 = document.querySelector(".play-video-info");
     seleccion4.insertAdjacentHTML("afterbegin",/*html*/`
     
     <p>${res4.stats.views} views &bull; 2 days ago</p>
        <div>
            <a href=""><img src="images/like.png">${res4.stats.likes}</a>
            <a href=""><img src="images/dislike.png"></a>
            <a href=""><img src="images/share.png">Share</a>
            <a href=""><img src="images/save.png">Save</a>
        </div>
     `);
     let peticion4 = await fetch(`${path4}.json`);
     let res5 = await peticion4.json();
     let seleccion5 = document.querySelector(".tags");
     seleccion5.insertAdjacentHTML("afterbegin",/*html*/`
     <a href="">${res5.superTitle.items[0]}</a> <a href="">${res4.superTitle.items[1]}</a> <a href="">${res4.superTitle.items[2]}</a>
     
     `);
     let peticion5 = await fetch(`${path4}.json`);
     let res6 = await peticion5.json();
     let seleccion6 = document.querySelector("#titulo-video");
     seleccion6.insertAdjacentHTML("afterbegin",/*html*/`
     ${res6.title}
     `);
     let peticion6 = await fetch(`${path5}.json`);
     let res7 = await peticion6.json();
     let seleccion7 = document.querySelector(".vid-description");
     seleccion7.insertAdjacentHTML("beforeend",/*html*/`
     
     ${res7.comments.map((value)=> /*html*/`
     <div class="old-comment">
     <img src=${value.author.avatar[2].url}>
     <div>
         <h3>${value.author.title} <span>${value.publishedTimeText}</span></h3>
         <p>${value.content}</p>
         <div class="acomment-action">
             <img src="/images/like.png">
             <span>${value.stats.votes}</span>
             <img src="images/dislike.png">
             <span></span>
             <span>REPLY</span>
             <span>${value.stats.replies}</span>
         </div>
         </div>
    </div>
        `).join("")}
     `);
 }
video()
