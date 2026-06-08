package com.company.WorkSphere.Exception;

public class EmployeeCodeAlreadyExistException extends Exception{
    public EmployeeCodeAlreadyExistException(String message) {
        super(message);
    }

    public EmployeeCodeAlreadyExistException() {
    }

    public EmployeeCodeAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public EmployeeCodeAlreadyExistException(Throwable cause) {
        super(cause);
    }

    public EmployeeCodeAlreadyExistException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
