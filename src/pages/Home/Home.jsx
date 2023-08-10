import Header from "../Home/Header/Header";
import NewCollection from "../Home/NewCollection/NewCollection";
import Promote from "../Home/Promote/Promote";
import Band from "../Home/Band/Band";
const Home = ({setProductId}) => {
  return (
    <div>
      <Header />
      <NewCollection setProductId={setProductId}/>
      <Promote />
      <Band />
    </div>
  );
};

export default Home;
