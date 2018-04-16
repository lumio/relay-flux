import styled from 'styled-components';

const StoryLinkStyles = styled.div`
  a {
    cursor: pointer;
  }
`;

const StoryLinkElementStyled = styled.a`
  display: inline-block;
  cursor: pointer;
  font-weight: ${ ( props ) => props.isSelected ? 'bold' : 'normal' };
`;

export default StoryLinkStyles;
export { StoryLinkElementStyled };