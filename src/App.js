import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import Recomended from "./component/Recomended";
import SpecialOffer from "./component/SpecialOffer";

function App() {
  return (
    <div className="full-width-element">
      {/* Navbar */}
      <Navbar />
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        {/* Categories */}
        <Categories />
        {/* Recommended */}
        {/* SpecialOffers */}
        <Recomended />
      </div>{" "}
        <SpecialOffer/>
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
