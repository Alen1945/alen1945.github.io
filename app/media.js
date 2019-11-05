$(function(){
    let containerMateri=$("#container-materi")
    function addClose(){
        containerMateri.html(`<div class="close" data-action="close-materi"><i class="fa fa-close"></i></div>`)
    }

    allMateri={
        "pendahuluan":function(){
            containerMateri.append("<h3 class='text-center'>"+materiPendahulan.judul+"</h3>")
            containerMateri.append("<h5>1. "+materiPendahulan["materi-1"].judul+"</h5>")
            containerMateri.append(materiPendahulan["materi-1"].materi)
            containerMateri.append("<h5>2. "+materiPendahulan["materi-2"].judul+"</h5>")
            containerMateri.append(materiPendahulan["materi-2"].materi)
        },
        "nonLinear":function(){
            containerMateri.append("<h3 class='text-center'>"+materiNonLinear.judul+"</h3>")
            containerMateri.append(materiNonLinear.materi)
        }
    }
    window.addMedia=function(mediaTarget){
        addClose()
        allMateri[mediaTarget]()
    }
    
})
