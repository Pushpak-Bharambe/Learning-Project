package com.company.WorkSphere.controller;


import com.company.WorkSphere.Services.OrganisationServices;
import com.company.WorkSphere.entity.Organisation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class OrganisationController {

    @Autowired
    private OrganisationServices organisationServices;

    @PostMapping("/organisation")
    public Organisation saveOrganisation(@RequestBody Organisation organisation){
       return  organisationServices.saveOrganisation(organisation);
    }


    @GetMapping("/organisation/{id}")
    public Organisation fetchOrganisationById(@PathVariable("id") Long Id) {
        System.out.println("HIT ID = " + Id);
        return organisationServices.fetchOrganisationById(Id);
    }
}
