package com.company.WorkSphere.Services;

import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Users;
import com.company.WorkSphere.repository.OrganisationRepository;

import com.company.WorkSphere.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrganisationServices implements IOrganisationServices {

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Organisation saveOrganisation(Organisation organisation) {
        return  organisationRepository.save(organisation);
    }




    @Override
    public List<Users> fetchUserList(String username) {

        Users loggedInUser = userRepository.findByUsername(username);

        return userRepository.findByOrganisation(
                loggedInUser.getOrganisation()
        );
    }


    @Override
    public Organisation fetchOrganisationById(Long Id) {
        return organisationRepository.findById(Id).orElse(null);

    }

}
