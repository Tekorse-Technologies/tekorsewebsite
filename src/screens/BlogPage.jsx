import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../context/StateProvider";
import { darkModeColors, lightModeColors } from "../styles/colors";
import blog_page_img from "../assets/blog_page_img.jpg";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { blogData } from "../utils/blogListData";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [{ dark_mode }] = useStateProvider();
  return (
    <BlogPageContainer mode={dark_mode}>
      <div className="back_btn">
        <Link className="btn_back" to="/">
          <BiArrowBack /> Back
        </Link>
      </div>
      <div className="img_container">
        <h1>About the Tekorse Technology</h1>
        {/* <img src={blog_page_img} alt="" /> */}
      </div>
      <div className="blog_content">
        <div className="content">
          <div className="title">About</div>
          <div className="para">
            <p>
              <span>
                "Tekorse Technologies: Powering Businesses Through Innovation
                and Training"
              </span>
              <br />
              <br />
              In the ever-changing digital landscape, Tekorse Technologies
              stands as a beacon of transformation and growth. We excel in
              custom software solutions, from tailored apps to AI innovation,
              while also fortifying your digital fortress with state-of-the-art
              cybersecurity. But we don't stop there; our corporate training
              empowers your team to harness the full potential of technology. We
              envision a world where knowledge and tech unite for unparalleled
              success. Join us on this journey, and let Tekorse Technologies be
              your trusted partner for software and training, ensuring your
              business is ready for a thriving future.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="title">Why Choose Tekorse Technologies?</div>
          <div className="para">
            <p>
              In the fast-paced world of technology, choosing the right partner
              for your digital journey is crucial. At Tekorse Technologies, we
              understand the significance of this decision, and we're here to
              show you why we are the perfect choice for your business.
            </p>
            <p>
              <span>1 . Proven Excellence : </span>
              With a track record of delivering outstanding results, Tekorse
              Technologies has established itself as a leader in the tech
              industry. Our team of experts is dedicated to providing innovative
              solutions that drive success for businesses of all sizes.
            </p>
            <p>
              <span>2 . Tailored Solutions : </span>
              We recognize that every business is unique, with its own set of
              challenges and opportunities. That's why we specialize in custom
              software development, creating solutions that are tailored to your
              specific needs. Whether you need custom applications,
              user-friendly web and mobile apps, or AI-driven innovation, we
              have the expertise to make it happen.
            </p>
            <p>
              <span>3 . Cybersecurity Expertise : </span> In an age of
              increasing cyber threats, security is paramount. Tekorse
              Technologies employs cutting-edge measures to safeguard your
              digital assets. With us, you can rest assured that your data and
              operations remain secure.
            </p>
            <p>
              <span>4 . Empowering Your Team : </span>
              Technology is only as effective as the people who use it. We're
              proud to offer comprehensive corporate training programs that keep
              your team up-to-date with the latest advancements. Our aim is to
              empower your workforce, ensuring they can make the most of the
              digital tools at their disposal.
            </p>
            <p>
              <span>5 . Vision for Success : </span>
              Our vision is to create a world where technology and knowledge
              unite to drive success and growth. We are committed to being the
              catalyst for innovation in businesses of all sizes, fostering a
              dynamic tech landscape where organizations can flourish through
              continuous learning and technological excellence. <br /> <br />
              Choosing Tekorse Technologies means choosing a partner dedicated
              to your success. Join us on this transformative journey, and let
              us help you navigate the ever-changing digital landscape.
              Together, we'll position your business for a future filled with
              innovation and growth. <br /> <br />
              Ready to embark on your digital journey? Contact Tekorse
              Technologies today and discover the difference that excellence,
              tailored solutions, cybersecurity, and workforce empowerment can
              make for your business.
            </p>
          </div>
        </div>

        {/* we offer list */}
        <div className="content">
          <div className="title">We Offer</div>
          <div className="para">
            <div className="sub-title">
              <VscDebugBreakpointLog /> Online Learning Platforms
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Corporate Training and E-Learning
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Learning Management System
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Virtual Classrooms
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Online Assessment and Testing
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Educational Content Creation
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog /> Language Learning Apps
            </div>
            <div className="sub-title">
              <VscDebugBreakpointLog />
              EdTech Consultation and Integration
            </div>
          </div>
        </div>
        {/* we offer list end */}

        {/* {blogData.map(
          ({ id, subTitle, spanTitle, spanContent, description }) => (
            <div className="content" key={id}>
              <div className="para">
                <div className="sub-title">{subTitle}</div>
                <p>
                  <span>{spanTitle} : </span> {spanContent}
                  <br />
                  <br />
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </p>
              </div>
            </div>
          )
        )} */}
        {blogData.map(({ id, title, description }) => (
          <div className="content" key={id}>
            <div className="para">
              <div className="title">{title}</div>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
          </div>
        ))}
        <div className="content">
          <div className="title">Conclusion</div>
          <div className="para">
            <p>
              <span>A Glimpse into Excellence : </span>Nothing speaks louder
              than the words of satisfied clients. <br /> <br />
              Explore real-life success stories where businesses, big and small,
              partnered with Tekorse Technology to transform their digital
              presence. Tekorse technology isn't just keeping up with the tech
              changes – they're the ones making it happen, making our world
              smarter and more efficient for everyone. "We're not just fixing
              computer issues – We're leading the charge in making technology a
              seamless part of our lives.
            </p>
          </div>
        </div>
      </div>
      <div className="back_btn">
        <Link className="btn_back" to="/">
          <BiArrowBack /> Back
        </Link>
      </div>
    </BlogPageContainer>
  );
};

export default BlogPage;

const BlogPageContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  padding-block: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  gap: 3rem;
  background: ${(props) =>
    props.mode === "dark"
      ? darkModeColors.background
      : lightModeColors.background};
  .back_btn {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    .btn_back {
      display: flex;
      align-items: center;
      font-size: large;
      font-weight: 600;
    }
  }
  .img_container {
    width: 80%;
    height: 266px;
    background: url(${blog_page_img}), lightgray 0px -114.667px / 100% 323.058%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    font-size: xx-large;
    text-align: center;
  }
  .blog_content {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    /* justify-content: center;
    align-items: center; */
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      .title {
        font-size: 2rem;
        font-weight: 600;
        color: ${(props) =>
          props.mode === "dark"
            ? darkModeColors.accent
            : lightModeColors.accent};
      }
      .para {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .sub-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: ${(props) =>
            props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        }
        p {
          font-size: medium;
          font-weight: 300;
          span {
            font-weight: 600;
          }
          color: ${(props) =>
            props.mode === "dark" ? darkModeColors.text : lightModeColors.text};
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .img_container {
      height: 200px;
      font-size: x-large;
    }
    .blog_content {
      .content {
        .title {
          font-size: 1.5rem;
        }
        .para {
          .sub-title {
            font-size: 1rem;
          }
          p {
            font-size: small;
          }
        }
      }
    }
  }
  @media screen and (max-width: 426px) {
    .img_container {
      height: 150px;
      font-size: large;
    }
    .blog_content {
      .content {
        .title {
          font-size: 1.2rem;
        }
        .para {
          .sub-title {
            font-size: 1rem;
          }
          p {
            font-size: small;
          }
        }
      }
    }
  }
`;
