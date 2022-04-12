import { useState } from "react";

const JoinFlakebookForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState(null)

    console.log("rendering list")
    
    const [errorMessage, setErrorMessage] = useState("")

    const onFileChange = (event) => {
        const avatarFile = event.target.files[0]
        setAvatar(avatarFile)
    }

    const joinFlakebook = (event) => {
        event.preventDefault()

        const formIsFilled = username && username.length > 0 &&
        email && email.length > 0 &&
        avatar !== null
        if(!formIsFilled) {
            return setErrorMessage("Please fill out the form completely... All the memebers are already waiting for you!")
        }

        // Create an object of formData 
        const formData = new FormData(); 
        
        // Update the formData object 
        formData.append("username", username); 
        formData.append("email", email);
        formData.append("avatar", avatar, avatar.name);  // Blob = Binary Large Object
        
        
        fetch("http://localhost:9000/createFlakebookProfile", {
            method: "post",
            body: formData
        }).then((response) => response.json())
        .then((newUsersArray) => {
            props.setUsers(newUsersArray)

            setUsername("")
            setEmail("")
            setAvatar(null)
            setErrorMessage("")
        })
    }

    return ( 
        <form id="joinFlakebookForm">
            <label htmlFor="usernameInput">Username:</label>
            <input id="usernameInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            
            <label htmlFor="emailInput">E-Mail:</label>
            <input id="emailInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label htmlFor="profileUploadInput">Avatar:</label>
            <input id="profileUploadInput" type="file" onChange={onFileChange} />

            <button onClick={joinFlakebook}>Join Flakebook</button>

           {errorMessage && <div className="errorMessage">
                {errorMessage}
            </div>}
        </form>
    );
}
 
export default JoinFlakebookForm;