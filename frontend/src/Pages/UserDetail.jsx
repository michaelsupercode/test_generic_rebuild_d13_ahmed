import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';

const UserDetail = () => {
    const { id } = useParams()

    const [user, setUser] = useState()
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("http://localhost:9000/users/" + id)
        .then(response => response.json())
        .then(user => {
            console.log(user)
            if(user.error) {
                setError(user.error)
            } else {
                setUser(user)
            }
        })
    }, [id])

    return (
        <div className='UserDetail'>
            {
                user 
                ? <div className="userContainer">
                    <h3>{user.username} ({user.email})</h3>
                    <img src={"http://localhost:9000/" + user.avatarImgSrc} alt={`Avatar of ${user.username}`} width={500} />
                </div>
                : <div className='errorMessage'>
                    {error ? error : "Please click on a user to reach this page."}
                </div>
            }

            <Link to="/" className='goBack'>
                Go Back
            </Link>
        </div>
     );
}
 
export default UserDetail;