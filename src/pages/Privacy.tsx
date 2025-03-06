import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div style={styles.page}>
      <h1>Política de Privacidad</h1>
      <p>
        Esta es la política de privacidad de nuestra aplicación. Aquí explicamos
        cómo se recogen, usan y protegen tus datos.
      </p>
      <p>
        <strong>1. Recopilación de datos:</strong> Recopilamos información
        necesaria para el correcto funcionamiento de la app, como permisos para
        acceder a la cámara.
      </p>
      <p>
        <strong>2. Uso de los datos:</strong> La información recopilada se
        utiliza para permitir el escaneo y procesamiento de códigos QR, y para
        mejorar la experiencia del usuario.
      </p>
      <p>
        <strong>3. Compartir datos:</strong> No compartimos tus datos con
        terceros sin tu consentimiento, salvo que sea necesario para cumplir con
        obligaciones legales.
      </p>
      <p>
        <strong>4. Seguridad:</strong> Implementamos medidas de seguridad para
        proteger tu información.
      </p>
      <Link to="/" style={styles.link}>
        Volver a Home
      </Link>
    </div>
  );
};

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
