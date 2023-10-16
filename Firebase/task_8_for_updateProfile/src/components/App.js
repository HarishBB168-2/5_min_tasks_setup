import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { RouterProvider } from "react-router-dom";
import router from "../routing/routes";

const App = () => {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <RouterProvider router={router} />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default App;
