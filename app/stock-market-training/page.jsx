import React from "react";
import data from "@/data/stock-market-training-page.json";
const StockMarketTraining = () => {
    const { intruction } = data.stockMarketTraining;
    return (
        <div className="w-full py-10">
            {/* <div className="flex items-start">
                <h3>{intruction.title}</h3>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col items-start gap-2 mt-4">
                    <p>{intruction.content}</p>
                </div>
            </div> */}

            <h2>Page Under Development</h2>
        </div>
    );
};

export default StockMarketTraining;
