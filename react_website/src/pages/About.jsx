import Common from "../components/Common";
import about from "../images/about.png";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btnName="Get Connected"
      />
    </>
  );
};

export default About;
