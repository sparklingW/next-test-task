import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../comps/MyLayout';
import PostPage from '../../comps/Post';

const Post = (props: any) => (
  <div>
    <Layout>
    <PostPage data={props.data}/>
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

Post.getInitialProps = async function(context: any) {
  const { id } = context.query;
  const res = await axios(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const data = res.data;
  return { 
    data
  };
};

export default Post;