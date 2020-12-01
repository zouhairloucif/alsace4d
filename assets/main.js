/**
 * Variables Declaration
 *  */

let imageModal = $("#imageModal");
let videomodal = $("#videoModal");
let currentvideo = $("#currentvideo");
let modalImage = $("#img");

/**
 * Images Part Code
 *  */

function show_image(obj) {
    imageModal.modal("show");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    modalImage.attr("src", obj.src);
}

// When the user clicks on <span> (x), close the modal
$("#close-1").on('click', function () {
    imageModal.modal("hide");
});

/**
 * Videos Part Code
 *  */

function show_video(id) {
    videomodal.modal("show");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    currentvideo.html('<source src="./assets/videos/vid-0' + id + '.mp4" type="video/mp4" />');
    currentvideo.get(0).load();
}

// When the user clicks on <span> (x), close the modal
$("#close-2").on('click', function () {
    currentvideo.trigger('pause');
    currentvideo.html('');
    videomodal.modal("hide");
});
