import { commitLocalUpdate } from 'react-relay';
import environment from 'common/relayEnvironment';

const updateStoryReadState = ( id, newState ) => {
  commitLocalUpdate( environment, store => {
    const record = store.get( id );
    record.setValue( newState, 'read');
  } );
};

export { updateStoryReadState };