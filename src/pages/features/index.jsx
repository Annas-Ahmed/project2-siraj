import React from "react";
import "./features.css";
import { Col, Container, Row } from "react-bootstrap";
import SliderComp from "../../components/slider";

// icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Features = () => {
  return (
    <Container>
      <section className="section1-mobile">
        <ArrowLeftIcon />
        <h1>Scan Result</h1>
      </section>
      <section className="features-section1">
        <div>
          <h1>Product Scan Result</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            magni laborum at saepe, ad praesentium.
          </p>
        </div>

        <div className="section1-container2">
          <img
            src={require("../../assets/congrats_man_image.jpg")}
            alt="congrats man"
          />
          <p>
            Congrats! Your label is fine. Make sure you scan the hidden code
            after you buy this product
          </p>
        </div>
      </section>

      <section className="features-section2">
        <div>
          <h1>Maggi</h1>
          <h2>Nestle India</h2>
          <button>Register Warranty</button>
        </div>
        <img src={require("../../assets/maggi.jpg")} alt="congrats man" />
      </section>
      <section className="mobile-section">
        <div>
          <img src={require("../../assets/whatsapp_mobile.png")} alt="12" />
          <p>Whatsapp Connect Now</p>
        </div>
        <div>
          <img src={require("../../assets/instagram_mobile.png")} alt="12" />
          <p>Instagram Connect Now</p>
        </div>
        <div>
          <img src={require("../../assets/instagram_mobile.png")} alt="12" />
          <p>Twitter Connect Now</p>
        </div>
      </section>
      <section className="features-section3">
        <h1>Description</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          eligendi possimus et dolores delectus ullam?
        </p>
        <div>
          <div>
            <p>
              <LocalShippingOutlinedIcon
                sx={{
                  color: "#2987C2FF",
                  fontSize: "2rem",
                  marginRight: "25px",
                }}
              />
              3 years warranty
            </p>
            <p>
              <StarIcon
                sx={{
                  color: "#2987C2FF",
                  fontSize: "2rem",
                  marginRight: "25px",
                }}
              />
              3 years warranty
            </p>
          </div>
          <div>
            <p>
              <LocalShippingOutlinedIcon
                sx={{
                  color: "#2987C2FF",
                  fontSize: "2rem",
                  marginRight: "25px",
                }}
              />
              Service Booking Availible
            </p>
            <p>
              <WorkspacePremiumOutlinedIcon
                sx={{
                  color: "#2987C2FF",
                  fontSize: "2rem",
                  marginRight: "25px",
                }}
              />
              Service Booking Availible
            </p>
          </div>
        </div>
        <button>Report Error</button>
      </section>
      <SliderComp />

      <section className="features-section5">
        <Row>
          <Col>
            <h1>Whatsapp</h1>
            <p>Connect with us for resolving your product queries</p>
            <button>Connect now</button>
          </Col>
          <Col>
            <img src={require("../../assets/whatsapp_people.jpg")} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={require("../../assets/instagram_people.jpg")} alt="" />
          </Col>
          <Col>
            <h1>Instagram</h1>
            <p>Connect with us for resolving your product queries</p>
            <button>Connect now</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Twitter</h1>
            <p>Connect with us for resolving your product queries</p>
            <button>Connect now</button>
          </Col>
          <Col>
            <img src={require("../../assets/twitter_people.jpg")} alt="" />
          </Col>
        </Row>
      </section>
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Features;
