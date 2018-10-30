const express = require('express')

const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`your server is running on http://localhost:${PORT}`)
})
