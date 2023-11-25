const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
]

const newOrderOfMovies = movies
  .filter(movies => movies.year === 2018 && movies.rating > 4)
  .sort(function (a, b) {
    return b.rating - a.rating
  })
  .map(movies => movies.title)

console.log(newOrderOfMovies)
