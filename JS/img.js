var sliderIndex = 0 
var slider = document.getElementsByClassName('slider-show1')
var sliderlength = slider.length;
for(x of slider){
    x.style.display = 'none';
}
slider[sliderIndex].style.display = 'block';
function sliderShow(){
    for(var i = 0; i < sliderlength ; i++){
        slider[i].style.display = 'none'
    }
    sliderIndex ++;
    if(sliderIndex > sliderlength){
        sliderIndex = 1;
    }
    // sliderIndex ++;
    slider[sliderIndex - 1].style.display = 'block';
    setTimeout(sliderShow, 3000)
}
sliderShow();

function showleft(){
    for(x of slider){
       x.style.display = 'none';
    }
    if(sliderIndex == 0){
       sliderIndex = sliderlength - 1;
    }else{
        sliderIndex = sliderIndex - 1;
    }
    slider[sliderIndex].style.display = 'block';
}
function showright(){
    for(var i = 0; i < sliderlength; i++){
        slider[i].style.display = 'none';
    }
    sliderIndex++;
    if(sliderIndex > sliderlength){
        sliderIndex = 1;
    }
    slider[sliderIndex - 1].style.display = 'block';
}

