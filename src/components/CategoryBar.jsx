import { BlogItems } from "../constants";

const CategoryBar = () => (
  <div className="flex flex-wrap gap-2 p-4s">
    {BlogItems.map((category, index) => (
      <div
        key={category.id}
        className={`flex-shrink-0 px-4 py-2 text-gray-800 text-center rounded-full mt-3 mb-3 ${
          index === 0 ? "text-blue-500" : "texts-gray-800"
        }`}
      >
        {category.category}
      </div>
    ))}
  </div>
);

export default CategoryBar;
