import React, { FC } from "react";

import BecomeAMerchant from "@components/organisms/LandingPag/BecomeAMerchant";
import Experience from "@components/organisms/LandingPag/ExperienceSection/Experience";
import HeroTitle from "@components/organisms/LandingPag/HeroTitle";
import Offers from "@components/organisms/LandingPag/OfferSection/Offers";
// import Partners from "@components/organisms/LandingPag/PartnerSection/Partners";
import RealEstateInvestment from "@components/organisms/LandingPag/RealEstateInvestment";
import Services from "@components/organisms/LandingPag/Services";
import Testimonials from "@components/organisms/LandingPag/Testimonials/Testimonials";
import VacationCarousel from "@components/organisms/LandingPag/VacationCarousel";
import WaitingList from "@components/WaitingList/WaitingList";

export const HomePage: FC = () => (
  <>
    <HeroTitle />
    <Services />
    <VacationCarousel />
    <Offers />
    <RealEstateInvestment />
    <Experience />
    <BecomeAMerchant />
    <Testimonials />
    {/* <Partners /> */}
    {/* <GetALoan /> */}
    {/* <RentShortLets /> */}
    <WaitingList />
  </>
);
