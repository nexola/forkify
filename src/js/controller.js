import * as model from './model.js';
import { recipeView } from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) {
      return;
    }

    recipeView.renderSpinner();

    // 1 Carregar API
    await model.loadRecipe(id);

    // 2 Renderizando a receita
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
