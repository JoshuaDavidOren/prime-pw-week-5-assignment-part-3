console.log('***** Music Collection *****')

const collection = []

function addToCollection(title, artist, yearPublished) {
  collection.push({title, artist, yearPublished}); {
    return console.log('New record:',({title, artist, yearPublished}));
  }
}

addToCollection('my', 'first', 1990)
addToCollection('my2', 'first2', 19902)
