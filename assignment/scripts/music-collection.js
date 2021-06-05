console.log('***** Music Collection *****')

const collection = []

function addToCollection(title, artist, yearPublished) {
  collection.push({title, artist, yearPublished}); {
    return console.log('New record:',({title, artist, yearPublished}));
  }
}

addToCollection('I Hate Everything About You', 'Three Days Grace', 2007)
addToCollection('I Hate Everything About You', 'Longshot', 2019)
addToCollection('Numb', 'Linkin Park', 2003)
addToCollection('Numb', 'Aaron Richards, Mr FijiWiji', 2020)
addToCollection('Oh Raven', 'Unlike pluto', 2019)
addToCollection('Yes Offense', 'Unlike pluto', 2019)

console.log('This is my collection:', collection);

function showCollection(collection) {
  console.log(collection.length);
}
console.log(showCollection(collection));
