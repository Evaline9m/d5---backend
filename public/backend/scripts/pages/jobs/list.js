const JobList = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(JobList.prototype, {
  init: function () {
    this.createDom()
  },

  createDom: function () {
    this.bindEvents()

    this.getJobList(1)
  },

  getJobList: function (pageNo) {
    $.ajax({
      url: '/api/jobs/list',
      data: {
        pageNo
      },
      success: this.handleGetJobList.bind(this)
    })
  },

  bindEvents: function () {
    $('#submitBtn').on('click', this.handleSubmitForm.bind(this))
    $('#list-con').on('click', this.handleManjob.bind(this))
    $('#add-jobs').on('click', this.handleAddjob.bind(this))
    $('#find').on('click', this.handleFindjob.bind(this))
//  $('#change').on('click', this.change.bind(this))
  },

  handleAddjob: function () {
    $('#addOrUpdateDialog').modal('show')
    $('#updateLogo').html('')
    $('#jobid').val('')
    $('#nprice').val('')
    $('#oprice').val('')
    $('#name').val('')
  },
  
  handleFindjob: function () {
  	let findname = $("#findname").val()
    $.ajax({
      url: '/api/jobs/findJob',
      data: {
        findname
      },
      success: this.handleGetJob.bind(this)
    })
  },

  handleManjob: function (e) {
    let jobid = $(e.target).closest('tr').attr('jobid')
    if ( $(e.target).attr('data-tag') == 'delete' ) {
      $.ajax({
        url: '/api/jobs/delete',
        data: {
          id: jobid
        },
        success: this.handleDeletejobSucc.bind(this)
      })
    }
    if ( $(e.target).attr('data-tag') == 'update' ) {
      $('#addOrUpdateDialog').modal('show')
      $.ajax({
        url: '/api/jobs/getjob',
        data: {
          id: jobid
        },
        success: this.handleUpdatejobSucc.bind(this)
      })
    }
  },

  handleDeletejobSucc: function (res) {
    if (res.data.success) {
      window.location.reload()
    }
  },

  handleUpdatejobSucc: function (res) {
    $('#updateLogo').html(`<img src=/backend/upload/${res.data.companyLogo} width=30 height=30 />`)
    $('#jobid').val(res.data._id)
    $('#nprice').val(res.data.nprice)
    $('#oprice').val(res.data.oprice)
    $('#name').val(res.data.name)
  },

  handleSubmitForm: function () {
    $('#postJobForm').submit()
  },

  handleGetJobList: function (res) {
    // 渲染页面
    let ejs = new EJS({url: '/backend/views/joblist'})
    let html = ejs.render({
      joblist: res[0].firstlist[0].secondlist[0].result
    })
    $("#list-con").html(html)
    $(this).trigger(new $.Event('pagedata', res[0].firstlist[0].secondlist[0]))
  },
  
  handleGetJob: function (res) {
    // 渲染页面
    let ejs = new EJS({url: '/backend/views/joblist'})
    let html = ejs.render({
      joblist: res
    })
    $("#list-con").html(html)
    $(this).trigger(new $.Event('pagedata', res))
  },
  
//change : function(){
//	$("#findinnamegroup").toggle();
//	$("#findinmoneygroup").toggle();
//},
  
  
})
