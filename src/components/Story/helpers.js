import { commitLocalUpdate } from 'react-relay';
import environment from 'common/relayEnvironment';

const updateStoryReadState = ( id, newState ) => {
  commitLocalUpdate( environment, store => {
    const record = store.get( id );
    record.setValue( newState, 'read');
  } );
};

const onSelectGen = ( id, props ) => {
  if ( typeof props.onSelect === 'function' ) {
    return () => props.onSelect( id );
  }

  return () => {};
};

export {
  updateStoryReadState,
  onSelectGen,
};
