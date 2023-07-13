import $ from 'jquery';

$(function(){
  $('a').on('click', function(){
    return false;
  })
})

// li:forEach > click > li name == data name > 가져오기

const room = document.querySelector('.forMan');
function Product(src,name,code,price){
  this.src = src;
  this.name = name;
  this.code = code;
  this.price = price;
}
Product.prototype.makeList = function(){

let str =  
   ` <figure>
      <a href="#"><img src="${this.src}" alt="${this.name}"></a>
      <figcaption>
        <dl>
          <dt>${this.name}</dt>
          <dd>${this.code}</dd>
          <dd>${this.price}</dd>
          <dd><button type="button">Add to cart</button></dd>
        </dl>
      </figcaption>
    </figure>`
    ;
  room.insertAdjacentHTML("beforeend", str);
}

const man0 = [
  new Product('/images/man_top01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('/images/man_top02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('/images/man_top03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('/images/man_top04.avif','SHOES','style444','$ 1,400 USD'),
]
const man1 = [
  new Product('./images/man_shoes01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('./images/man_shoes02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('./images/man_shoes03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('./images/man_shoes04.avif','SHOES','style444','$ 1,400 USD'),
]
const man2 = [
  new Product('./images/man_wallet01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('./images/man_wallet02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('./images/man_wallet03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('./images/man_wallet04.avif','SHOES','style444','$ 1,400 USD'),
]
const man3 = [
  new Product('./images/man_watch01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('./images/man_watch02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('./images/man_watch03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('./images/man_watch04.avif','SHOES','style444','$ 1,400 USD'),
]

// for(let i in man0){
//   man0[i].makeList();
// }


const ctgButtonM = document.querySelectorAll('.box04 ul>li');
// const ctgButtonW = document.querySelectorAll('.box04 ul>li');

ctgButtonM.forEach((item, index) => {
  item.addEventListener('click', function(){
    if(index == 0){
      for(let i in man0){
        man0[i].makeList();
      }
    } else if(index == 1){
      for(let i in man1){
        man1[i].makeList();
      }
    } else if(index == 2){
      for(let i in man2){
        man2[i].makeList();
      }
    } else if(index == 3){
      for(let i in man3){
        man3[i].makeList();
      }
    }
    // for(let i in man0){
    //   man0[i].makeList();
    // }
  })
})