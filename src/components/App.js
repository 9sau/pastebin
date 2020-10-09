import React from 'react';
import { Form, Container, Button } from 'react-bootstrap'
import useLocalStorage from '../useStorage';
import axios from 'axios';

function App() {
  const [text, setText] = useLocalStorage('text', '');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get('https://0rws43xzd8.execute-api.us-east-1.amazonaws.com/default/contents/user1');
    console.log(response);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="textarea">
          <Form.Label>Enter text</Form.Label>
          <Button type="submit" style={{ margin: '5px' }} variant="outline-primary" size="sm">Save</Button>
          <Form.Control as="textarea" rows="25" value={text} onChange={handleChange} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
