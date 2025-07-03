import {useState} from "react";

function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function handleSubmit(e) {
        e.preventDefault()

        setName("")
        setPassword("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Enter username and password</legend>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                <button>Login</button>
            </fieldset>
        </form>
  )
}

export default Login