var register = function(){
	this.init();
}


$.extend(register.prototype,{
	
	init : function(){
		this.creatHeader();
		this.bindEvents()
	},
	
	creatHeader : function(){
		let html = new EJS({url:'/backend/views/register.ejs'}).render({});
    	$("body").append(html);
	},
	
	//绑定注册事件
	bindEvents : function(){
		$("#registersure").on("click",this.handleSubimt.bind(this));
	},
	
	handleSubimt : function(){	

		$.ajax({
	      url: '/api/users/register',
	      type: 'post',
	      data: {
	        username: $('input[name="name"]').val(),
	        password: $('input[name="password"]').val(),
	        password2: $('input[name="password2"]').val(),
	        emial: $('input[name="emial"]').val(),
	        tel: $('input[name="tel"]').val(),
	        roles : 1,
	      },
	      success: $.proxy(this.returnResult,this)
	    })
	},
	
	returnResult : function(res){
		if(res.data.success){
			$("#alert-info1").css("display","block");
		      setTimeout(function(){
		      	$("#alert-info1").css("display","none");
		      },1000)
			this.submitSuccessStyle()
			this.clearform()
		}else{
			$("#alert-danger1").css("display","block");
		      setTimeout(function(){
		      	$("#alert-danger1").css("display","none");
		      },1000)
			this.submitFaillStyle()
		}
	},
	
	submitSuccessStyle : function(){
		$("#alert-info1").show(500);
		setTimeout($("#alert-info1").hide(1200),60000);
		$('#register').modal('hide')
	},
	
	submitFaillStyle : function(){
		$("#alert-danger1").show(500);
		setTimeout($("#alert-danger1").hide(1200),80000)
	},
	
	clearform : function(){
		$('input[name="name"]').val()='';
		$('input[name="password"]').val()='';
		$('input[name="password2"]').val()='';
		$('input[name="emial"]').val()='';
		$('input[name="tel"]').val()='';
	}
})
