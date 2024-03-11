import React, { memo } from "react";
import data from "@/data/about-page.json";
const AboutUs = () => {
    const { title, content, whyGoolluck, team } = data.aboutPage;
    return (
        <div className="w-full py-10">
            <div className="flex items-start">
                <h3>{title}</h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 mt-10">
                {content.map((list, index) => {
                    return (
                        <div
                            className="flex flex-col items-start gap-2"
                            key={index}
                        >
                            <h4 className="text-secondary">{list.label}</h4>
                            <p className="text-justify">{list.desc}</p>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-start mt-10">
                <h3>{whyGoolluck.title}</h3>
            </div>

            <div className="mt-5 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-32">
                <div className="flex flex-col gap-2 text-justify">
                    <p>{whyGoolluck.content}</p>
                    <p>{whyGoolluck.desc}</p>
                    <div className="flex flex-col items-start gap-2">
                        {whyGoolluck.points.map((point, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <p className="text-secondary">
                                        {point.index}
                                    </p>
                                    <p>{point.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <img src={whyGoolluck.image} alt="image" />
            </div>

            <div className="flex items-start mt-10">
                <h3>{team.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 lg:gap-24 mt-10">
                {team.teamMembers.map((member) => {
                    return (
                        <div
                            key={member.key}
                            className="flex flex-col items-center gap-2 border border-secondary p-3 rounded-xl max-w-[20rem] min-h-[25rem]"
                        >
                            <img src={member.photo} width={150} height={150} />
                            <h4 className="text-secondary">{member.name}</h4>
                            <p>{member.designation}</p>
                            <p className="text-justify">{member.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutUs;
