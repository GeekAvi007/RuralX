document.addEventListener("DOMContentLoaded", function() {
    const getStartedButton = document.querySelectorAll('.get-started-btn');
    getStartedButton.forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "dashboard/index.html";
        });
    });
});
document.getElementById("generate-report").addEventListener("click", function() {
    const cropDisease = "Powdery Mildew";
    const remedyDate = "2024-09-05";
    const remedy = "Apply fungicide and ensure proper air circulation.";
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("Crop Disease Report", 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Disease: ${cropDisease}`, 20, 40);
    doc.text(`Remedy Date: ${remedyDate}`, 20, 50);
    doc.text(`Suggested Remedy: ${remedy}`, 20, 60);
    const printButton = document.createElement("button");
    printButton.innerText = "Print Report";
    printButton.onclick = function() {
        doc.autoPrint();
        window.open(doc.output('bloburl'), '_blank');
    };

    const downloadButton = document.createElement("button");
    downloadButton.innerText = "Download Report";
    downloadButton.onclick = function() {
        doc.save("Crop_Disease_Report.pdf");
    };
    const iframe = document.createElement("iframe");
    iframe.src = doc.output('datauristring');
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    const container = document.createElement("div");
    container.appendChild(printButton);
    container.appendChild(downloadButton);
    container.appendChild(iframe);
    document.body.appendChild(container);
});
