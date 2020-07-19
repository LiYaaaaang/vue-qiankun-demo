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

let username = null
let password = null
// 返回一个函数
module.exports = function (app) {
    if (process.env.MOCK == 'true') {
        app.use(bodyParser.json()) // 数据JSON类型
        // 监听http请求
        app.post('/login', function (req, res) {
            // console.log(req.body);
            // 每次响应请求时读取mock data的json文件

            username = req.body.username
            password = req.body.password

            let json = ''
            if (username === 'admin' && password === '123456') {
                // getJsonFile方法定义了如何读取json文件并解析成数据对象
                json = getJsonFile('./user1-login.json')
            } else if (username === 'zhangsan' && password === '123456') {
                json = getJsonFile('./user2-login.json')
            } else {
                json = getJsonFile('./error.json')
            }

            // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
            res.json(Mock.mock(json))
        })
        app.get('/app', function (req, res) {
            let token = req.headers.authorization
            if (!checkToken(token)) {
                let errorJson = getJsonFile('./tokenerror.json')
                res.json(Mock.mock(errorJson))
                return
            }
            if (username === 'admin' && password === '123456') {
                json = getJsonFile('./user-menu1.json')
            } else if (username === 'zhangsan' && password === '123456') {
                json = getJsonFile('./user-menu2.json')
            }
            res.json(Mock.mock(json))
        })
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