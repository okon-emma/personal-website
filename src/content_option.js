import okonImage from "../src/assets/images/okon-emma.jpg";

const logotext = "OKON";
const meta = {
    title: "Emmanuel Okon",
    description: "I’m Emmanuel Okon, a technology consultant specializing in Cloud Security, DevSecOps, and AI.",
};

const introdata = {
    title: "I’m Emmanuel Okon",
    animated: {
        first: "I provide advisory services",
        second: "I design secure solutions",
        third: "I build resilient systems",
    },
    description: "Technology Professional with expertise in Cloud Security, DevSecOps, Machine Learning, and more.",
    your_img_url: okonImage, // Local image reference
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Emmanuel Okon is a technology professional with deep expertise in cloud security, DevSecOps, application development, and artificial intelligence. He has been recognized by Microsoft Nigeria and Facebook for his innovations in AI and cybersecurity. Emmanuel has worked with top-tier financial institutions and telecommunications companies, providing expert solutions in cybersecurity and cloud infrastructure. \
    \nWith a passion for empowering young professionals in technology, Emmanuel shares his journey through articles and training videos on CloudSec Network, a global community of cloud security professionals.",
};


const skills = [
    {
        name: "Cloud Security",
        value: 90,
    },
    {
        name: "DevSecOps",
        value: 95,
    },
    {
        name: "Python",
        value: 92,
    },
    {
        name: "Machine Learning",
        value: 84,
    },
    {
        name: "Infrastructure as Code (IaC)",
        value: 88,
    },
    {
        name: "Application Development",
        value: 87,
    },
];

const services = [
    {
        title: "Cloud Security Consulting",
        description: "Providing expert guidance in securing cloud infrastructures, from architecture design to implementation, ensuring robust protection against cyber threats. Emmanuel specializes in building secure cloud environments that meet compliance with industry standards such as GDPR, ISO 27001, and PCI DSS, while helping businesses mitigate risk and adopt best practices.",
    },
    {
        title: "DevSecOps Implementation",
        description: "Helping organizations seamlessly integrate security practices into their CI/CD pipelines and software development lifecycles. With a focus on automation, vulnerability management, and secure coding practices, Emmanuel assists teams in adopting a DevSecOps culture that ensures security is embedded at every stage of the development process.",
    },
    {
        title: "AI and Machine Learning Solutions",
        description: "Developing and deploying AI-powered solutions that optimize business processes, enhance decision-making, and drive innovation. Emmanuel leverages machine learning algorithms and data science to deliver predictive analytics, automation, and intelligent systems that solve complex challenges across various industries.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a",
        description: "KodeLens: Machine-Learning Source-Code Review Tool",
        link: "https://github.com/cloudsecnetwork",
    },
    {
        img: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
        description: "OWASpoof: Customizable Phishing Simulation Tool",
        link: "https://github.com/cloudsecnetwork",
    },
    {
        img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
        description: "ThreatVision: Open-Source Threat Hunting Tool",
        link: "https://github.com/cloudsecnetwork",
    },
];

const contactConfig = {
    YOUR_EMAIL: "okon@cloudsecnetwork.com",
    YOUR_FONE: "+1 214 329 9755",
    description: "Feel free to reach out for consulting opportunities, training sessions, or collaborations in cloud and security engineering.",
    YOUR_SERVICE_ID: "service_okon",
    YOUR_TEMPLATE_ID: "template_okon",
    YOUR_USER_ID: "MfKKS5P1masWdYCZD",
};

const socialprofils = {
    github: "https://github.com/cloudsecnetwork",
    linkedin: "https://www.linkedin.com/in/okon-emma",
    twitter: "https://twitter.com/its_okon",
};

export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
