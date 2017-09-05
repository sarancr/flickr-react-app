import FETCH_IMAGE_DATA from '../actions/index';

export default function(state = null, action) {

  switch (action.type) {
    case FETCH_IMAGE_DATA: {
      console.log("Reducer itemsL " + action.payload.data);
      state = action.payload.data.items;
      return state;
    }
  }

  return state;
}

