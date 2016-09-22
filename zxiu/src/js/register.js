$(function(){
	$(".register").click(function(){
		
		var name=$("input").eq(0).val();
		var pass=$("input").eq(1).val();
		
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:'register',
				userID:name,
				password:pass	
			},
			success:function(data){
				console.log(data)
				if(data==0){
					alert("用户名重名");
				}else if(data==1){
					alert('注册成功')
					window.location.href="login.html"
				}else if(data==2){
					alert("数据库报错")
				}
			}
		})
	})
})

//$(function(){
//	$(".register").click(function(){
//		var name = $("input").eq(0).val()
//		var pass = $("input").eq(1).val()
//		$.ajax({
//			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//			data:{
//				status:'register',
//				userID:name,
//				password:pass
//			},
//			success:function(data){
//				if(data==0){
//					alert("用户名不存在")
//				}else if(data == 1){
//					alert("	注册成功")
//					window.location.href = "login.html"
//				}else if(data == 2){
//					alert("用户名密码不符")
//				}
//			}
//		});
//	})
//	
//})
//	
	


