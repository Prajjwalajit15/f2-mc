 

 document.addEventListener("DOMContentLoaded", () => {
    // Your JavaScript code here
    const recipes = [
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ]
    ;
      
      
      
      // Function to display recipes based on filters
      function displayRecipes(recipes) {
        // Get the container where recipes will be displayed
        const recipeContainer = document.getElementById("filter-recipes-e2");
      
        // Clear the current content
        recipeContainer.innerHTML = "";
      
        // Loop through the recipes and create cards for each recipe
        recipes.forEach((recipe) => {
          const card = document.createElement("div");
          card.className = "filter-recipes-card";
      
          // Populate the card with recipe information
          card.innerHTML = `
            <div class="filter-recipes-img card-e1">
              <img src="${recipe.imageSrc}" alt="img">
            </div>
            <div class="filter-recipes-type card-e2">${recipe.type}</div>
            <div class="card-e3">
              <div class="filter-recipes-name"><b>${recipe.name}</b></div>
              <div class="filter-recipes-rating">
                <i class="fa-solid fa-star" style="color: #fdc708;"></i>${recipe.rating}
              </div>
            </div>
            <div class="card-e4">
              <div class="filter-recipes-time">${recipe.time}</div>
              <div class="filter-recipes-isLiked"> 
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-comment fa-flip-horizontal"></i>
              </div>
            </div>
          `;
      
          // Append the card to the container
          recipeContainer.appendChild(card);
        });
      }
      
      // Function to filter recipes by name
      function filterRecipesByName(name) {
        return recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      
      const searchInput = document.getElementById("search-bar");
      const typeButtons = document.querySelectorAll(".recipe-type-e");
      
      // Add event listeners for recipe type filters
      typeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Determine the selected recipe type
          const typeFilter = button.id === "All-Recipes" ? "" : button.id.replace("-", "");
          filterRecipesByTypeAndName(typeFilter);
        });
      });
      
      // Function to filter and sort recipes based on user input
      function filterRecipesByTypeAndName(recipeType) {
        // Get the current search query
        const searchQuery = searchInput.value;
      
        // Filter recipes based on name
        const nameFilteredRecipes = filterRecipesByName(searchQuery);
      
        let typeFilteredRecipes = nameFilteredRecipes;
      
        // Filter by type if a type is selected
        if (recipeType === "veg" || recipeType === "non-veg") {
          typeFilteredRecipes = nameFilteredRecipes.filter((recipe) => recipe.type === recipeType);
        }
      
        // Display the filtered recipes
        displayRecipes(typeFilteredRecipes);
      }
      
      // Initial display of all recipes
      displayRecipes(recipes);
      
      // Event listener for the search bar input
      searchInput.addEventListener("input", () => {
        // Trigger filtering when the user inputs or changes the search query
        filterRecipesByTypeAndName();
      });
      
    
      // Event listener for the rating filter checkboxes
    const ratingCheckboxes = document.querySelectorAll('.rating-checkbox');
    
    // Variable to keep track of the currently selected rating filter
    let selectedRatingFilter = '';
    
    ratingCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const value = checkbox.value;
    
        // Unselect the other checkbox
        ratingCheckboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
    
        if (checkbox.checked) {
          selectedRatingFilter = value;
          filterRecipesByTypeAndName();
        } else {
          selectedRatingFilter = '';
          displayRecipes(recipes);
        }
      });
    });
    

    // JavaScript to handle the recipe type filter clicks

 // JavaScript to handle the recipe type filter clicks

const recipeTypeButtons = document.querySelectorAll(".recipe-type-e");

recipeTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "selected" class from all buttons
    recipeTypeButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Add the "selected" class to the clicked button
    button.classList.add("selected");

    // Determine the selected recipe type
    const typeFilter = button.id === "All-Recipes" ? "" : button.id.replace("-", "");

    // Call your filtering function here with the selected typeFilter
    filterRecipesByTypeAndName(typeFilter);
  });
});

const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', function () {
  sidebar.classList.toggle('show');
  if (sidebar.classList.contains('show')) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling in the background
    // Add a click event listener on the document to close the sidebar when clicking outside
    document.addEventListener('click', closeSidebarOutside);
  } else {
    document.body.style.overflow = 'auto'; // Allow scrolling in the background
    // Remove the click event listener when the sidebar is closed
    document.removeEventListener('click', closeSidebarOutside);
  }
});

function closeSidebarOutside(event) {
  if (!sidebar.contains(event.target) && event.target !== menuIcon) {
    sidebar.classList.remove('show');
    document.body.style.overflow = 'auto'; // Allow scrolling in the background
  }
}

 
// Event listener for the heart icon to toggle liked/unliked state
const likeIcons = document.querySelectorAll('.fa-solid.fa-heart');
likeIcons.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the parent card click event from triggering

    if (icon.style.color === 'red') {
      icon.style.color = ''; // Set the color to empty, making it unfilled
    } else {
      icon.style.color = 'red'; // Fill the heart icon with red color
    }
  });
});



  });
   



  