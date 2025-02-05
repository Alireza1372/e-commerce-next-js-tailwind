import Selector from "./Selector";
import SocialMediaIcon from "./SocialMediaIcons";
export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <SocialMediaIcon />
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>FREE SHIPPING </strong>
            <span>THIS WEEK ORDER - $55</span>
          </div>
          <div className="flex gap-4 ">
            <Selector
              id="currency"
              values={["USD $", "EUR €"]}
              styles="text-gray-500 text-[12px] w-[70px] bg-white"
            />
            <Selector
              id="language"
              values={["English", "French"]}
              styles="text-gray-500 text-[12px] w-[80px] bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
