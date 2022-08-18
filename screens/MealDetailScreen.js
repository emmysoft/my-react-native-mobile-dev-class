import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import FavoritesContext from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  // const favoriteCtxt = useContext(FavoritesContext); //using useContext hooks to access FavoritesContext properties
  const mealId = route.params.mealId;

  const favoriteMeal = favoriteMealIds.includes(mealId); //checking for the mealId in the FavoritesContext ids
  
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (favoriteMeal) {
      dispatch(removeFavorite({id: mealId}));
      // favoriteCtxt.removeFavorite(mealId); //remove favoritemeal by Id
    } else {
      dispatch(addFavorite({id: mealId}));
      // favoriteCtxt.addFavorite(mealId); //add favorite meal by Id
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={favoriteMeal ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
