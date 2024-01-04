import React from "react";
import { useState } from "react";

import ToogleButton from "@/components/ui/common/ToogleButton";

const availabilityItems = [
    "Live in",
    "Overnight",
    "Short notice",
    "Daily"
];

const Availability = () => {

    const [currentSelection, setCurrentSelection] = useState<number>(0);

    return (
        <div className="ml-8 mt-2 mr-8 mb-2">
            <p className="text-primary font-bold text-lg mb-4">Availability</p>
            {
                availabilityItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            checked={currentSelection == index}
                            type="radio"
                            className="accent-[#CB5A6F] w-4 h-4 text-textdarkColor bg-gray-100 border-gray-300 mr-4"
                            name="planradio"
                            value={index}
                            onClick={(val) => setCurrentSelection(index)} />
                        <p className={currentSelection == index ? "text-primary" : ""}>{ item }</p>
                    </div>
                ))
            }
        </div>
    )
};

export default Availability;
