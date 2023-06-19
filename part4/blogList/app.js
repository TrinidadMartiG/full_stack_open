const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl)
app.use('/api/blogs', blogsRouter)

app.use(cors())
app.use(express.json())
app.use()
