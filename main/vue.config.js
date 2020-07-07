module.exports = {
    devServer: {
        open: true,
        port: 8080,
        before: require('./mock/mock.js'),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }
}