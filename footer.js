export function renderFooter(){
    const footerTempelate =`
    <div class="container">
        <footer>
            <div class="footer-email">
                <span>rajputhimanshu913@gmail.com</span>
            </div>
            <div class="intro-icon">  
                <span class="linkdin"><a href="https://www.linkedin.com/in/himanshu-rajput-160161247/" target="blank"><i class="fa-brands fa-linkedin"></i></a></span> 
                <span><a href="https://github.com/himanshurajput8" target="blank"><i class="fa-brands fa-github"></i></a></span>
                <span><i class="fa-brands fa-twitter"></i></span>
            </div> 
        </footer>
    </div>
     `
    document.body.innerHTML += footerTempelate  
}


