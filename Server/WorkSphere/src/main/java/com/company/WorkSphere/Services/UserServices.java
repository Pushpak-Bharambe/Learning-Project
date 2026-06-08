package com.company.WorkSphere.Services;

import com.company.WorkSphere.DT0.AddEmployeeRequest;
import com.company.WorkSphere.Exception.EmployeeCodeAlreadyExistException;
import com.company.WorkSphere.Exception.UserNameAlreadyExistException;
import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Role;
import com.company.WorkSphere.entity.Users;
import com.company.WorkSphere.Exception.IncorrectPasswordException;
import com.company.WorkSphere.Exception.UserNotFoundException;
import com.company.WorkSphere.repository.RoleRepository;
import com.company.WorkSphere.repository.UserRepository;

import jakarta.persistence.Id;
import org.apache.catalina.Manager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserServices implements IUserServices {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrganisationServices organisationServices;

    @Autowired
    private RoleRepository roleRepository;



    @Override
    public Users AuthUser(String username, String password)
            throws UserNotFoundException, IncorrectPasswordException {
            Users user = userRepository.findByUsername(username);

            if (userRepository.findByUsername(username) == null) {
                throw new UserNotFoundException(
                        "User Not Available"
                );
            }

            if (!user.getPassword().equals(password)) {
                throw new IncorrectPasswordException("Incorrect password");
            }

            return user;


    }

    @Override
    public Users saveUsers(Users users, String username) throws EmployeeCodeAlreadyExistException, UserNameAlreadyExistException {

      Users LoggedInUser =   userRepository.findByUsername(username);
        users.setOrganisation(LoggedInUser.getOrganisation());


        Long roleId = users.getRole().getId();

        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new RuntimeException("Role not found"));



        Long managerId = users.getManager().getId();


        if (users.getManager() != null &&
                users.getManager().getId() != null){
             Users manager = userRepository.findById(managerId)
                     .orElseThrow(() -> new RuntimeException("Manager not found"));


             users.setManager(manager);

             users.setRole(role);}
        else{
            users.setManager(null);
        }

        if (userRepository.existsByEmployeecode(users.getEmployeecode())) {
            throw new EmployeeCodeAlreadyExistException("Employee code is already used");
        }


        Users existingUser = userRepository.findByUsername(users.getUsername());

        if (existingUser != null) {
            throw new UserNameAlreadyExistException("UserName Already Exists");
        }
        return userRepository.save(users);
    }

    @Override
    public List<Users> fetchUserList(String username) {

        Users loggedInUser = userRepository.findByUsername(username);

        Organisation organisation = loggedInUser.getOrganisation();

        return userRepository.findByOrganisation(organisation);
    }



    @Override
    public List<Users> getManagerEmployee(String username) {

        Users manager = userRepository.findByUsername(username);

        return userRepository.findAllByManager_id(manager.getId());
    }

//    @Override
//    public Users getUserByUserName(String userName) {
//        return userRepository.findByusername(userName);
//    }


    @Override
    public List<Users> getManagers() {
        return userRepository.findByRole_Name("Manager");
    }

    @Override
    public Users getUserByUsername(String username) {
        return userRepository.findByUsername(username);

    }

    @Override
    public Users forgetpassword(Users users) {

        String username = users.getUsername();

        Users existingUser = userRepository.findByUsername(username);


         existingUser.setPassword(users.getPassword());

         return userRepository.save(existingUser);
    }

    @Override
    public String forgetUserName(String email) {

        Users existingUser = userRepository.findByemail(email);

        return existingUser.getUsername();
    }

    @Override
    public Users updateUser(Long Id, Users users) {

        Users existingUser = userRepository.findById(Id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setFirstname(users.getFirstname());
        existingUser.setLastname(users.getLastname());
        existingUser.setDepartment(users.getDepartment());
        existingUser.setEmail(users.getEmail());
        existingUser.setRole(users.getRole());
        existingUser.setEmployeestatus(users.getEmployeestatus());
        existingUser.setHiredate(users.getHiredate());


        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(Long Id) {

         userRepository.deleteById(Id);
    }
}
