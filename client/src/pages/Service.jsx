import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <section className="services">
        <div className="container">
          <h1 className="main-heading border_b">Services</h1>
        </div>
        <div className="container grid grid-threep-cols">
          {services.map((curElm, ind) => {
            const {price,provider,description,service,image}=curElm;
            return (
              <div className="card" key={ind}>
                <div className="card-image">
                  <img
                    src={image}
                    alt="Girl presenting topics"
                    height="250"
                    width="250"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
