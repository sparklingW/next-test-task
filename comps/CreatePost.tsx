import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from './MyLayout';

async function fetchCreate(data: object) {
  await axios.post(
    'https://simple-blog-api.crew.red/posts',
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    },
  );
}

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isError, setError] = useState(false);

  useEffect(() => {
    if(!title || !body) {
      setError(true);
    } else {
      setError(false);
    }
  }, [title, body]);

  const handleCreate = () => {
    fetchCreate({title, body});
    setTitle('');
    setBody('');
  };

  return (
    <Layout>
      <Wrapper>
      <Costume_Input
        type='text'
        name='title'
        placeholder='Enter Title'
        value={title}
        onChange={({target: { value }}) => setTitle(value)}
      />
      <Costume_Input_Body
        name='body'
        placeholder='Enter Body'
        value={body}
        onChange={({target: { value }}) => setBody(value)}
      />
      {
        isError === true
        ? 
        <Button_Disabled>
          Create Post
        </Button_Disabled>
        :
        <Button onClick={(handleCreate)}>
          Create Post
        </Button>
      }
    </Wrapper>
    </Layout>
  )
};

export default CreatePost;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Costume_Input = styled.input`
  margin: 0.7em 0 0.7em 0.8em;
  border: none;
  border-bottom: 1px solid gray;
  height: 30px;
  font-size: 1em;
  outline: none;
  background: none;
`;
const Costume_Input_Body = styled.textarea`
  resize: none;
  outline: none;
  font-size: 1.1em;
  border-radius: 4px;
  padding: 0.5em;
  margin: 0.7em;
  border: 1px solid gray;
  height: 400px;
  width: 700px;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 0.7em 0 0.7em 1.2em;
  height: 30px;
  width: 100px;
  background: white;
  border-radius: 4px;
  outline: none;
  &:hover {
    box-shadow: 2px 2px 2px 0px gray;
  }
`;
const Button_Disabled = styled(Button)`
  color: gray;
  border: 1px solid gray;
  opacity: 0.3;
`;