var signIn = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(signIn.prototype, {
  init: function () {
    this.createDom()
    this.bindEvents()
  },

  createDom: function () {
    let html = new EJS({url :'/backend/views/signIn.ejs'}).render({})
    this.container.append(html)

    this.submitBtn = $('#signinsubmit')
    this.usernameInput = $('input[name=username2]')
    this.passwordInput = $('input[name=password2]')
  },

  bindEvents: function () {
    this.submitBtn.on('click', this.handleSigninSubmit.bind(this))
  },

  handleSigninSubmit: function () {
    $.ajax({
      url: '/api/users/signIn',
      type: 'post',
      data: {
        username: this.usernameInput.val(),
        password: this.passwordInput.val()
      },
      success: this.handleSigninSubmitSucc.bind(this)
    })
  },

  handleSigninSubmitSucc: function (res) {
    if (res.data.login) {
      $("#alert-info2").css("display","block");
      setTimeout(function(){
      	$("#alert-info2").css("display","none");
      },1000)
      this.container.find('#signin-modal').modal('hide')
      $(this).trigger(new $.Event('signin', res.data))
    }else{
    	$("#alert-danger2").css("display","block");
      setTimeout(function(){
      	$("#alert-danger2").css("display","none");
      },1000)
    }
  }
})
