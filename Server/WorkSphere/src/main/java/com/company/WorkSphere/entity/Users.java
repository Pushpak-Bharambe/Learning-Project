package com.company.WorkSphere.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String username;
    private String address;
    private String department;

    @ManyToOne(fetch = FetchType.LAZY )
    @JoinColumn(name = "Manager_id")
    private Users manager;

    @ManyToOne
    @JoinColumn(name = "Oraganisation_id")
    private Organisation organisation;

    @ManyToOne
    @JoinColumn(name = "Role_id")
    private Role role;


    @Column(name = "employeecode", unique = true)
    private String employeecode;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    private Gender gender;



    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateofbirth;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date hiredate;

    private String position;


    private String employeestatus;


}
