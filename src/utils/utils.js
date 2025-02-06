import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const generateRating = (rating) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
        </div>
      );
    case 2:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
        </div>
      );
    case 3:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
        </div>
      );
    case 4:
      return (
        <div className="flex gap-1 text-[20px]">
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiOutlineStar color="#FF9529" />
        </div>
      );
    case 5:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
          <AiFillStar color="#FF9529" />
        </div>
      );
  }
};
