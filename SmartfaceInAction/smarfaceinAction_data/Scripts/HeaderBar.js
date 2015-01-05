function HeaderBar1() {
    this.navigationItem = null;
    this.actionBar = null;
    this.isAndroid = Device.deviceOS == "Android" ? true : false; //A control variable to check the environment is Android Operating System
    //Initilaizes actionbar / navigation item for the page which is provided with the parameter
    this.init = function (page) {
        SMF.UI.StatusBar.color = "#C1392D";
        //Sets ActctionBar for Android
        if (this.isAndroid == true) {
            this.actionBar = page.actionBar;
            this.actionBar.visible = true;
            this.actionBar.backgroundImage = "headerBlog.png";
            this.actionBar.displayHomeAsUpEnabled = true;
            this.actionBar.displayShowHomeEnabled = true;
        } else {
            //Sets NavigationITem for iOS
            this.navigationItem = page.navigationItem;
            SMF.UI.iOS.NavigationBar.visible = true;
            SMF.UI.iOS.NavigationBar.backgroundImage = "headerBlog.png";
            SMF.UI.iOS.NavigationBar.tintColor = "#FFFFFF";
        }
    }
    //Sets the visitble Title text in ActibonBar/NavigationItem
    this.setTitle = function (title) {
        if (this.isAndroid == true) {
            this.actionBar.titleView = {
                type : SMF.UI.TitleViewType.text,
                text : title,
                textSize : 16,
                left : 50,
                alignment : SMF.UI.Alignment.center
            };
        } else {
            this.navigationItem.title = title;
        }
    }
    //Sets the button on right side of the title with the provided text
    this.setRightItem = function () {

        if (Device.deviceOS == "iOS") {
            var rightItem = new SMF.UI.iOS.BarButtonItem({
                    image : "share.png",
                    onSelected : infoPressed
                });
            this.navigationItem.rightBarButtonItems = [rightItem];
        } else {
            var item2 = new SMF.UI.Android.MenuItem({
                    id : "itemRefresh",
                    icon : "share.png",
                    showAsAction : SMF.UI.Android.ShowAsAction.always,
                    onSelected : infoPressed
                });
            this.actionBar.menuItems = [item2];
        }
    }
    this.openSIA = function () {
        if (Device.deviceOS == "iOS") {
            var rightItem = new SMF.UI.iOS.BarButtonItem({
                    image : "inactionpass.png",
                    onSelected : openInAction
                });
            this.navigationItem.rightBarButtonItems = [rightItem];
        } else {
            this.actionBar.displayHomeAsUpEnabled = false;
            this.actionBar.displayShowHomeEnabled = true;
            var item2 = new SMF.UI.Android.MenuItem({
                    id : "itemRefresh",
                    icon : "inactionpass.png",                   
                    showAsAction : SMF.UI.Android.ShowAsAction.always,
                    onSelected : openInAction,
                    title : "SMFinAction"
                });
            this.actionBar.menuItems = [item2];
        }
    }
    // Sets a pressible item to the left of the title
    this.setLeftItem = function () {
        if (this.isAndroid == true) {
            this.actionBar.displayHomeAsUpEnabled = false;
            this.actionBar.displayShowHomeEnabled = true;
            this.actionBar.logo = "navbar_back.png";
            this.actionBar.onHomeIconItemSelected = function () {
                Pages.back();
            }
        } else {
            var leftItem = new SMF.UI.iOS.BarButtonItem({
                    image : "navbar_back.png",
                    onSelected : function () {
                        Pages.back();
                    }
                });
            this.navigationItem.leftBarButtonItems = [leftItem];
        }
    }
    this.setCategoryItem = function () {

        if (this.isAndroid == true) {
            this.actionBar.displayHomeAsUpEnabled = false;
            this.actionBar.displayShowHomeEnabled = true;
            this.actionBar.logo = "menu.png";
            //this.actionBar.icon = "menu.png";
            this.actionBar.onHomeIconItemSelected = openCategory;
        } else {
            var leftItem = new SMF.UI.iOS.BarButtonItem({
                    image : "menu.png",
                    onSelected : openCategory,
                });
            this.navigationItem.leftBarButtonItems = [leftItem];
        }
    }
    this.setCategoryItemHor = function () {
        //menuyatay
        if (Device.deviceOS == 'Android') {
            Pages.pgBlog.actionBar.displayHomeAsUpEnabled = false;
            Pages.pgBlog.actionBar.displayShowHomeEnabled = true;
            Pages.pgBlog.actionBar.logo = "menuyan.png";
            //this.actionBar.icon = "menu.png";
            Pages.pgBlog.actionBar.onHomeIconItemSelected = openCategory;
        } else {
            var leftItemYatay = new SMF.UI.iOS.BarButtonItem({
                    image : "menuyan.png",
                    onSelected : openCategory,
                });
            Pages.pgBlog.navigationItem.leftBarButtonItems = [leftItemYatay];
        }
        //menuyatay
    }
}
function openCategory() {
    if (isAnimate == true) {
        rectBackground.visible = true;
        contCategories.animate({
            property : 'X',
            endValue : 0,
            motionEase : SMF.UI.MotionEase.plain,
            duration : 400,
            onFinish : function () {
                //do your action after finishing the animation
                isAnimate = false;
            }
        });
         
     headerSocial.setCategoryItemHor();
    } else {
        //menunormal
          
            contCategories.animate({
            property : 'X',
            endValue : "-70%",
            motionEase : SMF.UI.MotionEase.plain,
            duration : 400,
            onFinish : function () {
                //do your action after finishing the animation
                isAnimate = true;
                rectBackground.visible = false;
            }
        });
        headerSocial.setCategoryItem();
    }
}

function openInAction() {
    Data.DS_twitterTable.clear();
    Data.notify("Data.DS_twitterTable");
    countTwitter = 20;
    SMF.Net.wcTwitter.URL = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=" + countTwitter + "&screen_name=smartface_io";
    SMF.Net.wcTwitter.run(true);
    Pages.pgDashboard.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.flipFromLeft,
        SMF.UI.TransitionEffectType.push,
        false, //fade effect
        false);
}