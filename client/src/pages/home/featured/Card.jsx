import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Card = ({ image, title }) => {
  return (
    <>
      <div className="border border-blue-600 text-center group overflow-hidden rounded-md">
        <img
          src={image}
          alt="featured image"
          className="w-full object-cover object-center group-hover:scale-110 duration-700"
        />
        <div className="px-4 py-4 lg:py-8 mt-2 lg:mt-4 space-y-2 lg:space-y-4">
          <h3 className="text-lg lg:text-2xl font-semibold capitalize">
            {title}
          </h3>
          <p className="text-justify">
            We helped with other family based employment based and investment
            based Immigration.
          </p>
          <button className="btn_one flex items-center">
            read more
            <MdKeyboardDoubleArrowRight size={22} className="mt-[2px]" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
