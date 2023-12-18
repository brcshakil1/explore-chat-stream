import { useRef } from "react";
import { Input } from "../components/Input";

const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Sign up now</h1>
            <form className="grid grid-cols-3 gap-x-3 gap-y-5 items-center justify-end">
                <label htmlFor="username">Username</label>
                <Input id='username' className="col-span-2" pattern="/S*" required ref={usernameRef}/>
            </form>
        </div>
    );
};

export default SignUp;