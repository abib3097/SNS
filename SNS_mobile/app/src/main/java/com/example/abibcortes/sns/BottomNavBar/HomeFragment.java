package com.example.abibcortes.sns.BottomNavBar;

import android.app.Activity;
import android.app.Fragment;
import android.content.Intent;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.ShareCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.android.volley.Response;
import com.android.volley.Response.Listener;
import com.example.abibcortes.sns.Login.HomeFragmentRequest;


import org.jetbrains.annotations.Nullable;
import org.json.JSONException;
import org.json.JSONObject;


public class HomeFragment extends android.support.v4.app.Fragment {

//    final View view = inflater.inflate(R.layout.fragment_home,
//            container, false);

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container,@Nullable Bundle savedInstanceState) {
        return super.onCreateView(inflater, container, savedInstanceState);


//
//        Response.Listener<String> responseListener = new Response.Listener<String>(){
//            @Override
//            public void onResponse(String response) {
//                try{
//                    JSONObject jsonResponse = new JSONObject(response);
//                    final int author = jsonResponse.getInt("pemail");
//                    final int category = jsonResponse.getInt("category");
//                    final int message = jsonResponse.getInt("message");
//                    final int created = jsonResponse.getInt("stime");
//                    view.setId(author);
//                    view.setId(category);
//                    view.setId(message);
//                    view.setId(created);
//
//
//
//                }catch(JSONException e){
//                    e.printStackTrace();
//                }
//            }
//        };
//
//        HomeFragmentRequest  homeFragmentRequest = new HomeFragmentRequest(responseListener);



    }




}
