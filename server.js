const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express()
const sites = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "img/isaac.jpg",
    name: "Isaac Matos",
    role: "Desenvolvedor Web",
    description: 'Programador full-stack, focado em desenvolvedor melhores soluções para clientes. Colaborador da <a href="https://github.com/oberyn-m" target="_blank">ICM Website.</a>',
    links: [
      { name: "Github", url: "https://github.com/oberyn-m"},
      { name: "Twitter", url: "https://twitter.com/ic_matos"},
      { name: "Linkedin", url: "https://www.linkedin.com/in/isaac-matos-568b6911a/"},
    ]
  }

  return res.render("about", {about})
})

server.get("/portfolio", function(req, res) {
  
  return res.render("portfolio", {items: sites})
})

server.get("/site", function (req, res) {
  const id = req.query.id

  const site = sites.find(function(site){
  return site.id == id
  })

    if (!site) {
      return res.send("Site is not found!")
    }

      return res.render("site", { item: site })
    })

server.listen(5000, function () {
  console.log("Server is running")
})