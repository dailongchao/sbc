$(function(){
  	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getBanner.php",
  		async:true,
  		dataType:"jsonp",
  		success:function(data){
  			var str='';
  			for(var i in data){
  				var mag=data[i].goodsBenUrl;
  				var shuju=eval(mag);
  				str+='<div class="swiper-slide"><img src="'+shuju[0]+'"/></div>'
  			}
  			$(".swiper-wrapper").append(str);
  			lun();
  		}
  	});
  	function lun(){
  		var mySwiper = new Swiper ('.swiper-container', {
    		direction: 'horizontal',
    	 	pagination: '.swiper-pagination',
    	 	autoplay:2000,
    	 	autoplayDisableOnInteraction:false
  		})  
  	}
  	var myscroll;
  	ajax1();
  	listscroll()
  	function ajax1(){
  		$.ajax({
 		url:"http://datainfo.duapp.com/shopdata/getGoods.php",		
  		dataType:"jsonp",
  		data:{
  			classID:1
  		},
  		success:function(data){
  			var list=$(".list");
			$.each(data,function(index){
				var odiv=$("<div class='All' ></div>");
				var odivpic=$("<div >图片加载中</div>")
				var pic=$("<img class='pic' src='"+data[index].goodsListImg+"'/>")
				var name=$("<div class='name'>"+data[index].goodsName+"</div>");
				odiv.append(odivpic);
				odiv.append(name)
				pic.on("load",function(){
					myscroll.refresh()
					odivpic.html(pic);
				})
				list.append(odiv)						
			});
  		}
  		})
  		
  	}
  	
  	function listscroll(){
  		myscroll=new IScroll("#List")
  	}
  	
  	$("#List").on("touchend",function(){
				console.log(myscroll.maxScrollY)
				if(myscroll.y>50){
					myscroll.refresh();
				}
				if(myscroll.y<myscroll.maxScrollY-50){
					ajax1();
				}
			})
})
