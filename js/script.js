window.addEventListener("DOMContentLoaded", function() {
    let mainPos = 0;
    $(".project-wrapper .project-arrow-container, .project-wrapper picture").on("click", function() {                
        let section = $(this).parents(".project-content-wrapper.item").attr("section");
        if ($(`.job-content[job-description='${section}']`).length>0) {
            mainPos = $(window).scrollTop();
            $("main.container").addClass("hide");
            $(`.job-content[job-description='${section}']`).addClass("shown");        
            $([document.documentElement, document.body]).animate({
                scrollTop: 0
            }, 0);
        } else {
            alert("There is no content of this job");
        }
    });
    $(".job-content-close").on("click", function() {
        $(".job-content").removeClass("shown");
        $("main.container").removeClass("hide");
        $([document.documentElement, document.body]).animate({
            scrollTop: mainPos
        }, 300);
    })
});
