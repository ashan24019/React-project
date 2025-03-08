import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({isPosting, onStopPosting}) {

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel = {onStopPosting}
          />
        </Modal>
      ) : false }

      <ul className={classes.posts}>
        <Post author="Romie" body="My name is Harsha" />
      </ul>
    </>
  );
}

export default PostsList;
