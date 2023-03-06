import React, { useState, useEffect } from "react";
import CardList from "./card-list/CardList";
import SearchBox from "./search-box/SearchBox";

const Todo = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterMonsters, setFilterMonsters] = useState([]);
  useEffect(() => {
    console.log("mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        setFilterMonsters(users);
      });
  }, []);
  const onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    setSearchField(searchField);
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(filterMonsters);
  };

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default Todo;
