import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  //function for rendering expense list
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    // comp to rnder expense list
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
