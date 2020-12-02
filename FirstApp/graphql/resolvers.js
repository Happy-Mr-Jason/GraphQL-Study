// Data Source

import { getPeople, getById, deletePerson, addPerson, getMovies } from "./db";

const resolvers = {
  Query: {
    name: () => "sjlee",
    movies: (_,{limit, rating}) => getMovies(limit, rating),
    people: () => getPeople(),
    person: (_, { id }) => getById(id),
  },
  Mutation: {
    deletePerson: (_, { id }) => deletePerson(id),
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
  },
};

export default resolvers;
