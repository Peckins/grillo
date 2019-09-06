import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('kk eae men')
})

app.listen(3000)