import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (p) => {
    // debugger;
    const myPostsComp = p.postList.map(el => <Post message={el.message} lcount={el.lcount}/>);
    let newTextRef = React.createRef();
    const newPost = () => {
        p.addPost(newTextRef.current.value)
    };

    return (
        <div className={c.theBlock}>

            <h3 className={c.item}>My posts</h3>
            <div><textarea ref={newTextRef} className={c.new}/></div>
            <div>
                <button onClick={newPost}>New post</button>
            </div>
            <div className={c.posts}>
                {myPostsComp}
            </div>
        </div>
    );
}

export default MyPosts;