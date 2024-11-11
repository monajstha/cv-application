const educationalDataEmpty = {
  school_name: "",
  school_location: "",
  education_title: "",
  education_start_date: "",
  education_completion_date: "",
};

const professionalDataEmpty = {
  company_name: "",
  company_location: "",
  job_position: "",
  job_start_date: "",
  job_end_date: "",
  job_responsibilities: "",
};

const exampleData = {
  personalInfo: {
    full_name: "John Doe",
    email: "johndoe@example.com",
    phone_number: "+1 123-456-7890",
    address: "1234 Elm Street, Springfield, USA",
  },
  educationalInfo: [
    {
      id: 1,
      school_name: "Harvard University",
      school_location: "Cambridge, Massachusetts",
      education_title: "Bachelor of Science in Computer Science",
      education_start_date: "2008",
      education_completion_date: "2012",
    },
    {
      id: 2,
      school_name: "Massachusetts Institute of Technology",
      school_location: "Cambridge, Massachusetts",
      education_title: "Master of Science in Artificial Intelligence",
      education_start_date: "2013",
      education_completion_date: "2015",
    },
  ],
  professionalInfo: [
    {
      id: 1,
      company_name: "Tech Innovations Inc.",
      company_location: "San Francisco, California",
      job_position: "Software Engineer",
      job_start_date: "2015",
      job_end_date: "2018",
      job_responsibilities:
        "Developed web applications and services using JavaScript, React, and NodeJS. Collaborated with design and product teams to implement new features.",
    },
    {
      id: 2,
      company_name: "AI Solutions LLC",
      company_location: "New York, New York",
      job_position: "Senior Machine Learning Engineer",
      job_start_date: "2018",
      job_end_date: "Present",
      job_responsibilities:
        "Led the development of machine learning models for predictive analytics. Mentored junior engineers and coordinated projects with cross-functional teams.",
    },
  ],
};

export { professionalDataEmpty, educationalDataEmpty, exampleData };
