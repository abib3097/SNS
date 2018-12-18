package com.example.abibcortes.sns.Login;


import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import android.content.Intent;
import android.view.View;

import com.android.volley.RequestQueue;
import com.android.volley.Response;

import org.json.JSONException;
import org.json.JSONObject;

import com.android.volley.toolbox.Volley;
import com.example.abibcortes.sns.BottomNavBar.BottomNavBar;
import com.example.abibcortes.sns.R;
import com.example.abibcortes.sns.Register.RegisterActivity;

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

        bLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String email = etUsername.getText().toString();
                final String password = etLoginPassword.getText().toString();


                Response.Listener<String> responseListener = new Response.Listener<String>(){
                    @Override
                    public void onResponse(String response) {
                        try {
                            JSONObject jsonResponse = new JSONObject(response);
                            String success = jsonResponse.getString("email");
                            String pass = jsonResponse.getString("encrypted_password");

                            if(success.equals(email)){
                                if(pass.equals("wrongPass")){
                                    AlertDialog.Builder builder = new AlertDialog.Builder(LoginActivity.this);
                                    builder.setMessage("Wrong Password!")
                                            .setNegativeButton("Retry",null)
                                            .create()
                                            .show();

                                }
                                else {
                                    Intent in = getIntent();
                                    Intent loginIntent = new Intent(LoginActivity.this,BottomNavBar.class);
                                    loginIntent.putExtra("email",email);
                                    LoginActivity.this.startActivity(loginIntent);

                                }

                            }
                            else {
                                AlertDialog.Builder builder = new AlertDialog.Builder(LoginActivity.this);
                                builder.setMessage("User does not exist!")
                                        .setNegativeButton("Retry",null)
                                        .create()
                                        .show();
                            }


                        } catch (JSONException e) {
                            e.printStackTrace();
                        }


                    }
                };

                LoginRequest loginRequest = new LoginRequest(email,password,responseListener);
                RequestQueue queue = Volley.newRequestQueue(LoginActivity.this);
                queue.add(loginRequest);
            }
        });


    }

}
