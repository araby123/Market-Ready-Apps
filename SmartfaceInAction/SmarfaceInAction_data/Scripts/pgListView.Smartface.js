function pgListView_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.pgDashboard.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.leftToRight, SMF.UI.TransitionEffectType.push, false, false);
    }
}
// setting which open dialog
function showDlgListViewInfo() {
    Dialogs.dlgListViewInfo.show();
}
function pgListView_Self_OnShow() {
    Pages.pgListView.rpbxLine.allowDeletingItems = false;
    Pages.pgListView.rpbxSquare.allowDeletingItems = false;
    Pages.pgListView.rpbxBoxed.allowDeletingItems = false;
    var title = lang.pgListViewTitle;
    if (Device.deviceOS == "Android") {
        header.init(this, listHeader, listStatusbarColor, title);
        header.setLeftItem(homeBack);
    } else {
        // setting iOS NavigationBar
        header.init(this, listHeader, listStatusbarColor, title);
        header.setLeftItem(homeBack);
        header.setRightItem(showDlgListViewInfo);
        //For RepeatBox Swipe item to delete
        var itemDelete = new SMF.UI.RepeatboxSwipeItem({
                width : "25%",
                height : "83.5%",
                left : "75%",
                top : "16.5%",
                text : lang.deleteNews,
                fontColor : "#dddddd",
                pressedFontColor : "#ffffff",
                fillColor : "#ff0000",
                onSelected : function (e) {
                    //Delete row from newsArrayList
                    Data.DS_News.seek(e.rowIndex);
                    shareListViewNews.news.splice(e.rowIndex, 1);
                    Pages.pgListView.rpbxLine.deleteAnimationType = SMF.UI.RepeatBoxRowAnimation.left;
                    Pages.pgListView.rpbxLine.deleteRow(0, e.rowIndex);
                    setDeleteRowTime();
                }
            });
        var itemShare = new SMF.UI.RepeatboxSwipeItem({
                width : "25%",
                height : "83.5%",
                left : "50%",
                top : "16.5%",
                text : lang.shareNews,
                fontColor : "#ffffff",
                pressedFontColor : "#ffffff",
                fillColor : "#2b92b5",
                onSelected : function (e) {
                    Dialogs.dlgHomePgLoading.show();
                    //Sending image,title and content
                    var shareTitle = shareListViewNews.news[e.rowIndex].title;
                    var shareDesc = shareListViewNews.news[e.rowIndex].description;
                    var imgUrl = shareListViewNews.news[e.rowIndex].image[0].url;
                    Pages.pgListView.imgShare.image = shareListViewNews.news[e.rowIndex].image[0].url;
                    var shareImg = new SMF.Image({
                            imageUri : Pages.pgListView.imgShare.image,
                            onSuccess : function (e) {
                                //image details can be shown like
                                //alert(e.width + " " + e.height + " " + e.imageUri);
                            },
                            onError : function (e) {
                                alert(lang.applicationError);
                            }
                        });
                    var items = [shareDesc, shareImg];
                    Social.share({
                        items : items,
                        keys : {
                            "subject" : shareTitle
                        },
                        onSuccess : function (e) {},
                        exclude : [
                            Social.ActivityType.assignToContact,
                            Social.ActivityType.saveToCameraRoll
                        ],
                        onError : function (e) {
                            alert("Error: " + e.message);
                        }
                    });
                    Dialogs.dlgHomePgLoading.close();
                }
            });
        var items = [itemDelete, itemShare];
        Pages.pgListView.rpbxLine.setSwipeItems(items);
    }
    Dialogs.dlgHomePgLoading.close();
}
function setDeleteRowTime() {
    timeoutRow = setTimeout(function () {
            Data.notify("Data.DS_News");
            cancelDeleteRowTime();
        }, 500);
}
function cancelDeleteRowTime() {
    clearTimeout(timeoutRow);
}
function pgListView_imgLineInactive_OnTouch(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxLine.setTopIndex(0, 0, 100);
    homePageSelectTab(this);
    SES.Analytics.eventLog("Show Linelist", '{\"function\":\"pgListView_imgLineInactive_OnTouch"}');
}
function pgListView_imgSquareInactive_OnTouch(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxSquare.setTopIndex(0, 0, 100);
    homePageSelectTab(this);
    SES.Analytics.eventLog("Show Squarelist", '{\"function\":\"pgListView_imgSquareInactive_OnTouch"}');
}
function pgListView_imgBoxedInactive_OnTouch(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxBoxed.setTopIndex(0, 0, 100);
    homePageSelectTab(this);
    SES.Analytics.eventLog("Show Boxedlist", '{\"function\":\"pgListView_imgBoxedInactive_OnTouch"}');
}
function pgListView_rpbxLine_OnRowRender(e) {
    Pages.pgListView.rpbxLine.imgLine.changeAnimation = "None";
    Pages.pgListView.rpbxLine.imgLine.image = "empty_photo.png"; // setting default image
    Pages.pgListView.rpbxLine.imgLabelBackground.changeAnimation = "fade"; // when changing image , causing good transition with animated
    Pages.pgListView.rpbxLine.imgLine.changeAnimation = "fade"; // when changing image , causing good transition with animated
    Pages.pgListView.rpbxLine.lblLine.text = shareListViewNews.news[e.rowIndex].title;
    Pages.pgListView.rpbxLine.imgLine.image = shareListViewNews.news[e.rowIndex].image[0].url;
}
function pgListView_rpbxBoxed_OnRowRender(e) {
    this.imgBoxed.changeAnimation = "None";
    this.imgBoxed.image = "empty_photo.png"; // setting default image
    this.imgBoxed.changeAnimation = "fade"; // when changing image , causing good transition with animated
    var index = e.rowIndex;
    // filling data to objects
    var newsObject = newsArray[index];
    this.imgBoxed.image = newsObject.image[0].url;
}
function pgListView_rpbxSquare_OnRowRender(e) {
    this.imgSquareLeft.changeAnimation = "None";
    this.imgSquareLeft.image = "empty_photo.png"; // setting default image
    this.imgSquareLeft.changeAnimation = "fade"; // when changing image , causing good transition with animated
    var index = 2 * e.rowIndex;
    // filling data to objects
    var newsObject1 = newsArray[index];
    this.imgSquareLeft.image = newsObject1.image[0].url;
    this.lblTitleSquareLeft.text = newsObject1.title;
    // to divide row 2 part
    if (newsArray.length > index + 1) {
        this.imgSquareRight.changeAnimation = "None";
        this.imgSquareRight.image = "empty_photo.png";
        this.imgSquareRight.changeAnimation = "fade"; // when changing image , causing good transition with animated
        this.imgSquareRight.visible = true;
        this.imgSquareRightOverlay.visible = true;
        this.lblTitleSquareRight.visible = true;
        var newsObject2 = newsArray[index + 1];
        this.imgSquareRight.image = newsObject2.image[0].url;
        this.lblTitleSquareRight.text = newsObject2.title;
    } else {
        this.imgSquareRight.visible = false;
        this.imgSquareRightOverlay.visible = false;
        this.lblTitleSquareRight.visible = false;
    }
}
function pgListView_rpbxLine_OnSelectedItem(e) {
    // setting position of scrollview
    Pages.pgLineStyle.svNewsContentPager.scrollX = Device.screenWidth * e.rowIndex;
    var startingIndex;
    if (e.rowIndex > 0 && e.rowIndex < shareListViewNews.news.length - 1) {
        startingIndex = e.rowIndex - 1;
        lineStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 1);
        lineStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex;
        lineStyleNewsScrollViews[2].left = Device.screenWidth * (e.rowIndex + 1);
    } else if (e.rowIndex == 0) {
        startingIndex = e.rowIndex;
        lineStyleNewsScrollViews[0].left = Device.screenWidth * e.rowIndex;
        lineStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex + 1;
        lineStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex + 2;
    } else {
        startingIndex = e.rowIndex - 2;
        lineStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 2);
        lineStyleNewsScrollViews[1].left = Device.screenWidth * (e.rowIndex - 1);
        lineStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex;
    }
    fillDataToLineStyledScrollViews(startingIndex);
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgLineStyle, listHeader, listStatusbarColor, lang.pgLineStyleTitle);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgListLineInfo);
    }
    Pages.pgLineStyle.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function showDlgListLineInfo() {
    Dialogs.dlgListLineInfo.show();
}
function pgListView_rpbxBoxed_OnSelectedItem(e) {
    // setting position of scrollview
    Pages.pgBoxedStyle.svNewsContentPager.scrollX = Device.screenWidth * e.rowIndex;
    var startingIndex;
    if (e.rowIndex > 0 && e.rowIndex < newsArray.length - 1) {
        startingIndex = e.rowIndex - 1;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 1);
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex;
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * (e.rowIndex + 1);
    } else if (e.rowIndex == 0) {
        startingIndex = e.rowIndex;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * e.rowIndex;
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * e.rowIndex + 1;
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex + 2;
    } else {
        startingIndex = e.rowIndex - 2;
        boxedStyleNewsScrollViews[0].left = Device.screenWidth * (e.rowIndex - 2);
        boxedStyleNewsScrollViews[1].left = Device.screenWidth * (e.rowIndex - 1);
        boxedStyleNewsScrollViews[2].left = Device.screenWidth * e.rowIndex;
    }
    fillDataToBoxedStyledScrollViews(startingIndex);
    // setting Android ActionBar
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgBoxedStyle, listHeader, listStatusbarColor, lang.pgBoxedStyleTitle);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgBoxedInfo);
    }
    Pages.pgBoxedStyle.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function showDlgBoxedInfo() {
    Dialogs.dlgBoxedInfo.show();
}
function pgListView_rpbxSquare_OnSelectedItem(e) {
    var index;
    if (Device.touchX < Device.screenWidth / 2) {
        index = e.rowIndex * 2;
    } else {
        index = e.rowIndex * 2 + 1;
    }
    // setting position of scrollview
    Pages.pgSquareStyle.svNewsContentPager.scrollX = Device.screenWidth * index;
    var startingIndex;
    if (index > 0 && index < newsArray.length - 1) {
        startingIndex = index - 1;
        squareStyleNewsScrollViews[0].left = Device.screenWidth * (index - 1);
        squareStyleNewsScrollViews[1].left = Device.screenWidth * index;
        squareStyleNewsScrollViews[2].left = Device.screenWidth * (index + 1);
    } else if (index == 0) {
        startingIndex = index;
        squareStyleNewsScrollViews[0].left = Device.screenWidth * index;
        squareStyleNewsScrollViews[1].left = Device.screenWidth * index + 1;
        squareStyleNewsScrollViews[2].left = Device.screenWidth * index + 2;
    } else {
        startingIndex = index - 2;
        squareStyleNewsScrollViews[0].left = Device.screenWidth * (index - 2);
        squareStyleNewsScrollViews[1].left = Device.screenWidth * (index - 1);
        squareStyleNewsScrollViews[2].left = Device.screenWidth * index;
    }
    fillDataToSquareStyledScrollViews(startingIndex);
    if (Device.deviceOS == "Android") {
        header.init(Pages.pgSquareStyle, listHeader, listStatusbarColor, lang.pgSquareContentTitle);
        header.setLeftItem(pagesBack);
        header.setRightItem(Dialogs.dlgSquareInfo);
    }
    Pages.pgSquareStyle.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function showdlgSquareInfo() {
    Dialogs.dlgSquareInfo.show();
}
function pgListView_rpbxLine_OnPullUp(e) {
    isUsingSwipe = true;
    rowNum = 11; // it is a default value. How many values are setting when pull up repeatbox
    pageNum += 1;
    Data.wcListView_InDSet.rowNumber = rowNum;
    Data.wcListView_InDSet.pagenumber = pageNum;
    var intervalID = setInterval(function () {
            SMF.Net.wcListView.run();
            clearInterval(intervalID);
        }, 500);
}
function pgListView_imgLineActive_OnTouchEnded(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxLine.setTopIndex(0, 0, 100);
}
function pgListView_imgSquareActive_OnTouchEnded(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxSquare.setTopIndex(0, 0, 100);
}
function pgListView_imgBoxedActive_OnTouchEnded(e) {
    // sliding scroll of repeatbox to top
    if (Device.deviceOS == "Android")
        Pages.pgListView.rpbxBoxed.setTopIndex(0, 0, 100);
}