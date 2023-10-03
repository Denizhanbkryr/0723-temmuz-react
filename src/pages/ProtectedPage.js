import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedPage = ({ PageComponent, fromURL }) => {
  const history = useHistory();

  const checkUserLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent />;
    } else {
      toast.warn("Bu sayfaya devam edebilmek için login olmalısın!.");
      setTimeout(() => {
        history.push({
          pathname: "/login-custom-hook",
          state: { referrer: fromURL },
        });
          
      }, 3000);

      return (
        <div>
          Bu sayfaya erişim hakkınız yok. Login sayfasına
          yönlendirileceksiniz!...
        </div>
        // <Redirect
        //   to={{
        //     pathname: "/login-custom-hook",
        //     state: { referrer: fromURL },
        //   }}
        // />
      );
    }
  };

  return checkUserLoggedIn();
};

export default ProtectedPage;
