package com.company.WorkSphere.repository;


import com.company.WorkSphere.DT0.AddEmployeeRequest;
import com.company.WorkSphere.entity.Organisation;
import com.company.WorkSphere.entity.Users;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {

//    public Users findByusername(String username);



   public  List<Users> findByOrganisation(Organisation organisation);

    public List<Users> findByRole_Name(String roleName);

    public Users findByUsername(String username);

    public List<Users> findAllByManager_id(Long manager);

    public Users findByemail (String email);


}
