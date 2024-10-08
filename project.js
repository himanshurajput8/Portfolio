export function renderProject() {
  const projectTempelate = `


<div class="container" id="project-full-container" >
<div class="project-heading">
  <span>
    <h2>My Project!</h2>
  </span>
</div>
<div class="project-container" >
  <div class="project-project-box "> <div class="project1-img"></div> 
    <h3>Notesapp</h3>
    <p>A Notes with Quill and Canvas functionality</p>
    <a href="https://github.com/himanshurajput8/SuperNotes" target="blank"><button>Github</button></a>
    <a href="https://super-notes-seven.vercel.app/" target="blank"><button>Demo</button></a>
  </div>


  <div class="project-project-box"> <div class="project2-img"></div>
    <h3>Table Grid</h3>
    <p>A Table with CRUD functionality, sorting and pagination</p>
    <a href="https://github.com/himanshurajput8/TableGrid" target="blank"><button>Github</button></a>
    <a href="https://table-grid.vercel.app/" target="blank"><button>Demo</button></a>
  </div>
</div>


</div>
<div class="project-container container " >
<div class="project-project-box"> <div class="project3-img"></div>
  <h3>Job Portal</h3>
  <p>Your One-stop Destination  For the latest job opportunities! Browse through thousands of job Listings,</p>
  <a href="https://github.com/himanshurajput8/Job-Portal" target="blank"><button>Github</button></a>
  <a href="https://job-portal-sigma-nine.vercel.app/" target="blank"><button>Demo</button></a>
</div>

<div class="project-project-box"><div class="project4-img"></div>
  <h3>Travel Agency</h3>
  <p>It is a responsive website designed with the features of navigation bar, and hamburger menu.  </p>
  <a href="https://github.com/himanshurajput8/Travel-Agency" target="blank"><button>Github</button></a>
  <a href="https://travel-agency-nu-one.vercel.app/" target="blank"><button>Demo</button></a>
</div>
</div>

</div>
<div class="project-container container project5-container" >
<div class="project-project-box"> <div class="project5-img"></div>
  <h3>Booking.Com</h3>
  <p>The goal is to create a user-friendly platform where travelers can explore and book accommodations, flights, and car rentals with ease.</p>
  <a href="https://github.com/himanshurajput8/Booking.com" target="blank"><button>Github</button></a>
  <a href="https://booking-com-seven.vercel.app/" target="blank"><button>Demo</button></a>
</div>

<div class="project-project-box"><div class="project6-img"></div>
  <h3>Recipe Finder</h3>
  <p>The Recipe Project is designed to offer a dynamic platform where users can discover, save, and share their favorite recipes. </p>
  <a href="https://github.com/himanshurajput8/Recipe_Finder" target="blank"><button>Github</button></a>
  <a href="https://recipe-finder-iota-red.vercel.app/" target="blank"><button>Demo</button></a>
</div>
</div>

    
    `
  document.body.innerHTML += projectTempelate
}

