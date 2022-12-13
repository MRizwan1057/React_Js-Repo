import Common from "../components/Common";
import banner from "../images/banner.png";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={banner}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
