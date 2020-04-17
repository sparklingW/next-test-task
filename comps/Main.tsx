import Link from 'next/link';
import styled from 'styled-components';

const Posts = ({ title, id }: any) => (
  <Link href='/posts/[id]' as={`/posts/${id}`}>
    <PostWrapper>
      <Block />
      <Title>{title}</Title>
    </PostWrapper>
  </Link>
)

const Main = ({ posts }: any) => (
  <Wrapper>
    {
      posts.map(({ title, body, id }: any) => (
        <Posts
          key={id}
          id={id}
          title={title}
          body={body}
        />
      ))
    }
  </Wrapper>
);

export default Main;

const Wrapper = styled.div`
  padding: 1.9em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const PostWrapper = styled.div`
  word-wrap: break-word;
  margin: 1.3em;
  display: flex;
  width: 200px;
  flex-basis: 200px;
  &:hover {
    cursor: pointer;
  }
`;
const Block = styled.div`
  border: 1px solid gray;
  height: 150px;
  width: 150px;
`;
const Title = styled.div`
  flex-basis: 100px;
  margin-left: 0.5em;
  max-width: 150px;
`;