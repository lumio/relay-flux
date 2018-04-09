import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const _Story = ( props ) => (
  <div>
    <span>{ props.story.read ? 'read' : 'unread' } </span>
    <span>{ props.story.title }</span>
  </div>
);

const Story = createFragmentContainer(
  _Story,
  graphql`
    fragment Story_story on Story {
      title
      read
    }
  `
);

export { Story };
