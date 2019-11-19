export const intialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Learn more React",
      completed: false,
      id: 3892987590
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
