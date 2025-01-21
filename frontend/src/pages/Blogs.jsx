import { Navbar } from "../components/navbar/Navbar";
import { Partner } from "./../components/partner/Partner";
import { Footer } from "./../components/Footer/Footer";
import { Banner2 } from "../components/banner/Banner2";
import { Blog } from "../components/blog/Blog";
import { Heading } from "../components/shared/Heading";
import image1 from "../assets/sam.jpg";
import image2 from "../assets/sam2.jpeg";
import image3 from "../assets/images.jpeg";

export const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <Banner2 />
      <div className="blog">
        <Heading title="Recent Blogs" subtitle={"View Recent News"} />
        <div className="details ">
          <div className="blog_item">
            <div className="image_wrapper">
              <img src={image1} alt="Blog 1" className="Picture_blog" />
              <div className="overlay">
                <h3>Name</h3>
                <p>C.E.O</p>
              </div>
            </div>
            <h3>What CEO Says about the future updates</h3>
            <p className="blog_details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis dolore eveniet at pariatur molestias porro corporis quam
              velit expedita voluptatibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quaerat tempore atque architecto
              tenetur cupiditate libero, culpa cumque odio sapiente neque!
            </p>
          </div>
          <div className="blog_item">
            <div className="image_wrapper">
              <img src={image2} alt="Blog 2" className="Picture_blog" />
              <div className="overlay">
                <h3>Name 2</h3>
                <p>CO-OFFICER</p>
              </div>
            </div>
            <h3>The Future relays on Ai</h3>
            <p className="blog_details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis dolore eveniet at pariatur molestias porro corporis quam
              velit expedita voluptatibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quaerat tempore atque architecto
              tenetur cupiditate libero, culpa cumque odio sapiente neque!
            </p>
          </div>
          <div className="blog_item">
            <div className="image_wrapper">
              <img src={image3} alt="Blog 3" className="Picture_blog" />
              <div className="overlay">
                <h3>Name 3</h3>
                <p>MARKET MANAGER</p>
              </div>
            </div>
            <h3>New Market Trending News</h3>
            <p className="blog_details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis dolore eveniet at pariatur molestias porro corporis quam
              velit expedita voluptatibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quaerat tempore atque architecto
              tenetur cupiditate libero, culpa cumque odio sapiente neque!
            </p>
          </div>
        </div>
      </div>

      <Partner />
      <Footer />
    </div>
  );
};
