import { commitLocalUpdate } from 'react-relay';
import environment from 'common/relayEnvironment';

const updateStoryReadState = ( id, newState ) => {
  commitLocalUpdate( environment, store => {
    const record = store.get( id );
    record.setValue( newState, 'read');
  } );
};

const onSelectedGen = ( id, props ) => {
  if ( typeof props.onSelected === 'function' ) {
    return () => props.onSelected( id );
  }

  return () => {};
};

export {
  updateStoryReadState,
  onSelectedGen,
};
