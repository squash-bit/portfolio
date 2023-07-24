AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/web_dev.png",
    langName: "Web Development",
    langDesc: "Proficient in building websites with expertise in HTML, CSS, and JavaScript. Capable of creating responsive and visually appealing user interfaces that captivate and engage visitors.",
  },
  {
    langImage: "assets/images/techstack-page/mobile-app.png",
    langName: "Application Development",
    langDesc: "Skilled in developing dynamic applications using various programming languages, including Python and other relevant technologies. Able to simplify complex processes and deliver functional solutions.",
  },
  {
    langImage: "assets/images/techstack-page/chatbot.png",
    langName: "Chatbot Development",
    langDesc: "Experienced in crafting interactive chatbots that engage users in meaningful conversations. Knowledgeable in implementing AI-powered features to enhance user experience.",
  },
  {
    langImage: "assets/images/techstack-page/programming-languages.png",
    langName: "Programmer",
    langDesc: "Proficient in multiple programming languages, including HTML, CSS, JavaScript, Python, and Java enabling me to adapt and excel in diverse development tasks.",
  },
  {
    langImage: "assets/images/techstack-page/collaboration.png",
    langName: "Collaborator",
    langDesc: "A team player with excellent communication skills, ready to collaborate with clients and teams to bring their ideas to life and achieve collective goals.",
  },
  {
    langImage: "assets/images/techstack-page/adaptability.png",
    langName: "Adaptable",
    langDesc: "Versatile and adaptable, ready to take on new challenges and learn new technologies as the industry evolves.",
  },
  {
    langImage: "assets/images/techstack-page/life-long-learning.png",
    langName: "Life Long Learner",
    langDesc: "Committed to staying up-to-date with the latest technologies and trends in the programming world through completion of MOOCs (Massive Open Online Courses) and continuous self-improvement.",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
