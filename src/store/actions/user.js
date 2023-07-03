import axios from 'axios';

export const login = (form, handleSuccess) => {
  return {
    type: 'LOGIN',
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        .then((response) => {
          handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const register = (form, handleSuccess) => {
  return {
    type: 'REGISTER',
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)
        .then((response) => {
          handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const getDetailUser = (id) => {
  const token = localStorage.getItem('token');
  return {
    type: 'GET_DETAIL_USER',
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/detail/${id}`,
      method: 'GET',
      headers: {
        token: token,
      },
    }),
  };
};

export const getLastUser = () => {
  const token = localStorage.getItem('token');
  return {
    type: 'GET_LAST_USER',
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/last/user`,
      method: 'GET',
      headers: {
        token: token,
      },
    }),
  };
};

// export const updateUser = (form, id, handleSuccess) => {
//   // const token = localStorage.getItem('token');

//   return new Promise((resolve, reject) => {
//     axios
//       .put(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`, form)
//       // {
//       // headers: {
//       //   token: token,
//       // },
//       // })
//       .then((response) => {
//         // console.log(response.data)
//         // resolve(response.data);
//         handleSuccess(response.data);
//         resolve(response.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

export const updateUser = (form, handleSuccess) => {
  return {
    type: 'UPDATE_USER',
    payload: new Promise((resolve, reject) => {
      axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/last-user`, form)
        .then((response) => {
          handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const deleteUser = () => {
  // const token = localStorage.getItem('token');
  // const clear = localStorage.clear();
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/last-user`
        // headers: {
        //   clear,
        // },
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
