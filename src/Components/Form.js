import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

import { ToastContainer, toast, Slide } from 'react-toastify';
import {useNavigate} from "react-router-dom";

// Requete
import { useQuery } from 'react-query'
import { getWeather } from '../Services/api';

export default function Form() {

    const inputCity = useRef();
    const navigation = useNavigate();
    const {isSuccess, data, isError, refetch} = useQuery('weather', () => getWeather(inputCity.current.value), { enabled: false })
    
    useEffect(() => {
        if (isSuccess && data.cod === "404") {
            toast.error("Désolé nous n'avons aucune donnée sur cette ville 😔", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Slide,
                closeButton: false
                });
        } else if(isSuccess && data.cod === 200) {
            navigation(`/city/${data.name}`, { state: data });
        } else if(isError) {
            console.log("Erreur chargement");
        } 
    }, [data])
    

    // Au clique btn form
    let submitForm = e => {
        e.preventDefault()

        inputCity.current.value.length > 2 ? refetch() : toast.error('Please enter more than 2 caracts 👇', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide,
            closeButton: false,
            });
    }

    // Press enter
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.preventDefault();
            submitForm(e);
        }
    };

    return (
        <FormCity onSubmit={submitForm} onKeyDown={(e) => checkKeyDown(e)}>
            
            <h2 style={{textAlign: "center", margin: "0px 10px 50px 10px"}}>Look for the weather in your town !</h2>
            <FormGroupField>
                <InputCity type="text" name="city" placeholder="Enter your city..." ref={inputCity}/>
                <FormLabel htmlFor="city">Your city 👇</FormLabel>
            </FormGroupField>
            <ButtonForm>GO 🚀</ButtonForm>

            <ToastContainer />
            
        </FormCity>
        
    )
}

const FormCity = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 184, 141, 0.8);
    padding: 40px 30px;
    border-radius: 20px;
    margin-top: 2%;
    @media (max-width: 460px) {
        margin: 0px 20px;
    }
`;

const FormGroupField = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px 0 0;
    /* margin-top: 10px; */
    width: 60%;
    margin-bottom: 15%;
`;

const FormLabel = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: white;
    width: max-content;
`;

const InputCity = styled.input`
    font-family: inherit;
    width: 150%;
    border: 0;
    border-bottom: 2px solid white;
    outline: 0;
    font-size: 1.1rem;
    color: #003049;
    padding: 10px 0;
    background: transparent !important;
    transition: border-color 0.2s;
    &::placeholder{
        color: transparent;
    }
    &:placeholder-shown ~ ${FormLabel} {
        font-size: 15px;
        font-weight: 500;
        cursor: text;
        top: 20px;
    }
    &:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 4px;
        border-image: linear-gradient(to right, #00B88D, #003049);
        border-image-slice: 1;
    }
    &:focus ~ ${FormLabel} {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: black;
        font-weight: 700;
    }
`;

const ButtonForm = styled.button`
    padding: 10px 20px;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.1);
        background-color: #003049;
        color: white;
    }
`;
