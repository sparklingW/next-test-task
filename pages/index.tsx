import Layout from '../comps/MyLayout';
import Main from '../comps/Main';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

const Index = ({ posts }: any) => (
  <div>
    <Layout>
      <Main posts={posts}/>
    </Layout>
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);

Index.getInitialProps = async () => {
  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  return {
    posts: res.data
  }
}

export default Index;