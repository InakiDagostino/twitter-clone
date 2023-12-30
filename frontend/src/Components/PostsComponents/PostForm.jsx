export default function PostForm({ style }){
    return (
        <form method="dialog" id={style["post-form-home"]}>
                    <textarea name="postText" id="post-text" cols="20" rows="5" placeholder='Your post'></textarea>
                    <button className="btn post-button">Post</button>
                </form>
    )
}