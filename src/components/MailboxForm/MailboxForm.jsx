import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    boxOwner: "",
    boxSize: "",
}

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }


    return (
    <>
    <h1>Mailbox Form</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input 
        type="text"
        id="boxOwner"
        name="boxOwner"
        value={formData.boxOwner}
        onChange={handleChange}
        required />
        <label htmlFor="boxSize">Select a box size:</label>
        <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}
        >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <button type='submit'>Submit</button>
    </form>
    
    </>

)}

export default MailboxForm;