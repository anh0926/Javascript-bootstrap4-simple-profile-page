// $(document).ready(function(){
//     $('.header').height($(window).height());
    
//    })
// set the header to take up the window’s height in order to include a full-screen background image for our landing page header
   var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

//Set up the Modal Trigger
setTimeout(function() {
    $('#demo-modal').modal();
}, 500);

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })