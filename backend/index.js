const express = require('express')
const app = express()

app.get('/', (require, response) => {
  response.json({
    nome: 'Projeto OmniStack 11',
    versao: '1.0',
    autor: 'Michell Adam Bento'
  })
})

app.listen(3333)
