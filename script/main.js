import $ from 'jquery';

$(function(){
  $('.box04 ul>li').on('click', function(){
    
  })
})


function Product(src,name,code,price){
  this.src = src;
  this.name = name;
  this.code = code;
  this.price = price;
}
Product.prototype.makeList = function(room){
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
  new Product('/images/man_top01.avif','TOP','style111','$ 1,100 USD'),
  new Product('/images/man_top02.avif','TOP','style222','$ 1,200 USD'),
  new Product('/images/man_top03.avif','TOP','style333','$ 1,300 USD'),
  new Product('/images/man_top04.avif','TOP','style444','$ 1,400 USD'),
]
const man1 = [
  new Product('./images/man_shoes01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('./images/man_shoes02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('./images/man_shoes03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('./images/man_shoes04.avif','SHOES','style444','$ 1,400 USD'),
]
const man2 = [
  new Product('./images/man_wallet01.avif','WALLET','style111','$ 1,100 USD'),
  new Product('./images/man_wallet02.avif','WALLET','style222','$ 1,200 USD'),
  new Product('./images/man_wallet03.avif','WALLET','style333','$ 1,300 USD'),
  new Product('./images/man_wallet04.avif','WALLET','style444','$ 1,400 USD'),
]
const man3 = [
  new Product('./images/man_watch01.avif','WATCH','style111','$ 1,100 USD'),
  new Product('./images/man_watch02.avif','WATCH','style222','$ 1,200 USD'),
  new Product('./images/man_watch03.avif','WATCH','style333','$ 1,300 USD'),
  new Product('./images/man_watch04.avif','WATCH','style444','$ 1,400 USD'),
]
const woman0 = [
  new Product('/images/woman_top01.avif','TOP','style111','$ 1,100 USD'),
  new Product('/images/woman_top02.avif','TOP','style222','$ 1,200 USD'),
  new Product('/images/woman_top03.avif','TOP','style333','$ 1,300 USD'),
  new Product('/images/woman_top04.avif','TOP','style444','$ 1,400 USD'),
]
const woman1 = [
  new Product('./images/woman_shoes01.avif','SHOES','style111','$ 1,100 USD'),
  new Product('./images/woman_shoes02.avif','SHOES','style222','$ 1,200 USD'),
  new Product('./images/woman_shoes03.avif','SHOES','style333','$ 1,300 USD'),
  new Product('./images/woman_shoes04.avif','SHOES','style444','$ 1,400 USD'),
]
const woman2 = [
  new Product('./images/woman_wallet01.avif','WALLET','style111','$ 1,100 USD'),
  new Product('./images/woman_wallet02.avif','WALLET','style222','$ 1,200 USD'),
  new Product('./images/woman_wallet03.avif','WALLET','style333','$ 1,300 USD'),
  new Product('./images/woman_wallet04.avif','WALLET','style444','$ 1,400 USD'),
]
const woman3 = [
  new Product('./images/woman_watch01.avif','WATCH','style111','$ 1,100 USD'),
  new Product('./images/woman_watch02.avif','WATCH','style222','$ 1,200 USD'),
  new Product('./images/woman_watch03.avif','WATCH','style333','$ 1,300 USD'),
  new Product('./images/woman_watch04.avif','WATCH','style444','$ 1,400 USD'),
]

const ctgButtonM = document.querySelectorAll('.box04 ul>li');
const ctgButtonW = document.querySelectorAll('.box06 ul>li');
ctgButtonM.forEach((item, index) => {
  item.addEventListener('click', function(e){
    const listMan = document.querySelector('.forMan');
    const room = document.querySelector('.forMan');
    listMan.innerHTML = '';
    if(index === 0){
      for(let i in man0){
        man0[i].makeList(room);
      }
    } else if(index === 1){
      for(let i in man1){
        man1[i].makeList(room);
      }
    } else if(index === 2){
      for(let i in man2){
        man2[i].makeList(room);
      }
    } else if(index === 3){
      for(let i in man3){
        man3[i].makeList(room);
      }
    }
    e.preventDefault();
  })
})
ctgButtonW.forEach((item, index) => {
  item.addEventListener('click', function(e){
    const listWoman = document.querySelector('.forWoman');
    const room = document.querySelector('.forWoman');
    listWoman.innerHTML = '';
    if(index === 0){
      for(let i in woman0){
        woman0[i].makeList(room);
      }
    } else if(index === 1){
      for(let i in woman1){
        woman1[i].makeList(room);
      }
    } else if(index === 2){
      for(let i in woman2){
        woman2[i].makeList(room);
      }
    } else if(index === 3){
      for(let i in woman3){
        woman3[i].makeList(room);
      }
    }
    e.preventDefault();
  })
})

const topBtn = document.querySelector('#top');
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    topBtn.style.visibility = 'visible';
  } else {
    topBtn.style.visibility = 'hidden';
  }
}
topBtn.addEventListener('click', function(e){
  document.documentElement.scrollTop = 0;
  e.preventDefault();
})