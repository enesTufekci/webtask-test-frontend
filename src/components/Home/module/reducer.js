const UPDATE = 'UPDATE';

export function update(nodes) {
  return {
    type: UPDATE,
    payload: nodes,
  };
}

const ACTION_HANDLER = {
  [UPDATE]: (state, action) => {
    const nodes = action.payload;
    return { ...state, ...nodes };
  },
};

const initialState = {
  lights: false,
  curtains: false,
  heater: false,
  tv: false,
};

const HomeReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];
  return handler ? handler(state, action) : state;
};

export default HomeReducer;
