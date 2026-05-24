import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  city: string;
  country: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  city: "",
  country: "",
};

export function MultiStepWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);

  const isFirstStep = step === 0;
  const isLastStep = step === 2;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (!isLastStep) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting form:", formData);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Multi-step Wizard</h2>

      <p>Step {step + 1} of 3</p>

      {step === 0 && (
        <div>
          <h3>User Info</h3>

          <input
            placeholder="Name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>
      )}

      {step === 1 && (
        <div>
          <h3>Address</h3>

          <input
            placeholder="City"
            value={formData.city}
            onChange={(event) => updateField("city", event.target.value)}
          />

          <input
            placeholder="Country"
            value={formData.country}
            onChange={(event) => updateField("country", event.target.value)}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Review</h3>

          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>City: {formData.city}</p>
          <p>Country: {formData.country}</p>
        </div>
      )}

      <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
        {!isFirstStep && <button onClick={handleBack}>Back</button>}

        {!isLastStep && <button onClick={handleNext}>Next</button>}

        {isLastStep && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}
