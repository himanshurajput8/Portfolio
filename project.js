export function  renderProject(){
const projectTempelate = `


<div class="container" id="project-full-container" id="project">
<div class="project-heading">
  <span>
    <h2>My Project!</h2>
  </span>
</div>
<div class="project-container" id="project">
  <div class="project-project-box"><img src="image/notesapp-img.png">
    <h3>Notesapp</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
    <a href="https://github.com/himanshurajput8/SuperNotes" target="blank"><button>Github</button></a>
    <a href="https://super-notes-seven.vercel.app/" target="blank"><button>Demo</button></a>
  </div>


  <div class="project-project-box"><img src="image/notesapp-img.png">
    <h3>Notesapp</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
    <a href="https://github.com/himanshurajput8/SuperNotes" target="blank"><button>Github</button></a>
    <a href="https://super-notes-seven.vercel.app/" target="blank"><button>Demo</button></a>


  </div>


</div>


</div>
<div class="project-container container" id="project">
<div class="project-project-box"><img src="image/notesapp-img.png">
  <h3>Notesapp</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
  <a href="https://github.com/himanshurajput8/SuperNotes" target="blank"><button>Github</button></a>
  <a href="https://super-notes-seven.vercel.app/" target="blank"><button>Demo</button></a>
</div>

<div class="project-project-box"><img src="image/notesapp-img.png">
  <h3>Notesapp</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt </p>
  <a href="https://github.com/himanshurajput8/SuperNotes" target="blank"><button>Github</button></a>
  <a href="https://super-notes-seven.vercel.app/" target="blank"><button>Demo</button></a>
</div>


</div>

    
    `
    document.body.innerHTML += projectTempelate
}

