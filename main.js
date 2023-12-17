const express = require ("express")

const app = express();

app.get("/", (request, response) => {
    console.log("Quelqu'un s'est connecté");
    response.send("Welcome to my website")
})

app.get("/artciles/:catArticle", (request, response) => {
    console.log(request.body);
    response.status(201).send("Ressources bien créée")
})

app.get("/artciles/:catArticle", (request, response) => {
    const listCategorie = ["salle-de-bain", "salon", "cuisine"];
    console.log(request.params);
    console.log(request.params)

    if (listCategorie.includes(request.params.catArticle)) {
        response.send(`Vous avez demandé la catégorie ${request.params.catArticle}`)
    } else {
        response.status(404).send("Erreur 404")
    }
})

app.listen(3000, () => {
    console.log(`Server succesfully started on http://localhost:3000`)
})



//Code pour le script.js



function oneRandomElement(fileData) {
    let randomInt = Math.floor(Math.oneRandomElement() * fileData.length);
    return randomInt[fileData];
}

app.get('/random', function (req, res) {
  fs.readFile(path)
    .then((data) => {
      // Do something with the data
      let fileData = JSON.parse(data);

      let randomPokemon = randomInt[fileData];

      res.send(randomPokemon)

    })
    .catch((error) => {
      // Do something if error 
    });
})