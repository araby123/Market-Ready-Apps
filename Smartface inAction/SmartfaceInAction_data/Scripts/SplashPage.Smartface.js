function SplashPage_Self_OnShow(e) {
    //setting iPhone 4(S) splash. Required by the height
    if (Device.deviceOS == "iOS" && Device.screenHeight === 480) {
        Pages.SplashPage.backgroundImage = "default_splashi4.png";
    }
}