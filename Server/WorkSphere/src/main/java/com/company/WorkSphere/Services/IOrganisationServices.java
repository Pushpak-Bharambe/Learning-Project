package com.company.WorkSphere.Services;

import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Users;
import org.apache.catalina.User;
import org.aspectj.weaver.ast.Or;

import java.util.List;

public interface IOrganisationServices {

    public Organisation saveOrganisation(Organisation organisation);


   public  List<Users> fetchUserList(String username);

     public Organisation fetchOrganisationById(Long Id);
}
