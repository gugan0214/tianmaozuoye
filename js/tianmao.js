/*
* @Author: l
* @Date:   2017-10-10 22:38:03
* @Last Modified by:   l
* @Last Modified time: 2017-10-17 08:41:13
*/
// banner图
{
	let lb = document.querySelectorAll(".lunbodisn1");
	let imgs = document.querySelectorAll(".imgbox");
	lb.forEach(function(val,index){
		val.onclick=function(){
			for(let i=0;i<lb.length;i++){
				lb[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			val.classList.add("active");
			imgs[index].classList.add("active");
			now=index;
		}
	})
	let now = 0;
	let st=setInterval(fn,1000)
	function fn(){
		now++;
		if (now===lb.length) {
			now=0;
		}
		for(let i=0;i<lb.length;i++){
				lb[i].classList.remove("active");
				imgs[i].classList.remove("active");
			}
			lb[now].classList.add("active");
			imgs[now].classList.add("active");
	}
	let bann = document.querySelector(".banner-neikuan");
	bann.onmouseover=function(){
		clearInterval(st);
	}
	bann.onmouseout=function(){
		st=setInterval(fn,1000)
	}
}
//滚动效果
{
	let sws=document.querySelector(".sunwang");
	let xias=document.querySelector(".xia");
	let an=document.querySelectorAll(".anniu");
	let lou=document.querySelectorAll(".neirong");
	let dian=document.querySelector(".fh");
	window.onscroll=function(){
		let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
		let st=Obj.scrollTop;
		
		if (st>500) {
			sws.style.top=0;
		}else{
			sws.style.top="-50px";
		}
	}
	window.addEventListener("scroll",function(){
		let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
		let st=Obj.scrollTop;
		if (st>500) {
			xias.style.cssText="width:35px;height:179px";
		}else{
			xias.style.cssText="width:0;height:0";
		} 
		for(let i=0;i<lou.length;i++){
				if (st>lou[i].offsetTop-50) {
					for(let i=0;i<an.length;i++){
					an[i].classList.remove("active")
				}
				an[i].classList.add("active")
			}
		}
		an.forEach(function(ele,index){
			let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
			ele.onclick=function(){
				let gao=lou[index].offsetTop;
				animate(Obj,{scrollTop:gao-50});
			}
		})
	})

	dian.onclick=function(){
		let Obj=document.documentElement.scrollTop===0?document.body:document.documentElement;
		animate(Obj,{scrollTop:0});
	}
}