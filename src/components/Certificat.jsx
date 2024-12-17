import React, { useRef } from "react";
import "../components/certificat.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Certificat = () => {
  const certificatRef = useRef(); // Référence pour cibler le certificat

  const downloadPDF = async () => {
    const element = certificatRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");

    // Dimensions pour remplir correctement le PDF
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("certificat.pdf");
  };

  return (
    <div className="certificat-container">
      <div className="certificat" ref={certificatRef}>
        <div className="certificat-header">
          <img
            src="/Logo black.png"
            alt="MaliCode Logo"
            className="certificat-logo"
          />
          <h1>CERTIFICAT DE FORMATION</h1>
        </div>

        <div className="certificat-content">
          <p className="certificat-text">Ce certificat est décerné à</p>
          <h2 className="student-name">Amadou Traoré</h2>
          <p className="certificat-description">
            Pour avoir complété avec succès la formation
          </p>
          <h3 className="formation-title">Développement Web Full Stack</h3>
          <p className="formation-duration">Formation de 6 mois - 600 heures</p>

          <div className="competences">
            <h4>Compétences acquises :</h4>
            <ul>
              <li>HTML5, CSS3, JavaScript</li>
              <li>React.js, Node.js</li>
              <li>MongoDB, MySQL</li>
              <li>Git, DevOps</li>
            </ul>
          </div>

          <div className="certificat-date">
            <p>Délivré le 15 Mars 2024 à Bamako, Mali</p>
          </div>

          <div className="signatures">
            <div className="signature">
              <p>Directeur de MaliCode</p>
            </div>
          </div>

          <div className="certificat-footer">
            <p className="certificat-id">Certificat N° : MC-2024-0123</p>
          </div>
        </div>
      </div>

      {/* Bouton de téléchargement */}
      <div className="download-button">
        <button onClick={downloadPDF}>Télécharger en PDF</button>
      </div>
    </div>
  );
};

export default Certificat;
