import React from 'react';
import Story from 'components/Story';

const StoryList = ( props ) => {
  if ( !props || !props.stories ) {
    return (
      <div>No stories</div>
    );
  }

  return (
    <ul>
      { props.stories.map( story => (
        <li key={ story.id }>
          <Story
            onSelect={ props.onSelect }
            selectedStory={ props.selectedStory }
            story={ story }
          />
        </li>
      ) ) }
    </ul>
  );
};

export { StoryList };
