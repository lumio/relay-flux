import PropTypes from 'prop-types';

const storyPropTypes = PropTypes.shape( {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
} );

export default storyPropTypes;