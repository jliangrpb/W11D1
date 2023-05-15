import {useState} from 'react';
import './form.css';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState('Home');
    const [staff, setStaff] = useState('Instructor');
    const [bio, setBio] = useState("");
    const [notifications, setNotifications] = useState('false');
    const [errorMessages, setErrorMessages] = useState([]);

    const validate = () => {

        let errors = [];

        if (name.length === 0) {
            errors.push("Name must not be empty")

        }

        if (email.length === 0) {

            errors.push("Email must not be empty")

        }

        if (phoneNumber.length !== 9) {

            errors.push("Invalid phone number")
        }

        if (bio.length < 100) {
        
            errors.push('Bio needs to be at least 100 characters')
    
        }

        return errors;
    }


    const handleChange = field => {

        return (e) => {

        switch (field) {
        case "name":
            setName(e.target.value);
        break;
        case "email":
            setEmail(e.target.value);
        break;
        case "phoneNumber": 
            setPhoneNumber(e.target.value);
        break;
        case "bio":
            setBio(e.target.value);
        break;
        case "phoneType":
            setPhoneType(e.target.value)
        break;
        case "staff":
            setStaff(e.target.value)
        break;
        case "notifications":
            setNotifications(e.target.value)
        break;
        default:
        break;
        }
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) {
            setErrorMessages(errors)
        } else {
            setErrorMessages([])
            let user = {
                name,
                email,
                phoneNumber,
                phoneType,
                staff,
                bio,
                notifications
            };
            console.log(user);
        }
    }

    const showErrors = () => {
    if (!errorMessages.length) {
      return null;
    } else {
      return (
        <ul>
          {errorMessages.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        )
        }
    }

    return (
    <>
      {showErrors()}
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={handleChange('name')} />
        <br />

        <input type="text" placeholder='Email' value={email} onChange={handleChange('email')} />
        <br />

        <input type="text" placeholder='Phone Number' value={phoneNumber} onChange={handleChange('phoneNumber')} />
        <br />

        <label for="phoneType"> Phone Type:
            <select id="phoneType" value= {phoneType} onChange={handleChange('phoneType')}>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Mobile">Mobile</option>
            </select>
        </label> 
        <br />

        
      <div>
        <label>
          <input
            type="radio"
            name="staff"
            value="Instructor"
            checked={staff === 'Instructor'}
            onChange={handleChange('staff')}
          />
          Instructor
        </label>
        <label>
          <input
            type="radio"
            name="staff"
            value="Student"
            checked={staff === 'Student'}
            onChange={handleChange('staff')}
          />
          Student
        </label>
      </div>


        <button>Submit</button>
      </form>
    </>
  )
}

export default Form;