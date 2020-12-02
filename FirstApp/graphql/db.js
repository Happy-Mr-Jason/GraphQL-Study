const axios = require('axios');

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  console.log(REQUEST_URL);
  const response = await axios(`${REQUEST_URL}`);
//   console.log(response);
   return response.data.data.movies;
};

let people = [
  {
    id: "0",
    name: "user00",
    age: 18,
    gender: "male",
  },
  {
    id: "1",
    name: "user01",
    age: 19,
    gender: "female",
  },
  {
    id: "2",
    name: "user02",
    age: 20,
    gender: "male",
  },
  {
    id: "3",
    name: "user03",
    age: 23,
    gender: "female",
  },
];

export const getPeople = () => people;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};

export const deletePerson = (id) => {
  const cleanedPeople = people.filter((person) => person.id !== String(id));
  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: `${people.length + 1}`,
    name,
    age,
    gender,
  };
  people.push(newPerson);
  return newPerson;
};
