

/* ------------------------------ GLOBAL VARIABLES --------------------------- */
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const btn_4 = document.querySelector('#btn-4');
const hurley_pic = document.querySelector('#hurley-pic');
const mark_pic = document.querySelector('#mark-pic');
const victor_pic = document.querySelector('#victor-pic');
const ansari_pic = document.querySelector('#ansari-pic');
const hurley = document.querySelector('#hurley');
const mark = document.querySelector('#mark');
const victor = document.querySelector('#victor');
const ansari = document.querySelector('#ansari');





/* functions to display section by section */

/* display hurley picture and details */
btn_1.addEventListener('click', ()=>{
    hurley.style.display = "block";
    hurley_pic.style.display = "inline-block";
    mark.style.display = "none";
    mark_pic.style.display = "none";
    victor.style.display = "none";
    victor_pic.style.display = "none";
    ansari.style.display = "none";
    ansari_pic.style.display = "none";
})


/* display mark picture and details */
btn_2.addEventListener('click', ()=>{
    mark.style.display = "block";
    mark_pic.style.display = "inline-block";
    hurley.style.display = "none";
    hurley_pic.style.display = "none";
    victor.style.display = "none";
    victor_pic.style.display = "none";
    ansari.style.display = "none";
    ansari_pic.style.display = "none";
})


/* display victor picture and details */
btn_3.addEventListener('click', ()=>{
    victor.style.display = "block";
    victor_pic.style.display = "inline-block";
    hurley.style.display = "none";
    hurley_pic.style.display = "none";
    mark.style.display = "none";
    mark_pic.style.display = "none";
    ansari.style.display = "none";
    ansari_pic.style.display = "none";
})


/* display ansari picture and details */
btn_4.addEventListener('click', ()=>{
    ansari.style.display = "block";
    ansari_pic.style.display = "inline-block";
    hurley.style.display = "none";
    hurley_pic.style.display = "none";
    mark.style.display = "none";
    mark_pic.style.display = "none";
    victor.style.display = "none";
    victor_pic.style.display = "none";
})





