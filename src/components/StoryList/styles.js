import styled from 'styled-components';

const StoryListStyles = styled.ul`
  margin: 2em 0;
  padding: 2em;
  list-style: none;
`;

const StoryListHeader = styled.div`
  position: relative;
  margin-bottom: .25em;

  > * {
    position: absolute;
    bottom: 0;
    display: inline-block;
    font-size: .75em;
    font-weight: bold;
    transform: rotate( -55deg );
    transform-origin: left bottom;

    &:first-child {
      left: 1.25rem;
    }

    &:last-child {
      left: 3.25rem;
    }
  }
`;

export default StoryListStyles;
export { StoryListHeader };