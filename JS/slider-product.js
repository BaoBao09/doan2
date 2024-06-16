const imgs= document.querySelectorAll('.home-product-left-list-img')
const btn = document.querySelector('.btn-slider')
const modalSlider = document.querySelector('.modalslider')
const modalimg = document.querySelector('.img01')

function showmodal(){
    modalSlider.classList.add('open')
    modalimg.src = this.src;
}
for ( const x of imgs){
    x.addEventListener('click', showmodal)
}
function closemodals(){
    modalSlider.classList.remove('open')
}
function closemodal(){
    modalSlider.classList.remove('open')
}
function stopclose(){
    event.stopPropagation()
}
btn.addEventListener('click',closemodal)
modalSlider.addEventListener('click' , closemodals)
modalimg.addEventListener('click', stopclose)






