export default function ProfileButtons({style}){
    return (
        <section className={style["buttons"]}>
            <button className={style["button"]}>Posts</button>
            <button className={style["button"]}>Media</button>
        </section>
    )
}