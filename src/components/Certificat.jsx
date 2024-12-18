import React, { useRef } from "react";
import "../components/certificat.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NAME = "Diango Boubacar";

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
    // Le nom de sorti du pdf
    pdf.save(`${NAME} certificat.pdf`);
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
          <h2 className="student-name"> {NAME} </h2>
          <p className="certificat-description">
            Pour avoir complété avec succès la formation
          </p>
          <h3 className="formation-title">Burreautique et Sage</h3>
          <p className="formation-duration">Formation de 3 mois - 72 heures</p>

          <div className="competences">
            <h4>Compétences acquises :</h4>
            <ul>
              <li>Sage Gestion Commerciale</li>
              <li>Sage Comptabilité</li>
              <li>Word</li>
              <li>Excel</li>
              <li>PowerPoint</li>
              {/* <li>Git, DevOps</li>
              <li>Notion</li>
              <li>Obsidian</li> */}
            </ul>
          </div>

          <div className="certificat-date">
            <p>Délivré le {new Date().toLocaleDateString()} à Bamako, Mali</p>
          </div>

          <div className="signatures">
            <div className="certificat-footer">
              <p className="certificat-id">Certificat N° : MC-2024-0002</p>
            </div>
            <div className="signature-dg">
              <p>Directeur de MaliCode</p>
            </div>
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
