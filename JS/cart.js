function addCart(item){
    item.soluong = 1;
    console.log(item.soluong)
    var list;
    if(localStorage.getItem('cart') == null){
        list = [item];
    }
    else{
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if(x.id == item.id){
                x.soluong += 1;
                ok = false;
                break;
            }
        }
        if(ok){
            list.push(item)
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert('thêm thành công');
}
var list = JSON.parse(localStorage.getItem('cart')) || [];
function LoadData() {
    var info = "";
    var tt = 0;
    for (x of list) {
        tt += x.price * x.soluong;
        info += `<tr>
        <td>
            <img src="`+ x.img +`" alt="" >
            <span class="spn-title" style = "margin-left: 10px">`+ x.name +`</span>
        </td>
        <td><span class="spn-price" style="margin: 30%">`+ x.price +`</span></td>
        <td style= "text-align: center"> 
            <button onclick="Giam(`+ x.id + `)" style = "width: 15%; height: 29px;">-</button>
            <input id="q_`+ Number(x.id)+`" onchange="updateQuantity`+ x.id + `" type="text" value="`+ x.soluong + `" style="width: 50px; height: 25px;" >
            <button onclick="Tang(`+ x.id + `) " style = "width: 15%; height: 29px;">+</button>
        </td>
        <td>`+ ( x.price * x.soluong ) +` đ</td>
        <td><button style="margin: 30%; height: 30px; width: 40%" onclick="btnClose(`+x.id+`)">Xóa</button></td>
    </tr>`;
    }
    document.getElementById("mycart").innerHTML = info;
    // document.getElementById("tongtien").innerText = tt;
    
}
LoadData();
function XoaCart() {
    localStorage.setItem('cart', null);
    location.reload();
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].soluong += 1; 
    }
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].soluong >=1) {
        list[index].soluong -= 1; 
    }
    LoadData();
}

function btnClose(id){
    alert('Bạn muốn xóa sản phẩm này không');
    var index = list.findIndex(x => x.id == id)
    if(index >= 0){
        list.splice (index, 1)
    }
    LoadData();
}
function updateCart(){
    localStorage.setItem('cart', JSON.stringify(list));
    alert('Đã cập nhập giỏ hàng thành công')
}

// getItem là truy suất
// setItem là đặt/ sửa
// stringify chuyển từ js về json
// parse chuyển từ json về array or object



var modalCart = document.querySelector('.modal-cart')
var btnCart = document.querySelector('.js-thanhtoan')
var notClose = document.querySelector('.modal__order')

btnCart.addEventListener('click', showmodal)
modalCart.addEventListener('click', closemodal)
notClose.addEventListener('click', notCloses)
function showmodal(){
    modalCart.classList.add('open')
}
function closemodal(){
    modalCart.classList.remove('open')
}
function notCloses(){
    event.stopPropagation()
}
