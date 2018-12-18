package com.example.abibcortes.sns.Register;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.toolbox.StringRequest;

import java.util.Map;
import java.util.HashMap;

public class RegisterRequest extends StringRequest {
    private static final String REGISTER_REQUEST_URL = "http://10.0.2.2:80/register";
    Map<String,String> params;

    public RegisterRequest(String name, String email,String address,String password,String lat,String lon, Response.Listener<String> listener){
        super(Method.POST,REGISTER_REQUEST_URL,listener,null);
        params = new HashMap<>();

        params.put("name",name);
        params.put("email",email);
        params.put("address",address);
        params.put("password",password);

        params.put("lat",lat);
        params.put("lon",lon);



    }
    @Override
    public Map<String,String> getParams(){
        return params;
    }




}
