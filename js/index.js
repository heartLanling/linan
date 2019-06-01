window.onload=function () {
    let home=document.getElementById('home');
    //dairyLeftNav   > ul >li
    // console.log(home);


    home.onmouseenter=function () {
        home.style.color='#00DAFF';
    };
    home.onmouseleave=function () {
        home.style.color='#ffffff';
        // console.log(home.onmouseleave);
    };

/*
        三要素
* 谁           什么时候               干什么
* 事件源       事件类型            事件处理函数
* */
    let pointSelect=document.getElementsByClassName('pointSelect');
    console.log(pointSelect);
    let diandian=pointSelect[0].getElementsByTagName('li');
    console.log(diandian);
    // let activeColor='#00c1de',disactiveColor='#fff';
    // // pointSelect      diandian
    // for(let i=0;i<diandian.length;i++){
    //     console.log(diandian[i]);
    //     diandian[i].onmouseleave=function () {
    //         // console.log(1);
    //         diandian[i].style.background="#ffffff";
    //         // console.log(2);
    //     }
    //     diandian[i].onmouseenter=function () {
    //         for(let i=0;i<diandian.length;i++){
    //             this.style.background="none";
    //         }
    //         this.style.background="#00c1de";
    //     }
    // }


    let five=document.querySelector('.five > li');
    let fives=document.querySelectorAll ('.five > li');
    // console.log(fives);
//     five.style.background ='red';
/*
* 方法一：滚动条
* */
    fives.forEach (function (elem,index) {
        elem.onmouseenter=function () {
            for(let i=0;i<fives.length;i++){
                fives [i].classList.remove('hot');
            }
            this.classList.add('hot')
        }
    })

    /*
    *
    * 方法二：滚动条
    * */
    // for(var i=0;i<fives.length;i++){
    //     fives[i].onmouseenter=(function(i){
    //         return function () {
    //             for(let j=0;j<fives.length;j++){
    //                 fives[j].classList.remove('hot')
    //             }
    //             this.classList.add('hot')
    //         }
    //     })
    // }

    /*
    * 倾城博客日记
    * */
    let dairyLeftli=document.querySelectorAll ('.dairyLeftNavUl > li')

    console.log(dairyLeftli);
    for(let i=0;i<dairyLeftli.length;i++){
        dairyLeftli[i].onclick=function () {
            console.log(1);
            for(let i=0;i<dairyLeftli.length;i++){
                dairyLeftli[i].classList.remove('active');
            }

            dairyLeftli[i].classList.add('active');
         }
    }

    /*
    * 轮播图；循环四张图
    * */
// bannerImg 下的li
//   右边按钮 arrowPointRight
//     let index=0;
//     let arrowPointRight=document.querySelector('.arrowPointRight');
//     let bannerImg=document.querySelectorAll ('.bannerImg > li');
    // arrowPointRight.onclick=function () {
    //     index++;
    //     if(index == bannerImg.length){
    //         index=0;
    //     }
    //     bannerImg.forEach (function (ele) {
    //         ele.style.zIndex= 1 ;
    //     });
    //
    //     Array.prototype.forEach.call(diandian,function(elem){
    //         elem.style.background="#ffffff";
    //     });
    //     diandian[index].style.background='#00c1de';
    //     bannerImg[index].style.zIndex=999;
    // }

//    左边按钮轮播图
//     let indxe=bannerImg.length-1;
//     let arrowPointLeft=document.querySelector('.arrowPointLeft');
    // let bannerImg=document.querySelectorAll ('.bannerImg > li');
    // arrowPointLeft.onclick=function () {
    //     index--;
    //     if(index < 0){
    //         index=bannerImg.length-1;
    //     }
    //     bannerImg.forEach (function (ele) {
    //         ele.style.zIndex= 1 ;
    //     })
    //     bannerImg[index].style.zIndex=9999;
    // }



    /*
    * 轮播移入移出
    * */
    // setInterval(  arrowPointRight.onclick,1000)

    //有一段
    // Array.prototype.forEach.call(diandian,function(elem){
    //              elem.classList.remove('hot')
    //        });

//    新的一轮轮播图，采用平移的方式
  let current=0;let next=0;
  let bannerImg=document.querySelectorAll ('.bannerImg > li');
  //好几行，好几个元素，用querySelectorAll
  //  单个才用querySelector
  let arrowPointLeft=document.querySelector ('.arrowPoint >.arrowPointLeft');
  let arrowPointRight=document.querySelector ('.arrowPoint >.arrowPointRight');
  let w = bannerImg[0].offsetWidth;
  //offsetWidth
  //获取宽度尺寸，没有单位，可以直接用
  let flag=true;
  // let diandian=document.querySelectorAll ('.pointSelect >.diandian');


    for(let i=0;i <diandian.length;i++){
        diandian[i].onclick=function () {
            if(next===i){
                return;
            }
            next=i;
            if(next > current){
                bannerImg[next].style.left= -w+'px';
                animate (bannerImg[current],{left:w});
                animate (bannerImg[next],{left:0});
            }else {
                bannerImg[next].style.left= w+'px';
                animate (bannerImg[current],{left:-w});
                animate (bannerImg[next],{left:0});
            }


            diandian[current].style.background='#ffffff';
            diandian[next].style.background='#00c1de';

            current=next;
        }
    }
    //左箭头
    arrowPointLeft.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next < 0){
            next=bannerImg.length-1;
        }
        bannerImg[next].style.left= -w+'px';
        diandian[current].style.background='#ffffff';
        diandian[next].style.background='#00c1de';
        animate (bannerImg[current],{left:w});
        animate (bannerImg[next],{left:0},function () {
            flag=true;
        });
        current=next;
    };


    //右箭头
    arrowPointRight.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next == bannerImg.length){
            next=0;
        }
        bannerImg[next].style.left= w+'px';
        diandian[current].style.background='#ffffff';
        diandian[next].style.background='#00c1de';
        animate (bannerImg[current],{left:-w});
        animate (bannerImg[next],{left:0},function () {
            //回调函数
            flag=true;
        });
        current=next;
    };

    setInterval(  arrowPointRight.onclick,2000)

    let viewH = window.innerHeight;
    let imgs = document.querySelectorAll ('.lazyload');
    let positionArr=[];
    imgs.forEach (function (ele) {
        let parent=ele.offsetParent;
        positionArr.push(parent.offsetTop+ele.offsetTop);
    })
    window.onscroll=function () {
        let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
        for(let i=0;i<positionArr.length;i++){
            if(scrolltop + viewH >= positionArr[i]+50){
                if(!imgs[i].src){
                    console.log(i);
                    imgs[i].src=imgs[i].getAttribute('aa');
                }

            }
        }
    }
};
