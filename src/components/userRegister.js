import React, { useState } from 'react';
import "../assets/form.css"
const UserRegister = () => {
    const [users, setUsers] = useState([]);

    function saveUser(event) {
        event.preventDefault();

        var u_name = event.target.elements.u_name.value.trim();
        var u_surname = event.target.elements.u_surname.value;
        var u_email = event.target.elements.u_email.value;
        var u_age = event.target.elements.u_age.value;

        if (!u_surname && !u_name) {
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
        <div className='card' hidden id="v2">
            <form className='form-container' onSubmit={saveUser}>
                <div className='form-container__item'>
                    <label htmlFor="name">Ad</label>
                    <input className='form-container__item__input' type="text" name="u_name" id="u_name" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="surname">Soyad</label>
                    <input className='form-container__item__input' type="text" name="u_surname" id="u_surname" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="email">Email</label>
                    <input className='form-container__item__input' type="text" name="u_email" id="u_email" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="age">Yaş</label>
                    <input className='form-container__item__input' type="text" name="u_age" id="u_age" />
                </div>
                <button className='form__inputs__btn' type="submit">Kaydet</button>

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
