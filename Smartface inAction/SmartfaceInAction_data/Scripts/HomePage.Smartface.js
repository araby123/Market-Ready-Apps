function HomePage_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function HomePage_Self_OnShow() {
    this.actionBar.displayHomeAsUpEnabled = true;
    this.actionBar.displayShowHomeEnabled = true;
    this.actionBar.onHomeIconItemSelected = function () {
        alert("Home pressed!");
    }
    this.actionBar.backgroundImage = "navbar.png";
    var infoButton = new SMF.UI.Android.MenuItem({
            id : "itemInfo",
            icon : "info.png",
            showAsAction : SMF.UI.Android.ShowAsActionAlways,
            onSelected : function (e) {
                //TODO Will show info dialog
            }
        });
    this.actionBar.visible = true;
    var actionbarItems = [infoButton];
    if (this.actionBar != null) {
        this.actionBar.menuItems = actionbarItems;
    }
}
function HomePage_imgLineInactive_OnTouch(e) {
    homePageSelectTab(this);
}
function HomePage_imgSquareInactive_OnTouch(e) {
    homePageSelectTab(this);
}
function HomePage_imgBoxedInactive_OnTouch(e) {
    homePageSelectTab(this);
}
function HomePage_rpbxLine_OnRowRender(e) {
    var index = e.rowIndex;
    var newsObject = newsArray[index];
    this.Image1.image = newsObject.image[0].url;
}
function HomePage_rpbxBoxed_OnRowRender(e) {
    var index = e.rowIndex;
    var newsObject = newsArray[index];
    this.imgBoxed.image = newsObject.image[0].url;
}
function HomePage_rpbxSquare_OnRowRender(e) {
    var index = 2 * e.rowIndex;
    var newsObject1 = newsArray[index];
    this.imgSquareLeft.image = newsObject1.image[0].url;
    this.lblTitleSquareLeft.text = newsObject1.title;
    if (newsArray.length > index + 1) {
        this.imgSquareRight.visible = true;
        this.imgSquareRightOverlay.visible = true;
        this.lblTitleSquareRight.visible = true
        var newsObject2 = newsArray[index + 1];
        this.imgSquareRight.image = newsObject2.image[0].url;
        this.lblTitleSquareRight.text = newsObject2.title;
    } else {
        this.imgSquareRight.visible = false;
        this.imgSquareRightOverlay.visible = false;
        this.lblTitleSquareRight.visible = false;
    }
}
function HomePage_rpbxLine_OnSelectedItem(e){
    var index = e.rowIndex;
    Pages.pgLineStyle.svNewsContentPager.scrollX = Device.screenWidth * index;
    var startingIndex;
    if(index > 0 && index < newsArray.length - 1) {
       startingIndex = index - 1;
       lineStyleNewsScrollViews[0].left = Device.screenWidth * (index - 1);
       lineStyleNewsScrollViews[1].left = Device.screenWidth * index;
       lineStyleNewsScrollViews[2].left = Device.screenWidth * (index + 1);
    } else if(index == 0) {
       startingIndex = index;
       lineStyleNewsScrollViews[0].left = Device.screenWidth * index;
       lineStyleNewsScrollViews[1].left = Device.screenWidth * index + 1;
       lineStyleNewsScrollViews[2].left = Device.screenWidth * index + 2;
    } else {
       startingIndex = index - 2;
       lineStyleNewsScrollViews[0].left = Device.screenWidth * (index - 2);
       lineStyleNewsScrollViews[1].left = Device.screenWidth * (index - 1);
       lineStyleNewsScrollViews[2].left = Device.screenWidth * index;
    }
    fillDataToLineStyledScrollViews(startingIndex);
    Pages.pgLineStyle.show();
}