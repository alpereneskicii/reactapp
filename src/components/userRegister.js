import React, { useState } from 'react';
import List from './list';
import "../assets/form.css"

const UserRegister = () => {
    const [users, setUsers] = useState([]);

    function saveUser(event) {
        event.preventDefault();

        var u_name = event.target.elements.name.value.trim();
        var u_surname = event.target.elements.surname.value;
        var u_email = event.target.elements.email.value;
        var u_age = event.target.elements.age.value;

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
        event.target.elements.name.value = "";
        event.target.elements.surname.value = "";
        event.target.elements.email.value = "";
        event.target.elements.age.value = "";
    }

    return (
        <div className='card'>
            <form className='form-container' onSubmit={saveUser}>
                <div className='form-container__item'>
                    <label htmlFor="name">Ad</label>
                    <input className='form-container__item__input' type="text" name="name" id="name" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="surname">Soyad</label>
                    <input className='form-container__item__input' type="text" name="surname" id="surname" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="email">Email</label>
                    <input className='form-container__item__input' type="text" name="email" id="email" />
                </div>
                <div className='form-container__item'>
                    <label htmlFor="age">Yaş</label>
                    <input className='form-container__item__input' type="text" name="age" id="age" />
                </div>
                <button className='form__inputs__btn' type="submit">Kaydet</button>
            </form>
            <List users={users} />
        </div>
    );
}

export default UserRegister;
