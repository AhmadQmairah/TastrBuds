import instance from "./instance";

export const getCategories = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/categories/");
      const criteria = res.data;

      dispatch({ type: "GET_CATEGORIES", payload: criteria });
    } catch (err) {
      console.error(err);
    }
  };
};

export const SetVideos = (video1, video2, videos) => {
  return async dispatch => {
    try {
      console.log("iam");
      dispatch({ type: "SET", payload: { video1, video2, videos } });
    } catch (err) {
      console.error(err);
    }
  };
};

export const vote = video => {
  return async dispatch => {
    try {
      console.log("iam voting for ", video);
      await instance.post("/vote/", { video_id: parseInt(video) });
      //dispatch({ type: "SET", payload: { video1, video2 } });
    } catch (err) {
      console.error(err);
    }
  };
};

export const AddVideo = (name, url, category) => {
  return async dispatch => {
    try {
      console.log("iam adding for ", name, url, category);
      await instance.post("/video/", {
        name: name,
        youtube_url: url,
        category: category
      });
    } catch (err) {
      console.error(err);
    }
  };
};
