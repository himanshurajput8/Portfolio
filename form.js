export function renderForm(){
const formTempelate = `
<div class="container">
    <div class="form-container">
        <div class="form-left-div">
            <div id="form-container">
                <span>
                    <h2>Contact Me !</h2>
                </span>
            </div>
        </div>

        <form >
            <div class="form-right-div">
                
                    <input class="form-input" type="text" placeholder="Name">
                    <input class="form-input" type="email" placeholder="E-mail">
                    <textarea class="form-input" name="message" placeholder="Message"></textarea>
                    <input  class="form-input" type="submit" placeholder="Submit">
                
            </div>
         </form>   
    </div>
</div>`
document.body.innerHTML += formTempelate 
} 

