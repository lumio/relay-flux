import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const _Story = ( props ) => (
  <div>{ props.story.title }</div>
);

const Story = createFragmentContainer(
  _Story,
  graphql`
    fragment Story_story on Story {
      title
    }
  `
);

export { Story };
