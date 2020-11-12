function show_image(obj) {
    $("#imageModal").modal('show');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    $("#img").attr("src", obj.src);
}

// When the user clicks on <span> (x), close the modal
closefirstModal(){
    $("#imageModal").modal('hide');
}

var videomodal = $("#videoModal");

function show_video(id) {
    $("#videoModal").modal("show");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalVid = $("currentvideo");
    modalVid.src = "./videos/vid-0" + id + ".mp4";
}

closesecondModal(){
    $("#videoModal").modal('hide');
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
$("#close-2").on("click", function () {
    $("#videoModal").modal("hide");
});