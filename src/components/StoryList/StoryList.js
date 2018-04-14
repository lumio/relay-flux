import React from 'react';
import Story from 'components/Story';
import StoryListStyles, { StoryListHeader } from './styles';

const renderHeader = () => {
  return (
    <StoryListHeader>
      <span>Read</span>
      <span>Title</span>
    </StoryListHeader>
  );
}

const StoryList = ( props ) => {
  if ( !props || !props.stories ) {
    return (
      <div>No stories</div>
    );
  }

  return (
    <StoryListStyles>
      { props.stories.length ? renderHeader() : null }
      { props.stories.map( story => (
        <li key={ story.id }>
          <Story
            onSelect={ props.onSelect }
            selectedStory={ props.selectedStory }
            story={ story }
          />
        </li>
      ) ) }
    </StoryListStyles>
  );
};

export { StoryList };
