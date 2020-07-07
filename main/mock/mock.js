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

// 返回一个函数
module.exports = function (app) {
    if (process.env.MOCK == 'true') {
        app.use(bodyParser.json()) // 数据JSON类型
        // 监听http请求
        app.post('/login', function (req, res) {
            // console.log(req.body);
            // 每次响应请求时读取mock data的json文件

            let username = req.body.username
            let password = req.body.password

            let json = ''
            if (username === 'admin' && password === '123456') {
                // getJsonFile方法定义了如何读取json文件并解析成数据对象
                json = getJsonFile('./user-login.json')
            } else {
                json = getJsonFile('./error.json')
            }

            // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
            res.json(Mock.mock(json))
        })
        app.get('/app', function (req, res) {
            json = getJsonFile('./app-menu.json')
            res.json(Mock.mock(json))
        })
    }
}