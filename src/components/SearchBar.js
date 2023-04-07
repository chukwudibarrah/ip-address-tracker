import React from 'react';

export default function SearchBar() {
    return (
        <form>
            <label>
            <input type='search' class="form-input cursor-pointer px-4 py-3 font-rubik rounded-full" placeholder='Search for any IP address or domain'/>
            </label>
        </form>
    )
}