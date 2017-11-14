var section = function(){
  this.init()
  this.initList()
}

$.extend(section.prototype, {
  init: function () {
    this.createDom()
  },

  renderSection: function (opt) {
    let html = new EJS({url: '/backend/views/section.ejs'}).render({
      username: opt.username,
      isLogin: opt.isLogin,
      page: this.active
    })
 	  $("section").html(html)
    new JobList()
  },

  isLogin: function () {
  	
    $.ajax({
      url: '/api/users/isLogin',
      success: (res) => {
        // 返回用户登录信息
        this.renderSection.call(this, {
          username: res.data.username,
          isLogin: res.data.login
        })
      }
    })
  },
  
  handlePagination: function (res) {
    this.pagination = new Pagination($('#paginationCon'), res)
    $(this.pagination).off('pagechange').on('pagechange', this.getJobList.bind(this))
  },

  initList: function () {
    this.list = new JobList($('#list-con'))
    $(this.list).on('pagedata', this.handlePagination.bind(this))
  },

  getJobList: function (e) {
    this.list.getJobList(e.pageno)
  },

  createDom: function () {
    // 判断用户是否登录
    this.isLogin.call(this)

    new signUp()
    let signin = new signIn()
    $(signin).on('signin', (e) => {
      this.renderSection.call(this, {
        username: e.username,
        isLogin: e.login
      })
    })
  }
})
