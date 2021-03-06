
//Creation of constants, using javascript to select elements of the DOM//
const button = document.querySelector("button");
const cElement = document.getElementById("cElement");
const sElement = document.getElementById("sElement");
const speed = document.querySelector("input");
const output = document.querySelector(".output");
let scroller = true; //Local variable//
//Text content//
const content = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>"
window.onload = setupScroll; //Procesess load events in the window.  In this case as soon as the page is loaded, the setupScroll function starts too//

button.addEventListener("click",function(){
	console.log("click");
	scroller ^= true; //Toggles the value//
	button.innerText = !scroller? "Start" : "Stop"; //Configuration of the button (start/stop)//
})
cElement.addEventListener("mouseenter",scrollSpeed); //Calls the function scrollSpeed when the mouse enters in the box//
cElement.addEventListener("mouseleave",scrollSpeed); //Calls the function scrollSpeed when the mouse leaves the box//

function scrollSpeed(e){
	console.log(e.type);
	scroller = (e.type=="mouseenter")? false : true; //sets the value of the variable called scroller, depending of the position of the mouse//
	output.innerHTML = "Mouse Stopper"; //Change the messae in the screen//
}


function setupScroll(){ //Definition of function setupScroll that appears when the page is loaded//
	sElement.innerHTML = content; //includes the content in the box//
	let temp = sElement.getBoundingClientRect(); //defines a local variable and applies to sElement getBoundinClientRect(). This method returns the size of an element and its position relative to the viewport.//
	cElement.style.height = (temp.height/2) + "px";
	sElement.style.top = temp.height + "px";
	scrollInt = setInterval(scrollingEle, 50); //Here 50 means every 50 ms//
}

function scrollingEle(){
	let scrollSpeed = speed.value; //local variable that sets the speed of the scrolling entered by the user//
	if(scroller){ //If the variable scroller is true//
	let posY = parseInt(sElement.style.top); //This method passes a string arument and returns an integer//
	if(posY + sElement.clientHeight > 0){ //.clientHeight returns the high of an element in pixels//
		sElement.style.top = posY - scrollSpeed + "px";
	}else{
		sElement.stype.top = cElement.clientHeight +"px";
	}
	output.innerHTML = "Scroll speed "+scrollSpeed + " Y position " + posY; //Output the scrollSpeed in the screen//
	}
}

