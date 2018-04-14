import styled from 'styled-components';

const CheckboxStyles = styled.input`
  position: relative;
  appearance: none;
  width: 1.4em;
  height: 1.4em;

  align-self: middle;
  vertical-align: middle;

  background: #fff;
  border: 1px solid #ccc;
  border-radius: .25em;
  transition: border .5s, box-shadow .25s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: .45em;
    height: .9em;
    left: .1em;
    top: .1em;
    opacity: 0;
    transform-origin: bottom right;
    transition: transform .25s ease, opacity .25s;
  }

  &::before {
    border-bottom: .15em solid green;
    transform: rotate( 45deg ) scaleX( 0 );
  }

  &::after {
    border-right: .15em solid green;
    transform: rotate( 35deg ) scaleY( 0 );
    transition-delay: .25s;
  }

  &:checked {
    background: #fff;

    &::before,
    &::after {
      opacity: 1;
    }

    &::before {
      transform: rotate( 45deg ) scaleX( 1 );
    }

    &::after {
      transform: rotate( 35deg ) scaleX( 1 );
    }
  }

  &:active, &:focus {
    outline: none;
    border: 1px solid #888;
    box-shadow: 0 0 10px rgba( 0, 0, 0, .25 );
  }
`;

export default CheckboxStyles;