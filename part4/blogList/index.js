const express = require('express')
const app = express('./app')


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
