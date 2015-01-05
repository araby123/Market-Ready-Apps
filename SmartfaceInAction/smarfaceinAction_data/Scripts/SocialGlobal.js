//variables that use smartfaceSocial, pgBlog, page2
var animaImages = ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png", "a8.png", "a9.png", "a10.png", "a11.png", "a12.png", "a13.png", "a14.png", "a15.png", "a16.png", "a17.png", "a18.png", "a19.png", "a20.png", "a21.png", "a22.png", "a23.png", "a24.png", "a25.png", "a26.png", "a27.png", "a28.png", "a29.png", "a30.png", "a31.png", "a32.png", "a33.png", "a34.png", "a35.png", "a36.png", "a37.png", "a38.png", "a39.png", "a40.png", "a41.png", "a42.png", "a43.png", "a44.png", "a45.png", "a46.png", "a47.png", "a48.png", "a49.png", "a50.png", "a51.png", "a52.png", "a53.png", "a54.png", "a55.png", "a56.png", "a57.png", "a58.png", "a59.png", "a60.png", "a61.png"];
var rBox;
var imgFeaturedinRbox;
var lblDateinRbox;
var lblTitleinRbox;
var ai;
var page2;
var index;
var responseObjectBlog;
var blogArrayList = [];
var intervalID;
var dlg;
var rectinDlg;
var imgAiinDlg;
var contCategories;
var isAnimate = true;
var imgCategory1;
var imgCategory2;
var imgCategory3;
var imgCategory4;
var imgCategory5;
var leng = 1;
var isPullUp = true;

//to get rid of html tags from responseString
var htmltoString = {
    "&#32;" : "",
    "&#33;" : "!",
    "&#34;" : "\'",
    "&#35;" : "#",
    "&#36;" : "$",
    "&#37;" : "%",
    "&#38;" : "&",
    "&#39;" : "'",
    "&#40;" : "(",
    "&#41;" : ")",
    "&#42;" : "*",
    "&#43;" : "+",
    "&#44;" : ",",
    "&#45;" : "-",
    "&#46;" : ".",
    "&#47;" : "/",
    "&quot;" : "\'",
    "&amp;" : "&",
    "&nbsp;" : "",
    "&#8211;" : "-",
    "&#8212;" : "-",
    "&#8216;" : "'",
    "&#8217;" : "'",
    "&#8218;" : ",",
    "&#8220;" : "'",
    "&#8221;" : "'",
    "&#8222;" : ",",
    "&#8224;" : "",
    "&#8225;" : "",
    "&#8226;" : "",
    "&#8230;" : "",
    "&#8240;" : "",
};
var startPage = 1;
var startCount = 10;

function createPage1UIObject() {
    rBoxBlog = new SMF.UI.RepeatBox({
            width : "94%",
            height : "88%",
            left : "3%",
            top : "2%",
            dataSource : Data.DS_Blog,
            useActiveItem : false,
            borderWidth : "0",
            showScrollbar : true,
            autoSize : false,
            onSelectedItem : onSelectedItemBlog,
            enableScroll : true,
            backgroundTransparent : true,
            fillColor : "#3B3B3B",
            enablePullUpToRefresh : true,
            enablePullDownToRefresh : false
        });

    rBoxBlog.itemTemplate.height = Device.screenHeight / 7;
    rBoxBlog.pullUpItem.height = "8%";
    rBoxBlog.onRowRender = onRowRenderBlog;
    rBoxBlog.onPullUp = onPullUpBlog;

    imgEmptyBlack = new SMF.UI.Image({
            imageFillType : SMF.UI.ImageFillType.stretch,
        });
    aiBackofImage = new SMF.UI.ActivityIndicator({
            left : "23%",
            top : "44%",
            height : 21,
            width : 21,
            style : SMF.UI.ActivityIndicatorStyle.gray,
        });

    lblTitleinRbox = new SMF.UI.Label({
            name : "lblTitleinRbox",
            width : "37%",
            left : "59%",
            height : "63.36%",
            top : "10.94%",
            text : "",
            borderWidth : "0",
            roundedEdge : 0,
            fontColor : "black",
            touchEnabled : false,
            multipleLine : true,
        });
    lblTitleinRbox.font = new SMF.UI.Font({
            name : "Default",
            size : "5pt",
            bold : true,
            italic : false
        });
    lblDateinRbox = new SMF.UI.Label({
            name : "lblDateinRbox",
            width : "31.06%",
            left : "64.01%",
            height : "24.07%",
            top : "71.72%",
            text : "",
            borderWidth : "0",
            textAlignment : "right",
            roundedEdge : 0,
            touchEnabled : false,
            fontColor : "#a3a3a3",
        });
    lblDateinRbox.font = new SMF.UI.Font({
            name : "Default",
            size : "5pt",
            bold : false,
            italic : true
        });
    imgFeaturedinRbox = new SMF.UI.Image({
            name : "imgFeaturedinRbox",
            width : "52%",
            height : "84%",
            left : 0,
            top : "8%",
            touchEnabled : false,
            visible : true,
            imageFillType : SMF.UI.ImageFillType.stretch
        });

    imgEmptyinRbox = new SMF.UI.Image({
            name : "imgEmptyinRbox",
            width : "48%",
            height : "84%",
            left : "52%",
            top : "8%",
            touchEnabled : false,
            visible : true,
            imageFillType : SMF.UI.ImageFillType.stretch
        });

    aiPullDown = new SMF.UI.ActivityIndicator({
            top : 15,
            left : "48%",
            widht : 21,
            height : 21,
            style : SMF.UI.ActivityIndicatorStyle.gray,
        });
    imgFeaturedinRbox.enableCache = true;
    Pages.pgBlog.add(rBoxBlog);
    rBoxBlog.itemTemplate.add(aiBackofImage);
    rBoxBlog.itemTemplate.add(imgEmptyBlack);
    rBoxBlog.itemTemplate.add(imgEmptyinRbox);
    rBoxBlog.itemTemplate.add(lblTitleinRbox);
    rBoxBlog.itemTemplate.add(imgFeaturedinRbox);
    rBoxBlog.itemTemplate.add(lblDateinRbox);
    rBoxBlog.pullUpItem.add(aiPullDown);
    rBoxBlog.scrollsToTop = true;
}
var contPullDown;
var aiPullDown;

