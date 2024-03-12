import {useAuth} from "../store/auth";

export const About = () => {

  const {user}=useAuth();
  return (
    <>
      {/* 1st section*/}
      <main>
        <section className="hero-section">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome,{user ? `${user.username} to our website` : "to our website"}</p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to date with latest industry
                trends.
              </p>
              <p>
                Customization: We understand every business is unique.That's why
                we create solutions that are that are tailored to your specific
                needs & goals.
              </p>
              <p>
                Cutomer-centric approach: We prioritize your satisfaction and
                provide top-notch support ot address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Expertise: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable &
                available 24/7.
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
                src="/image/about.png"
                alt="A girl showing content"
                height="600"
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
    </>
  );
};
