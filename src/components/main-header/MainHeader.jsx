import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import IconWithNotification from "./IconWithNotification";
import SiteLogo from "./SiteLogo";
import SearchInput from "./SearchInput";

export default function MainHeader() {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <SiteLogo />
        <SearchInput placeholder="" />
        <div className="hidden lg:flex text-gray-500 text-[30px] gap-4">
          <IconWithNotification Icon={BiUser} />
          <IconWithNotification Icon={HiOutlineShoppingBag} number={0} />
          <IconWithNotification Icon={FiHeart} number={0} />
        </div>
      </div>
    </div>
  );
}
