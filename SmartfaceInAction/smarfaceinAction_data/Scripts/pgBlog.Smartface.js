function pgBlog_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function pgBlog_Self_OnShow() {
    headerSocial.init(this);
    headerSocial.setCategoryItem();
    headerSocial.openSIA();
    if (firstRun == true) {
        if (Device.connectionType != 0)
            dlg.show();
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        firstRun = false;
        //admob for ios should create once for each page
        if (Device.deviceOS == 'iOS')
            createAdmob(this);
    }
    //admob for android should create everytime for each page shown
    if (Device.deviceOS == 'Android') {
        createAdmob(this);
    }
}