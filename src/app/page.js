import AboutPreview from "@/components/home/AboutPreview";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import IndiaNetwork from "@/components/home/IndiaNetwork";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <CompanyHighlights />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <IndiaNetwork />
      <CTA />
    </>
  );
};

export default page;
