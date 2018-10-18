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
import Select from "react-select";
import { HashLink } from 'react-router-hash-link';

const brandName = "Healthy Match";
const brandImage = "img/Logo.png";

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
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
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
        <NavItem dropdown={true}><HashLink to="/pathLink#signUp" className="nav-link">Sign up</HashLink></NavItem>
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

      <Hero backgroundImage="img/money.jpg"
        className="img-responsive">
        <h1 className="display-4 text-center"> Get healthy on your own terms. </h1>
        <h5 className="display-5 text-center">Find and schedule appointments with high quality medical providers at a low, up-front cost.</h5>
        <p className="text-center">
          <HashLink to="/pathLink#signUp" className="btn btn-dark">Compare prices now</HashLink>
        </p>
      </Hero>

      <Section className="subhero">
        <ImageList centered>
          <ImageListItem src="img/press/cnn-logo.png" url="http://www.cnn.com"/>
          <ImageListItem src="img/press/forbes-logo.png" url="http://forbes.com/"/>
          <ImageListItem src="img/press/theverge-logo.png" url="http://www.theverge.com/"/>
          <ImageListItem src="img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
        </ImageList>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Batteries Included</p>
            <p>Neal is based on <a href="http://v4-alpha.getbootstrap.com/" target="_blank">Bootstrap 4</a> and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a landing page. No more repetitive coding! Oh, and it's easy to extend.</p>
          </div>
          <div>
            <p className="lead">Third-Party Integrations</p>
            <p>External integrations like &nbsp;
              <a href="http://www.google.com/analytics/">Google Analytics</a>,&nbsp;
              <a href="https://segment.com/">Segment</a>,&nbsp;
              <a href="https://stripe.com/">Stripe</a> and&nbsp;
              <a href="http://typeform.com">Typeform</a> are included.
              No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</p>
          </div>
          <div>
            <p className="lead">Serverless Deployment</p>
            <p>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</p>
          </div>
        </HorizontalSplit>
        <div id= "signUp">  </div>
      </Section>

      <Section heading="Sign-up" className="gray">
        <p>Use these components to capture user data, display a payment dialog and/or send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails. </p>
        <SignupInline onSubmit={onSignup}/>
        {/* <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary btn-ghost" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p> */}
      </Section>

      <Section>
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
          <PricingPlan {... pricingPlan3} />
        </PricingTable>
      </Section>

      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/mnmainguy/healthymatch"
        // address={businessAddress}
        >
      </Footer>
    </Page>
  );
};
