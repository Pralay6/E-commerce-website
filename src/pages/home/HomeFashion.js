import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import SectionTitleTwo from "../../components/section-title/SectionTitle";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        <SectionTitleTwo
          titleText="Reviews"
         
          positionClass="text-center"
          spaceClass="mb-60"
        />
         {/* Testimonial*/}
        <TestimonialOne/>
        
        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
