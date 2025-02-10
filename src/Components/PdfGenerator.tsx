import { jsPDF } from "jspdf";

interface FormData {
  generalInfo: {
    firstname: string;
    lastname: string;
    age?: number;
    email?: string;
  };
  education: {
    schoolName: string;
    collegeName: string;
    yearOfPassout: number;
  };
  practicalExperience: {
    workExperience: number;
    companyName: string;
    dateFrom: string;
    dateTo: string;
    practicalExperience: string;
  };
}

const PdfGenerator = ({ data }: { data: FormData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("User Information Form", 10, 10);

    // General Info Section
    doc.text("General Info:", 10, 30);
    doc.text(`First Name: ${data.generalInfo.firstname}`, 10, 40);
    doc.text(`Last Name: ${data.generalInfo.lastname}`, 10, 50);
    doc.text(`Age: ${data.generalInfo.age || "N/A"}`, 10, 60);
    doc.text(`Email: ${data.generalInfo.email || "N/A"}`, 10, 70);

    // Education Section
    doc.text("Education Info:", 10, 90);
    doc.text(`School Name: ${data.education.schoolName}`, 10, 100);
    doc.text(`College Name: ${data.education.collegeName}`, 10, 110);
    doc.text(`Year of Passout: ${data.education.yearOfPassout}`, 10, 120);

    // Practical Experience Section
    doc.text("Practical Experience:", 10, 140);
    doc.text(
      `Work Experience: ${data.practicalExperience.workExperience} years`,
      10,
      150
    );
    doc.text(`Company Name: ${data.practicalExperience.companyName}`, 10, 160);
    doc.text(
      `Responsibilities: ${data.practicalExperience.practicalExperience}`,
      10,
      170
    );
    doc.text(`Date From: ${data.practicalExperience.dateFrom}`, 10, 180);
    doc.text(`Date To: ${data.practicalExperience.dateTo}`, 10, 190);

    doc.save("UserInformation.pdf");
  };

  return <button onClick={generatePDF}>Save as PDF</button>;
};

export default PdfGenerator;
