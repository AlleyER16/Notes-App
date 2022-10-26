import { useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    return <WrappedComponent {...props} router={{ navigate }} />;
  };
};

export default withRouter;
