const express = require ('express');
const app = express();
const port = 3000;
//const jsxViewEngine = require('jsx-view-engine');

//app.set('view engine', 'jsx');
//app.set('views', './views');
//app.engine('jsx', jsxViewEngine());


let bottles = 99; // initial number of bottles

app.use(express.static('public'));//Middleware to serve static files

app.get('/', (req, res) => {
    res.send(`
      <h1>${bottles} Bottles of beer on the wall</h1>
      <a href="/${bottles - 1}">Take one down, pass it around</a>
      <br>
      <a href="/">Start Over</a>
    `);
  });
  
  // Dynamic route for the number of bottles
  app.get('/:number_of_bottles', (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);
  
    if (numberOfBottles >= 0) {
      res.send(`
        <h1>${numberOfBottles} Bottles of beer on the wall</h1>
        ${numberOfBottles > 0 ? `<a href="/${numberOfBottles - 1}">Take one down, pass it around</a><br>` : ''}
        <a href="/">Start Over</a>
      `);
    } else {
      res.status(400).send('Invalid number of bottles');
    }
  });
  
  // Start the server
  //app.listen(port, () => {
   // console.log(`Server is running at http://localhost:${port}`);
  //});
 
  app.listen(3000, () => {
    console.log('listening');
});
