package com.company.WorkSphere.Exception;

import com.company.WorkSphere.entity.ErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@ResponseStatus
public class RestResponseEntityExceptionhandler
        extends ResponseEntityExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorMessage> UserNotFoundException(
            UserNotFoundException exception,
            WebRequest request) {

        ErrorMessage message = new ErrorMessage(HttpStatus.NOT_FOUND,exception.getMessage());

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(message);
    }

    @ExceptionHandler(IncorrectPasswordException.class)
    public ResponseEntity<ErrorMessage> IncorrectPasswordException(
            IncorrectPasswordException exception,
            WebRequest request){
        ErrorMessage message = new ErrorMessage(HttpStatus.UNAUTHORIZED, exception.getMessage());

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(message);
    }

}