import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Checkbox from 'common/Checkbox';
import storyPropTypes from './types';
import { updateStoryReadState } from 'handlers/StoryHandler';
import StoryLinkStyles, { StoryLinkElementStyled } from './styles';
import {
  onSelectGen,
} from './helpers';

const renderReadCheckbox = ( props ) => {
  if ( process.env.SHOW_WITHOUT_READ_STATUS ) {
    return null;
  }

  return (
    <React.Fragment>
      <Checkbox
        type='checkbox'
        checked={ props.story.read || false }
        onChange={ () => updateStoryReadState( props.story.id, !props.story.read ) }
      />
      &nbsp;
    </React.Fragment>
  )
};

const _StoryLink = ( props ) => (
  <StoryLinkStyles>
    { renderReadCheckbox( props ) }
    <StoryLinkElementStyled
      onClick={ onSelectGen( props.story.id, props ) }
      isSelected={ props.selectedStory === props.story.id }
    >
      { props.story.title }
    </StoryLinkElementStyled>
  </StoryLinkStyles>
);

_StoryLink.propTypes = {
  story: storyPropTypes,
};

const StoryLink = createFragmentContainer(
  _StoryLink,
  graphql`
    fragment StoryLink_story on Story {
      id
      title
      read
    }
  `
);

export { StoryLink };
