// export const handleGetItem = (newData) => {
//   localStorage.getItem("userData", newData);
// };

// export const handleSetItem = (newData) => {
//   localStorage.setItem("userData", JSON.stringify(newData));
// };

export const addNewUser = (newData) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  if (userDetails?.some((el) => el.userName === newData.userName)) {
    return false;
  }
  userDetails.push(newData);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  return true;
};

export const authenticateUser = (newData) => {
  if (
    JSON.parse(localStorage.getItem("userDetails"))?.some((el) => {
      return (
        el.userName === newData.userName && el.password === newData.userPassword
      );
    })
  ) {
    return true;
  }
  return false;
};

export const forgetPassword = (forgetData) => {
  const user = JSON.parse(localStorage.getItem("userDetails"))?.find(
    (el) => el.userName === forgetData.username
  );

  if (user) {
    user.password = forgetData.newPassword;
    return true;
  }
  return false;
};
