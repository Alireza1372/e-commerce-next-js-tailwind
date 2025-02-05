import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const icons = [
  { Icon: BsFacebook, key: "facebook" },
  { Icon: BsTwitterX, key: "twitter" },
  { Icon: BsInstagram, key: "instagram" },
  { Icon: BsLinkedin, key: "linkedin" },
];
export default function SocialMedia() {
  return (
    <>
      {icons.map((icon, index) => {
        return (
          <div className="header_top__icon_wrapper" key={index}>
            <icon.Icon />
          </div>
        );
      })}
    </>
  );
}
