package com.example.abibcortes.sns.Register;

import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.toolbox.Volley;
import com.example.abibcortes.sns.Login.LoginActivity;
import com.example.abibcortes.sns.R;

import org.json.JSONException;
import org.json.JSONObject;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);//which xml file this page is working with

        final EditText etName = findViewById(R.id.etName);
        final EditText etAddress = findViewById(R.id.etAddress);
        final EditText etEmail = findViewById(R.id.etEmail);
        final EditText etPassword =  findViewById(R.id.etPassword);

        final EditText etConfirmPass = findViewById(R.id.etConfirmPass);
        final EditText etLat = findViewById(R.id.etLat);
        final EditText etLon = findViewById(R.id.etLon);


        final Button bRegister = (Button) findViewById(R.id.bRegister);


        bRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final String name = etName.getText().toString();
                final String email = etEmail.getText().toString();
                final String address = etAddress.getText().toString();
                final String password = etPassword.getText().toString();
                final String lat = etLat.getText().toString();
                final String lon = etLon.getText().toString();

                final String confirmPass = etConfirmPass.getText().toString();

                Response.Listener<String> responseListener = new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            JSONObject jsonResponse = new JSONObject(response);
                            String mail = jsonResponse.getString("email");

                            if(mail.equals("alreadyInserted")){
                                AlertDialog.Builder builder = new AlertDialog.Builder(RegisterActivity.this);
                                builder.setMessage("User Already Exists!\nTry a different email")
                                        .setNegativeButton("Retry",null)
                                        .create()
                                        .show();
                            }
                            else if ((confirmPass.equals(password))) {
                                Intent loginIntent = new Intent(RegisterActivity.this,LoginActivity.class);

                                RegisterActivity.this.startActivity(loginIntent);
                            } else {
                                AlertDialog.Builder builder = new AlertDialog.Builder(RegisterActivity.this);
                                builder.setMessage("Passwords do not match!")
                                        .setNegativeButton("Retry",null)
                                        .create()
                                        .show();

                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }


                    }
                };

                RegisterRequest registerRequest = new RegisterRequest(name,email,address,password,lat,lon,responseListener);
                RequestQueue queue = Volley.newRequestQueue(RegisterActivity.this);
                queue.add(registerRequest);

            }
        });


    }
}
