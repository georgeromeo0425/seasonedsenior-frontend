import MultiRangeSlider from "@/components/ui/auth/MultiRangeSlider";
import React from "react";

const HourlyRate = () => {
    return (
        <div className="ml-8 mt-2 mr-8 mb-2">
            <p className="text-primary font-bold text-lg mb-4">Hourly Rate</p>
            <p className="text-primary font-bold">COST PER HOUR</p>
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
    )
};

export default HourlyRate;
