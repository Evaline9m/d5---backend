const Pagination = function (container, res) {
  this.container = container || $('body')
  this.res = res || {}
  this.init()
}

$.extend(Pagination.prototype, {
  init: function () {
    this.createDom()
  },

  createDom: function () {
    let html = new EJS({url: '/backend/views/pagination.ejs'}).render({
      pageCount: this.res.pageCount,
      pageNo: this.res.pageNo
    })
    this.container.html(html)

    $('#paginationCon').off('click').on('click', this.handleChangpage.bind(this))
  },

  handleChangpage: function (e) {
    let li = $(e.target).closest('li')
    let currentPage = li.attr('pageno')
    if (currentPage != this.res.pageNo) {
      $(this).trigger(new $.Event('pagechange', {
        pageno: currentPage
      }))
    }
  }
})
