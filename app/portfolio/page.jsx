import React from "react";
import login from "@/public/login.svg";
import Image from "next/image";
import Button from "@/components/Button";
const Portfolio = () => {
    return (
        <div className="w-full md:h-[60vh] py-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">
                <Image src={login} width={600} height={600} />

                <form className="flex flex-col items-center gap-3">
                    <h3>Login</h3>

                    <div className="mt-5 flex flex-col items-center gap-3 w-full">
                        <div className="flex flex-col items-start gap-2">
                            <label
                                className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Username
                            </label>
                            <input type="text" placeholder="john123" className="md:min-w-[500px]" />
                        </div>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-3 w-full">
                        <div className="flex flex-col items-start gap-2">
                            <label
                                className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                                htmlFor="grid-first-name"
                            >
                                Password
                            </label>
                            <input type="password" placeholder="*****" className="md:min-w-[500px]" />
                        </div>
                    </div>

                    <Button title="Login" className="md:min-w-[500px] mt-5" />
                </form>
            </div>
        </div>
    );
};

export default Portfolio;
