export default function Dialog({dialog}){
    return (
        <dialog>
          <button onClick={() => dialog.close()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </button>
          <form method="dialog">
            <textarea name="postText" id="post-text" cols="100" rows="5" placeholder='Your post'></textarea>
            <button className='btn post-button'>Post</button>
          </form>
          
        </dialog>
    )
}