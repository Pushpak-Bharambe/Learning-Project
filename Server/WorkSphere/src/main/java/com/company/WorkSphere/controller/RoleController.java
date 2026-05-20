package com.company.WorkSphere.controller;


import com.company.WorkSphere.Services.RoleServices;
import com.company.WorkSphere.Services.UserServices;
import com.company.WorkSphere.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController {

    @Autowired
    private RoleServices roleServices;

    @GetMapping("/roles")
    public List<Role> getRoles(){

        return roleServices.getRoles();
    }

}
