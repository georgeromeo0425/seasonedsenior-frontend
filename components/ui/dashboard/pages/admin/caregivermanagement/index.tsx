import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileDetailPage from "./components/ProfileDetailPage";

const profileInfo = [
  {
    imagePath: "/images/profile_card_1.png",
    fullName: "Frank Sergio",
    specialization: "Dementia Care"
  },
  {
    imagePath: "/images/profile_card_2.png",
    fullName: "Frank Sergio",
    specialization: "Mobility & Physical assistance"
  }
]

export default function CaregiverManagementPage() {

  const [isDetail, setIsDetail] = useState<boolean>(false);

  const onViewClicked = () => {
    setIsDetail(true);
  }

  const onTerminateClicked = () => {
    setIsDetail(false);
  }

  return (
    <div className="w-full h-full">
      {
        isDetail == false ? 
        <div>
          <div className="flex justify-center">
            <p className="text-2xl font-bold p-4">Show available caregivers</p>
          </div>
          <div className="grid grid-cols-3 gap-8 mx-16 my-8">
          {
            profileInfo.map((item, index) => (
              <ProfileCard key={index} 
                          imagePath={item.imagePath}
                          fullName={item.fullName}
                          specialization={item.specialization}
                          onViewClick={onViewClicked} />
            ))
          }
          </div>
        </div>
          :
        <ProfileDetailPage imagePath="/images/profile_1.png"
            name="Frank Sergio"
            goodNumber={90}
            badNumber={12}
            address={"Maryland lane, Arizona, USA."}
            distance={12}
            hourlyMin={12}
            hourlyMax={35}
            certification={"CNA"}
            details={"I am a dedicated caregiver with over 5 years of experience in providing exceptional senior care. My passion lies in helping seniors maintain their independence and improve their quality of life. My journey has taught me the importance of addressing both physical and emotional needs. I specialize in personal care, medication management, nutrition, mobility assistance, housekeeping, and Alzheimer's and dementia care. With certifications as a Certified Nursing Assistant (CNA) and in CPR and First Aid, along with excellent communication skills and a warm demeanor, I am committed to promoting the well-being and happiness of my senior clients"}
            onTerminateClick={onTerminateClicked}/>
      }
    </div>
  )
}
