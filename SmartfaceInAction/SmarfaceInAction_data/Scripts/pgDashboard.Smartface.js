function pgDashboard_Self_OnKeyPress(e) {
    // only Android,  to capture back button press
    if (e.keyCode === 4) {
        Application.exit();
    }
}
//event function for displaying info in navigation/action bar.
function showdlgDashboard() {
    Pages.back();
}
function pgDashboard_Self_OnShow(e) {
    isUsingSwipe = false; //defined in DefinitionsOfNews.js
    var title = "";
    this.cntBottom.cntTweet.rbTweets.allowDeletingItems = false;
    //for header items
    header.init(this, "list_header.png", "#000000", lang.pgDashboardTitle);
   //SMF.UI.iOS.NavigationBar.backgroundColor = statusbarColor1;
    if (Device.deviceOS == "Android") {
        Pages.pgDashboard.actionBar.displayShowHomeEnabled = true;
        Pages.pgDashboard.actionBar.displayHomeAsUpEnabled = true;
        Pages.pgDashboard.actionBar.logo = "logodash.png";
        header.setRightItemDash("socialpass.png");
    } else {
        header.setRightItemDash("socialpass.png");
    }
    header.setLeftItemBos();
    //this is for scrolling repatbox to the most top scroll position
    this.cntBottom.cntTweet.rbTweets.setTopIndex(0, 0, 0);
}
function pgDashboard_lblTweetAnimationArea_OnTouchEnded(e) {
    //in this function expansion of bottom area to top is handled.
    //this motion is done with animation
    var animationDuration = 300; //in miliseconds
    if (!isAnimateUp) {
        Pages.pgDashboard.cntBottom.cntTweet.ImageArrow.image = "arrowdown.png";
        Pages.pgDashboard.cntBottom.cntTweet.animate({
            property : 'Y',
            endValue : 0,
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : animationDuration,
            OnFinish : function () {
                //the flag has to be changed when animation is finished
                isAnimateUp = true;
            }
        });
    } else {
        Pages.pgDashboard.cntBottom.cntTweet.ImageArrow.image = "arrowup.png";
        Pages.pgDashboard.cntBottom.cntTweet.animate({
            property : 'Y',
            endValue : "56%", //original position
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : animationDuration,
            OnFinish : function () {
                //the flag has to be changed when animation is finished
                isAnimateUp = false;
            }
        });
    }
}
function pgDashboard_rbTweets_OnRowRender(e) {
    //this function changes properties of the row just before they are seen by the end user
    //as the index of the data source and the repeatbox row index are the same
    //e.rowIndex can be used also matchup with the source object
    this.lblTwit.text = resObjGetTwitter[e.rowIndex].text;
    this.lblScreenName.text = resObjGetTwitter[e.rowIndex].user.name;
    this.lblUserName.text = "@" + resObjGetTwitter[e.rowIndex].user.screen_name;
    this.imgProfilePhoto.image = "https://pbs.twimg.com/profile_images/500261465475932161/RwQkXIj9_400x400.png";
}
function pgDashboard_rbTweets_OnSelectedItem(e) {
    //checks if this URL can be handled by device. Such as openning in another app
    canOpen = Device.canOpenUrl(url);
    if (canOpen) {
        //first go to service and get the token. In success call the twitter app
        Application.call({
            app : "twitter://user?screen_name=smartface_io",
            data : null
        });
    } else {
        //if device cannot handle the URL, than opens the browser
        SMF.Net.browseOut("https://twitter.com/smartface_io");
    }
    //logging the analytics action
    SES.Analytics.eventLog("Twitter", '{\"function\":\"pgDashboard_RepeatBox1_OnSelectedItem\"}');
}
function pgDashboard_btnCanvas_OnPressed(e) {
    //opens the canvas page
    if (Device.deviceOS === "Android") {
        //if the device is android and if you do not want to see the change animation of
        //actionBar, this header has to be changed before the page is shown
        header.init(Pages.pgCanvas1, canvasHeader, canvasStatusBarColor, lang.pgCanvas1);
        header.setLeftItem(homeBack);
        header.setRightItem(Dialogs.dlgCanvasInfo);
    }
    //animation parameters are given
    Pages.pgCanvas1.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.rightToLeft,
        SMF.UI.TransitionEffectType.push,
        false, //fade effect
        false); //reseting the page to original values
    //logging the analytics action
    SES.Analytics.eventLog("Canvas", '{\"function\":\"pgDashboard_btnCanvas_OnPressed\"}');
}
function pgDashboard_btnMap_OnPressed(e) {
    //opens the map page
    if (Device.deviceOS == "Android") {
        //if the device is android and if you do not want to see the change animation of
        //actionBar, this header has to be changed before the page is shown
        header.init(Pages.pgMap1, mapHeader, mapStatusbarColor, lang.map);
        header.setLeftItem(homeBack);
        header.setRightItem(Dialogs.dlgMap);
    }
    //animation parameters are given
    Pages.pgMap1.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.rightToLeft,
        SMF.UI.TransitionEffectType.push,
        false, //fade effect
        false); //reseting the page to original values
    //logging the analytics action
    SES.Analytics.eventLog("Map", '{\"function\":\"pgDashboard_btnMap_OnPressed\"}');
}
function pgDashboard_btnListView_OnPressed(e) {
    //opens the list view page, but
    //before opening the page gets the data
    //if the date is valid, then proceeds
    Dialogs.dlgHomePgLoading.show(); //common waiting dialog to cut user interaction
    pageNum = 1;
    newsArrayList = [];
    shareListViewNews.news = [];
    Data.DS_News.clear();
    Data.wcListView_InDSet.rowNumber = rowNum;
    Data.wcListView_InDSet.pagenumber = 1;
    SMF.Net.wcListView.run();
    if (Device.deviceOS === "Android") {
        header.init(Pages.pgListView, listHeader, listStatusbarColor, lang.pgListViewTitle);
        header.setLeftItem(homeBack);
        header.setRightItem(Dialogs.dlgListViewInfo);
    }
    SES.Analytics.eventLog("ListView", '{\"function\":\"pgDashboard_btnListView_OnPressed\"}');
    if (firstRunListWebclient === true) {
        Data.wcSquareView_InDSet.rowNumber = 21;
        Data.wcSquareView_InDSet.pagenumber = 1;
        SMF.Net.wcSquareView.run();
    }
}
function pgDashboard_btnForms_OnPressed(e) {
    //opens the login form page
    if (Device.deviceOS === "Android") {
        //if the device is android and if you do not want to see the change animation of
        //actionBar, this header has to be changed before the page is shown
        header.init(Pages.pgLogin, formHeader, formStatusbarColor, lang.login);
        header.setLeftItem(homeBack);
        header.setRightItem(Dialogs.dlgLogin);
    }
    //animation parameters are given
    Pages.pgLogin.show(SMF.UI.MotionEase.accelerating,
        SMF.UI.TransitionEffect.rightToLeft,
        SMF.UI.TransitionEffectType.push,
        false, //fade effect
        false); //reseting the page to original values
    SES.Analytics.eventLog("Forms", '{\"function\":\"pgDashboard_btnForms_OnPressed\"}');
}
function pgDashboard_rbTweets_OnPullDown(e) {
    //refreshes all tweets
    Data.DS_twitterTable.clear();
    SMF.Net.wcTwitter.run(true);
}
function pgDashboard_cntTweetHeader_OnTouchEnded(e) {
    //scrolls the repatbox index to top for tweets
    Pages.pgDashboard.cntBottom.cntTweet.rbTweets.setTopIndex(0, 0, 0);
}
function pgDashboard_rbTweets_OnPullUp(e) {
    //imcreases the count of items
    countTwitter += 20;
    SMF.Net.wcTwitter.URL = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=" + countTwitter + "&screen_name=smartface_io";
    SMF.Net.wcTwitter.run(true);
}