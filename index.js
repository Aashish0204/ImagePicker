
imageDiv = document.getElementsByClassName('imageDiv');
cropBtn = document.getElementById('cropBtn');


function chooseFile() {
    console.log(document.getElementById('chooseBtn'))
}

var cropper
function changed(ev) {
    imageDiv[0].style.display = "flex";
    cropBtn.style.display = "inline";
    document.getElementById('previewImg').setAttribute("src", URL.createObjectURL(ev.target.files[0]));
    image = document.getElementById('previewImg');
    cropper = new Cropper(image, {
        aspectRatio: 0,
        crop(event) {
        },
    });
}

document.getElementById("cropBtn").addEventListener("click", () => {
    imageDiv[0].style.display = "none";
    cropBtn.style.display = "none";
    imageDiv[1].style.display = "flex";
    document.getElementById('container').style.filter = "blur(3px)";

    newImgSrc = cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('finalImg').setAttribute("src", newImgSrc);
    btns = document.getElementsByClassName("editingTools");
    btns[0].style.display = "inline";
    document.getElementsByClassName('UseIt')[0].style.display =  "inline";
})

document.getElementsByClassName('UseIt')[0].addEventListener("click",()=>{
    document.getElementsByClassName("editingTools")[0].style.display = "none";
    document.getElementsByClassName('UseIt')[0].style.display =  "none";
})

heart = document.getElementById('heart');
square = document.getElementById('square');
circle = document.getElementById('circle');
rect = document.getElementById('rectangle');
orginal = document.getElementById('original');

square.addEventListener("click", () => {
    console.log("square selected");
    imageDiv[1].classList.add("square");
    imageDiv[1].classList.remove('heart')
    imageDiv[1].classList.remove('circle')
    imageDiv[1].classList.remove('rect')
})
heart.addEventListener("click", () => {
    console.log("heart selected");
    imageDiv[1].classList.add("heart");
    imageDiv[1].classList.remove('square')
    imageDiv[1].classList.remove('circle')
    imageDiv[1].classList.remove('rect')
})
circle.addEventListener("click", () => {
    console.log("circle selected");
    imageDiv[1].classList.add("circle");
    imageDiv[1].classList.remove('heart')
    imageDiv[1].classList.remove('square')
    imageDiv[1].classList.remove('rect')
})

rect.addEventListener("click", () => {
    console.log("rect selected");
    imageDiv[1].classList.add("rect");
    imageDiv[1].classList.remove('heart')
    imageDiv[1].classList.remove('circle')
    imageDiv[1].classList.remove('square')
})

function removeAllClass() {
    imageDiv[1].classList.remove('heart')
    imageDiv[1].classList.remove('circle')
    imageDiv[1].classList.remove('square')
    imageDiv[1].classList.remove('rect')
}