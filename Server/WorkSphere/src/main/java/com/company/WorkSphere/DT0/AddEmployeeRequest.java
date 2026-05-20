package com.company.WorkSphere.DT0;

import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddEmployeeRequest{

    private String firstName;

  private String  lastName;
   private String employeeCode;
   private String address;
   private String dateOfBirth;
   private String  hireDate;
   private String gender;
    private String department;
    private  String employeeStatus;
   private String position;
    private  String email;
    private Role role;


}
