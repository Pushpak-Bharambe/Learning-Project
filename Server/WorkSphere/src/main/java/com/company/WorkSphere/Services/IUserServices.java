package com.company.WorkSphere.Services;

import com.company.WorkSphere.DT0.AddEmployeeRequest;
import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Users;
import com.company.WorkSphere.Exception.IncorrectPasswordException;
import com.company.WorkSphere.Exception.UserNotFoundException;

import java.util.List;

public interface IUserServices {



    public Users AuthUser(String username, String Password) throws UserNotFoundException, IncorrectPasswordException;
   public Users saveUsers(Users users , String username);

  public   List<Users> fetchUserList(String username);

  public List<Users>  getManagerEmployee(String username) ;


  public List<Users> getManagers();


   public  Users getUserByUsername(String username);

    public Users forgetpassword(Users users);

   public  String forgetUserName(String email);

    public Users updateUser(Long id, Users users);

    public void deleteUser(Long Id);
}
