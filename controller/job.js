const Job = require('../model/job')
const { getJoblist, getParam } = require('../utils/utils')
const async = require('async')

const getList = function (req, res, next) {
  let pageSize = 5
  let { pageNo } = req.query
  async.parallel([
    function (cb) {
      Job.find({})
        .then((all) => {
          cb(null, all.length)
        })
    },
    function (cb) {
      Job.find({})
        .skip((pageNo-1) * pageSize)
        .limit(pageSize)
        .sort({_id: -1})
        .then((result) => {
          cb(null, result)
        })
    }
  ], function (err, results) {
    let page = {
      result: results[1],
      pageCount: Math.ceil(results[0] / pageSize),
      pageNo: parseInt(pageNo, 10)
    }
    res.json(getJoblist(page))
  })
}

const addOrUpdate = function (req, res, next) {
  const { name, nprice, oprice } = req.body
  if (req.body.jobid) {
    const setObj = {
      name,
      oprice,
      nprice
    }

    if (req.file && req.file.filename) {
      setObj.companyLogo = req.file.filename
    }

    Job.findByIdAndUpdate(req.body.jobid, {
      $set: setObj
    }).then(() => {
      res.redirect('/backend')
    })
  } else {

    const willSaveJob = new Job({
      name,
      oprice,
      companyLogo: req.file && req.file.filename ? req.file.filename : '',
      nprice
    })
    // 数据存储（入库）
    willSaveJob.save().then(() => {
      res.redirect('/backend')
    }).catch(response => {
    	console.log(response)
    })
  }
}

const deleteJob = function (req, res, next) {
  const { id } = req.query
  Job.findByIdAndRemove(id)
    .then((result) => {
      res.json(getParam({success: true}))
    })
}

const getJob = function (req, res, next) {
  const { id } = req.query
  Job.findOne({_id: id})
    .then((job) => {
      res.json(getParam(job))
    })
}

const findJob = function (req, res, next) {
  let {findname } = req.query
	const reg=new RegExp(`${findname}`);
	Job.find({'name': reg})
    .then((aa) => {
      res.json(aa)
    })
}


module.exports = { getList, addOrUpdate, deleteJob, getJob,findJob }
