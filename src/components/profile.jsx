import React from 'react'

const profile =({match})=> {
    const {username}=match.params;
    return (
        <div>
            Username={username}
        </div>
    )
}

export default profile
