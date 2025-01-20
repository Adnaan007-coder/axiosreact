const jsonServer = import('json-server')

const MPserver = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

MPserver.use(middleware)
MPserver.use(route)

MPserver.listen(PORT,()=>{
    console.log(`MPServer started${PORT} `);
    
})