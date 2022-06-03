
let Left_button = document.querySelector(".Button.Left");
let Right_button = document.querySelector(".Button.Right");

let Images = document.querySelectorAll(".img");
let Image_one = Images[0];
let Carasols = document.querySelector(".Carasols");

let Carasol_container = document.querySelector(".Carasol_container");

let Content_width = getComputedStyle(Image_one).width;
Content_width = parseInt(Content_width); // FOR LESS "PX"

// Carasol_container.style.cssText = `--width: ${Content_width}`;

let Screen_width = window.innerWidth;
let Image_per_screen = Screen_width / Content_width;
Image_per_screen = parseInt(Image_per_screen); // FOR LESS DESIMAL(.) COUNT

let Index_of_image = 1;
let Flow = 0;

setInterval(Right_slider, 5000);

////////////////////////////////////////////////////////////////
// ---------------------- RIGHT BUTTON -------------------------
////////////////////////////////////////////////////////////////


Right_button.addEventListener("click", Right_slider);
Left_button.addEventListener("click", Left_slider);

// ========== FOR USE MOUSE_WHEEL ==========
Carasol_container.addEventListener("wheel", (Wheel_value) => {

    if (Wheel_value.deltaY >= 0) {
        Right_slider();
    }
    if (Wheel_value.deltaY <= -1) {
        Left_slider();
    }
});
// ===================  E--N--D =====================

function Right_slider() {

    //////// ======= (Image_per_screen -1) ====== BALENCE LOOP FOR LAST SCREEN ==========
    if (Index_of_image < Images.length - (Image_per_screen - 1)) {

        Flow = Flow - Content_width;
        Carasols.style.setProperty("--translateX", Flow + "px");

        Index_of_image = Index_of_image + 1;

    } else {
        Carasols.style.cssText = "--translateX:0;";
        Index_of_image = 1;
        Flow = 0;
    }
console.log(Flow)
}

////////////////////////////////////////////////////////////////
// ---------------------- LEFT BUTTON -------------------------
////////////////////////////////////////////////////////////////



function Left_slider() {

    //////// ======= (Image_per_screen -1) ====== BALENCE LOOP FOR LAST SCREEN ==========
    if (Index_of_image <= Images.length - (Image_per_screen - 1) && Index_of_image > 1) {
        Flow = Flow + Content_width;
        Carasols.style.setProperty("--translateX", Flow + "px");
        Index_of_image = Index_of_image - 1;
    } else if (Index_of_image == 1) {
        let Last_content = (Images.length * Content_width - Content_width * Image_per_screen) * -1;
        Flow = Last_content;
        Carasols.style.setProperty("--translateX", Flow + "px");
        Index_of_image = Images.length - (Image_per_screen - 1); // FOR LAST SCREEN SELECT
    }
    else {
        Carasols.style.cssText = "--translateX:0;";
        Index_of_image = 1;
        Flow = 0;
    }


}

///////////////////////////////////////////// ( \/ ) ///////////////////////////////////////////
//                                             \  /                                           //
//                                              \/                                            //
