import getRocketApi from '../../Api/rocketsApi';

const GET_ROCKETS = 'spacetravelers/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spacetravelers/rockets/RESREVE_ROCKETS';
const CANCEL_RESERVE = 'spacetravelers/rockets/CANCEL_RESERVE';

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const data = await getRocketApi();
  const rockets = data.map((rocket) => {
    const {
      id, rocket_name: rocketName, description, flickr_images: flickrImages, reserved,
    } = rocket;

    return {
      id,
      rocketName,
      description,
      flickrImages: flickrImages[0] || '',
      reserved,
    };
  });
  dispatch({ type: GET_ROCKETS, rockets });
};

export const cancelRockets = (id) => ({ type: CANCEL_RESERVE, id });
export const reserveRockets = (id) => ({ type: RESERVE_ROCKETS, id });

const changeReserved = (state, action, reserved) => [...state].map((rocket) => {
  if (action.id !== rocket.id) {
    return rocket;
  }
  return { ...rocket, reserved };
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_RESERVE:
      return changeReserved(state, action, false);

    case GET_ROCKETS:
      return action.rockets;

    case RESERVE_ROCKETS:
      return changeReserved(state, action, true);

    default:
      return state;
  }
};

export default reducer;
