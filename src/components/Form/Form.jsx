import { useState } from "react";
import validation from "../Validation/Validation"

const Form = ({login}) => {
const [errors, setErrors] = useState({});

const [userData, setUserData] = useState({
    email: "",
    password: "",
});

const handleChange= (event) => {
    setUserData({
...userData,
[event.target.name]: event.target.value
    })

 const validationError = (validation({
    ...userData,
    [event.target.name]: event.target.value
   }))
   setErrors(validationError);
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
}
    return (
<form onSubmit={handleSubmit} >
    <label htmlFor="email">Email: </label>
    <input type="text" name="email" value={userData.email} onChange={handleChange} />
    {errors.email && <p style={{color: "red"}}>{errors.email} </p>}
    <label htmlFor="password">Password: </label>
    <input type="text" name="password" value={userData.password} onChange={handleChange}/>
    <button>Submit</button>
</form>
    )
}
export default Form;