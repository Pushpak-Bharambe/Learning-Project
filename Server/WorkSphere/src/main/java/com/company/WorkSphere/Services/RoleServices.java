package com.company.WorkSphere.Services;

import com.company.WorkSphere.entity.Role;
import com.company.WorkSphere.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServices implements IRoleServices{

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> getRoles() {
        return  roleRepository.findAll();
    }
}
