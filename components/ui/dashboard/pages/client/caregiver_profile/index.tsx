import React, { useState } from "react";
import ProfileDetailPage from "../application/components/ProfileDetailPage";

export default function CaregiverProfilePage() {
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const onTerminateClicked = () => {
    setIsDetail(false);
  };

  return (
    <ProfileDetailPage
      imagePath="/images/profile_1.png"
      name="Frank Sergio"
      goodNumber={90}
      badNumber={12}
      address={"Maryland lane, Arizona, USA."}
      distance={12}
      hourlyMin={12}
      hourlyMax={35}
      certification={"CNA"}
      details={
        "I am a dedicated caregiver with over 5 years of experience in providing exceptional senior care. My passion lies in helping seniors maintain their independence and improve their quality of life. My journey has taught me the importance of addressing both physical and emotional needs. I specialize in personal care, medication management, nutrition, mobility assistance, housekeeping, and Alzheimer's and dementia care. With certifications as a Certified Nursing Assistant (CNA) and in CPR and First Aid, along with excellent communication skills and a warm demeanor, I am committed to promoting the well-being and happiness of my senior clients"
      }
      onTerminateClick={onTerminateClicked}
    />
  );
}
