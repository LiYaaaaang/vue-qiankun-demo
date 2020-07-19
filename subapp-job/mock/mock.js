const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const bodyParser = require('body-parser')

// 读取json文件
function getJsonFile(filePath) {
    // 读取指定json文件
    var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
    // 解析并返回
    return JSON.parse(json)
}

function checkToken(token) {
    if (!token || token === 'null' || token === 'undefind') return false
    if (token === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM') {
        return true
    }
    return false
}

// 返回一个函数
module.exports = function (app) {
    if (process.env.MOCK == 'true') {
        app.use(bodyParser.json()) // 数据JSON类型
        // 监听http请求
        app.get('/person', function (req, res) {
            let token = req.headers.authorization
            if (!checkToken(token)) {
                let errorJson = getJsonFile('./tokenerror.json')
                res.json(Mock.mock(errorJson))
                return
            }
            json = getJsonFile('./person-info.json')
            res.json(Mock.mock(json))
        })
    }
}