console.log('***** Music Collection *****')

const collection = []

function addToCollection(title, artist, yearPublished) {
  collection.push({
    title,
    artist,
    yearPublished}); {
  }
}

addToCollection('I Hate Everything About You', 'Three Days Grace', 2007)
addToCollection('I Hate Everything About You', 'Longshot', 2019)
addToCollection('Numb', 'Linkin Park', 2003)
addToCollection('Numb', 'Aaron Richards, Mr FijiWiji', 2020)
addToCollection('Oh Raven', 'Unlike Pluto', 2019)
addToCollection('Yes Offense', 'Unlike Pluto', 2019)

console.log('This is my collection:', collection);

function showCollection(collection) {
  console.log('Here is my collection of',collection.length, 'records');

  for (let i = 0; i < collection.length; i++) {
    console.log('TITLE:', collection[i].title, 'by', collection[i].artist, 'published in year', collection[i].yearPublished);
  }
  return true
  console.log('End of collection');
}
console.log(showCollection(collection));

function findByArtist(artist) {
  console.log('Searching inventory');

  let searchResults = []
    for (let i =0; i < collection.length; i++){
      if (collection[i].artist === artist)
      searchResults.push([
        collection[i].title,
        collection[i].artist,
        collection[i].yearPublished
      ]);
    }
    return searchResults;
 console.log(searchResults);
}

console.log(findByArtist('Unlike Pluto'));
console.log(findByArtist('Linkin Park'));
console.log(findByArtist('not here'));

addToCollection('Riot', 'Three Days Grace', 2007)
console.log(findByArtist('Three Days Grace'));
