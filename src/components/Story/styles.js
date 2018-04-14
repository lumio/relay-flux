import styled from 'styled-components';

const StoryStyles = styled.div`
  a {
    cursor: pointer;
  }
`;

const StoryLinkStyled = styled.a`
  display: inline-block;
  cursor: pointer;
  transform: scale( ${ ( props ) => props.isSelected ? 1.1 : 1 } );
  transition: transform .25s ease;

  &:active {
    transform: scale( .9 );
  }
`;

export default StoryStyles;
export { StoryLinkStyled };