package com.company.WorkSphere.Services;

import com.company.WorkSphere.entity.TimeSheet;

import java.util.List;

public interface ITimeSheetServices {

    public TimeSheet saveTimeSheet(TimeSheet timeSheet , String username);

  public   List<TimeSheet> getTimeSheet(Long Id);
}
