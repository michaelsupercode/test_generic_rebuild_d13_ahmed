import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = (props) => {
    
    // Get user data... onMount
    useEffect(() => {
        fetch("http://localhost:9000/users")
        .then(response => response.json())
        .then(usersArray => props.setUsers(usersArray))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // dependency-array leer lassen, um nur 1 mal die user (onMount) zu fetchen

    return ( 
        <div>
            {props.users.map(u => 
                <Link to={"/users/" + u.id}>
                    <div className="userContainer" key={u.id}>
                        <h3>{u.username} ({u.email})</h3>
                        <img src={"http://localhost:9000/" + u.avatarImgSrc} alt={`Avatar of ${u.username}`} width={300} />
                    </div>
                </Link>
               
            )}
        </div>
    );
}
 
export default UserList;