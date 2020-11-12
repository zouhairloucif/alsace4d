function show_image(obj) {
    $("#imageModal").modal("show");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    $("#img").attr("src", obj.src);
}

// When the user clicks on <span> (x), close the modal
$("#close-1").on('click', function () {
    $("#imageModal").modal("hide");
});

var videomodal = $("#videoModal");

function show_video(id) {
    $("#videoModal").modal("show");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    $("#currentvideo").html('<source src="./assets/videos/vid-0' + id + '.mp4" type="video/mp4" />');
}

$("#close-2").on('click', function () {
    $("#videoModal").modal("hide");
});

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
$("#close-2").on("click", function () {
    $("#videoModal").modal("hide");
});