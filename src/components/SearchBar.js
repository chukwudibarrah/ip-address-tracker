import { useDispatch } from "react-redux";
import { Provider, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import addressSlice from "../features/addressSlice";


export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addressSlice.actions.saveUser(name));
    navigate("/main");
  };

  const handleChangeName = (text) => {
    setName(text);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="container flex justify-center pb-20 input-group max-w-sm md:max-w-lg"
    >
      <input
        type="search"
        className="placeholder:text-[#969696] placeholder:text-lg rounded-xl form-control cursor-pointer h-14"
        placeholder="Search for any IP address or domain"
        aria-label="Search for any IP address or domain with one button addons"
        name="name"
        onChange={(e) => handleChangeName(e.target.value)}
        value={name}
      />
      <button className="button cursor-pointer rounded-xl btn btn-secondary bg-black" type="submit" disabled={!name}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi cursor-pointer bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </form>
  );
}
