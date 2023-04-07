import React from "react";

export default function SearchBar() {
  return (
      <label className="container flex justify-center pb-10 input-group max-w-sm md:max-w-lg">
        <input
          type="search"
          className="placeholder:text-[#969696] placeholder:text-lg rounded-xl form-control cursor-pointer h-14"
          placeholder="Search for any IP address or domain"
          aria-label="Search for any IP address or domain with one button addons"
        />
        <button className="rounded-xl btn btn-secondary bg-black" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </label>
  );
}
