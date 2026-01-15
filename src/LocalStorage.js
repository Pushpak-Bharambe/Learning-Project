export const addNewUser = (newData, setConfirmPass) => {
  if (newData.password !== newData.confirmPassword) {
    setConfirmPass("Passwod does not match");
  } else {
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
    if (
      userDetails?.some(
        (el) =>
          el.userName === newData.userName || el.userEmail === newData.userEmail
      )
    ) {
      setConfirmPass(" UserName/UserEmail Already exits");
    } else {
      userDetails.push(newData);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      return true;
    }
  }
};

export const authenticateUser = (userCredentials) => {
  const AuthenticateUser = JSON.parse(
    localStorage.getItem("userDetails")
  )?.find(
    (el) =>
      (el.userName === userCredentials.userNameOrEmail ||
        el.userEmail === userCredentials.userNameOrEmail) &&
      el.password === userCredentials.userPassword
  );

  if (AuthenticateUser) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(AuthenticateUser));
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

export const ForgetUsername = (userEmail) => {
  const users = JSON.parse(localStorage.getItem("userDetails"))?.find((el) => {
    return el.userEmail === userEmail;
  });

  return users?.userName;
};
