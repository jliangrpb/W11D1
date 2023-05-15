import {useState} from 'react';
import '../form.css';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState('Home');
    const [staff, setStaff] = useState('Instructor');
    const [bio, setBio] = useState("");
    const [notifications, setNotifications] = useState('false');

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

        swtich (field) {

           
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
        default:
            break;

        }

        

    }


}