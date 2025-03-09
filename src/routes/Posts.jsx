import PostsList from "../components/PostsList";
import {useState} from 'react';

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);


  return (
    <>
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
