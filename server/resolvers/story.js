const fs = require( 'fs-extra' );
const path = require( 'path' );
const yaml = require( 'js-yaml' );
let data = {};

// Load static content
( async () => {
  const storiesFile = path.join( __dirname, '../data/stories.yml' );
  const rawData = await fs.readFile( storiesFile, { encoding: 'utf-8' } );
  const stories = yaml.safeLoad( rawData );
  for ( const story of stories ) {
    data[ story.id ] = story;
  }
} )();

module.exports = {
  getAll: () => {
    return Object.values( data );
  },
  get: ( id ) => {
    return data[ id ];
  },
};