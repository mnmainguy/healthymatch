import React from "react";
import { Link } from "react-router-dom";
import { Code } from "./components/code.jsx";
import { CustomerQuote, CustomerQuotes } from "./components/customer-quotes.jsx";
import { Footer, FooterAddress } from "./components/footer.jsx";
import { Hero } from "./components/hero.jsx";
import { HorizontalSplit } from "./components/horizontal-split.jsx";
import { ImageList, ImageListItem } from "./components/image-list.jsx";
import { Navbar, NavItem, DropdownMenu, DropdownToggle } from "./components/navbar.jsx";
import { Page } from "./components/page.jsx";
import { PricingPlan, PricingTable } from "./components/pricing-table.jsx";
import { Section } from "./components/section.jsx";
import { SignupInline } from "./components/signup-inline.jsx";
import { SignupModal } from "./components/signup-modal.jsx";
import { Stripe } from "./components/vendor/stripe.jsx";
import { Team, TeamMember } from "./components/team.jsx";
import { Graph } from "./components/graph.jsx";
import Select from "react-select";
import { HashLink } from 'react-router-hash-link';

const brandName = "HealthUnsurance";
const brandImage = "img/Logo.png";
const email =  "healthunsurance@gmail.com";

const onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    New York, NY 10003<br/>
    <a href={`mailto:${email}`}>{email}</a>
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true,
  }),
});

const pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true,
  }),
});


export default (props) => {
  return (
    <Page>

      <Navbar brandImage={brandImage}>
        <NavItem dropdown={true}><HashLink to="/#signUp" className="nav-link">Sign up</HashLink></NavItem>
        <NavItem dropdown={true}><Link to="Login" className="nav-link">Login</Link></NavItem>
        <NavItem dropdown={true}><Link to="Providers" className="nav-link">Providers</Link></NavItem>
        {/* <NavItem dropdown={true}> 
          <DropdownToggle>Github</DropdownToggle>
          <DropdownMenu>
            <a href="https://github.com/mnmainguy/healthymatch" className="dropdown-item" target="_blank">
              Neal React
            </a>
            <a href="https://github.com/mnmainguy/healthymatch" className="dropdown-item" target="_blank">
              Sample Page
            </a>
          </DropdownMenu>
         </NavItem> */}
      </Navbar>

      <Hero backgroundImage="img/yoga.jpg"
        className="img-responsive">
        <h1 className="display-4 text-center"> Stop overpaying for healthcare. </h1>
        <h5 className="display-5 text-center">Find and schedule appointments with high quality medical providers at a low, up-front cost.</h5>
        <p className="text-center">
          <HashLink to="/#signUp" className="btn btn-light">Compare prices now</HashLink>
        </p>
      </Hero>

      <Section className="gray">
        <HorizontalSplit padding="md">
          <div>
            <p className="h4">Save Money</p>
            <p> Compare prices of hundreds of medical providers to ensure you get the best price for services that you pay for out of pocket. Credit, debit, and HSA payment options are available.</p>
          </div>
          <div>
            <p className="h4">Save time</p>
            <p> Book an appointment online instantly at a time that's convenient for you. Choose a location near your home or work. </p>
          </div>
          <div>
            <p className="h4">Services offered</p>
            <p> Most common outpatient imaging and lab medical services are currently offered including X-Rays, Mammograms, CT scans, MRIs, blood tests, EKGs, and colonoscopies. </p>
          </div>
        </HorizontalSplit>
        
      </Section>

      <Section >
        <p className="h5 text-center">Example Savings</p>
        <p className="text-center"> Save up to 45% on common medicial services when you book your appointment through HealthUnsurance. </p>
        <img src="img/price_comparison.png"
          className="img-fluid text-center">
        </img>
        <div id= "signUp">  </div>
      </Section>

      <Section heading="Compare prices" className="gray">
        <p> Select a medical service you need from the options below and enter your zip code to compare the prices of providers near you. Get a quote and book an appointment instantly. </p>
        <SignupInline onSubmit={onSignup}/>
        {/* <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>  */}
      </Section>

      <Footer brandName={brandName}
        facebookUrl="https://www.facebook.com/HealthUnsurance"
        twitterUrl="https://twitter.com/HUnsurance"
        instagramUrl="https://www.instagram.com/healthunsurance"
        address={businessAddress}
        >
      </Footer>
    </Page>
  );
};
