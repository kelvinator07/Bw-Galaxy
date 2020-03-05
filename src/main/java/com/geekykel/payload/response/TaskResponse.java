package com.geekykel.payload.response;

public class TaskResponse {

    private String message;

    public TaskResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
