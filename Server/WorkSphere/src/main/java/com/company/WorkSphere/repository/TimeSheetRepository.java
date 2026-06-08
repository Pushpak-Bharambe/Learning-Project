package com.company.WorkSphere.repository;

import com.company.WorkSphere.entity.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeSheetRepository extends JpaRepository<TimeSheet , Long> {

    public List<TimeSheet> findByUsersId(Long userId);
}
