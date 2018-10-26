package com.example.abibcortes.sns;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);//which xml file this page is working with

        final EditText etName = (EditText) findViewById(R.id.etName);
        final EditText etAdress = (EditText) findViewById(R.id.etAddress);
        final EditText etEmail = (EditText) findViewById(R.id.etEmail);
        final EditText etPassword = (EditText) findViewById(R.id.etPassword);

        final Button bRegister = (Button) findViewById(R.id.bRegister);
    }
}
