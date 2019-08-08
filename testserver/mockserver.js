const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.get('/echo', (req, res) => {
    res.jsonp(req.query)
  })

router.render = (req, res) => {
    res.status(400).jsonp({
        error: "error message here"
    })
}

server.listen(3000, () => {
    console.log('JSON Server is running')
})