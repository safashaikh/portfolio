/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Safa Shaikh",
  title: "Hi all, I'm Safa",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience building Python applications specializing in Machine Learning and Artificial Intelligence utilizing frameworks and libraries such as Tensorflow, Pytorch, Keras, SciKit Learn, and HuggingFace."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/safashaikh",
  linkedin: "https://www.linkedin.com/in/safa-shaikh-4046a3b3/",
  gmail: "safa.shaikh97@gmail.com",
  medium: "https://medium.com/@safashaikh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Jack of all trades with a focus on Machine Learning and Artificial Intelligence",
  skills: [
    emoji(
      "⚡ Develop robust backend applications and CLIs"
    ),
    emoji("⚡ Integrate open source Machine Learning models and LLMs with custom server applications"),
    emoji(
      "⚡ Explore latest developments in RAG (Retrieval Augmented Generation) and custom model finetuning"
    ),
    emoji(
      "⚡ MLOps integration of ML models on cloud based services"
    ),
    emoji(
      "⚡ Translate academic research into code"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "RedHat Openshift",
      fontAwesomeClassname: "fab fa-redhat"
    },
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"),
      subHeader: "Master of Science in Computer Science (Machine Learning)",
      duration: "June 2020 - May 2022",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Artificial Intelligence",
        "Applied Machine Learning",
        "Machine Learning with Applications in Finance",
        "Algorithms for Data Science",
        "Practical Deep Learning and System Performance",
        "Databases",
        "Cloud Computing",
        "User Interface Design"
      ]
    },
    {
      schoolName: "Rutgers University",
      logo: require("./assets/images/rutgersLogo.png"),
      subHeader: "Bachelor of Science in Electrical and Computer Engineering, Computer Science",
      duration: "September 2015 - May 2019",
      desc: "Received Dean's List for 3.9 GPA and ECE Leadership Award",
      descBullets: ["Artificial Intelligence","Machine Learning", "Probability & Statistics", "Computer Vision", "Software Engineering", "Operating Systems", "Digital Logic Design"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning/Artificial Intelligence",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis and Preprocessing",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps/MLOps",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend/Design", 
      progressPercentage: "30%" 
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior AI & Machine Learning Engineer for AI Factory",
      company: "Lockheed Martin",
      companylogo: require("./assets/images/LMLogo.png"),
      date: "March 2022 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Built internal operations CLI to automate deployments for ML workspaces, jobs (Ray and k8s), data volumes, data pipelines, etc",
        "Tested and hosted latest open source ML models, including LLMs such as Mistral and Llama models on interactive platform hosted on internal server for developer usage  e.g. Segment Anything - enabled bounding box, point and segment everything options through a hosted KServe instance",
        "Built finetuning as a service pipeline using Flyte",
        "Hosted KServe and TGI models on Foundation Model Platform",
        "RAG pipelines with internal data"
      ]
    },
    {
      role: "Software Engineer Assoc, I, & II",
      company: "Lockheed Martin",
      companylogo: require("./assets/images/LMLogo.png"),
      date: "May 2017 – March 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Worked on OASIS Simulation Training Product for Aegis Weapons System (C++ code)",
        "Built and maintained prediction algorithm libraries for internal developers",
        "Led the prediction team as part of greater R&D efforts and streamlined unit testing and regression testing",
        "Data preparation and preprocessing"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Demos and Tutorials",
  subtitle: "Demos and Tutorials for some of my past projects",
  projects: [
    {
      image: require("./assets/images/vst.webp"),
      projectName: "Machine Learning Assisted Visual Speech Transcription",
      projectDesc: "Rutgers University ECE Senior Capstone Project 2019: Built an Android application to be able to read lips and return the transcribed text back to the user. ",
      footerLink: [
        {
          name: "View Video",
          url: "https://www.youtube.com/watch?v=ubPe-gHJ0JU"
        }
      ]
    },
    {
      image: require("./assets/images/django.jpg"),
      projectName: "Django Tutorial",
      projectDesc: "Developed a fantasy trading application with my teammates and made this video during development to explain the Django framework to render html pages and interface with the database back-end",
      footerLink: [
        {
          name: "View Video",
          url: "https://www.youtube.com/watch?v=rPTsUZ9yw4o"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ttl.jpg"),
      projectName: "TTL Circuit Problem",
      projectDesc: "Solving a TTL Circuit for Input and Ouput Voltages and Fan Out Ratio",
      footerLink: [
        {
          name: "View Video",
          url: "https://www.youtube.com/watch?v=0vUlWtk5PFc"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/geekculture/optimization-techniques-for-ml-models-bd500c8398ce",
      title: "Optimization Techniques for ML Models",
      description:
        "Discussing two methods of optimization: Hyperparameter Optimization with Bayesian Optimization and Network Architecture Search using DeepSwarm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+16095754277",
  email_address: "safa.shaikh97@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
