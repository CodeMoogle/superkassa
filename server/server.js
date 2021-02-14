const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})

const PORT = 5000 || process.env.PORT

io.on('connection', socket => {
	console.log(`User ${socket.id} conneted`)

	socket.on('button-click', data => {
		io.emit('button-status-change', data)
	})
})

http.listen(PORT, () => {
	console.log(`listening on: ${PORT}`)
})
