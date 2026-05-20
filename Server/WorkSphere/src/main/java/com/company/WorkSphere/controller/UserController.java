package com.company.WorkSphere.controller;



import com.company.WorkSphere.DT0.AddEmployeeRequest;
import com.company.WorkSphere.JwtUtils.JwtUtil;
import com.company.WorkSphere.Services.OrganisationServices;
import com.company.WorkSphere.Services.UserServices;
import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;


@RestController
public class UserController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserServices userServices;

    @Autowired
    private OrganisationServices organisationServices;

    @PostMapping("/users")
    public Users saveUser( @RequestHeader("Authorization") String token, @RequestBody Users users){
        String jwt = token.substring(7);
        String username =  jwtUtil.extractUsername(jwt);

        return userServices.saveUsers(users,username);
    }


    @GetMapping("/users")
    public List<Users> getUsers(
            @RequestHeader("Authorization") String token
    ) {

        String jwt = token.substring(7);

        String username = jwtUtil.extractUsername(jwt);

        return userServices.fetchUserList(username);
    }

//    @GetMapping("/organisation")
//    public Long fetchOrgannisationIdByName(@RequestParam("name") String name){
//        return userServices.fetchOrgannisationIdByName(name);
//    }

    @GetMapping("/managers")
    public List<Users> getManagers() {
        return userServices.getManagers();
    }


    @GetMapping("/me")
    public Users getLoggedInUser(Principal principal) {
        String username = principal.getName(); // comes from Spring Security
        return userServices.getUserByUsername(username);
    }


    @GetMapping("/manageremployee")
    public List<Users> getManagerEmployee(  @RequestHeader("Authorization") String token){
        String jwt = token.substring(7);

        String username = jwtUtil.extractUsername(jwt);

        return  userServices.getManagerEmployee(username);
    }


}
