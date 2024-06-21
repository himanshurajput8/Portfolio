export function  renderProject(){
const projectTempelate = `
<div class="container" id="project-full-container">
        <div class="project-heading"><span><h2>My Project !</h2></span></div> 
    <div class="project-container">
        <div class="project-project-box"><img src="image/notesapp-img.png">
            <h3>Notesapp</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
            <button>Github</button>
            <button>Demo</button>
</div>
             
          
        <div class="project-project-box"><img src="image/notesapp-img.png">
            <h3>Notesapp</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
            <button>Github</button>
            <button>Demo</button>
</div>
          
         
    </div>

    
</div>
 <div class="project-container container">
        <div class="project-project-box"><img src="image/notesapp-img.png">
            <h3>Notesapp</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt</p>
            <button>Github</button>
            <button>Demo</button>
</div>
            
        <div class="project-project-box"><img src="image/notesapp-img.png">
            <h3>Notesapp</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt </p>
            <button>Github</button>
            <button>Demo</button>
</div>
           
         
    </div>`
    document.body.innerHTML += projectTempelate
}

