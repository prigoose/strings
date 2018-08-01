import styled from 'styled-components';

const Input = styled.input`
  width: ${props => (props.text ? '100%' : '20%')};
  background: ${props => (props.text ? 'white' : '#4CAF50')};
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: ${props => (props.text ? 'regular' : 'bold')};
`;

export default Input;
