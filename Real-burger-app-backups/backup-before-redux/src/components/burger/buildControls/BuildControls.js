import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
const BuildControls = ({
  addIngredient,
  removeIngredient,
  ingredients,
  price,
  purchasable,
  purchasing,
}) => {
  const items = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {items.map((item, index) => {
        return (
          <BuildControl
            add={addIngredient}
            remove={removeIngredient}
            key={index}
            label={item.label}
            type={item.type}
            ingredients={ingredients}
          />
        );
      })}
      {purchasable ? (
        <button onClick={purchasing} className={classes.OrderButton}>
          ORDER NOW
        </button>
      ) : (
        <button className={classes.OrderButton} disabled={true}>
          ORDER NOW
        </button>
      )}
    </div>
  );
};

export default BuildControls;