function onPullUpBlog() {
    isPullUp = true;
    startPage = startPage + 1;
    if (isCategory == 1) {
        blogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 2) {
        blogWebClient.url = "http://www.smartface.io/category/mobil/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 3) {
        blogWebClient.url = "http://www.smartface.io/category/tech/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 4) {
        blogWebClient.url = "http://www.smartface.io/category/ux-2/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    } else if (isCategory == 5) {
        blogWebClient.url = "http://www.smartface.io/category/blog/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
    }
    blogWebClient.run();
}

function createPage2UIObject() {
    page2 = new SMF.UI.Page({
            fillColor : "#ecf0f1",
            showStatusBar : true
        });
    page2.onShow = function (e) {
        if (Device.deviceOS == "iOS") {
            headerSocial.init(page2);
            headerSocial.setLeftItem();
            headerSocial.setRightItem();
        } else {
            headerSocial.init(page2);
            headerSocial.setLeftItem();
            headerSocial.setRightItem();
        }
        if (page2FirstRun == true) {
            if (Device.deviceOS == 'iOS') {
                createAdmob(page2);
                page2FirstRun = false;
            }
        }
        //admob for android should create everytime for each page shown
        if (Device.deviceOS == 'Android') {
            createAdmob(page2);
        }
    }
    page2.onKeyPress = function (e) {
        if (e.keyCode === 4) {
            Pages.back();
        }
    }
    scrollMain2 = new SMF.UI.ScrollView({
            name : "scrollMain2",
            width : "94%",
            height : "87%",
            left : "3%",
            top : "2%",
            borderWidth : 0,
            contentWidth : "95%",
            contentHeight : "99%",
            touchEnabled : true,
            roundedEdge : 0,
            verticalGap : 5,
            autoSize : true,
            backgroundTransparent : false,
            fillColor : "#E0E4E5",
            enableVerticalScrolling : true,
            enableVerticalScrollbar : true,
            enableHorizontalScrolling : false,
        });
    imgFeaturedinScroll = new SMF.UI.Image({
            name : "imgFeaturedinScroll",
            width : "100%",
            height : "23%",
            left : 0,
            top : "0%",
            touchEnabled : true,
            visible : true,
            enableCache : false,
            imageFillType : SMF.UI.ImageFillType.stretch
        });
    ai = new SMF.UI.ActivityIndicator({
            left : "48.28%",
            top : "10%",
            visible : true,
            style : SMF.UI.ActivityIndicatorStyle.gray
        });

    lblTitleinScroll = new SMF.UI.Label({
            width : "93%",
            left : "5%",
            height : "12%",
            fontSize : "10pt",
            fontColor : "black",
            backgroundTransparent : true,
            multipleLine : true,
            touchEnabled : false,
            top : "24%",
            text : "",
        });

    lblContentinScroll = new SMF.UI.Label({
            name : "lblContentinScroll",
            width : "90%",
            left : "5%",
            height : "46%",
            top : "33%",
            text : "",
            autoSize : true,
            fontColor : "black",
            borderWidth : "0",
            textAlignment : SMF.UI.Alignment.topLeft,
            touchEnabled : false,
            roundedEdge : 0,
            detectURLsInString : true,
            multipleLine : true,
            fontColor : "#222222",
        });

    lblTitleinScroll.font = new SMF.UI.Font({
            name : "Default",
            size : "7pt",
            bold : true,
            italic : false
        });
    lblContentinScroll.font = new SMF.UI.Font({
            name : "Default",
            size : "6pt",
            bold : false,
            italic : false
        });
    page2.add(scrollMain2);
    scrollMain2.add(lblContentinScroll);
    scrollMain2.add(ai);
    scrollMain2.add(imgFeaturedinScroll);
    scrollMain2.add(lblTitleinScroll);

}
function createAdmob(page) {
    admob = new SMF.UI.AdMob({
            top : "90%",
            animated : true
        });
    admob.adSize = SMF.UI.AdMob.AdSize.banner;
    admob.adUnitId.iOS = "ca-app-pub-5615448064021602/2764524573";
    admob.adUnitId.Android = "ca-app-pub-5615448064021602/1287791372";
    page.add(admob);
    adRequest = new SMF.UI.AdMob.AdRequest();
    admob.load(adRequest);
}
function createDialog() {
    dlg = new SMF.UI.Dialog({
            width : "100%",
            height : "100%",
            top : 0,
            left : 0,
            backgroundTransparent : true,
        });
    rectinDlg = new SMF.UI.Rectangle({
            width : "100%",
            height : "100%",
            top : 0,
            left : 0,
            backgroundTransparent : false,
            alpha : 0.8,
            fillColor : "#222222",
            borderWidth : 0,
            roundedEdge : 0
        });
    imgAiinDlg = new SMF.UI.Image({
            name : "imgAiinDlg",
            width : "9.22%",
            height : "5.19%",
            left : "43.31%",
            top : "40.36%",
            touchEnabled : true,
            visible : true,
            imageFillType : SMF.UI.ImageFillType.autoSize
        });
    imgAiinDlg.image = "1.png";

    dlg.add(rectinDlg);
    dlg.add(imgAiinDlg);

}

