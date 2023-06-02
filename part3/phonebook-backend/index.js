const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(cors())
morgan.token('body', (req, res) => req.method === 'POST' ? JSON.stringify(req.body): '')

app.use(
  morgan((tokens, request, response) =>
    [
      tokens.method(request, response),
      tokens.url(request, response),
      tokens.status(request, response),
      tokens.res(request, response, 'content-length'),
      '-',
      tokens['response-time'](request, response),
      'ms',
      tokens.body(request, response),
    ].join(' ')
  )
)

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (request, response) => {
  const personsCount = persons.length
  const date = new Date()
  console.log('persons.length', personsCount)
  response.send(
    `<p> Phonebook has info for ${personsCount} people</p><br/>${date}`
  )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const filter = persons.find((p) => p.id === id)
  if (filter) {
    response.json(filter)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const random = Math.floor(Math.random() * 25000)
  return random
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  console.log('body', body)

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name or number is missing',
    })
  }

  const existingPerson = persons.find((person) => person.name === body.name)
  if (existingPerson) {
    return response.status(400).json({ error: 'Name must be unique' })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((p) => p.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
