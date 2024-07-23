import { Link } from "react-router-dom"; // If you're using React Router for navigation
import { BlogItems } from "../constants";

const Card = ({ imageSrc, category, date, link, description }) => (
  <div className="relative overflow-hidden rounded-lg bg-white">
    <Link to={link}>
      <img src={imageSrc} alt={category} className="w-full h-64 object-cover" />
    </Link>
    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
      {category}
    </div>
    <div className="absolute bottom-[120px] right-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm flex items-center">
      <svg
        className="w-4 h-4 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7V4a4 4 0 0 1 8 0v3" />
        <path d="M16 7a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h8" />
      </svg>
      {date}
    </div>
    <div className="p-4">
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const BlogPostCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {BlogItems.map((item) => (
      <Card
        key={item.id}
        imageSrc={item.imageSrc}
        category={item.category}
        date={item.date}
        link={item.link}
        description={item.description}
      />
    ))}
  </div>
);

export default BlogPostCard;
