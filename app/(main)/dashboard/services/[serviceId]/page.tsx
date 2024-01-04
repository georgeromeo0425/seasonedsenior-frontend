import supabase from "@/utils/supabase";
import { Service } from "@/types/service";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";

const getContent = async (serviceId: number): Promise<Service> => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", serviceId);
  console.log(data);
  if (error) {
    console.log(error);
    return {
      id: null,
      title: null,
      description: null,
      photoUrl: null,
      content: null,
    };
  }
  return {
    id: data[0]["id"],
    title: data[0]["title"],
    description: data[0]["description"],
    photoUrl: data[0]["photo_url"],
    content: data[0]["content"],
  };
};

const ServiceDetail = async ({ params }: { params: { serviceId: number } }) => {
  const curService: Service = await getContent(params.serviceId);
  return (
    <>
      <p className="text-center text-bannerTextColor text-adTitleBigSize md:text-adTitleSmallSize sm:text-adTitleSmallSize font-arial font-bold">
        {curService.title}
      </p>
      <div className="border border-solid border-[#D9D9D9] mt-[90px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] mx-[5px]" />
      <div className="mt-[25px]">
        <div className="flex justify-center">
          <Image
            alt="aboutus"
            src={
              curService.photoUrl ? curService.photoUrl : "/images/aboutus.png"
            }
            className="mt-[50px]"
            width="478"
            height="488"
          />
        </div>
        <div className="text-left mt-[50px]">
          <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light">
            {curService.content?.header + ":"}
          </span>
        </div>
        <div>
          {curService.content?.content.map((subService, idx) => {
            return (
              <div
                key={`seniorevents_paragraph_${idx}`}
                className="mt-[50px] text-justify"
              >
                <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-bold">
                  {`${subService.subtitle}: `}
                </span>
                <br className="hidden md:block sm:block" />
                <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light">
                  {subService.description}
                </span>
              </div>
            );
          })}
          <div className="mt-[50px] text-justify">
            <span className="text-adDescBigSize md:text-adDescSmallSize sm:text-adDescSmallSize text-bannerTextColor font-arial font-light">
              {curService.content?.footer}
            </span>
          </div>
        </div>
        <div className="text-center mt-[50px]">
          <PrimaryButton href="/auth/signup">Apply for care</PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
