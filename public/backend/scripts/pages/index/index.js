var Page = function (active) {
  this.init(active)
}

$.extend(Page.prototype, {

  init: function (active) {
    this.createHeader(active)
  },

  createHeader: function (active) {
    this.header = new Header(active)
    this.section = new section()
  }
})