var rectBackground;
function createCategoriesDlg() {
    contCategories = new SMF.UI.Container({
            width : "28%",
            height : "100%",
            top : 0,
            left : "-70%",
            backgroundTransparent : false,
            layoutType : SMF.UI.LayoutType.linear,
            orientation : SMF.UI.Orientation.vertical,
            alignment : SMF.UI.LayoutAlignment.top,
            verticalGap : 0,
            horizontalGap : 0,
            fillColor : "#4B4C51",
            borderWidth : 0
        });
    rectBackground = new SMF.UI.Rectangle({
            width : "100%",
            height : "100%",
            top : 0,
            left : 0,
            backgroundTransparent : true,
            fillColor : "#4B4C51",
            borderWidth : 0,
            visible : false,
            onTouchEnded : function () {
                closeCategory();
            },
        });

    var img1 = new SMF.UI.Image({
            width : "100%",
            left : 0,
            height : 2,
            image : "cizgi.png",
            imageFillType : SMF.UI.ImageFillType.normal,
        });
    var img2 = img1.clone();
    var img3 = img1.clone();
    var img4 = img1.clone();
    var img5 = img1.clone();
    var img6 = img1.clone();

    imgCategory1 = new SMF.UI.ImageButton({
            left : 0,
            top : 0,
            height : Device.screenHeight / 6.5,
            width : "100%",
            text : "",
            defaultImage : "all2.png",
            highlightedImage : "all2.png",
            imageFillType : SMF.UI.ImageFillType.aspectfit,
            onPressed : category1_onPressed,
        });
    imgCategory2 = new SMF.UI.ImageButton({
            left : 0,
            top : 0,
            height : Device.screenHeight / 6.5,
            width : "100%",
            text : "",
            defaultImage : "mobil1.png",
            highlightedImage : "mobil2.png",
            imageFillType : SMF.UI.ImageFillType.aspectfit,
            onPressed : category2_onPressed,
        });
    imgCategory3 = new SMF.UI.ImageButton({
            left : 0,
            top : 0,
            height : Device.screenHeight / 6.5,
            width : "100%",
            text : "",
            defaultImage : "tech1.png",
            highlightedImage : "tech2.png",
            imageFillType : SMF.UI.ImageFillType.aspectfit,
            onPressed : category3_onPressed,
        });
    imgCategory4 = new SMF.UI.ImageButton({
            left : 0,
            top : 0,
            height : Device.screenHeight / 6.5,
            width : "100%",
            text : "",
            defaultImage : "ux1.png",
            highlightedImage : "ux2.png",
            imageFillType : SMF.UI.ImageFillType.aspectfit,
            onPressed : category4_onPressed,
        });
    imgCategory5 = new SMF.UI.ImageButton({
            left : 0,
            top : 0,
            height : Device.screenHeight / 6.5,
            width : "100%",
            text : "",
            defaultImage : "smartface1.png",
            highlightedImage : "smartface2.png",
            imageFillType : SMF.UI.ImageFillType.aspectfit,
            onPressed : category5_onPressed,
        });
    Pages.pgBlog.add(rectBackground);
    Pages.pgBlog.add(contCategories);

    contCategories.add(imgCategory1);
    contCategories.add(img2);
    contCategories.add(imgCategory2);
    contCategories.add(img3);
    contCategories.add(imgCategory3);
    contCategories.add(img4);
    contCategories.add(imgCategory4);
    contCategories.add(img5);
    contCategories.add(imgCategory5);
    contCategories.add(img6);
}
var isCategory = 1;
var isCategory1 = true;
var isCategory2 = false;
var isCategory3 = false;
var isCategory4 = false;
var isCategory5 = false;
function category1_onPressed() {
    if (isCategory1 == true) {}
    else {
        isCategory = 1;
        startPage = 1;
        rowRend = true;
        rBoxBlog.setTopIndex(0, 0, 100);
        leng = 1;
        dlg.imgAiinDlg.image = "1.png";
        dlg.show();
        isCategory1 = true;
        isCategory2 = false;
        isCategory3 = false;
        isCategory4 = false;
        isCategory5 = false;
        imgCategory1.defaultImage = "all2.png";
        imgCategory2.defaultImage = "mobil1.png";
        imgCategory3.defaultImage = "tech1.png";
        imgCategory4.defaultImage = "ux1.png";
        imgCategory5.defaultImage = "smartface1.png";
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        blogArrayList = [];
        Data.DS_Blog.clear();
        blogWebClient.url = "http://www.smartface.io/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        blogWebClient.run();

    }
    closeCategory();
}
function category2_onPressed() {
    if (isCategory2 == true) {}
    else {
        isCategory = 2;
        startPage = 1;
        rowRend = true;
        rBoxBlog.setTopIndex(0, 0, 100);
        leng = 1;
        dlg.imgAiinDlg.image = "1.png";
        dlg.show();
        isCategory1 = false;
        isCategory2 = true;
        isCategory3 = false;
        isCategory4 = false;
        isCategory5 = false;
        imgCategory1.defaultImage = "all1.png";
        imgCategory2.defaultImage = "mobil2.png";
        imgCategory3.defaultImage = "tech1.png";
        imgCategory4.defaultImage = "ux1.png";
        imgCategory5.defaultImage = "smartface1.png";
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        blogArrayList = [];
        Data.DS_Blog.clear();
        blogWebClient.url = "http://www.smartface.io/category/mobil/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        blogWebClient.run();

    }
    closeCategory();
}

