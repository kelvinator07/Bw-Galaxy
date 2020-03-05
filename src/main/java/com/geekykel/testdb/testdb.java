package com.geekykel.testdb;

import java.sql.Connection;
import java.sql.DriverManager;

public class testdb {

    public static void main(String[] args) {

        String jdbcUrl = "jdbc:postgresql://localhost:5432/bwgalaxy?useSSL=false&serverTimezone=GMT+1";
        String user = "postgres";
        String pass = "12345";

        try {

            System.out.println("Connecting to database: " + jdbcUrl);

            Connection myConn = DriverManager.getConnection(jdbcUrl, user, pass);

            System.out.println("Connection successful!!!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
