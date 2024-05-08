import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return(
    <div className="px-10 pb-6 border-b">
      <TopNav />
      <BottomNav />
    </div>
  );
};

export default Navbar