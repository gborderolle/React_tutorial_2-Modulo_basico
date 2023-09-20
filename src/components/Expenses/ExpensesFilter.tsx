import React from "react";
import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props: any) => {
  const filterHandler = (identifier: string, value: string) => {
    switch (identifier) {
      case "year":
        props.onChangeFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={(event) => {
            filterHandler("year", event.target.value);
          }}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;