import styled from 'styled-components';

// interface BoxProps {
//   data?: string; // Define the data-testid attribute in the component's props
//   // Other props...
// }

export const Box = styled.div`
display: flex;
flex-direction: column;
`

export const Link = styled.a`
color: blue; 
text-decoration: underline; 
cursor: pointer;

&:hover {
    text-decoration: none; 
    color: darkblue; 
  }
`;