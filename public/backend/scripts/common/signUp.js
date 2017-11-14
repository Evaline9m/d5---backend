var signUp = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(signUp.prototype, {
  init: function () {
    this.createDom()
    this.bindEvents()
  },

  createDom: function () {
    var html = new EJS({url: '/backend/views/signUp.ejs'}).render({})
    this.container.append(html)
    this.submitBtn = $('#signupsubmit')

    this.usernameInput = $('input[name=username]')
    this.passwordInput = $('input[name=password]')
    this.confirmpwdInput = $('input[name=confirmpwd]')
    this.emailInput = $('input[name=email]')
    this.roles = $('input[name=roles]')
  },

  bindEvents: function () {
    this.submitBtn.on('click', $.proxy(this.handleSignupSubmit, this))
  },

  handleSignupSubmit: function () {
    $.ajax({
      url: '/api/users/signUp', // restful接口
      type: 'post',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        username: this.usernameInput.val(),
        password: this.passwordInput.val(),
        email: this.emailInput.val(),
        roles: this.roles.val()
      }),
      success: $.proxy(this.handleSignupSubmitSucc, this)
    })

  },

  handleSignupSubmitSucc: function (res) {
    if (res.data.success) {
      alert('用户注册成功~')
      this.handleClearInputsValue.call(this)
      this.container.find('#signup-modal').modal('hide')
    } else {
      alert('此用户已经注册过了~')
    }
  },

  handleClearInputsValue: function () {
    this.usernameInput.val('')
    this.passwordInput.val('')
    this.confirmpwdInput.val('')
    this.emailInput.val('')
  }
})
