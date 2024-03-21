import React from "react";
import Image from "next/image";
const About = ({ about }) => {
    const { title, content } = about;
    return (
        <div className="w-full">
            <div className="flex items-start">
                <h3>{title}</h3>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 mt-10">
                {content.map((list, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3"
                        >
                            <Image
                                src={list.icon}
                                width={60}
                                height={60}
                                className="bg-secondary text-primary p-2 rounded-xl"
                            />

                            <h4 className="md:text-center">{list.label}</h4>
                            <p className="text-justify">{list.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default About;
