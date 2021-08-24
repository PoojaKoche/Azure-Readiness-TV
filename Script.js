// function for hamburgur when on click on hamburgur of web page this function will execute
function onClickMenu(){ 
    document.getElementById("menu").classList.toggle("icon");
    //above code means that where ever the id is menu will replace with icon
    document.getElementById("nav").classList.toggle("change");
    //above code means that where ever the id is nav will replace with change
    document.getElementById("logo").classList.toggle("imgHide");
    document.getElementById("search-bar").classList.toggle("searchHide");
    document.getElementById("user").classList.toggle("userHide");
    document.getElementById("cloud").classList.toggle("cloudHide");
}
// ***********************home section slider***************************
// this code is for header slider to slide images and text
//flag=0 it means flag variable is set to the 1st image of the array(1st image of header slider) 
let flag = 0;

// this function is to add functionality to left and right arrow buttons
function controller(x){

    //left right arrow button
    flag = flag + x;   //left arrow ex:suppose value of flag=1-->  flag = 1 + (-1) = 0 will display 0th index slide class image & text similar for right arrow
    slideshow(flag);
}
//calling the slideshow function with flag parameter
slideshow(flag);
//this function is to slide the images(here flag's value is passed to num)
function slideshow(num){
    //below line of code gets all the slide class and arrage them in a array
    let slides = document.getElementsByClassName('slide');
    //if right arrow reatch to last slides image and text then after that onclicking right arrow button it will set to first image od slides
    if( flag == slides.length){
        flag = 0;
        num = 0;
    }
    //if left arrow reatch to fist slides image and text then after that onclicking left arrow button it will set to last image od slides.
    if( num < 0){
        num = slides.length - 1;
        flag = slides.length -1;
    }
    //this loop will hide slides images and text which are not the current array index
    for(let y of slides){
        y.style.display = "none";
    }
    //this will display the image text present on slides class array_index or array number 
    slides[num].style.display = "block";
}

//Create channel form pop up on clicking Add Channel button
function openForm() {
    document.getElementById("addChannelForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("addChannelForm").style.display = "none";
  }

// **************************Login Page web page*******************************
function showRegistration(){
    document.querySelector('.login').style.display = "none";
    document.querySelector('.register').style.display = "block";
}
function showLogin(){
    document.querySelector('.login').style.display = "block";
    document.querySelector('.register').style.display = "none";
}

//**********************Cloud Upload Video web page******************* */
// upload video form open on clicking upload file & form gets close on clicking cancel button 
function openFields() {
    document.getElementById("uploadForm").style.display = "block";
    document.querySelector(".redirectToHomeBtn").style.visibility = "hidden"
    
 }
  function closeFields() {
    document.getElementById("uploadForm").style.display = "none";
    document.querySelector(".redirectToHomeBtn").style.visibility = "visible";

  }
// Enter File URL on click that link open video url form 
function openVidURL(){
    document.querySelector(".upload_box").style.display = "none";
    document.querySelector(".form-element_vid_url").style.display = "block";
    document.querySelector(".otherField").style.display = "none";
    document.querySelector("#upload_cancel_btn").style.display = "block";
    document.querySelector(".redirectToHomeBtn").style.visibility = "hidden";
    document.getElementById("uploadForm").style.display = "none";

}
function display_other_field(){
    document.querySelector(".otherField").style.display = "block";
    document.querySelector(".redirectToHomeBtn").style.visibility = "hidden";
    document.querySelector("#upload_cancel_btn").style.display = "block";
}
function MoveToUploadForm(){
    document.querySelector(".upload_box").style.display = "block";
    document.querySelector(".form-element_vid_url").style.display = "none";
    document.querySelector("#upload_cancel_btn").style.display = "none";
    document.querySelector(".otherField").style.display = "none";
    document.querySelector(".redirectToHomeBtn").style.visibility = "visible";
}
