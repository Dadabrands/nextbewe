import BlogHero from "../components/BlogHero";
import BlogPostCard from "../components/BlogPostCard";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogHero />
      <CategoryBar />
      <BlogPostCard />
      <Footer />
    </>
  );
};

export default Blog;
