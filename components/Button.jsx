import React from "react";

const Button = ({ title, className, onClick }) => {
    return (
        <button
            className={`px-8 py-2 rounded-full bg-secondary hover:bg-background text-background border-2 border-secondary hover:text-primary duration-500 ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
