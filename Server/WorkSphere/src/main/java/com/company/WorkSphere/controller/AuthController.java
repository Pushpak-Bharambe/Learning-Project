package com.company.WorkSphere.controller;

import com.company.WorkSphere.DT0.Login;
import com.company.WorkSphere.Services.IUserServices;
import com.company.WorkSphere.JwtUtils.JwtUtil;
import com.company.WorkSphere.Exception.IncorrectPasswordException;
import com.company.WorkSphere.Exception.UserNotFoundException;
import com.company.WorkSphere.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/auth")

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private IUserServices userServices;




    @PostMapping("/login")
    public String AuthUser(@RequestBody Login login) throws  IncorrectPasswordException, UserNotFoundException {

//        System.out.println(login.getUserName());

        try{

        String s = "";
Users user = userServices.AuthUser(
        login.getUserName(),
        login.getPassword());

        if(user != null)
        {
            s = jwtUtil.generateToken(user.getUsername());


        }
        return s;
        }catch (IncorrectPasswordException e){
            throw new IncorrectPasswordException(e.getMessage());

        }
        catch (UserNotFoundException e){
            throw new UserNotFoundException("abcd");
        }
    }


}
