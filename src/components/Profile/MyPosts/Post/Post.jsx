// Определение компонеты Post (одно сообщение в профиле пользователя(на стене?))

import c from "./Post.module.css";
import ava from "../../../../img/ava.png"
import like from "../../../../img/like.jfif"

const Post = (huj) => {
    return (
        <div>
            <div className={c.item}><img src={ava} alt="avatar"/>{huj.message}
                <span className={c.like}><img src={like} alt="like"/>{huj.lcount}</span></div>
        </div>
    );
}

export default Post;