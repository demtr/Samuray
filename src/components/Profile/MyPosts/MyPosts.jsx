import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (p) => {
    debugger;
    const myPostsComp = (p.postList).map(el => <Post message={el.message} lcount={el.lcount}/>);

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