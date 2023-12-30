
import "../css/forms.css"

export default function LogIn(){
    return (
        <>
            <form className="log-form" action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button>Send</button>
            </form>
        </>
    )
}