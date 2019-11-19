export const intialState = {
  todos: [
    {
      item: "Master React",
      completed: false,
      id: 00001
    },
    {
      item: "Learn more React",
      completed: false,
      id: 00002
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
