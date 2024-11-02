import React, { useState } from 'react';
import '../assets/template.css';

const UserRegister = () => {
    const [users, setUsers] = useState([]);

    function saveUser(event) {
        event.preventDefault();

        var u_name = event.target.elements.u_name.value.trim();
        var u_surname = event.target.elements.u_surname.value;
        var u_email = event.target.elements.u_email.value;
        var u_age = event.target.elements.u_age.value;

        if (!u_surname && !u_name  ) {
            window.alert('isim ve Soyisim alani bos birakilamaz!')
            return;
        }
        else if (!u_surname) {
            window.alert('Soyisim alani bos birakilamaz!')
            return;
        }
        else if (!u_name) {
            window.alert('isim alani bos birakilamaz!')
            return;
        }

        var user = {
            name: u_name,
            surname: u_surname,
            mail: u_email,
            age: u_age
        };

        setUsers(prev => [...prev, user]);
        
        // Formu temizleme
        event.target.elements.u_name.value = "";
        event.target.elements.u_surname.value = "";
        event.target.elements.u_email.value = "";
        event.target.elements.u_age.value = "";
    }

    return (
        <div className='form__inputs__item' hidden id="v2">
            <form className='form_inputs' onSubmit={saveUser}>

                <label className="nameLabel" htmlFor="name">Ad</label>
                <input className='nameInput' type="text" name="u_name" id="u_name" />
                
                <label className="surnameLabel" htmlFor="surname">Soyad</label>
                <input className='surnameInput' type="text" name="u_surname" id="u_surname" />

                <label className="mailLabel" htmlFor="email">Email</label>
                <input className='mailInput' type="text" name="u_email" id="u_email" />

                <label className="yasLabel" htmlFor="age">Yaş</label>
                <input className='yasInput' type="text" name="u_age" id="u_age" />
                
                <button className='form__inputs__btn' type="submit">Ekle</button>

            </form>

            <h1>Liste</h1>
            {
                users.map((user, index) => (
                    <div className='user-details' key={index}>
                        <h2>{user.name} {user.surname}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default UserRegister;
