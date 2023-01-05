import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState();

  useEffect(()=>{
    fetch('https://react-http-77b70-default-rtdb.firebaseio.com/meals.json').then(response=>{
      if(!response.ok){
        throw new Error(response.status);
      }
      return response.json();
    }).then(data => {
    const mealsArray = Object.values(data);
    setMeals(mealsArray);
    setIsLoading(false);
    }).catch((error)=>{
    setIsLoading(false);
    setFetchError(error.message);
    })
  },[]);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(fetchError){
    return <section className={classes.MealsError}>
      <p>{fetchError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        title={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
