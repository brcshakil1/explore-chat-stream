import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const imageUrlRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Sign up now</h1>
            <form className="grid grid-cols-3 gap-x-3 gap-y-5 items-center justify-end">
                <label htmlFor="username">Username</label>
                <Input id='username' className="col-span-2" pattern="/S*" required ref={usernameRef}/>
                <label htmlFor="name">Name</label>
                <Input id='name' className="col-span-2"  required ref={nameRef}/>
                <label htmlFor="image_url">Image Url</label>
                <Input id='image_url' className="col-span-2" ref={imageUrlRef}/>
                <Button className="col-span-full">Sign up</Button>
            </form>
        </div>
    );
};

export default SignUp;