package com.flarehealth.capacitorimagecropper;

import android.Manifest;
import android.app.Activity;
import android.net.Uri;

import org.apache.commons.io.IOUtils;

import com.getcapacitor.AndroidProtocolHandler;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;

import com.yalantis.ucrop.UCrop;
import com.yalantis.ucrop.model.AspectRatio;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import androidx.activity.result.ActivityResult;

@CapacitorPlugin(
    name = "CapacitorImageCropper",
    permissions = {
      @Permission(
        alias = "storage",
        strings = {Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE}
      )
    }
)
public class CapacitorImageCropperPlugin extends Plugin {

    private CapacitorImageCropper implementation = new CapacitorImageCropper();

    @ActivityCallback
    protected void handleCrop(PluginCall call, ActivityResult result) {
      JSObject object = new JSObject();

      if (result.getResultCode() == Activity.RESULT_OK) {
        // Grabs the cropped image URI and passes it back to Capacitor webview.
        final Uri resultUri = UCrop.getOutput(result.getData());
        object.put("imgPath", resultUri);
        call.resolve(object);
      } else {
        call.reject("Error occurred cropping photo.");
      }
    }

    @PluginMethod
    public void crop(PluginCall call) {
      String src = call.getString("uri");
      File dest = new File(getActivity().getCacheDir().getAbsolutePath() + "/CAP_CROP.jpg");
      boolean isAppPath = false;

      if (src.contains("~")) {
        isAppPath = true;
        src = src.replace("~", "");
      }

      AndroidProtocolHandler protocolHandler = new AndroidProtocolHandler(getActivity().getApplicationContext());

      try {
        File tempSource;
        if (isAppPath) {
          File f = new File("file:///android_asset/public" + src);
          InputStream is = protocolHandler.openAsset("public" + src);
          tempSource = new File(getActivity().getCacheDir().getAbsolutePath() + f.getName());
          FileOutputStream os = new FileOutputStream(tempSource);
          IOUtils.copy(is, os);
          os.close();
        } else {
          if (src.startsWith("file:")) {
            Uri uri = Uri.parse(src);
            tempSource = new File(uri.getPath());
          } else {
            tempSource = new File(src);
          }
        }

        // Set options for UCrop 
        UCrop.Options options = new UCrop.Options();
        options.setFreeStyleCropEnabled(true);
        options.setAspectRatioOptions(0,
          new AspectRatio("7:4", 7, 4)
        );
        options.setMaxBitmapSize(10000);
        options.setCompressionQuality(100);
        UCrop crop = UCrop.of(Uri.fromFile((tempSource)), Uri.fromFile(dest)).withOptions(options);

        // Start the UCrop activity and calls the "handleCrop" activity call back
        startActivityForResult(call, crop.getIntent(getActivity()), "handleCrop");
      }
      catch(IOException e) {
        call.reject(e.getLocalizedMessage());
      }
    }
}
