import React from "react";
import Button from "./Button";
import Image from "next/image";
const HomePage = ({ homePage }) => {
    const { title, subTitle, content, buttonTitle, image } = homePage;
    return (
        <div className="w-full py-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:space-x-64 ">
                <div className="flex flex-col items-start gap-3 ">
                    <h1 className="lg:leading-[3rem]">
                        {title} <span>{subTitle}</span>
                    </h1>
                    <p className="text-justify">{content}</p>
                    <Button title={buttonTitle} />
                </div>

                <Image src={image} priority width={600} height={600} />
            </div>
        </div>
    );
};

export default HomePage;
