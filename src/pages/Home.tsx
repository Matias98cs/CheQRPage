import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.page}>
      <h1>Home</h1>
      <p>Bienvenido a la página principal.</p>
      <Link to="/privacy" style={styles.link}>
        Ver Política de Privacidad
      </Link>
    </div>
  );
};

export default Home;

const styles = {
  page: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  link: {
    textDecoration: "none",
    color: "#0070f3",
    fontSize: "16px",
  },
};
