
import "../css/forms.css"

export default function Register(){
    return (
        <>
            <form className="log-form" action="">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                </div>
                <button>Send</button>
            </form>
        </>
    )
}