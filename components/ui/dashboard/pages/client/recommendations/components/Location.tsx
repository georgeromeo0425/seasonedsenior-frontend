import React from "react";
import { useState } from "react";

import MultiRangeSlider from "@/components/ui/auth/MultiRangeSlider";

const locationItems = [
    "2 miles",
    "10 miles",
    "20 miles",
    "50 mile",
    "Custom"
];

const Location = () => {

    const [currentSelection, setCurrentSelection] = useState<number>(0);
    const [customSelected, setCustomSelected] = useState<boolean>(false);

    return (
        <div className="ml-8 mt-2 mr-8 mb-2">
            <p className="text-primary font-bold text-lg mb-4">Location</p>
            {
                    locationItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            checked={currentSelection == index}
                            type="radio"
                            className="accent-[#CB5A6F] w-4 h-4 text-textdarkColor bg-gray-100 border-gray-300 mr-4"
                            name="locationradio"
                            value={index}
                            onClick={(val) => {
                                setCurrentSelection(index);
                                if (index == 4)
                                    setCustomSelected(true);
                                else
                                    setCustomSelected(false);
                            }} />
                        <p className={currentSelection == index ? "text-primary" : ""}>{ item }</p>
                    </div>
                ))
            }
            {
                customSelected && 
                <div>
                    <div className="mt-10 mb-12">
                        <MultiRangeSlider
                            min={10}
                            max={500}
                            onChange={() => {}} />
                    </div>
                    <div className="flex justify-end">
                        <span className="text-distlineColor cursor-pointer">Apply</span>
                    </div>
                </div>
            }
        </div>
    )
};

export default Location;
