const storyModel = require( './story' );
module.exports = {
  stories: () => storyModel.getAll(),
  story: ( { id } ) => storyModel.get( id ),
};