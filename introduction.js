
export function renderIntroduction(){
 const introductionTempelate = `
 
  <div class="introduction-container container ">
        <div class= "keyframe-div"><h2>Web Developer</h2></div>

    <div class="introduction">
      <div class="intro-name">    

        <span>Hey! This is..</span>
        <span>Himanshu Rajput</span>
        <span>Front-end Developer</span> 
        <span class="intro-details">
          <p>Hi, I'm Himanshu Rajput a graduate from AKTU (Lucknow). I have a strong passion for web development
            and front-end technologies My mission is to craft outstanding web experience that leave a lasting 
            impression.</p>

          <strong>Skills Constellation</strong>

          <p>I Possess strong proficiency in front-end technologies including javascript, React.js, HTML, CSS,
            These skills enable me to create captivating and user-friendly web interface</p>

          <p>Let's collaborate, code, and embark on a journey to create web experiences that are truly out of this
            word. feel free to reach out-together, we'll write a new chapter in the cosmic web</p> 
        </span>
        <div class="intro-icon">
          <span class="linkdin"><a href="https://www.linkedin.com/in/himanshu-rajput-160161247/" target="blank"><i
                class="fa-brands fa-linkedin"></i></a></span>
          <span><a href="https://github.com/" target="blank"><i class="fa-brands fa-github"></i></a></span>
          <span><i class="fa-brands fa-twitter"></i></span>
         <a href="public/Himanshu(Frontend-developer).pdf" target="_blank"><button>Resume  </button></a>
        </div>
      </div>
      <div class="computer-img">
        <div class="computer-img1"></div> 
      </div>
    </div>
  </div>

`
document.body.innerHTML += introductionTempelate  
} 


