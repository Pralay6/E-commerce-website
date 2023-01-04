import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Sports Wear</h1>
          <p>
          Welcome to our shop, where you'll find everything you need to get your game on! We have a wide selection of sports products and sports wear for all types of athletes, from beginners to pros. Our top-quality gear is designed to help you perform at your best, while also keeping you comfortable and safe. We carry products from all the top brands, so you can trust that you're getting the best of the best. Whether you're a runner, a yogi, a basketball player, or just someone who loves to stay active, we have something for you. So come on in and check out our selection today!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
