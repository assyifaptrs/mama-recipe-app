import axios from 'axios';

export const getLatestRecipe = () => {
  return {
    type: 'GET_LATEST_RECIPES',
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/recipe-desc`,
      method: 'GET',
    }),
  };
};

export const detailRecipe = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipe-detail/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const searchRecipe = (character) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipe/${character}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const myRecipe = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/myrecipe`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createRecipe = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateRecipe = (form, id) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/recipe/update/${id}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteRecipe = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/update/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
