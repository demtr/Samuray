import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div >
            <div>
                <p className={c.item}>My posts</p>
                <textarea className={c.new}>Type here</textarea> <button>New post</button>
                <Post message="Hello, how are you?" lcount="12"/>
                <Post message="It's my first post!" lcount="45"/>
                <Post message="It works correct!" lcount="19"/>
            </div>
        </div>
    );
}

export default MyPosts;