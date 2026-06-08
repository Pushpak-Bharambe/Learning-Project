package com.company.WorkSphere.Exception;

public class UserNameAlreadyExistException extends Exception{
    public UserNameAlreadyExistException() {
    }

    public UserNameAlreadyExistException(String message) {
        super(message);
    }

    public UserNameAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserNameAlreadyExistException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public UserNameAlreadyExistException(Throwable cause) {
        super(cause);
    }
}
