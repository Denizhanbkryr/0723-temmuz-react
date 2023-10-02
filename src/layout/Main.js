import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";
import SideBar from "./SideBar";

const Main = ({}) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="page-body">
        <SideBar />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
