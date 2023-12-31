type Posting = Readonly<{
  id: string;
  category: Category;
  title: string;
  location: string;
  pay: number;
  experience: Experience;
  description: string[];
  responsibilities: string[];
  benefits: string[];
  client: {
    name: string;
    image: string;
  };
  walletAddress: string;
  clientId?: string;
}>;

type Experience = "Beginner" | "Intermediate" | "Expert";
type Category =
  | "Accounting"
  | "Business & Consulting"
  | "Human Research"
  | "Marketing & Finance"
  | "Design & Development"
  | "Finance Management"
  | "Project Management"
  | "Customer Service"
  | "Healthcare"
  | "Education"
  | "Engineering";

export const POSTINGS: Posting[] = [
  {
    id: "1",
    category: "Design & Development",
    title: "Freelance Project Manager",
    location: "Austin, TX",
    pay: 100,
    experience: "Intermediate",
    description: [
      "We are seeking a skilled freelance project manager to oversee a software development project in Austin, TX. As the project manager, you will be responsible for ensuring the successful completion of the project within the given budget and timeline. Your strong project planning, budgeting, and team coordination skills will be crucial in driving the project forward.",
      "In this role, you will collaborate with cross-functional teams, including developers, designers, and stakeholders, to define project goals, allocate resources, and track progress. You will also be responsible for identifying and mitigating risks, resolving conflicts, and ensuring effective communication among team members.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Develop and maintain a detailed project plan, including tasks, timelines, and dependencies.",
      "Allocate resources and manage project budget to ensure efficient utilization of available resources.",
      "Coordinate and communicate with cross-functional teams to ensure alignment and timely completion of project milestones.",
    ],
    benefits: [
      "Flexible work schedule and remote work options.",
      "Opportunity to work with a talented and diverse team.",
      "Enhance your project management skills and gain valuable experience in software development.",
      "Competitive pay and potential for long-term collaboration.",
      "Contribute to the successful delivery of a cutting-edge software product.",
    ],
    client: {
      name: "Chanakya V",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Chanakya+V&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "2",
    category: "Customer Service",
    title: "Customer Support Representative",
    location: "Remote",
    pay: 500,
    experience: "Beginner",
    description: [
      "We are looking for an entry-level freelance customer support specialist to join our team. As a customer support representative, you will play a crucial role in ensuring customer satisfaction by promptly responding to inquiries, providing solutions, and maintaining a positive and helpful attitude.",
      "In this role, you will handle customer interactions through various channels, such as phone, email, and chat. You will need to effectively troubleshoot and resolve customer issues, escalate complex problems when necessary, and document customer interactions for future reference.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Respond to customer inquiries in a timely and professional manner.",
      "Provide accurate and helpful information to customers to resolve their issues.",
      "Maintain a high level of customer satisfaction by ensuring a positive customer experience.",
    ],
    benefits: [
      "Flexible work schedule and the ability to work remotely.",
      "Opportunity to develop customer service and problem-solving skills.",
      "Gain experience in a fast-paced and dynamic customer support environment.",
      "Competitive pay and potential for growth within the company.",
      "Contribute to the success of our customer support team and overall customer satisfaction.",
    ],
    client: {
      name: "Jaswin Anand",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Jaswin+Anand&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "3",
    category: "Finance Management",
    title: "Financial Analysis and Reporting",
    location: "Chicago, IL",
    pay: 600,
    experience: "Expert",
    description: [
      "We are seeking an experienced financial analyst to join our team in Chicago, IL. As a financial analyst, you will be responsible for conducting in-depth financial analysis, preparing reports, and providing valuable insights to support strategic decision-making.",
      "In this role, you will analyze financial data, identify trends, and develop financial models to forecast future performance. You will also be responsible for preparing financial reports, including balance sheets, income statements, and cash flow statements, and presenting findings to key stakeholders.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Conduct financial analysis and provide insights to support strategic decision-making.",
      "Prepare accurate and timely financial reports, including balance sheets, income statements, and cash flow statements.",
      "Develop and maintain financial models to forecast future performance and identify areas for improvement.",
    ],
    benefits: [
      "Competitive salary and comprehensive benefits package.",
      "Opportunity to work with a highly skilled and collaborative finance team.",
      "Enhance your financial analysis and reporting skills in a dynamic and fast-paced environment.",
      "Contribute to the financial success and growth of the organization.",
      "Opportunity for professional development and career advancement.",
    ],
    client: {
      name: "John Doe",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=John+Doe&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "4",
    category: "Healthcare",
    title: "Registered Nurse",
    location: "New York, NY",
    pay: 800,
    experience: "Intermediate",
    description: [
      "We are seeking an experienced Registered Nurse to join our healthcare team in New York, NY. As a Registered Nurse, you will be responsible for providing high-quality patient care, administering medications, and collaborating with the healthcare staff to ensure the well-being of our patients.",
      "In this role, you will work in a fast-paced healthcare environment, monitoring patient conditions, and providing compassionate care. Your nursing skills and commitment to patient care are essential in this role.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Administer medications and treatments to patients as prescribed.",
      "Assess and monitor patient conditions, documenting changes and vital signs.",
      "Collaborate with the healthcare team to develop and implement patient care plans.",
    ],
    benefits: [
      "Competitive salary and comprehensive healthcare benefits.",
      "Opportunity to work in a reputable healthcare facility.",
      "Enhance your nursing skills and make a difference in patient lives.",
      "Flexible work schedule and potential for career growth.",
      "Contribute to the health and well-being of patients in a supportive team environment.",
    ],
    client: {
      name: "Linda Rodriguez",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Linda&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "5",
    category: "Design & Development",
    title: "Network Security Analyst",
    location: "Dallas, TX",
    pay: 900,
    experience: "Expert",
    description: [
      "We are looking for an experienced Network Security Analyst to join our team in Dallas, TX. As a Network Security Analyst, you will be responsible for securing and monitoring our network infrastructure, identifying vulnerabilities, and implementing security measures to protect our data and systems.",
      "In this role, you will work on the front lines of cybersecurity, ensuring the confidentiality and integrity of our network. Your expertise in network security and threat detection will be invaluable.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Monitor network traffic for signs of security threats and intrusions.",
      "Conduct security assessments, vulnerability scans, and penetration testing.",
      "Implement and maintain security measures, firewalls, and intrusion detection systems.",
    ],
    benefits: [
      "Competitive salary and excellent benefits package.",
      "Work in a dynamic and challenging cybersecurity environment.",
      "Enhance your network security skills and work with cutting-edge technologies.",
      "Opportunity for career advancement and professional growth.",
      "Contribute to the security and protection of critical data and systems.",
    ],
    client: {
      name: "David Clarke",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=David&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "6",
    category: "Marketing & Finance",
    title: "Content Marketing Specialist",
    location: "San Diego, CA",
    pay: 700,
    experience: "Intermediate",
    description: [
      "We are seeking a talented Content Marketing Specialist to join our team in San Diego, CA. As a Content Marketing Specialist, you will be responsible for creating and promoting engaging content that resonates with our target audience, drives traffic, and supports our marketing goals.",
      "In this role, you will craft compelling content, develop content strategies, and measure performance. Your creativity and ability to connect with our audience will be central to our marketing success.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Create high-quality and engaging content, including blog posts, articles, and social media posts.",
      "Develop and execute content marketing strategies to drive traffic and engagement.",
      "Analyze content performance metrics and make data-driven improvements.",
    ],
    benefits: [
      "Competitive compensation and a creative work environment.",
      "Work in a collaborative team that values creativity and innovation.",
      "Enhance your content marketing skills and create meaningful impact.",
      "Flexible work arrangements and potential for career growth.",
      "Contribute to our marketing success and audience engagement.",
    ],
    client: {
      name: "Sarah Johnson",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Sarah+Johnson&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "7",
    category: "Education",
    title: "Elementary School Teacher",
    location: "Denver, CO",
    pay: 650,
    experience: "Beginner",
    description: [
      "We are looking for a passionate Elementary School Teacher to join our school in Denver, CO. As a teacher, you will be responsible for creating engaging lesson plans, fostering a positive learning environment, and inspiring young minds to grow academically and socially.",
      "In this role, you will be a vital part of shaping the future of your students. Your dedication to teaching and nurturing young learners is highly valued.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Plan and deliver age-appropriate and engaging lessons.",
      "Create a positive and inclusive classroom environment.",
      "Assess student progress and provide constructive feedback.",
    ],
    benefits: [
      "Competitive salary and opportunities for professional development.",
      "Work in a supportive and rewarding educational environment.",
      "Enhance your teaching skills and make a difference in students' lives.",
      "Contribute to the academic and personal growth of your students.",
      "Opportunity for career advancement in education.",
    ],
    client: {
      name: "Michael Anderson",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Michael+Anderson&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "8",
    category: "Engineering",
    title: "Civil Engineer",
    location: "Seattle, WA",
    pay: 850,
    experience: "Intermediate",
    description: [
      "We are seeking an experienced Civil Engineer to join our team in Seattle, WA. As a Civil Engineer, you will be responsible for designing, planning, and managing various civil engineering projects, including infrastructure and construction.",
      "In this role, your engineering expertise and project management skills will be essential in delivering successful projects that benefit the community.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Design and plan civil engineering projects, including roads, bridges, and utilities.",
      "Manage project budgets, schedules, and collaborate with multidisciplinary teams.",
      "Ensure projects comply with regulatory standards and environmental guidelines.",
    ],
    benefits: [
      "Competitive salary and comprehensive benefits package.",
      "Work with a collaborative and innovative engineering team.",
      "Enhance your civil engineering skills and work on impactful projects.",
      "Opportunity for professional development and career progression.",
      "Contribute to the development of essential infrastructure.",
    ],
    client: {
      name: "Daniel Wright",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Daniel+Wright&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "9",
    category: "Marketing & Finance",
    title: "Sales Account Executive",
    location: "Chicago, IL",
    pay: 750,
    experience: "Intermediate",
    description: [
      "We are looking for a skilled Sales Account Executive to join our team in Chicago, IL. As a Sales Account Executive, you will be responsible for building and managing client relationships, generating sales leads, and achieving revenue targets.",
      "In this role, your sales expertise, communication skills, and relationship-building abilities will be instrumental in our sales success.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Identify and target potential clients and sales opportunities.",
      "Manage client accounts, build relationships, and provide exceptional customer service.",
      "Meet and exceed sales targets through effective sales strategies and negotiations.",
    ],
    benefits: [
      "Competitive compensation and a dynamic sales environment.",
      "Work in a collaborative and supportive sales team.",
      "Enhance your sales and negotiation skills and earn commissions.",
      "Opportunity for career growth and professional development.",
      "Contribute to our sales success and client satisfaction.",
    ],
    client: {
      name: "Jennifer Evans",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Jennifer+Evans&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "10",
    category: "Design & Development",
    title: "Front-End Web Developer",
    location: "Remote",
    pay: 800,
    experience: "Intermediate",
    description: [
      "We are seeking a talented Front-End Web Developer to join our remote team. As a Front-End Web Developer, you will be responsible for creating and optimizing user interfaces, ensuring cross-browser compatibility, and collaborating with the development team to deliver exceptional web experiences.",
      "In this role, your web development skills and creative problem-solving abilities will be essential to our web projects.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Develop and optimize user interfaces for web applications and websites.",
      "Ensure cross-browser and cross-platform compatibility.",
      "Collaborate with back-end developers and designers to achieve project goals.",
    ],
    benefits: [
      "Competitive pay and flexible remote work options.",
      "Work in a creative and collaborative development team.",
      "Enhance your front-end development skills and work on diverse web projects.",
      "Opportunity for career advancement and professional growth.",
      "Contribute to the creation of outstanding web experiences.",
    ],
    client: {
      name: "Alex Turner",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Alex+Turner&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "11",
    category: "Healthcare",
    title: "Medical Laboratory Technician",
    location: "Miami, FL",
    pay: 700,
    experience: "Intermediate",
    description: [
      "We are looking for a dedicated Medical Laboratory Technician to join our healthcare facility in Miami, FL. As a Medical Laboratory Technician, you will be responsible for conducting various medical tests, analyzing results, and ensuring the accuracy of diagnostic reports.",
      "In this role, your attention to detail and knowledge of laboratory procedures will be crucial in delivering reliable medical information.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Perform medical tests, including blood tests, urinalysis, and cultures.",
      "Analyze test results, maintain records, and ensure the quality of laboratory data.",
      "Comply with safety and laboratory regulations and standards.",
    ],
    benefits: [
      "Competitive salary and opportunities for professional development.",
      "Work in a state-of-the-art medical laboratory facility.",
      "Enhance your laboratory and diagnostic skills in a healthcare setting.",
      "Opportunity for career advancement within the healthcare field.",
      "Contribute to the accurate diagnosis and treatment of patients.",
    ],
    client: {
      name: "Maria Martinez",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Maria+Martinez&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "12",
    category: "Marketing & Finance",
    title: "Digital Marketing Manager",
    location: "London, UK",
    pay: 950,
    experience: "Expert",
    description: [
      "We are seeking an experienced Digital Marketing Manager to join our team in London, UK. As a Digital Marketing Manager, you will be responsible for developing and implementing digital marketing strategies, managing campaigns, and analyzing performance to maximize online visibility and engagement.",
      "In this role, your digital marketing expertise and data-driven approach will be critical in our online marketing success.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Develop and execute digital marketing strategies across various channels.",
      "Manage digital marketing campaigns, including SEO, SEM, and social media advertising.",
      "Analyze marketing data, track KPIs, and make data-driven improvements.",
    ],
    benefits: [
      "Competitive compensation and opportunities for career advancement.",
      "Work in a dynamic and innovative digital marketing environment.",
      "Enhance your digital marketing skills and work on diverse campaigns.",
      "Flexible work arrangements and potential for professional growth.",
      "Contribute to the online success and visibility of our brand.",
    ],
    client: {
      name: "Oliver Parker",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Oliver+Parker&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
  {
    id: "13",
    category: "Business & Consulting",
    title: "Management Consultant",
    location: "Washington, D.C.",
    pay: 1100,
    experience: "Expert",
    description: [
      "We are looking for an experienced Management Consultant to join our team in Washington, D.C. As a Management Consultant, you will be responsible for providing strategic advice, conducting analysis, and offering solutions to clients to improve their business performance.",
      "In this role, your consulting expertise and problem-solving abilities will be central to our client's success.",
    ],
    walletAddress: "0x69e0B652349429866C734aF8d96853F491DA2632",
    responsibilities: [
      "Analyze client business operations, identify areas for improvement, and provide recommendations.",
      "Develop and implement strategies to enhance business performance and efficiency.",
      "Collaborate with clients and team members to achieve desired outcomes.",
    ],
    benefits: [
      "Competitive salary and opportunities for professional development.",
      "Work in a dynamic and collaborative consulting team.",
      "Enhance your consulting skills and make a meaningful impact on clients.",
      "Opportunity for career advancement within the consulting field.",
      "Contribute to the success and growth of client businesses.",
    ],
    client: {
      name: "Sophie Bennett",
      image:
        "https://api.dicebear.com/7.x/open-peeps/svg?seed=Sophie+Bennett&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,lovingGrin1,lovingGrin2,old,smile,smileBig,smileLOL",
    },
  },
];
