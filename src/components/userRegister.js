import React, { Component } from 'react'

let users = [];

function saveUser(event) {
    event.preventDefault();
    var u_name = event.target.elements.u_name.value;
    var u_surname = event.target.elements.u_surname.value;
    var u_email = event.target.elements.u_email.value;
    var u_age = event.target.elements.u_age.value;
    var user= {
        name: u_name,
        surname: u_surname,
        mail: u_email,
        age: u_age
    }
    users.push(user)
    event.target.elements.u_name.value = "";
    event.target.elements.u_surname.value = "";
    event.target.elements.u_email.value = "";
    event.target.elements.u_age.value = "";

}

export class UserRegister extends Component {
  render() {
    return (
        <div hidden id="v2">
        <form onSubmit={saveUser}>

            <label htmlFor="name">Ad</label>
            <input type="text" name="u_name" id="u_name"/>

            <label htmlFor="surname">Soyad</label>
            <input type="text" name="u_surname" id="u_surname"/>

            <label htmlFor="email">Email</label>
            <input type="text" inamed="u_email" id="u_email"/>

            <label htmlFor="age">Yaş</label>
            <input type="text" name="u_age" id="u_age"/>
            <button type="submit">Ekle</button>

        </form>

        {
        users.map((user,index) => (
                <div className='user-details' key={index}>
                    { <h2> { user.name } { user.surname } </h2> }
                    <button type="button" id={ index } onClick={ (event) => saveUser(event, user.name, user.surname) }>Kaydet</button>
                </div>
            ))
        }

        <div>
            <h1>liste</h1>
            { console.log(users)}
        </div>
    </div>
    )
  }
}


export default UserRegister