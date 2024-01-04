import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import app_logo from "@/public/icons/app_logo.svg";
const LogoImg = ({ onClicked }: { onClicked: Function }) => {
  const router = useRouter();
  return (
    <div className="pl-8 pt-8">
      <Image
        alt="logo"
        src={app_logo}
        onClick={() => router.push("/")}
        className="h-auto cursor-pointer z-10"
        width={143}
        height={56}
        priority={true}
      />
    </div>
  );
};

export default LogoImg;
