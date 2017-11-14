var Header = function(active, container){
  this.container = container || $('body')
  this.active = active || 'index'
  this.init()
}

$.extend(Header.prototype, {
  init: function () {
    this.createDom()
  },

  renderHeader: function (opt) {
    var html = new EJS({url: '/backend/views/header.ejs'}).render({
      username: opt.username,
      isLogin: opt.isLogin,
      page: this.active
    })

    $("#head").html(html)

    this.bindEvents()
  },

  isLogin: function () {
    $.ajax({
      url: '/api/users/isLogin',
      success: (res) => {
        // 返回用户登录信息
        this.renderHeader.call(this, {
          username: res.data.username,
          isLogin: res.data.login
        })
      }
    })
  },

  bindEvents: function () {
    $('#js-logout').on('click', this.handleLogout.bind(this))
  },

  handleLogout: function () {
    $.ajax({
      url: '/api/users/logout',
      success: this.handleLogoutSucc.bind(this)
    })
  },

  handleLogoutSucc: function (res) {
    if (res.data.logout) {
      window.location.reload()
    }
  },

  createDom: function () {
    // 判断用户是否登录
    this.isLogin.call(this)

    new signUp()
    let signin = new signIn()
    $(signin).on('signin', (e) => {
      this.renderHeader.call(this, {
        username: e.username,
        isLogin: e.login
      })
    })
  }
})
