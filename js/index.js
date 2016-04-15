window.onload=function(){
  var as=getClass("f3-img");
  var btns=getClass("f3-btn");

  var bigbox=getClass("f3")[0];
  var leftBtn=getClass("f3-btn1left")[0];
  var rightBtn=getClass("f3-btn1right")[0];

  var index=0;
  var t=setInterval(move,3000);
  function move(){
    index++;
    if(index>as.length-1){
      index=0;
    }
    for(var i=0;i<as.length;i++){
      // as[i].style.display="none";
      animate(as[i],{opacity:0})
      btns[i].style.background="";
    }
    // as[index].style.display="block";
    animate(as[index],{opacity:1});
    btns[index].style.background="rgba(255, 255, 255, 0.6)";
   }
  // 鼠标经过
  bigbox.onmouseover=function(){
    clearInterval(t);
  }

  bigbox.onmouseout=function(){
      t=setInterval(move,3000);
  }
  //左按钮
  leftBtn.onclick=function(){
      index--;
      if(index==-1){
        index=as.length-1;
      }
      for(var i=0;i<as.length;i++){
        // as[i].style.display="none";
        animate(as[i],{opacity:0});
        btns[i].style.background="";
      }
      // as[index].style.display="block";
      animate(as[index],{opacity:1});
      btns[index].style.background=" rgba(255, 255, 255, 0.6)";
  }
  //右按钮
  rightBtn.onclick=function(){
       move();
  }
  //小按钮
  for(var i=0;i<btns.length;i++){
     btns[i].aa=i;
     btns[i].onclick=function(){
        for(var j=0;j<btns.length;j++){
          // as[j].style.display="none";
          animate(as[j],{opacity:0});
          btns[j].style.background="";
        }
          // as[this.aa].style.display="block";
        animate(as[this.aa],{opacity:1});
        this.style.background=" rgba(255, 255, 255, 0.6)";
     }
  }


//选项卡事件
var Bs=getClass("f8-remen");
var Tu=getClass("f7-bigbox");
var B,T;
for(var i=0;i<Bs.length;i++){
    B=Bs[i].getElementsByTagName("a");
    T=Tu[i].getElementsByTagName("li");
    tab(B,T);
}
 function tab(list,links){
      for(var i=0;i<list.length;i++){
          list[i].aa=i;
          list[i].onmouseover=function(){
              for(var j=0;j<list.length;j++){
                  list[j].style.color="";
                  list[j].style["border-bottom"]="";
                  links[j].style.display="none";
              }
              this.style.color="#f60";
              this.style["border-bottom"]="2px solid #f60";
              links[this.aa].style.display="block";
          }
      }
 }

// 小米明星单品
  var boxs1=getClass("f5-bottom")[0];
  var lis=boxs1.getElementsByTagName("li");
  var ws1=parseInt(getStyle(lis[0],"width"));
  boxs1.style.window=ws1*lis.length+"px";

  var btns1=getClass("f5-topa")[0].getElementsByTagName("a");
  var btns2=getClass("f5-topa")[1].getElementsByTagName("a");
  var Lb=getClass("f5-top1")[0];
  var Rb=getClass("f5-top2")[0];
  // console.log(Lb)

  var index1=0;
  var t1=setInterval(move1,5000);
      function move1(){
    index1++;
    if(index1==lis.length){
      index1=0;
    }
    for(var i=0;i<btns1.length;i++){
      btns1[i].style.color="#b1afb2"
          }
    btns1[index1].style.color="#E0E0E1"
    animate(boxs1,{marginLeft:-index1*ws1})
      }
  
   // 右边的按钮 
   Rb.onclick=function(){
       index1++;
      if(index1==lis.length){
        index1=lis.length-1;
      }
      for(var i=0;i<btns1.length;i++){
      btns1[i].style.color="#b1afb2"
          }
      btns1[index1].style.color="#E0E0E1"
      animate(boxs1,{marginLeft:-index1*ws1});
   }
   Lb.onclick=function(){
      index1--;
      if(index1<lis.length){
        index1=0;
      }
      for(var i=0;i<btns1.length;i++){
      btns1[i].style.color="#b1afb2";
          }
      btns1[index1].style.color="#E0E0E1"
      animate(boxs1,{marginLeft:-index1*ws1});

   }
  // 鼠标经过
   Rb.onmouseover=function(){
       clearInterval(t1);
   }
   Rb.onmouseout=function(){
        t1=setInterval(move1,5000);
   }
   Lb.onmouseover=function(){
       clearInterval(t1);
   }
   Lb.onmouseout=function(){
      t1=setInterval(move1,5000);
   }

// 为你推介
   var Lbtn=getClass("f5-top1")[1];
   var Rbtn=getClass("f5-top2")[1];

   var boxs2=getClass("f10-ul")[0];
   // console.log(boxs2)
   var lis2=boxs2.getElementsByTagName("li");
   
   var ws2=parseInt(getStyle(lis2[0],"width"));
   boxs2.style.width=ws2*lis2.length+"px";
   // alert(lis2.length)
  

  var index3=0;
  Rbtn.onclick=function(){
      index3++;
      if(index3==lis2.length){
        index3=lis2.length-1;
      }
      animate(boxs2,{marginLeft:-index3*ws2});
  };
  Lbtn.onclick=function(){
      index3--;
      if(index3<0){
        index3=0;
      };
      animate(boxs2,{marginLeft:-index3*ws2});
   };
   
   //内容
  (function(){
      
      function move(k){
          var bigbox=$(".f12-ul")[k];  //最长的框
          var li=$("li",bigbox);  //每张图片
          var liw=parseInt(getStyle(li[0],"width"));  //每张图片的宽度
          bigbox.style.width=liw*li.length+"px";
          var  Lbtn=$(".f12-left")[k];  //左按钮
          var Rbtn=$(".f12-right")[k];  //右按钮
          var xiao=$(".f12-btn")[k];
          var dian=$("li",xiao);  //没一个小按钮
          var flag=true;
          var index=0;
          //右按钮轮播
          Rbtn.onclick=function(){
            if(!flag){
               return;
            }
             flag=false;
             index++;
             if(index==li.length){
                  index=li.length-1;
             }
             animate(bigbox,{marginLeft:-liw*index},function(){
                flag=true;
             });
             for(var i=0;i<dian.length;i++){
                 dian[i].className="";
             }
             dian[index].className="f12-btn1";
             
          }
          // 左按钮
          Lbtn.onclick=function(){
            if(!flag){
              return;
            } 
              flag=false;
              index--;
              if(index<0){
                  index=0;
              }
              animate(bigbox,{marginLeft:-liw*index},function(){
                  flag=true;
              });
              for(var i=0;i<dian.length;i++){
                   dian[i].className="";
               }
               dian[index].className="f12-btn1";
          }
          // 小按钮
          for(var i=0;i<dian.length;i++){
              dian[i].aa=i;
              dian[i].onclick=function(){
                  animate(bigbox,{marginLeft:-liw*this.aa});
                  for(var j=0;j<dian.length;j++){
                     dian[j].className="";
                     dian[j].style.background="#ccc";
                  }
                  dian[this.aa].className="f12-btn1";
                  dian[this.aa].style.background="#fff"
                 
              }
          }
      }
  
      var box=$(".f12-dabig");
      for(var i=0;i<box.length;i++){
          move(i);
      }
  })();

  //按需加载
  var fn=$(".fn");
  var arr=[];
  for(var i=0;i<fn.length;i++){
      arr.push(fn[i].offsetTop);  //取每一个的offsettop值放到数组
  }
  var flag=true;
  window.onscroll=function(){
     if(!flag){return;}
     flag=false;
     var scroll=document.body.scrollTop||document.documentElement.scrollTop;
     var Height=document.documentElement.clientHeight;
     for(var i=0;i<arr.length;i++){
        if(scroll+Height>arr[i]){
            imgbox(i);
        }
     }
  }
  
  function imgbox(a){
     var img=$("img",fn[a]);
     for(var j=0;j<img.length;j++){
      img[j].src=img[j].getAttribute("aa");
     }
     flag=true;
  }
  window.onscroll();

}


