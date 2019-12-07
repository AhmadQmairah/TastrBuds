const initialState = {
  categories: [],
  video1: null,
  video2: null,
  videos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_CATEGORIES": {
      return { ...state, categories: payload };
    }
    case "SET": {
      console.log(payload.video1, payload.video2);
      return {
        ...state,
        video1: payload.video1,
        video2: payload.video2,
        videos: payload.videos
      };
    }

    default:
      return state;
  }
};
