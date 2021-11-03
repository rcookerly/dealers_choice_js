const express = require("express");
const morgan = require("morgan");
const movieBank = require("./movieBank");

const app = express();

app.use(morgan('dev'));

// All movies route
app.get("/", (req, res) => {
  const movies = movieBank.list();

  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Dealer's Choice</title>
    </head>
    <body>
      <h1>IMDb "Top 10"</h1>
      <ol type="1">
        ${movies.map(movie => `<li><a href="/movies/${movie.id}">${movie.title}</a> (${movie.releaseYear}) - IMDb Rating: ${movie.rating}</li>`).join('')}
      </ol>
    </body>
    </html>`;

  res.send(html);
});

// Single-movie route
app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = movieBank.find(id);

  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Dealer's Choice</title>
    </head>
    <body>
      <div>
        <a href="/">Back To List</a>
      </div>
      <ul>
        ${movie.title} - ${movie.description}
      </ul>
    </body>
    </html>`;

  res.send(html);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
