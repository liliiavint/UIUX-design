let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(" .list");
let thumbnailDom = document.querySelector(".thumbnail");

nextDom.onclick = function (){
    showSlider('next')
}
prevDom.onclick = function (){
    showSlider('prev')
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;

let runAutoRun = setTimeout(() => {
        nextDom.click();
}, timeAutoNext);


function showSlider( type ){
    let itemSlider = document.querySelector(".item");
    let itemThumbnail = document.querySelector(".mini");
    console.log(itemThumbnail)

    if(type === "next"){
        
        listItemDom.appendChild(itemSlider);
        thumbnailDom.appendChild(itemThumbnail);
        carouselDom.classList.add("next");
    }else{
        let positionLastItem = itemSlider.length - 1
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
       
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext);
    
}

