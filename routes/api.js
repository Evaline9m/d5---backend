const express = require('express')
const router = express.Router()

const userController = require('../controller/user.js')
const jobController = require('../controller/job.js')

const upload = require('../utils/uploadimg')

// 用户相关路由
router.post('/users/signUp', userController.signUp)
router.post('/users/signIn', userController.signIn)
router.get('/users/isLogin', userController.isLogin)
router.get('/users/logout', userController.logout)

// 职位相关路由
router.get('/jobs/list', jobController.getList)
router.post('/jobs/addOrUpdate', upload.single('logo'), jobController.addOrUpdate)
router.get('/jobs/delete', jobController.deleteJob)
router.get('/jobs/getJob', jobController.getJob)
router.get('/jobs/findJob', jobController.findJob)

module.exports = router
