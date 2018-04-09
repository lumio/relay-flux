import React from 'react';
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
} from 'react-relay';
import environment from '../../common/relayEnvironment';

const updateStoryReadState = ( id, read ) => {
  commitLocalUpdate( environment, store => {
    const record = store.get( id );
    record.setValue( !read, 'read');
  } );
};

const _Story = ( props ) => {
  return (
    <label>
      <input
        type='checkbox'
        checked={ props.story.read || false }
        onChange={ () => updateStoryReadState( props.story.id, props.story.read ) }
      />
      &nbsp;
      <span>{ props.story.title }</span>
    </label>
  );
};

const Story = createFragmentContainer(
  _Story,
  graphql`
    fragment Story_story on Story {
      id
      title
      read
    }
  `
);

export { Story };
