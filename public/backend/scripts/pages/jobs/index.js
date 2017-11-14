var Page = function (active) {
  this.init(active)
}

$.extend(Page.prototype, {

  init: function (active) {
//  this.createHeader(active)
    this.initList()
  },

//createHeader: function (active) {
//  this.header = new Header(active)
//},


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
  }
})
