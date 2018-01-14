import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Aboutus = () => (
  <div>
    <Header />
    <div className="ui container">
      <div id="pricebay" className="text-edit">
        <h4 className="ui header">What is PriceBay ?</h4>
        <p>
          PriceBay is a NIGERIA'S shopping comparison site. which is aimed at
          digging the internet to find you the best deals on millions of items.
          You can compare prices on over 4 million items from hundreds of the
          Nigeria's best loved shops all on a single website. At PriceBay we
          pride ourselves on being impartial. This means we list lots of
          retailers for free as well as those who pay to include links to their
          websites. We're the only major Nigerian shopping comparison site that
          does this, even Google only shows shopping results that retailers have
          paid to display. We combine state-of-the-art technology with a team of
          real entotiest who whizz around the high street all week seeking out
          the best prices. We also have a large team of people manually matching
          up items to make sure our comparisons are 100% accurate and you can
          find exactly what you're looking for.
        </p>
        <h4 className="ui header">About</h4>
        <h5 className="ui header"> CONTACT INFORMATION </h5>
        <p>
          If you have a general question on PriceBay you can &nbsp;
          <a href="mailto:enquiry@pricebay.com.ng">email the team</a>
          &nbsp; or call +2347-0359-94817
        </p>

        <h5>NEW BUSINESS ENQUIRIES</h5>
        <p>
          Interested in advertising or listing your products on PriceBay? <br />Email
          &nbsp;
          <a href="mailto:business@pricebay.com.ng">our new business team</a>.
        </p>
        <p>
          PriceBay is a registered trademark of Waifanet Solutions, an ict
          company registerd in Nigeria.
        </p>
      </div>
      <hr />
      <div id="Verifiedretailers" className="text-edit">
        <h4 className="ui header">Verified retailers</h4>
        <p>
          We aim to compare prices from every credible online retailer in
          NIGIRIA. To do this is no mean feat and takes a lot of work behind the
          scenes to make sure all the products match up and the information is
          correct. Some retailers work with us directly, providing all the
          prices and item details and paying us a small amount for shoppers that
          click on their listings on PriceBay. These retailers work
          transparently with us. For these retailers we show an icon next to all
          their listings. Some other retailers don’t work directly with us but
          we’re still able to compare their prices by scraping information
          directly from their site. Obviously we don’t have such a close
          relationship with these shops so we can’t be as confident about the
          accuracy of their prices or help out with customer service issues.
          This doesn’t mean that you shouldn’t shop with them but it’s worth
          checking the details thoroughly before you buy. We do our best to make
          sure everything we list on site is accurate but we’re only human so if
          you do spot any mistakes then please let us know by emailing &nbsp;
          <a href="mailto:review@pricebay.com.ng">review@pricebay.com.ng</a>
        </p>
      </div>
      <hr />
      <div id="Shoppingsafely" className="text-edit">
        <h4 className="ui header">Shopping Safely</h4>
        <p>
          Millions of successful online transactions happen every day, but it’s
          always important to use common sense when you're shopping online.{" "}
          <br />
          <strong>Look for the padlock</strong>
          <br /> Whenever you shop online you should be taken to a secure
          payment page displaying a padlock icon and usually with https in the
          website address. Don't buy anything from a site that doesn’t display a
          padlock as it may not be a secure site. Warning signs Sites that seem
          unprofessional, are full of spelling mistakes, don't list their
          contact details, or make sweeping price promises that seem too good to
          be true are best avoided. Always trust your instincts. For more
          information on your consumer rights visit{" "}
          <a
            href="http://www.cpc.gov.ng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consumer Protection Council
          </a>.
        </p>
      </div>
    </div>
    <div className="terms-footer">
      <Footer />
    </div>
  </div>
);
export default Aboutus;
