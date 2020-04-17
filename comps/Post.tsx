import styled from 'styled-components';

const PostPage = ( { data }: any ) => (
  <Wrapper>
    <Title>{data.title}</Title>
    <Body
      disabled={true}
      value={data.body} 
    />
  </Wrapper>
);

export default PostPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8em;
`;
const Title = styled.h3`
`;
const Body = styled.textarea`
  resize: none;
  border: none;
  font-size: 1.1em;
`;