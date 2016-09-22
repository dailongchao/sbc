$(function(){
	$(".login").click(function(){
		
		var name=$("input").eq(0).val();
		var pass=$("input").eq(1).val();
		
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:'login',
				userID:name,
				password:pass	
			},
			success:function(data){
				console.log(typeof data)
				var mag=JSON.parse(data);
				if(data==0){
					alert("用户名不存在");
				}else if(mag.userID==name){//工作中mag.code="200"
					alert('登录成功')
					window.location.href="index.html"
				}else if(data==2){
					alert("用户名与密码不符")
				}
			}
		})
	})
})