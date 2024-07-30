export function renderHeader() {
     const headerTemplate = `

     <div class="container">
      <header>     
        <div>
          <div class="header-name">Himanshu Rajput</div>
        </div>
        <div class="center-div">
          <ul class="header-list"> 
            <a><li>Home</li></a>
            <a href="#project">
              <li>Project</li>
            </a>
            <a href="#skills"> 
              <li>Skills</li>
            </a>
            <a>
              <li>Experience</li>
            </a>
          </ul>
        </div>

        
          <div class="header-btn">
            <a href="#form-container">
              <button ">Contact Me</button>
            </a>  
              <span id="dark-btn"><i class="fa-solid fa-moon" ></i></span>
          </div> 
       
          
      </header>  
   </div>
   
    `
document.body.innerHTML += headerTemplate 


}

// theme change code here
export function  darkTheme(){
  const themeBtn = document.getElementById('dark-btn');
  const themeIcon = themeBtn.querySelector('i');
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

}







