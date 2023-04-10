import { useSelector } from "react-redux";

export default function SearchDetails() {
    const user = useSelector((state) => state.user); // <-- select the user state
        return (
        <div className='container flex justify-evenly py-7 shadow-2xl z-40 rounded-lg bg-white flex-row md:flex-col text-[#2B2B2B]' id='displayDetails'>
            <div className="flex-col seachResult">
            <p>
                IP ADDRESS
            </p>
            <p>
                {user}
            </p>
            <hr/>
            </div>
            <div className="flex-col seachResult">
            <p>
                LOCATION
            </p>
            <hr/>
            </div>
            <div className="flex-col seachResult">
            <p>
                TIME ZONE
            </p>
            <hr/>
            </div>
            <div className="flex-col seachResult">
            <p>
                ISP
            </p>
            </div>
        </div>
    )
}