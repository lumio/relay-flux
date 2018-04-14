import styled from 'styled-components';

const StoryStyles = styled.div`
  a {
    cursor: pointer;
  }
`;

const StoryLinkStyled = styled.a`
  display: inline-block;
  cursor: pointer;
  font-weight: ${ ( props ) => props.isSelected ? 'bold' : 'normal' };
`;

export default StoryStyles;
export { StoryLinkStyled };