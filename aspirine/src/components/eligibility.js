import React from "react";
import { useState } from "react";
import Headings from "./headings";
import Area from "./textArea";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Eligible = () => {
  const [idd, setId] = useState("Basic Requirements");

  const data = [
    {
      id: "Basic Requirements",
      rules: {
        1: "Age should be between 18 and 60 years.You should not be suffering, or had history of cancer.You should not be suffering from any blood clotting disorder, such as haemophilia.",
        2: "Your weight should be 45kg or above.Minimum haemoglobin count should be 12.5gm.",
        3: "Pulse rate should be between 50 and 100 per minute, without any irregularities.",
        4: "Blood pressure should be, diastolic 50 to 100 mm Hg and Systolic 100 to 180 mm Hg.",
        5: "Body temperature should be normal and oral temperature should not exceed 37.5 degree Celsius.",
        6: "Should not have undergone any treatment for rabies or received Hepatitis B immune globulin within the past one year.",
        7: "Should not have donated blood within last three months.Should not have been treated for malaria within last three months.",
        8: "Should not have undergone any immunization within the past one month.Should not have undergone any dental work or taken aspirin within last the 72 hours.",
        9: "Should not have consumed alcohol within the last 9 hours.",
        10: "If you have any chronic disease that is not mentioned here, you may register, but please inform the patient or the doctor or the hospital staff before you donate blood",
      },
    },
    {
      id: "Height&Weight",
      rules: {
        1: "You must weigh at least 110 lbs to be eligible for blood donation for your own safety.",
        2: "Students who donate at high school drives and donors 18 years of age or younger must also meet additional height and weight requirements for whole blood donation (applies to girls shorter than 5'6 and boys shorter than 5')",
      },
    },
    {
      id: "Acupuncture",
      rules: {
        1: "Donors who have undergone acupuncture treatments are acceptable",
      },
    },
    {
      id: "Age",
      rules: {
        1: "You must be at least 21 years old to donate to the general blood supply, or 18  years old with parental/guardian consent, if allowed by state law.",
        2: " There is no upper age limit for blood donation as long as you are well with no restrictions or limitations to your activities.",
      },
    },
    {
      id: "Allergy",
      rules: {
        1: "Acceptable as long as you feel well, have no fever, and have no problems breathing through your mouth.",
      },
    },
    {
      id: "Antibiotics",
      rules: {
        1: "A donor with an acute infection should not donate. The reason for antibiotic use must be evaluated to determine if the donor has a bacterial infection that could be transmissible by blood.",
      },
    },
    {
      id: "Asthma",
      rules: {
        1: "Acceptable as long as you do not have any limitations on daily activities and are not having difficulty breathing at the time of donation and you otherwise feel well.",
        2: "Medications for asthma do not disqualify you from donating.",
      },
    },
    {
      id: "Bith Control",
      rules: {
        1: "Women on oral contraceptives or using other forms of birth control are eligible to donate",
      },
    },
    {
      id: "Bleeding Condition",
      rules: {
        1: "If you have a history of bleeding problems, you will be asked additional questions.",
        2: " If your blood does not clot normally, you should not donate since you may have excessive bleeding where the needle was placed.",
      },
    },
    {
      id: "High Blood Pressure",
      rules: {
        1: "Acceptable as long as your blood pressure is below 180 systolic (first number) and below 100 diastolic (second number) at the time of donation.",
        2: " Medications for high blood pressure do not disqualify you from donating",
      },
    },
    {
      id: "Low Blood Pressure",
      rules: {
        1: "Acceptable as long as you feel well when you come to donate, and your blood pressure is at least 90/50 (systolic/diastolic).",
      },
    },
    {
      id: "Blood Transfusion",
      rules: { 1: "You should not donate." },
    },
    {
      id: "Cancer",
      rules: {
        1: " If you had leukemia or lymphoma, including Hodgkin’s Disease and other cancers of the blood, you are not eligible to donate.",
        2: " Other types of cancer are acceptable if the cancer has been treated successfully and it has been more than 12 months since treatment was completed and there has been no cancer recurrence in this time.",
      },
    },
    {
      id: "Chronic Illness",
      rules: {
        1: "Most chronic illnesses are acceptable as long as you feel well, the condition is under control, and you meet all other eligibility requirements.",
      },
    },
    {
      id: "Cold & Flu",
      rules: {
        1: "Wait if you have a fever or a productive cough (bringing up phlegm). Wait if you do not feel well on the day of donation. Wait until you have completed antibiotic treatment for sinus, throat or lung infection.",
      },
    },
    {
      id: "Diabetes",
      rules: {
        1: "Diabetics who are well controlled on insulin or oral medications are eligible to donate.",
      },
    },
    {
      id: "Donation Intervals",
      rules: {
        1: "Wait at least 8 weeks between whole blood (standard) donations .Wait at least 7 days between platelet (pheresis) donations.Wait at least 16 weeks between Power Red (automated) donations.",
      },
    },
    {
      id: "Heart Disease",
      rules: {
        1: "In general, acceptable as long as you have been medically evaluated and treated, have no current (within the last 6 months) heart related symptoms such as chest pain and have no limitations or restrictions on your normal daily activities.",
        2: "Wait at least 6 months following an episode of angina.Wait at least 6 months following a heart attack.Wait at least 6 months after bypass surgery or angioplasty.",
        3: "If you have a pacemaker, you may donate as long as your pulse is between 50 and 100 beats per minute and you meet the other heart disease criteria. ",
        4: "You should discuss your particular situation with your personal healthcare provider and the health historian at the time of donation.",
      },
    },
    {
      id: "Hemoglobin & Blood Count",
      rules: {
        1: "In order to donate blood, a woman must have a hemoglobin level of at least 12.5 g/dL, and a man must have a hemoglobin level of at least 13.0 g/dL.",
        2: " For all donors, the hemoglobin level can be no greater than 20 g/dL. Separate requirements for hemoglobin level apply for Power Red.",
      },
    },
    {
      id: "Heart Value Disorder",
      rules: {
        1: "Acceptable if you have a heart murmur as long as you have been medically evaluated and treated and have not had symptoms in the last 6 months and have no restrictions on your normal daily activities.",
      },
    },
    {
      id: "Hepatitis/Jaundice",
      rules: {
        1: "If you ever tested positive for hepatitis B or hepatitis C, at any age, you are not eligible to donate, even if you were never sick or jaundiced from the infection.",
        2: "If you ever tested positive for hepatitis B or hepatitis C, at any age, you are not eligible to donate, even if you were never sick or jaundiced from the infection.",
      },
    },
    {
      id: "HIV & AIDS",
      rules: {
        1: "You should not give blood if you have AIDS or have ever had a positive HIV test, or if you have done something that puts you at risk for becoming infected with HIV.",
      },
    },
    {
      id: "Hormone Replacement Therapy",
      rules: {
        1: "Women on hormone replacement therapy for menopausal symptoms and prevention of osteoporosis are eligible to donate.",
      },
    },
    {
      id: "Immunization/Vaccination",
      rules: {
        1: "Acceptable if you were vaccinated for influenza, pneumonia, tetanus or meningitis, providing you are symptom-free and fever-free. Includes the Tdap vaccine.",
        2: " Acceptable if you received an HPV Vaccine.",
      },
    },
    {
      id: "Infections",
      rules: {
        1: "If you have a fever or an active infection, wait until the infection has resolved completely before donating blood.",
        2: "Wait until finished taking oral antibiotics for an infection (bacterial or viral). Wait 10 days after the last antibiotic injection for an infection.",
        3: "Those who have had infections with Chagas Disease or Leishmaniasis are not eligible to donate.",
      },
    },
    {
      id: "Insulin",
      rules: {
        1: "Donors with diabetes who take any kind if insulin are eligible to donate as long as their diabetes is well controlled.",
      },
    },
    {
      id: "Intravenous Drug Use",
      rules: {
        1: "Wait 3 months after using IV drugs that were not prescribed by a physician. This requirement is related to concerns about hepatitis and HIV.",
      },
    },
    {
      id: "Organ/Tissue Transplants",
      rules: {
        1: "Wait 3 months after receiving any type of organ transplant from another person. If you ever received a dura mater (brain covering) transplant, you are not eligible to donate. This requirement is related to concerns about the brain disease.",
      },
    },
    {
      id: "PULSE(High/Low)",
      rules: {
        1: "Acceptable as long as your pulse is no more than 100 and no less than 50.",
        2: " A pulse that is regular and less than 50 will require evaluation by the regional American Red Cross physician.",
      },
    },
    {
      id: "Tatto",
      rules: {
        1: "Wait 3 months after a tattoo if the tattoo was applied in a state that does not regulate tattoo facilities. ",
      },
    },
    {
      id: "Tuberculosis",
      rules: {
        1: "If you have active tuberculosis or are being treated for active tuberculosis you should not donate.",
        2: " Acceptable if you have a positive skin test or blood test, but no active tuberculosis and are NOT taking antibiotics.",
        3: "If you are receiving antibiotics for a positive TB skin test or blood test only or if you are being treated for a tuberculosis infection, wait until treatment is successfully completed before donating.",
      },
    },
  ];

  const updateIdd = (value) => {
    setId(value);
  };

  return (
    <>
      <div className="eligibleContainer">
        <div className="heading">
          <Headings heading="Eligibility Criteria For Blood Donation" />
        </div>
        <div className="eC-grid">
          <section className="listContainer">
            <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical contained primary button group"
              variant="text"
            >
              {idd === "Basic Requirements" ? null : (
                <Button onClick={() => updateIdd("Basic Requirements")}>
                  Basic Requirements
                </Button>
              )}
              <Button
                value="Height&Weight"
                onClick={() => updateIdd("Height&Weight")}
              >
                Height & Weight
              </Button>
              <Button
                value="Acupuncture"
                onClick={(e) => updateIdd("Acupuncture")}
              >
                Acupuncture
              </Button>
              <Button value="Age" onClick={(e) => updateIdd("Age")}>
                Age
              </Button>
              <Button value="Allergy" onClick={(e) => updateIdd("Allergy")}>
                Allergy
              </Button>
              <Button
                value="Antibiotics"
                onClick={(e) => updateIdd("Antibiotics")}
              >
                Antibiotics
              </Button>
              <Button value="Asthma" onClick={(e) => updateIdd("Asthma")}>
                Asthma
              </Button>
              <Button
                value="Bleeding Condition"
                onClick={(e) => updateIdd("Bleeding Condition")}
              >
                Bleeding Condition
              </Button>
              <Button
                value="High Blood Pressure"
                onClick={(e) => updateIdd("High Blood Pressure")}
              >
                High Blood Pressure
              </Button>
              <Button
                value="Low Blood Pressure"
                onClick={(e) => updateIdd("Low Blood Pressure")}
              >
                Low Blood Pressure
              </Button>
              <Button
                value="Blood Transfusion"
                onClick={(e) => updateIdd("Blood Transfusion")}
              >
                Blood Transfusion
              </Button>
              <Button value="Cancer" onClick={(e) => updateIdd("Cancer")}>
                Cancer
              </Button>
              <Button
                value="Chronic illness"
                onClick={(e) => updateIdd("Chronic Illness")}
              >
                Chronic illnessess
              </Button>
              <Button
                value="Cold & Flu"
                onClick={(e) => updateIdd("Cold & Flu")}
              >
                Cold & Flu
              </Button>
              <Button value="Diabetes" onClick={(e) => updateIdd("Diabetes")}>
                Diabetes
              </Button>
              <Button
                value="Donation Intervals"
                onClick={(e) => updateIdd("Donation Intervals")}
              >
                Donation Intervals
              </Button>
              <Button
                value="Heart Disease"
                onClick={(e) => updateIdd("Heart Disease")}
              >
                Heart Disease
              </Button>
              <Button
                value="Hemoglobin & Blood Count"
                onClick={(e) => updateIdd("Hemoglobin & Blood Count")}
              >
                {" "}
                Hemoglobin & Blood Count{" "}
              </Button>
              <Button
                value="Heart Value Disorder"
                onClick={(e) => updateIdd("Heart Value Disorder")}
              >
                Heart Value Disorder
              </Button>
              <Button
                value="Hepatitis/Jaundice"
                onClick={(e) => updateIdd("Hepatitis/Jaundice")}
              >
                Hepatitis, Jaundice
              </Button>
              <Button
                value="HIV & AIDS"
                onClick={(e) => updateIdd("HIV & AIDS")}
              >
                HIV & AIDS
              </Button>
              <Button
                value="Hormone Replacement Therapy"
                onClick={(e) => updateIdd("Hormone Replacement Therapy")}
              >
                Hormone Replacement Therapy
              </Button>
              <Button
                value="Immunization/Vaccination"
                onClick={(e) => updateIdd("Immunization/Vaccination")}
              >
                Immunization/Vaccination
              </Button>
              <Button
                value="Infections"
                onClick={(e) => updateIdd("Infections")}
              >
                Infections
              </Button>
              <Button value="Insulin" onClick={(e) => updateIdd("Insulin")}>
                Insulin
              </Button>
              <Button
                value="Intravenous Drug Use"
                onClick={(e) => updateIdd("Intravenous Drug Use")}
              >
                Intravenous Drug Use
              </Button>
              <Button
                value="Organ/Tissue Transplants"
                onClick={(e) => updateIdd("Organ/Tissue Transplants")}
              >
                Organ/Tissue Transplants
              </Button>
              <Button
                value="Pulse(High/Low)"
                onClick={(e) => updateIdd("PULSE(High/Low)")}
              >
                Pulse(High/Low)
              </Button>
              <Button value="Tatto" onClick={(e) => updateIdd("Tatto")}>
                Tatto
              </Button>
              <Button
                value="Tuberculosis"
                onClick={(e) => updateIdd("Tuberculosis")}
              >
                Tuberculosis
              </Button>
            </ButtonGroup>
          </section>
          <section className="texts">
            {data.map((para, index) => {
              if (para.id === idd) {
                return <Area key={index} data={para} />;
              }
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Eligible;
