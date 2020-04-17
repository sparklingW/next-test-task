import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <Link href='/'>
      <Logo title='To main page'>
        BloG
      </Logo>
    </Link>
    <Link href='/posts/new'>
      <CreatePost title='Create Post'>
          Create New Post
      </CreatePost>
    </Link>
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.header`
  height: 60px;
  border-bottom: 1px solid black;
  box-shadow: 3px 5px 12px 0px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 2em;
  font-style: italic;
  margin-left: 1em;
  &:hover {
    cursor: pointer;
  }
`;
const CreatePost = styled.a`
  margin-right: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8em;
  border-radius: 4px 4px;
  outline: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;