package com.example.abibcortes.sns;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import android.content.Intent;
import android.view.View;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        final EditText etUsername = (EditText) findViewById(R.id.etUsername);
        final EditText etLoginPassword = (EditText) findViewById(R.id.etLoginPassword);

        final Button bLogin = (Button) findViewById(R.id.bLogin);
        final TextView tRegister = (TextView) findViewById(R.id.tRegister);

        tRegister.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v){
                Intent registerIntent = new Intent(LoginActivity.this,RegisterActivity.class);
                LoginActivity.this.startActivity(registerIntent);

            }


        });


    }

}
