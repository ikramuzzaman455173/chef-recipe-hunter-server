const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const chefs=require('./data/chefs.json')
const chefRecipes=require('./data/allchefRecipe.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h3 align="center" style="color:#333;font-size:20px;padding:10px 0;">Chef Recipe Hunting Server Running 🐱‍🏍</h3>')
})
app.get('/chefRecipe/:id', (req, res) => {
  const id = req.params.id
  if (id ==0) {
    res.send(chefRecipes)
  }
  else {
    const chefRecipe = chefRecipes.chefSection.find(e => e.chefId == id)
    res.send(chefRecipe)
  }
})
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Chef Recipe Hunting Server Running On Port:${port}`)
})