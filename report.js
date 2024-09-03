function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Crop Disease Report", 10, 10);
    doc.text("Disease: Example Disease", 10, 20);
    doc.text("Remedy: Example Remedy", 10, 30);
    doc.text("Date: 2024-09-04", 10, 40);
    doc.save("Crop_Disease_Report.pdf");
  }
  
  function printReport() {
    window.print();
  }
  