import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div>
          <h1 className="hero-heading">Let us find your</h1>
          <h1 className="hero-heading hero-heading-special">Forever Food</h1>
        </div>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam veniam voluptas dolorem nam ratione eveniet asperiores minima alias laudantium?
        </p>
        <div className="hero-buttons">
          <button id="search-now">Search now</button>
          <button id="know-more">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
