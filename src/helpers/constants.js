const educationalDataEmpty = {
  school_name: "",
  school_location: "",
  education_title: "",
  education_start_date: "",
  education_completion_date: "",
};

const personalData = {
  full_name: "Julius Caesar",
  email: "iamjulius@gmail.com",
  phone_number: "555-78546",
  address: "California, USA",
};

const educationalData = {
  school_name: "Greatest Roman University",
  school_location: "Carthage, Rome",
  education_title: "Doctorate in Medicine",
  education_start_date: "2014",
  education_completion_date: "2018",
};

const professionalData = {
  company_name: "Multinational Incorporation",
  company_location: "Silicon Valley",
  job_position: "Managing Director",
  job_start_date: "2018",
  job_end_date: "2022",
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
      education_start_date: "2008-09-01",
      education_completion_date: "2012-05-15",
    },
    {
      id: 2,
      school_name: "Massachusetts Institute of Technology",
      school_location: "Cambridge, Massachusetts",
      education_title: "Master of Science in Artificial Intelligence",
      education_start_date: "2013-09-01",
      education_completion_date: "2015-06-15",
    },
  ],
  professionalInfo: [
    {
      id: 1,
      company_name: "Tech Innovations Inc.",
      company_location: "San Francisco, California",
      job_position: "Software Engineer",
      job_start_date: "2015-07-01",
      job_end_date: "2018-08-31",
      job_responsibilities:
        "Developed web applications and services using JavaScript, React, and NodeJS. Collaborated with design and product teams to implement new features.",
    },
    {
      id: 2,
      company_name: "AI Solutions LLC",
      company_location: "New York, New York",
      job_position: "Senior Machine Learning Engineer",
      job_start_date: "2018-09-01",
      job_end_date: "Present",
      job_responsibilities:
        "Led the development of machine learning models for predictive analytics. Mentored junior engineers and coordinated projects with cross-functional teams.",
    },
  ],
};

export { educationalData, professionalData, educationalDataEmpty, exampleData };
