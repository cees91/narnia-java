package com.example.narnia.narnia.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class WorldIsFullException extends RuntimeException {
    public WorldIsFullException() {
        super();
    }

    public WorldIsFullException(String message) {
        super(message);
    }

    public WorldIsFullException(String message, Throwable cause) {
        super(message, cause);
    }
}