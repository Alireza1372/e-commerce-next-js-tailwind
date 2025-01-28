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
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER - $55
          </div>
          <div>
            <Selector id="currency" values={["USD $", "EUR €"]} />
            <Selector id="language" values={["English", "French"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
