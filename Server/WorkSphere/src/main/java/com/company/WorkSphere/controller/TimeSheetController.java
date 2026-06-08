package com.company.WorkSphere.controller;


import com.company.WorkSphere.JwtUtils.JwtUtil;
import com.company.WorkSphere.Services.TimeSheetServices;
import com.company.WorkSphere.entity.TimeSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TimeSheetController {


    @Autowired
     private TimeSheetServices timeSheetServices;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("timeSheet")
    public TimeSheet saveTimeSheet(@RequestHeader("Authorization") String token , @RequestBody TimeSheet timeSheet){

        String jwt = token.substring(7);

        String username = jwtUtil.extractUsername(jwt);

        return timeSheetServices.saveTimeSheet(timeSheet , username);
    }


    @GetMapping("/gettimeSheet/{id}")
    public List<TimeSheet> getTimeSheet(@PathVariable ("id") Long Id){
        return timeSheetServices.getTimeSheet(Id);
    }

}