function category3_onPressed() {
    if (isCategory3) {}
    else {
        isCategory = 3;
        startPage = 1;
        rowRend = true;
        rBoxBlog.setTopIndex(0, 0, 100);
        leng = 1;
        dlg.imgAiinDlg.image = "1.png";
        dlg.show();
        isCategory1 = false;
        isCategory2 = false;
        isCategory3 = true;
        isCategory4 = false;
        isCategory5 = false;
        imgCategory1.defaultImage = "all1.png";
        imgCategory2.defaultImage = "mobil1.png";
        imgCategory3.defaultImage = "tech2.png";
        imgCategory4.defaultImage = "ux1.png";
        imgCategory5.defaultImage = "smartface1.png";
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        blogArrayList = [];
        Data.DS_Blog.clear();
        blogWebClient.url = "http://www.smartface.io/category/tech/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        blogWebClient.run();

    }

    closeCategory();
}
function category4_onPressed() {
    if (isCategory4) {}
    else {
        isCategory = 4;
        startPage = 1;
        rowRend = true;
        rBoxBlog.setTopIndex(0, 0, 100);
        leng = 1;
        dlg.imgAiinDlg.image = "1.png";
        dlg.show();
        isCategory1 = false;
        isCategory2 = false;
        isCategory3 = false;
        isCategory4 = true;
        isCategory5 = false;
        imgCategory1.defaultImage = "all1.png";
        imgCategory2.defaultImage = "mobil1.png";
        imgCategory3.defaultImage = "tech1.png";
        imgCategory4.defaultImage = "ux2.png";
        imgCategory5.defaultImage = "smartface1.png";
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        blogArrayList = [];
        Data.DS_Blog.clear();
        blogWebClient.url = "http://www.smartface.io/category/ux-2/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        blogWebClient.run();

    }
    closeCategory();
}
function category5_onPressed() {
    if (isCategory5) {}
    else {
        isCategory = 5;
        startPage = 1;
        rowRend = true;
        rBoxBlog.setTopIndex(0, 0, 100);
        leng = 1;
        dlg.imgAiinDlg.image = "1.png";
        dlg.show();
        isCategory1 = false;
        isCategory2 = false;
        isCategory3 = false;
        isCategory4 = false;
        isCategory5 = true;
        imgCategory1.defaultImage = "all1.png";
        imgCategory2.defaultImage = "mobil1.png";
        imgCategory3.defaultImage = "tech1.png";
        imgCategory4.defaultImage = "ux1.png";
        imgCategory5.defaultImage = "smartface2.png";
        intervalID = setInterval(function () {
                updateTime();
            }, 50);
        blogArrayList = [];
        Data.DS_Blog.clear();
        blogWebClient.url = "http://www.smartface.io/category/blog/?json=1&count=10&page=" + startPage + "&exclude=type,id,slug,status,categories,tags,author,comments,attachments,custom_fields";
        blogWebClient.run();
    }
    closeCategory();
}
function closeCategory() {
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
function updateTime() {
    if (leng > 61) {
        leng = 0;
    }
    imgAiinDlg.image = animaImages[leng];
    leng++;
}
var rowRend = true;
var imgEmptyBlack;
var aiBackofImage;
function onRowRenderBlog(e) {
    if (Device.connectionType == 0) {
        Data.DS_Blog.clear();
        Data.notify("Data.DS_Blog");
    } else {
        rBoxBlog.rows[e.rowIndex].height = Device.screenHeight / 7;
        aiBackofImage.left = "23%";
        aiBackofImage.top = "44%";
        imgFeaturedinRbox.top = "8%";
        imgFeaturedinRbox.left = "0%";
        imgFeaturedinRbox.width = "52%";
        imgFeaturedinRbox.height = "84%";
        lblTitleinRbox.height = "63.36%";
        lblTitleinRbox.left = "59%";
        lblTitleinRbox.top = "10.94%";
        lblTitleinRbox.width = "37%";
        lblDateinRbox.top = "71.72%";
        lblDateinRbox.height = "24.07%";
        lblDateinRbox.left = "64.01%";
        lblDateinRbox.width = "31.06%";
        lblTitleinRbox.fontColor = "black";
        lblDateinRbox.multipleLine = false;
        lblDateinRbox.textAlignment = "right";
        imgEmptyBlack.visible = false;
        imgEmptyinRbox.visible = true;
        var blogDate = blogArrayList[e.rowIndex].date.substring(0, 10);
        lblDateinRbox.text = blogDate;

        imgEmptyBlack.image = "black.png";
        Data.DS_Blog.seek(e.rowIndex);
        imgFeaturedinRbox.changeAnimation = "None";
        imgEmptyinRbox.image = "beyaz.png";
        imgFeaturedinRbox.changeAnimation = "fade";
        imgFeaturedinRbox.image = "";
        imgFeaturedinRbox.image = blogArrayList[e.rowIndex].thumbnail_images.featured.url;
        lblTitleinRbox.text = htmlReplace(blogArrayList[e.rowIndex].title);
    }
}
function trimChar(raw, first, second) {

    var fi = raw.indexOf(first);
    var si = raw.indexOf(second);
    var ilk = raw.substr(0, fi);
    var son = raw.substr(si + second.length, raw.length);
    var res = ilk + son;
    if (res.indexOf(first) > -1 && res.indexOf(second) > -1) {
        return trimChar(res, first, second);
    } else {
        return res;
    }
    return ilk + son;
}
function onSelectedItemBlog(e) {
    if (Device.connectionType != 0) {
        imgFeaturedinScroll.image = blogArrayList[rBoxBlog.selectedItemIndex].thumbnail_images.featured.url;
        var textCon = blogArrayList[rBoxBlog.selectedItemIndex].content;
        var trimText1 = "<script>";
        var trimText2 = "<\/script>";
        var textCon = trimChar(textCon, trimText1, trimText2);
        urlShare = blogArrayList[rBoxBlog.selectedItemIndex].url;
        /* for (var key in htmltoString) {
        textCon = textCon.split(key).join(htmltoString[key]);
        }*/
        textCon = textCon.replace(/<\/?[^>]+(>|$)/g, "");
        lblTitleinScroll.text = htmlReplace(blogArrayList[rBoxBlog.selectedItemIndex].title);
        lblContentinScroll.text = htmlReplace(textCon);
        if (Device.deviceOS == "Android") {
            headerSocial.init(page2);
            headerSocial.setLeftItem();
            headerSocial.setRightItem();
        }
        page2.show(SMF.UI.MotionEase.accelerating,
            SMF.UI.TransitionEffect.rightToLeft,
            SMF.UI.TransitionEffectType.push,
            false, //fade effect
            false);
    } else {
        alert(lang.networkError);
    }

}

function infoPressed() {
    if (Device.deviceOS == "Android") {
        var shareLink = "https://play.google.com/store/apps/details?id=io.smartface.emulator";
    } else {
        shareLink = "https://itunes.apple.com/us/app/smartface-in-action/id912410205";
    }
    var titleUrl = lblTitleinScroll.text;
    Social.share(titleUrl, urlShare + "\n\n" + lang.dlSmartface + "\n\n" + shareLink);
}
function onSyndicationSuccessBlog(e) {
    responseObjectBlog = JSON.parse(blogWebClient.responseText);
    if (responseObjectBlog.posts.length > 0) {
        for (var i = 0; i < responseObjectBlog.posts.length; i++) {
            blogArrayList.push(responseObjectBlog.posts[i]);
            Data.DS_Blog.add();
        }
        if (isPullUp == true) {
            rBoxBlog.insertRows(rBoxBlog.count, responseObjectBlog.posts.length);
            isPullUp = false;
        } else {
            Data.notify("Data.DS_Blog");
        }
    }
    dlg.close();
    clearInterval(intervalID);
    rBoxBlog.closePullItems();
}

(function () {
    var replacer = /\x26((\x23(\d+))|(\w+))\x3B/gm;
    var hex = ["0022", "0026", "003C", "003E", "00A0", "00A1", "00A2", "00A3", "00A4", "00A5", "00A6", "00A7", "00A8", "00A9", "00AA", "00AB", "00AC", "00AD", "00AE", "00AF", "00B0", "00B1", "00B2", "00B3", "00B4", "00B5", "00B6", "00B7", "00B8", "00B9", "00BA", "00BB", "00BC", "00BD", "00BE", "00BF", "00C0", "00C1", "00C2", "00C3", "00C4", "00C5", "00C6", "00C7", "00C8", "00C9", "00CA", "00CB", "00CC", "00CD", "00CE", "00CF", "00D0", "00D1", "00D2", "00D3", "00D4", "00D5", "00D6", "00D7", "00D8", "00D9", "00DA", "00DB", "00DC", "00DD", "00DE", "00DF", "00E0", "00E1", "00E2", "00E3", "00E4", "00E5", "00E6", "00E7", "00E8", "00E9", "00EA", "00EB", "00EC", "00ED", "00EE", "00EF", "00F0", "00F1", "00F2", "00F3", "00F4", "00F5", "00F6", "00F7", "00F8", "00F9", "00FA", "00FB", "00FC", "00FD", "00FE", "00FF", "20AC"];
    var name = ["&quot;", "&amp;", "&lt;", "&gt;", "&nbsp;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&not;", "&shy;", "&reg;", "&macr;", "&deg;", "&plusmn;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&raquo;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&euro;"];
    var pad = function (num, size) {
        var s = String(num);
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    };
    htmlReplace = function (originalText) {
        return originalText.replace(replacer, function () {
            var numCode = Number(arguments[3]);
            if (!isNaN(numCode)) {
                return eval("'\\u" + pad(numCode.toString(16), 4) + "'");
            } else {
                var match = hex[name.indexOf(arguments[0])];
                if (match) {
                    return eval("'\\u" + pad(match, 4) + "'");
                } else {
                    return " ";
                }
            }
        });
    };
})()