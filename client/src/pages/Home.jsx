export const Home = () => {
  return (
    <>
      {/* 1st section */}
      <main>
        <section className="hero-section">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT company</p>
              <h1>Welcome to RJN7</h1>
              <p>
                Are you ready to take your business to next level with
                cutting-edge IT solutions? Look no further! at RJN7, we
                specialize in providing innovative IT solutions and services
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Contact Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/image/home.png"
                alt="A girl coding"
                height="500"
                width="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered companies</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well known developer</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className="hero-section">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/image/design.png"
              alt="A girl coding"
              height="500"
              width="500"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Contact Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
