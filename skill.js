export function renderSkills(){
const  skillsTempelate = `

 <div class="container">
    <div class="skills-heading" id="skills">
      <div>
        <span>
          <h2>My Skills !</h2>
        </span>
      </div>
    </div>
    <div class="skill-container">
      <div class=skills-icon-container>
        <div class="skills-img-icon"><img src="https://dineshrout.netlify.app/icons/html.svg
">
          <h2>HTML</h2>
        </div>
        <div class="skills-img-icon"><img src="	https://dineshrout.netlify.app/icons/css.svg">
          <h2>CSS</h2>
        </div>
        <div class="skills-img-icon"><img src="https://dineshrout.netlify.app/icons/javascript.svg">
          <h2>JavaScript</h2>
        </div>

      </div>

      <div class=skills-icon-container id="skills">
        <div class="skills-img-icon"><img src="https://dineshrout.netlify.app/icons/git.svg">
          <h2>Git</h2>
        </div>
        <div class="skills-img-icon"><img src="https://dineshrout.netlify.app/icons/github.svg">
          <h2>Github</h2>
        </div>
        <div class="skills-img-icon"><img src="https://dineshrout.netlify.app/icons/react.svg">
          <h2>JavaScript</h2>
        </div>

      </div>
    </div>
  </div>

`
document.body.innerHTML += skillsTempelate
}


