import React from 'react'

const list = ({ users }) => {
    return (
        <>
            <h1>Liste</h1>
            {
                users.map((user, index) => (
                    <div key={index}>
                        <h2>{user.name} {user.surname}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default list