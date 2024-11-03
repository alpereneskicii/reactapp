import React, { useState } from 'react';
import List from './list';
import "../assets/form.css"

const FormContest = ({label, contents}) => {
    return (
        <div className='form-container__item'>
            <label htmlFor={contents}>{label}</label>
            <input className='form-container__item__input' type="text" name={contents} id={contents} />
        </div>
    )
}
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
                <FormContest label={"Ad"} contents={"name"}/>
                <FormContest label={"Soyad"} contents={"surname"}/>
                <FormContest label={"Email"} contents={"email"}/>
                <FormContest label={"Yaş"} contents={"age"}/>
                <button className='form__inputs__btn' type="submit">Kaydet</button>
            </form>
            <List users={users} />
        </div>
    );
}

export default UserRegister;
