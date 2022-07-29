import "./loading.css";
import loadingIcon from "./loadingIcon.svg";

const LoadingPage = (props) => {
  const loadingprops = props.loadingprops;
  return (
    <div className="loadingpage">
      {Object.keys(loadingprops).map((item) => {
        return (
          <div className="loadingbar" key={loadingprops[item]["name"]}>
            <div>{loadingprops[item]["name"]}</div>
            <div>
              {loadingprops[item]["status"] === "pending" ? (
                <div className="pending">
                  <div className="loadingIcon">
                    <img src={loadingIcon} height="50" width="50" />
                  </div>
                </div>
              ) : (
                <div className="finished">Done!</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingPage;
