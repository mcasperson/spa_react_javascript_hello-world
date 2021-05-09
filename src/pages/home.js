import React, { Fragment } from "react";
import { HeroBanner } from "../components/hero-banner";
import { NextSteps } from "../components/next-steps";

export const Home = () => (
  <Fragment>
    <HeroBanner />
    <NextSteps />
  </Fragment>
);
