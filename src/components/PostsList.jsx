import Post from "./Post";
import classes from './PostsList.module.css'
import NewPost from "./NewPost";

function PostsList() {
    return (
        <>
            <NewPost/>
            <ul className={classes.posts}>
                <Post author="Theo" body="My name is Ashan"/>
                <Post author="Romie" body="My name is Harsha"/>
            </ul>
        </>
    );
}

export default PostsList;