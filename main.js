

// function blockTextClick(){
//     var textSpans = document.getElementsByClassName('MainText');
//     for(var x=0; x<textSpans.length; x++){
//         var textElem = textSpans[x];
//         console.log(textElem);
//         textElem.addEventListener('click', function(e){
//             e.preventDefault();
//             console.log("In text click event");
//         }, false);
//     }
// }

// blockTextClick();


function mainNavItemClick(e) {
    console.log(this.navBtn, 'navBtn');
    console.log(e, 'event object');

    // Get Associated Drop-Down 
    var dd = this.navBtn.nextSibling.nextSibling; //Dude. IDFK. This just works. ok?
    console.log(dd);
    if (dd.style.display === "none") {
        console.log("in NONE true")
        // Add new styles for Drop-Down
        dd.style.display = "inline-flex";
        // dd.style.flex-direction = 'column';
    } else {
        console.log("IN NOne false");
        dd.style.display = "none";
    }
}

// Get Nav-items
var navBtns = document.getElementsByClassName('nav-button');
// Loop over them
for (var x = 0; x < navBtns.length; x++) {
    console.log(navBtns[x]);
    var navBtn = navBtns[x];
    // Add click event to nav-item
    navBtn.addEventListener("click", mainNavItemClick.bind({ navBtn: navBtn }));
}

