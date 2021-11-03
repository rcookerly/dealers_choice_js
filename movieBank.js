const data = [
  { id: 1, title: "The Shawshank Redemption", releaseYear: "1994", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", rating: "9.3" },
  { id: 2, title: "The Godfather", releaseYear: "1972", description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.", rating: "9.2" },
  { id: 3, title: "The Dark Knight", releaseYear: "2008", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating: "9.0" },
  { id: 4, title: "The Godfather: Part II", releaseYear: "1974", description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", rating: "9.0" },
  { id: 5, title: "12 Angry Men", releaseYear: "1957", description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", rating: "9.0" },
  { id: 6, title: "The Lord of the Rings: The Return of the King", releaseYear: "2003", description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", rating: "8.9" },
  { id: 7, title: "Pulp Fiction", releaseYear: "1994", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", rating: "8.9" },
  { id: 8, title: "Schindler's List", releaseYear: "1993", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", rating: "8.9" },
  { id: 9, title: "Inception", releaseYear: "2010", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: "8.8" },
  { id: 10, title: "Fight Club", releaseYear: "1999", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", rating: "8.8" }
];

const list = () => {
  return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const movie = data.find(movie => movie.id === +id);
  return {...movie}; // Again, we copy the movie data before returning so the original information is safe.
}

module.exports = { list, find };
