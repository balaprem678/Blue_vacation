import "../App.css";
import Navigation from "./Navigation";

import Home1 from "../img/Home/amazing-andaman.jpg";
import Home2 from "../img/Home/andaman-banner.jpg";
import Home3 from "../img/Home/andaman-banner (1).jpg";
import Home4 from "../img/Home/revenue.png";
import Home5 from "../img/Home/coins.png";
import Home6 from "../img/Home/list.png";
import Home7 from "../img/Home/trust.png";
import Home8 from "../img/Home/1.jpg";
import Home9 from "../img/Home/2.jpg";
import Home10 from "../img/Home/3.jpg";
import Home11 from "../img/Home/4.jpg";
import Home12 from "../img/Home/5.jpg";
import Home13 from "../img/Home/6.jpg";
import Home14 from "../img/Home/7.jpeg";
import Home15 from "../img/Home/8.jpg";
import Home16 from "../img/Home/9.jpg";
import Home17 from "../img/Home/10.jpg";
import Home18 from "../img/Home/11.jpeg";
import Home19 from "../img/Home/12.jpg";

import star from "../img/Home/star.png";

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <div className="head-banner">
        <div className="container-fluid">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Home1} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Andaman Tour Package</h5>
                  <p>
                    Blue Vacations is the one stop solution for all your travel
                    needs. <br />
                    Travel wherever you like at an affordable price
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Home2} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Andaman Tour Package</h5>
                  <p>
                    Blue Vacations is the one stop solution for all your travel
                    needs. <br />
                    Travel wherever you like at an affordable price
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Home3} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Andaman Tour Package</h5>
                  <p>
                    Blue Vacations is the one stop solution for all your travel
                    needs. <br />
                    Travel wherever you like at an affordable price
                  </p>
                </div>
              </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
          </div>
        </div>
      </div>
      <div className="choose-Us">
        <div className="container">
          <h5 className="heading-h5">Why Reason For Choose Us</h5>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 st-line">
              <div>
                <img src={Home4} alt="" />
                <h6>Package for Every Budget</h6>
                <p>Pocket-friendly or luxurious</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 st-line">
              <div>
                <img src={Home5} alt="" />
                <h6>No Hidden Costs</h6>
                <p>
                  Complete Cost Details Shared <br /> Before Your Visit
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 st-line">
              <div>
                <img src={Home6} alt="" />
                <h6>Detailed Itineraries</h6>
                <p>
                  Designed to give you the perfect <br /> Andaman experience
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div>
                <img src={Home7} alt="" />
                <h6>Trust Us</h6>
                <p>
                  Two decades of experience and <br /> thousands of happy guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-head">
        <div className="Vocation-travellers">
          <div className="container-fluid">
            <div className="container">
              <h5 className="heading-h5">Vocation For All Travellers</h5>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div>
                    <main>
                      <div class="card card-1">
                        <h2 class="project-title">Friends </h2>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div>
                    <main>
                      <div class="card card-2">
                        <h2 class="project-title">Honeymoon </h2>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div>
                    <main>
                      <div class="card card-3">
                        <h2 class="project-title">Solo </h2>
                      </div>
                    </main>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div>
                    <main>
                      <div class="card card-4">
                        <h2 class="project-title">Family </h2>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deals-discount">
          <div className="container-fluid">
            <h5 className="heading-h5 heading-2">DEALS & DISCOUNTS</h5>
            <p>
              These are the top destinations in Andaman and Nicobar Islands,
              preferred by locals and tourists alike
            </p>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={Home8} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>3N Portblair|2N Havelock</h5>
                    <p>Starting From INR 21,000</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Home9} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>3N Portblair|2N Havelock</h5>
                    <p>Starting From INR 21,000</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={Home10} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>3N Portblair|2N Havelock</h5>
                    <p>Starting From INR 21,000 </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Andaman-Best-packages">
          <div className="container">
            <h5>Andaman Best packages</h5>
            <p>
              <br />
              We welcome you to travel to the Amazing Destinations and have
              immense pleasure in taking <br /> you to the places wherever you
              like. You can travel to your destination at an
              <br /> affordable price and enjoy your trip.
            </p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="newsCard news-Slide-up">
                  <img src={Home11} />
                  <div class="newsCaption">
                    <h2 class="newsCaption-title">Title</h2>
                    <p class="newsCaption-content">
                      Blurb to get reader hooked.
                    </p>
                    <p>
                      <a class="newsCaption-link" href="#">
                        READ MORE
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="newsCard news-Slide-up">
                  <img src={Home11} />
                  <div class="newsCaption">
                    <h2 class="newsCaption-title">Title</h2>
                    <p class="newsCaption-content">
                      Blurb to get reader hooked.
                    </p>
                    <p>
                      <a class="newsCaption-link" href="#">
                        READ MORE
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="newsCard news-Slide-up">
                  <img src={Home11} />
                  <div class="newsCaption">
                    <h2 class="newsCaption-title">Title</h2>
                    <p class="newsCaption-content">
                      Blurb to get reader hooked.
                    </p>
                    <p>
                      <a class="newsCaption-link" href="#">
                        READ MORE
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
