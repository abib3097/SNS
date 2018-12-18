package com.example.abibcortes.sns.Login;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.toolbox.StringRequest;

import java.util.Map;
import java.util.HashMap;

public class HomeFragmentRequest extends StringRequest {
    private static final String MESSAGES_REQUEST_URL = "http://10.0.2.2:80/messages";


    public HomeFragmentRequest( Response.Listener<String> listener){
        super(Method.GET,MESSAGES_REQUEST_URL,listener,null);






    }






}