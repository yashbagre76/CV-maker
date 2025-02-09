import { useState } from "react";
  interface generalInfo {
    firstname: string;
    Lastname: string;
    age: string;
    email : string;
  }
  interface education {
    schoolName: string;
    collageName: string;
    yearOfPassout: string;
  }
  interface praticleExperience {
    workExperinece : string ;
    companyName : string ;
    dateFrom : string;
    dateTo : string ;
    praticleExperinece : string ;
  }

const userInfo: React.FC = () => {
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
    name: "",
    email: "",
    phone: "",
  });
    
    const [education, setEducation] = useState<education>({
      schoolName: "",
      collageName: "",
      yearOfPassout: "",
    })
    const [praticalExprience, setPraticalExperience] = useState<praticleExperience> (
      {
        workExperinece : "" ,
        companyName : "",
        dateFrom : "",
        dateTo : "",
        praticleExperinece : "",
      }
      const [isEditing ,setEditing] = useState(true);
    )
);
  
  return (

  );
};
export default userInfo;
