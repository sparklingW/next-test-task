import Layout from '../../comps/MyLayout';
import CreatePost from '../../comps/CreatePost';

const Create = () => (
  <div>
    <CreatePost />
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

export default Create;