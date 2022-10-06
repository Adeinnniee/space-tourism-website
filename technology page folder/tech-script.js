

/* ------------------------------ GLOBAL VARIABLES --------------------------- */
const device_width_lg = 0 || window.innerWidth;
const device_width_sm = 0 || screen.width;
const launch_btn = document.querySelector('#launch-btn');
const spaceport_btn = document.querySelector('#spaceport-btn');
const space_btn = document.querySelector('#space-btn');
const launch_vehicle = document.querySelector('#launch-vehicle');
const spaceport = document.querySelector('#spaceport');
const space_capsule = document.querySelector('#space-capsule');
const launch_vehicle_portrait_img = document.querySelector('#launch-vehicle-portrait-img');
const spaceport_portrait_img = document.querySelector('#spaceport-portrait-img');
const space_capsule_portrait_img = document.querySelector('#space-capsule-portrait-img');
const launch_vehicle_landscape_img = document.querySelector('#launch-vehicle-landscape-img');
const spaceport_landscape_img = document.querySelector('#spaceport-landscape-img');
const space_capsule_landscape_img = document.querySelector('#space-capsule-landscape-img');





/* functions to display section by section AND styles when any of the button is clicked*/

// FOR MOBILE DEVICES 
if(device_width_lg <= 600 || device_width_lg >= 900 || device_width_sm <= 600 || device_width_sm >= 900){

    /* display launch vehicle image and details */
    launch_btn.addEventListener('click', ()=>{
        launch_vehicle.style.display = "block";
        launch_vehicle_portrait_img.style.display = "block";
        launch_vehicle_landscape_img.style.display = "none";
        spaceport.style.display = "none";
        spaceport_portrait_img.style.display = "none";
        spaceport_landscape_img.style.display = "none";
        space_capsule.style.display = "none";
        space_capsule_portrait_img.style.display = "none";
        space_capsule_landscape_img.style.display = "none";
        launch_btn.style.color = "#0B0D17";
        launch_btn.style.borderColor = "white";
        launch_btn.style.backgroundColor = "white";
        spaceport_btn.style.color = "white";
        spaceport_btn.style.borderColor = "#D0D6F9";
        spaceport_btn.style.backgroundColor = "#0B0D17";
        space_btn.style.color = "white";
        space_btn.style.borderColor = "#D0D6F9";
        space_btn.style.backgroundColor = "#0B0D17";
    })

    
    /* display spaceport image and details */
    spaceport_btn.addEventListener('click', ()=>{
        spaceport.style.display = "block";
        spaceport_portrait_img.style.display = "block";
        spaceport_landscape_img.style.display = "none";
        launch_vehicle.style.display = "none";
        launch_vehicle_portrait_img.style.display = "none";
        launch_vehicle_landscape_img.style.display = "none";
        space_capsule.style.display = "none";
        space_capsule_portrait_img.style.display = "none";
        space_capsule_landscape_img.style.display = "none";
        spaceport_btn.style.color = "#0B0D17";
        spaceport_btn.style.borderColor = "white";
        spaceport_btn.style.backgroundColor = "white";
        launch_btn.style.color = "white";
        launch_btn.style.borderColor = "#D0D6F9";
        launch_btn.style.backgroundColor = "#0B0D17";
        space_btn.style.color = "white";
        space_btn.style.borderColor = "#D0D6F9";
        space_btn.style.backgroundColor = "#0B0D17";
    })

    
    /* display space capsule image and details */
    space_btn.addEventListener('click', ()=>{
        space_capsule.style.display = "block";
        space_capsule_portrait_img.style.display = "block";
        space_capsule_landscape_img.style.display = "none";
        launch_vehicle.style.display = "none";
        launch_vehicle_portrait_img.style.display = "none";
        launch_vehicle_landscape_img.style.display = "none";
        spaceport.style.display = "none";
        spaceport_portrait_img.style.display = "none";
        spaceport_landscape_img.style.display = "none";
        space_btn.style.color = "#0B0D17";
        space_btn.style.borderColor = "white";
        space_btn.style.backgroundColor = "white";
        launch_btn.style.color = "white";
        launch_btn.style.borderColor = "#D0D6F9";
        launch_btn.style.backgroundColor = "#0B0D17";
        spaceport_btn.style.color = "white";
        spaceport_btn.style.borderColor = "#D0D6F9";
        spaceport_btn.style.backgroundColor = "#0B0D17";
    })
} 
    


    // FOR TABLETS AND DESKTOP DEVICES
    else{

        /* display launch vehicle image and details */
        launch_btn.addEventListener('click', ()=>{
        launch_vehicle.style.display = "block";
        launch_vehicle_landscape_img.style.display = "block";
        launch_vehicle_portrait_img.style.display = "none";
        spaceport.style.display = "none";
        spaceport_portrait_img.style.display = "none";
        spaceport_landscape_img.style.display = "none";
        space_capsule.style.display = "none";
        space_capsule_portrait_img.style.display = "none";
        space_capsule_landscape_img.style.display = "none";
        launch_btn.style.color = "#0B0D17";
        launch_btn.style.borderColor = "white";
        launch_btn.style.backgroundColor = "white";
        spaceport_btn.style.color = "white";
        spaceport_btn.style.borderColor = "#D0D6F9";
        spaceport_btn.style.backgroundColor = "#0B0D17";
        space_btn.style.color = "white";
        space_btn.style.borderColor = "#D0D6F9";
        space_btn.style.backgroundColor = "#0B0D17";
    })
    

    /* display spaceport image and details */
    spaceport_btn.addEventListener('click', ()=>{
        spaceport.style.display = "block";
        spaceport_landscape_img.style.display = "block";
        spaceport_portrait_img.style.display = "none";
        launch_vehicle.style.display = "none";
        launch_vehicle_landscape_img.style.display = "none";
        launch_vehicle_portrait_img.style.display = "none";
        space_capsule.style.display = "none";
        space_capsule_portrait_img.style.display = "none";
        space_capsule_landscape_img.style.display = "none";
        spaceport_btn.style.color = "#0B0D17";
        spaceport_btn.style.borderColor = "white";
        spaceport_btn.style.backgroundColor = "white";
        launch_btn.style.color = "white";
        launch_btn.style.borderColor = "#D0D6F9";
        launch_btn.style.backgroundColor = "#0B0D17";
        space_btn.style.color = "white";
        space_btn.style.borderColor = "#D0D6F9";
        space_btn.style.backgroundColor = "#0B0D17";
    })
    
    
    /* display space capsule image and details */
    space_btn.addEventListener('click', ()=>{
        space_capsule.style.display = "block";
        space_capsule_landscape_img.style.display = "block";
        space_capsule_portrait_img.style.display = "none";
        launch_vehicle.style.display = "none";
        launch_vehicle_landscape_img.style.display = "none";
        launch_vehicle_portrait_img.style.display = "none";
        spaceport.style.display = "none";
        spaceport_landscape_img.style.display = "none";
        spaceport_portrait_img.style.display = "none";
        space_btn.style.color = "#0B0D17";
        space_btn.style.borderColor = "white";
        space_btn.style.backgroundColor = "white";
        launch_btn.style.color = "white";
        launch_btn.style.borderColor = "#D0D6F9";
        launch_btn.style.backgroundColor = "#0B0D17";
        spaceport_btn.style.color = "white";
        spaceport_btn.style.borderColor = "#D0D6F9";
        spaceport_btn.style.backgroundColor = "#0B0D17";
    })
}