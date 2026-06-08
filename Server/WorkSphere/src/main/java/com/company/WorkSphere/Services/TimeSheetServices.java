package com.company.WorkSphere.Services;

import com.company.WorkSphere.entity.TimeSheet;
import com.company.WorkSphere.entity.Users;
import com.company.WorkSphere.repository.TimeSheetRepository;
import com.company.WorkSphere.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;


@Service
public class TimeSheetServices implements ITimeSheetServices {


    @Autowired
    private TimeSheetRepository timeSheetRepository;

    @Autowired
    private UserRepository userRepository;

    public TimeSheet saveTimeSheet(TimeSheet timeSheet , String username) {

        Users loggedInUser = userRepository.findByUsername(username);



        timeSheet.setUsers( loggedInUser);

        return timeSheetRepository.save(timeSheet);

    }

    @Override
    public List<TimeSheet> getTimeSheet(Long Id) {
        return timeSheetRepository.findByUsersId(Id);
    }
}
