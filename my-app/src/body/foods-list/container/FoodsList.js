import React from 'react';
import "../styles/FoodsList.css";
import food1 from "../images/food1.png";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";

function FoodsList () {
  return (
    <div className='list'>
      <div className="table">

        <div className="table-cell">
          <a href="">
            <img src={food1} alt="Food 1"></img>
          </a>
          <div className="detail">
            <a href="">
              <h3>VEGAN STEAKHOUSE DINNER - WINE GLAZED MUSHROOMS, CHARRED VEGGIE DEMI, AND CREAMY MASHED POTATOES</h3>
              <p>You won’t believe this juicy steak is vegan - you’ll have to try it to believe. My meaty take on steakhouse classics doesn’t lack flavor, basted in charred veggie demi and topped with wine-glazed mushroom medley - trust me, you won’t miss the meat!</p>
            </a>
            <div className='wraper'>
              <a href="" className='button'>View recipe</a>
            </div>
          </div>
        </div>

        <div className="table-cell">
          <a href="">
            <img src={food2} alt="Food 2"></img>
          </a>
          <div className="detail">
            <a href="">
              <h3>Roast Beef with Caramelised Onion Gravy Recipe</h3>
              <p>A weekend wouldn’t feel like a proper weekend without a really good roast lunch, and roast beef is our absolute favourite. </p>
            </a>
            <div className='wraper'>
              <a href="" className='button'>View recipe</a>
            </div>
          </div>
        </div>

        <div className="table-cell">
          <a href="">
            <img src={food3} alt="Food 3"></img>
          </a>
          <div className="detail">
            <a href="">
              <h3>Mojo-Marinated Chicken Quinoa Bowl with Spinach, Plantains, Black Beans, and Mojo Crema</h3>
              <p>Serves 2. Mojo sauce lends a bright, punchy, herby flavor to this satisfying dish--double the sauce and save the leftovers for dipping crudité or marinating then grilling shrimp.</p>
            </a>
            <div className='wraper'>
              <a href="" className='button'>View recipe</a>
            </div>
          </div>
        </div>

        <div className="table-cell">
          <a href="">
            <img src={food4} alt="Food 4"></img>
          </a>
          <div className="detail">
            <a href="">
              <h3>Chilli Beef Lettuce Wrap Recipe </h3>
              <p>Great food doesn’t have to be complex, as these simple beef wraps show. They are really quick to make and perfect with a few beers at the start of the evening. </p>
            </a>
            <div className='wraper'>
              <a href="" className='button'>View recipe</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FoodsList;
