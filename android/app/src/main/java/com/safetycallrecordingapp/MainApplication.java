import com.safetycallrecordingapp.CallRecorder; // Add this line

public class MainApplication extends Application implements ReactApplication {
    // ...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CallRecorder() // Add this line
        );
    }
}
