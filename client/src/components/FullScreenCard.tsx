import { ReactNode } from "react";

type FullScreenCard = {
    children: ReactNode
}

const FullScreenCard = ({children}:FullScreenCard) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full">{children}</div>
        </div>
    );
};

FullScreenCard.Body = ({children}:FullScreenCard) => {
    return (
        <div className="shadow bg-white p-6 rounded-lg">
           {children}
        </div>
    )
}

FullScreenCard.BelowCard = ({children}:FullScreenCard) => {
    return (
        <div className="m-2 justify-center flex gap-3">
            {children}
        </div>
    )
}

export default FullScreenCard;