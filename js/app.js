/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//get All sectoins in the page
const mainSectoins = document.getElementsByTagName('section'),
//get main tag
main = document.getElementsByTagName('main'),
//crate a button (span)
button = document.createElement('span'),

myNavbar = document.getElementById('navbar__list');  

var isScrolling;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to build nav bar items(li) 
function buildNav(sections){  
    //get Nav bar in the page
    for(let i = 0; i < sections.length; i++){
        //add li to ul
        const myListitem = document.createElement('li');
        // make the first li take the class .active-li as defualt
        if(i===0){
            myListitem.classList.add('active-li');
        }
        myListitem.setAttribute('id',`li${i}`);
        // add a to the li item with href attribute
        const a = document.createElement('a');
        a.textContent = `Section ${i+1}`;
        a.setAttribute('href',`#section${i+1}`)
        myListitem.appendChild(a);
        myNavbar.appendChild(myListitem);
        
    }
    //add eventlistener to my navbar 
    myNavbar.addEventListener('click',function(evt){
        evt.preventDefault();
        if(evt.target.tagName==="LI" || evt.target.tagName === "A"){
            const elem = document.querySelector(`[data-nav="${evt.target.textContent}"]`);
            elem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
        
    });
}

// function to check if section in the viewport or not  

function isInViewport(section) {
    const s = section.getBoundingClientRect();
    //check if section top  <= my broswer height  &&  section bottom  >= my broswer height
    if(s.top <=  (window.innerHeight -(.5 * window.innerHeight))  
    && s.bottom >= (window.innerHeight -(.5 * window.innerHeight))){
        return true
    }else{
        false
    }
    
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//get the sections in the page to create navbar 
buildNav(mainSectoins);


// Add class 'active' to section when near top of viewport

for (let i = 0; i < mainSectoins.length; i++) {
    const li = document.getElementById(`li${i}`);
    document.addEventListener('scroll', function(){

        window.clearTimeout(isScrolling);
        isScrolling =  setTimeout(function () {
            //hide nav and btn
            button.classList.remove('visible');
            myNavbar.classList.add('display');

        },3000)
        //make my button && my navbar Visible
        if(document.body.scrollTop > 500){
            button.classList.add('visible');
        }else{
            button.classList.remove('visible');
        }
        myNavbar.classList.remove('display');

        //myNavbar.classList.add('dispaly');
        //check if item is active or not (add your-active-class to the active section && active-li class to active li  )    
        if(isInViewport(mainSectoins[i])){
            mainSectoins[i].classList.add("your-active-class");
            li.classList.add("active-li");

        }else{
            mainSectoins[i].classList.remove("your-active-class");
            
            li.classList.remove("active-li");
        }
    
    });
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




// Add button to up

//add class .mybtn
button.setAttribute('class',"mybtn");
// add text to the btn
button.textContent = "Up";
//add the btn at main tag after the sections
main[0].appendChild(button);
// add eventListener at the btn whe click to go to the start of the page
button.addEventListener('click',function (){
    
    window.scrollTo(0,0);
    //hide the btn
    button.classList.remove('visible');
})

