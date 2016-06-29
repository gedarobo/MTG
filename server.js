var express = require('express')
var httpProxy = require('http-proxy')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = express()
var port = 3000
var apiProxy = httpProxy.createProxyServer()

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use('/mtg/*', function(req, res) {
    req.url = req.originalUrl
    apiProxy.web(req, res, {
        changeOrigin: true,
        target: 'https://api.deckbrew.com/'
    })
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    }
})
