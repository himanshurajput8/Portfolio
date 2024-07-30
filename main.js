import './style.css'
import { darkTheme, renderHeader } from './header.js' ;
import { renderIntroduction } from './introduction.js';
import { renderSkills } from './skill.js' ;
import { renderProject } from './project.js';
import { renderForm } from './form.js';
import { renderFooter } from './footer.js';


    renderHeader();
    renderIntroduction(); 
    renderSkills(); 
    renderProject(); 
    renderForm();
    renderFooter();  


document.getElementById('dark-btn').addEventListener('click', function(){
  
   darkTheme() 
})  

