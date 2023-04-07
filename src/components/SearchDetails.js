import React, { useRef } from 'react';

export default function SearchDetails() {
    // var detailsBar = document.getElementById("displayDetails");
    // detailsBar.style.display = "none";
    // const inputRef = useRef(null);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const ipAddress = console.log(inputRef.current.value);
    //     console.log("Your IP address is", ipAddress);
    //     detailsBar.style.display = "block";
    // }


    return (
        <div className='container flex justify-center flex-row md:flex-col text-[#2B2B2B]' id='displayDetails'>
            <p>
                IP ADDRESS
            </p>
            <hr/>
            <p>
                LOCATION
            </p>
            <hr/>
            <p>
                TIME ZONE
            </p>
            <hr/>
            <p>
                ISP
            </p>
        </div>
    )
}