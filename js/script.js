window.addEventListener("DOMContentLoaded", function() {
    fetch("https://raw.githubusercontent.com/yangnana11/yangnana11.github.io/master/data/projects/projects.json")
    .then(r=>r.json())
    .then(r=>{
        if (r.length>0) {
            let ct = "";
            for(let c of r) {
                if (c.img["pc-main"]) {
                    ct+=`<div class="project-content-wrapper">
                        <div class="detail">
                            <div class="title">${c.name}</div>
                            <div>Skills: ${c.skills}</div>
                        </div>
                        <picture>
                            <source media="(min-width:900px)" type="${c.img["pc-alt"].type}" srcset="${c.img["pc-alt"].link}">
                            <source media="(min-width:900px)" type="${c.img["pc-main"].type}" srcset="${c.img["pc-main"].link}">
                            <source type="${c.img.alt.type}" srcset="${c.img.alt.link}">
                            <source type="${c.img.main.type}" srcset="${c.img.main.link}">
                            <img loading="lazy" src="${c.img.main.link}" alt="${c.name}">
                        </picture>
                    </div>`;
                } else {
                    ct+=`<div class="project-content-wrapper">
                        <div class="detail">
                            <div class="title">${c.name}</div>
                            <div>Skills: ${c.skills}</div>
                        </div>
                        <picture>
                            <source type="${c.img.alt.type}" srcset="${c.img.alt.link}">
                            <source type="${c.img.main.type}" srcset="${c.img.main.link}">
                            <img loading="lazy" src="${c.img.main.link}" alt="${c.name}">
                        </picture>
                    </div>`;
                }
            }
            $(".project-wrapper").html(ct);
        }
    })
});