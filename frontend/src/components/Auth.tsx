import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupInput } from "@monish21/medium-common"
import axios from "axios";
import { BACKEND_URL } from '../config';

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup"? "signup": "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            console.log(jwt);
            navigate("/blogs")
        } catch(e) {

        }
        
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-3xl font-extrabold ">
                    Create an account
                </div>

                <div className="text-center mt-2 text-slate-500 font-medium">
                    {type == "signup"? "Already have an account?": "Don't have an account"}
                    <Link className="pl-2 underline" to={type == "signup"? 'signin': '/signup'}>{type == "signup"? "Sign in": "Sign up"}</Link>
                </div>
            </div>
            <div className="pt-8">
                {type == "signup"? <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}

                <LabelledInput label="Email" placeholder="m@example.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />

                <LabelledInput label="Password" type='password' placeholder="123456" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                </div>

                <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup"? "Sign up": "Sign in"}</button>
            </div>
        </div>
    </div>

}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
    return  <div>
    <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
    <input type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}