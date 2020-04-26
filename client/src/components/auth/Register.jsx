import React, {useState, Fragment} from 'react';
import './auth.css';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name : "",
        email: "",
        password: "",
        password2: ""
    });

    const {name, email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name] : e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            console.log("Passwords donot match")
        } else {
            const newUser = {
                name,
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }
                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            } catch(err) {
                console.error(err.response.data)
            }
        }
    }

    return(
        <Fragment>
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={e => onSubmit(e)}>
                    <input type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="name" required/>
                    <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="email address" required/>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="password" required/>
                    <input type="password" name="password2" value={password2} onChange={e => onChange(e)} placeholder="confirm password" required/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#!">Sign In</a></p>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;