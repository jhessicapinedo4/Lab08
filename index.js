require('dotenv').config()
const http= require('http')

function requestController(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' }) // Cabecera HTTP
    res.end('Bienvenido al curso') // Respuesta al navegador
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en el puerto: " + PORT)
});