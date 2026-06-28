const recipes = [
    {
      name: "Apple Crisp",
      imgSrc: "images/apple-crisp.jpg",
      imgAlt: "A bowl of apple crisp topped with vanilla ice cream",
      tags: ["Dessert"],
      rating: 4,
      description:
        "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    },
    {
      name: "Black Beans and Rice",
      imgSrc: "images/black-beans-and-rice.jpg",
      imgAlt: "Black beans and rice topped with tomatoes",
      tags: ["Southwest", "Entree"],
      rating: 4,
      description:
        "Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment."
    },
    {
      name: "Chicken Curry",
      imgSrc: "images/chicken-curry.webp",
      imgAlt: "A bowl of chicken curry",
      tags: ["Chicken", "Entree", "Spicy"],
      rating: 5,
      description:
        "A warm and fragrant chicken curry simmered in a rich, spiced sauce. Serve over rice for a comforting meal."
    },
    {
      name: "Chocolate Chip Cookies",
      imgSrc: "images/chocolate-chip-cookies.jpg",
      imgAlt: "A stack of chocolate chip cookies",
      tags: ["Dessert", "Snack"],
      rating: 5,
      description:
        "Classic chewy chocolate chip cookies with crisp edges and a soft center. A crowd-pleaser every time."
    },
    {
      name: "Escalopes de Poulet a la Creme",
      imgSrc: "images/escalopes-de-poulet-a-la-creme.webp",
      imgAlt: "Chicken escalopes in a creamy mushroom sauce",
      tags: ["Chicken", "Entree"],
      rating: 4,
      description:
        "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully."
    },
    {
      name: "German Gooseberry Cake",
      imgSrc: "images/german-gooseberry-cake.jpg",
      imgAlt: "A slice of German gooseberry cake",
      tags: ["Dessert", "Cake"],
      rating: 3,
      description:
        "A tart and tender gooseberry cake with a buttery base and a lightly sweetened fruit topping."
    },
    {
      name: "Roasted Potatoes",
      imgSrc: "images/roasted-potatoes.webp",
      imgAlt: "A pan of crispy roasted potatoes",
      tags: ["Side", "Vegetarian"],
      rating: 4,
      description:
        "Crispy on the outside and fluffy on the inside, these herb-roasted potatoes make the perfect side dish."
    },
    {
      name: "Sweet Potato Waffles",
      imgSrc: "images/sweet-potato-waffle-md.jpg",
      imgAlt: "Sweet potato waffles on a plate",
      tags: ["Breakfast"],
      rating: 4,
      description:
        "Fluffy sweet potato waffles with warm spices. A wholesome twist on a breakfast favorite."
    }
  ];
  
  let recipeContainer = document.querySelector('#recipe-container');
  let searchInput = document.querySelector('#search-input');
  let button = document.querySelector('.search button');
  
  button.addEventListener('click', search);
  
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      search();
    }
  });
  
  function search() {
    let query = searchInput.value.toLowerCase();
  
    let filteredRecipes = recipes.filter(function (recipe) {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find((tag) => tag.toLowerCase().includes(query))
      );
    });
  
    let sortedRecipes = filteredRecipes.sort(compareRecipes);
  
    recipeContainer.innerHTML = '';
    sortedRecipes.forEach(function (recipe) {
      renderRecipe(recipe);
    });
  }
  
 
  function compareRecipes(a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  
  function tagTemplate(tags) {
    return tags.map((tag) => `<p class="tag">${tag}</p>`).join('');
  }
  
  function ratingTemplate(rating) {
    let html = `<span
      class="rating"
      role="img"
      aria-label="Rating: ${rating} out of 5 stars"
    >`;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
      } else {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
      }
    }
    html += `</span>`;
    return html;
  }
  
  function recipeTemplate(recipe) {
    return `<section class="media-card">
    <div class="media-card-image">
      <img src="${recipe.imgSrc}" alt="${recipe.imgAlt}" />
    </div>
    <div class="media-card-content">
      ${tagTemplate(recipe.tags)}
      <h2>${recipe.name}</h2>
      ${ratingTemplate(recipe.rating)}
      <p class="recipe-description">${recipe.description}</p>
    </div>
  </section>`;
  }
  
  function renderRecipe(recipe) {
    let html = recipeTemplate(recipe);
    recipeContainer.innerHTML += html;
  }
  
  let randomNum = Math.floor(Math.random() * recipes.length);
  
  function init() {
    renderRecipe(recipes[randomNum]);
  }
  
  init();