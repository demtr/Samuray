import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let myPosts = [
        {id:1, message:"Hello, how are you?", lcount:12},
        {id:2, message:"It's my first post!", lcount:45},
        {id:3, message:"It works correct!", lcount:19},
    ]
    const myPostsComp = myPosts.map(el => <Post message={el.message} lcount={el.lcount}/>);

    return (
        <div className={c.theBlock}>

            <h3 className={c.item}>My posts</h3>
            <div><textarea className={c.new}>Type here</textarea></div>
            <div>
                <button>New post</button>
            </div>
            <div className={c.posts}>
                {myPostsComp}
            </div>
        </div>
    );
}

export default MyPosts;