import Image from "next/image";
import { generateRating } from "../../utils/utils";

export default function ProductCard({
  img,
  title,
  description,
  rating,
  price,
}) {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          alt={title}
          width={200}
          height={300}
        />
      </div>

      <div className="space-y-2 py-2 ">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{description}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
          ${price}{" "}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
}
