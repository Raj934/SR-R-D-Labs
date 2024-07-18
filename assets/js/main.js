
function myFunction(x) {
    x.classList.toggle("change"); 

}

//--------------------------------- anim
// document.addEventListener("DOMContentLoaded", function() {
//   // Add click event listeners to all <a> tags
//   var links = document.querySelectorAll("a");
//   links.forEach(function(link) {
//     link.addEventListener("click", function(event) {
//       // Apply the page transition effect
//       document.body.classList.add("page-transition");

//       // Delay the actual navigation to see the transition effect
//       setTimeout(function() {
//         // Proceed with the navigation
//         window.location.href = event.target.href;
//       }, 1000); // Adjust this delay (in milliseconds) to match your CSS transition duration
      
//       // Prevent the default link behavior (immediate navigation)
//       event.preventDefault();
//     });
//   });
  
//   // Add a listener for page unload (when navigating to another page)
//   window.addEventListener("beforeunload", function() {
//     // Apply the page transition effect
//     document.body.classList.add("page-transition");
//   });
// });


//------------------------------------------------ scrole 
// Define the list of page URLs in order
// const pages = [
//   'index.html',
//   'project.html',
//   'about.html',
//   'contact.html'
// ];

// // Track the current page index
// let currentPageIndex = pages.indexOf(window.location.pathname.split('/').pop());

// // Flag to track if mouse wheel navigation is in progress
// let isNavigatingWithWheel = false;

// // Function to check if there is scrollable content left on the current page
// function hasScrollableContent() {
//   const body = document.body;
//   return body.scrollHeight > window.innerHeight;
// }

// // Listen for mouse wheel events
// document.addEventListener('wheel', event => {
//   // Check if navigation is already in progress
//   if (isNavigatingWithWheel) {
//       return;
//   }

//   // Determine the direction of the scroll
//   const delta = Math.sign(event.deltaY);

//   // Check if there is scrollable content on the current page
//   const hasScroll = hasScrollableContent();

//   // Check if the user is at the top or bottom of the scrollable content
//   const atTopOfScroll = window.scrollY === 0;
//   const atBottomOfScroll = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;

//   // Handle scrolling behavior
//   if (delta > 0 && (!hasScroll || atBottomOfScroll)) {
//       // Navigate to the next page
//       currentPageIndex++;
//       navigateToNextPage();
//   } else if (delta < 0 && (!hasScroll || atTopOfScroll)) {
//       // Navigate to the previous page (if needed)
//       if (currentPageIndex > 0) {
//           currentPageIndex--;
//           navigateToNextPage();
//       }
//   } else if (delta < 0 && hasScroll) {
//       // Scroll within the current page
//       event.preventDefault(); // Prevent default scrolling behavior
//       const currentPosition = window.scrollY;
//       const scrollAmount = 200; // Adjust scroll amount as needed
//       window.scrollTo(0, currentPosition + (delta * scrollAmount));
//   }
// });

// // Function to navigate to the next page
// function navigateToNextPage() {
//   // Ensure the index stays within bounds
//   currentPageIndex = Math.max(0, Math.min(currentPageIndex, pages.length - 1));

//   // Navigate to the next page immediately
//   window.location.href = pages[currentPageIndex];

//   // Set flag to indicate navigation with wheel is in progress
//   isNavigatingWithWheel = true;
// }

// // Reset flag on page scroll
// window.addEventListener('scroll', () => {
//   isNavigatingWithWheel = false;
// });



//============================== project
document.addEventListener('DOMContentLoaded', function () {
  const projectMenuItems = document.querySelectorAll('#project-menu li');
  const projectCards = document.querySelectorAll('.project-card');

  // Function to handle project menu item clicks
  projectMenuItems.forEach(item => {
    item.addEventListener('click', function () {
      const projectId = this.getAttribute('data-project');

      // Remove 'selected' class from all project menu items
      projectMenuItems.forEach(menuItem => {
        menuItem.classList.remove('selected');
      });

      // Add 'selected' class to the clicked menu item
      this.classList.add('selected');

      // Show corresponding project card and hide others
      projectCards.forEach(card => {
        if (card.getAttribute('id') === `project-${projectId}`) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });

  // Initialize by showing the first project card and selecting the first menu item as active
  document.getElementById('project-asm').classList.add('active');
  projectMenuItems[0].classList.add('selected');
});



