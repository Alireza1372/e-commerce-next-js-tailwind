import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <div className="w-full sm:w-[300px] md:w-[70%] relative">
      <input
        className="border-gray-200 border p-2 px-4 rounded-lg w-full"
        type="text"
        placeholder="Enter any product..."
      />
      <BsSearch
        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
        size={20}
      />
    </div>
  );
}
