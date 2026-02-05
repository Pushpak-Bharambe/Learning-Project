export const addNewUser = (newData, setConfirmPass) => {
  if (newData.password !== newData.confirmPassword) {
    setConfirmPass("Passwod does not match");
  } else {
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
    if (
      userDetails?.some(
        (el) =>
          el.userName === newData.userName ||
          el.userEmail === newData.userEmail,
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
    localStorage.getItem("userDetails"),
  )?.find(
    (el) =>
      (el.userName === userCredentials.userNameOrEmail ||
        el.userEmail === userCredentials.userNameOrEmail) &&
      el.password === userCredentials.userPassword,
  );

  if (AuthenticateUser) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(AuthenticateUser));
    return true;
  }
  return false;
};

export const forgetPassword = (forgetData) => {
  const user = JSON.parse(localStorage.getItem("userDetails"))?.find(
    (el) => el.userName === forgetData.username,
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

export const AddNewEmployee = (EmployeeData) => {
  const EmpDetails = JSON.parse(localStorage.getItem("EmpDetails")) || [];
  EmpDetails.push(EmployeeData);
  localStorage.setItem("EmpDetails", JSON.stringify(EmpDetails));
};

export const HandleSave = (editEmployee) => {
  const empData = JSON.parse(localStorage.getItem("EmpDetails"));

  const updatedEmpData = empData.map((emp) =>
    emp.EmployeeCode === editEmployee.EmployeeCode ? editEmployee : emp,
  );
  localStorage.setItem("EmpDetails", JSON.stringify(updatedEmpData));
};

export const handleDelete = (selectEmployee) => {
  const empData = JSON.parse(localStorage.getItem("EmpDetails"));

  const DeletedData = empData.filter((emp) => {
    return emp.EmployeeCode !== selectEmployee.EmployeeCode;
  });

  localStorage.setItem("EmpDetails", JSON.stringify(DeletedData));
};
