		// console.log($('#name').val());
			var name = 'admin';
			var pas = 'admin';
			$('button').on('click',function () {
				var userName = $('#name').val();
				var userPas = $('#pas').val()
				console.log(name,pas,userName,userPas)
				if (userName == '' || userPas == '') {
					alert('用户名或密码不能为空！')
					return false
				}
				if ( name == userName && pas == userPas){
					window.localStorage.setItem('user',true)
					window.location.href='index.html';
				}else {
					alert('用户名或密码错误')
				}
			})
			alert('体验：用户名 admin 密码 admin');