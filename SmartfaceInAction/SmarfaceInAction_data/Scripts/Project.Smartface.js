//taking 20 tweet, add them into twitterTable, notify to see
function Project_wcTwitter_OnSyndicationSuccess(e) {
    resObjGetTwitter = JSON.parse(SMF.Net.wcTwitter.responseText);
    for (var i = 0; i < 20; i++) {
        Data.DS_twitterTable.add();
    }
    Data.notify("Data.DS_twitterTable");
}
//assigning map zoom level to see wider or narrower angle then attached pins
function Project_wcMap_OnSyndicationSuccess(e) {
    Pages.pgMap1.map.zoomLevel = 10;
    counter = 0;
    Pages.pgMap1.contFilter.lblNumberOfResults.text = Data.wcMap_OutDSetpins.rowCount;
    timeGettingPin();
    webclientSuccessed = 1;
}
//adding pin with animation
function timeGettingPin() {
    var imgPath;
    if (counter < Data.wcMap_OutDSetpins.rowCount) {
        intervalId = setTimeout(function () {

                if (Data.wcMap_OutDSetpins.type == 0)
                    imgPath = "resources://triangle_pointer.png";
                else if (Data.wcMap_OutDSetpins.type == 1)
                    imgPath = "resources://square_pointer.png";
                else
                    imgPath = "resources://circle_pointer.png";

                Pages.pgMap1.map.addPin({
                    id : counter.toString(),
                    title : Data.wcMap_OutDSetpins.title,
                    subtitle : Data.wcMap_OutDSetpins.subtitle,
                    latitude : parseFloat(Data.wcMap_OutDSetpins.latitude),
                    longitude : parseFloat(Data.wcMap_OutDSetpins.longitude),
                    selectedImage : imgPath,
                    unSelectedImage : imgPath,
                    draggable : false,
                    animate : true

                });
                Data.wcMap_OutDSetpins.moveNext();
                totalNumberOfPins = counter;
                counter++;
                timeGettingPin();
            }, 100);

    } else {
        clearTimeout(intervalId);

    }

}
//adding number of row to the squareDataset then draw squares calculating screenwidth
function Project_wcSquareView_OnSyndicationSuccess(e) {
    var responseText = SMF.Net.wcSquareView.responseText;
    var parsedResponse = JSON.parse(responseText);
    newsArray = parsedResponse.news;
    var squareCount = (newsArray.length + 1) / 2;
    Data.SquareDataset.clear();
    for (i = 0; i < squareCount; i++) {
        Data.SquareDataset.add();
    }

    Pages.pgBoxedStyle.svNewsContentPager.contentWidth = newsArray.length * Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent0.width = Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent1.width = Device.screenWidth;
    Pages.pgBoxedStyle.svNewsContentPager.svNewsContent2.width = Device.screenWidth;

    Pages.pgSquareStyle.svNewsContentPager.contentWidth = newsArray.length * Device.screenWidth;
    Pages.pgSquareStyle.svNewsContentPager.svNewsContent0.width = Device.screenWidth;
    Pages.pgSquareStyle.svNewsContentPager.svNewsContent1.width = Device.screenWidth;
    Pages.pgSquareStyle.svNewsContentPager.svNewsContent2.width = Device.screenWidth;

    var imageHeight = Device.screenHeight * 35 / 100;
    var imageTop = 0;
    var titleLabelHeight = Device.screenHeight * 5 / 100;
    var lineHeight = Device.screenHeight * 2 / 100;
    var cntTop = Device.screenHeight * 38 / 100;
    var cntHeight = Device.screenHeight * 5 / 100;
    for (i = 0; i < 3; i++) {
        var boxedStyleInnerSv = boxedStyleNewsScrollViews[i];
        boxedStyleInnerSv.controls[0].width = Device.screenWidth;
        boxedStyleInnerSv.controls[0].height = Device.screenWidth / 1.5;
        boxedStyleInnerSv.controls[0].top = imageTop;
        boxedStyleInnerSv.controls[1].height = titleLabelHeight;
        boxedStyleInnerSv.controls[1].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 5 / 100);
        boxedStyleInnerSv.controls[2].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 16 / 100);
        boxedStyleInnerSv.controls[3].height = lineHeight;
        boxedStyleInnerSv.controls[3].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 11 / 100);

        var squareStyleInnerSv = squareStyleNewsScrollViews[i];
        squareStyleInnerSv.controls[0].width = Device.screenWidth;
        squareStyleInnerSv.controls[0].height = Device.screenWidth / 1.5;
        squareStyleInnerSv.controls[0].top = imageTop;
        squareStyleInnerSv.controls[1].height = titleLabelHeight;
        squareStyleInnerSv.controls[1].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 5 / 100);
        squareStyleInnerSv.controls[2].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 16 / 100);
        squareStyleInnerSv.controls[3].height = lineHeight;
        squareStyleInnerSv.controls[3].top = (Device.screenWidth / 1.5) + (Device.screenHeight * 11 / 100);
        squareStyleInnerSv.controls[4].top = (Device.screenWidth / 1.5) - cntHeight;
        squareStyleInnerSv.controls[4].height = cntHeight;
        for (j = 0; j < squareStyleInnerSv.controls[0].controls.length; j++) {
            var img = squareStyleInnerSv.controls[0].controls[j];
            img.left = j * Device.screenWidth;
            img.width = Device.screenWidth;
            img.height = Device.screenWidth / 1.5;
        }

    }
    boxedStyleNewsLblHeights = [];
    boxedStyleNewsScrollViewsContentHeights = [];
    squareStyleNewsLblHeights = [];
    squareStyleNewsScrollViewsContentHeights = [];

    var labelWidth = Device.screenWidth * 90 / 100;
    var initialContentHeight = (Device.screenWidth / 1.5) + (Device.screenHeight * 16 / 100);
    var horizontalPad = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.horizontalGap;
    var strokeWidth = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.borderWidth;

    for (i = 0; i < newsArray.length; i++) {
        var labelHeight = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.font.calculateMinHeight({
                text : newsArray[i].description,
                horizontalGap : horizontalPad,
                borderWidth : strokeWidth,
                objectWidth : labelWidth
            });
        lineStyleNewsLblHeights[i] = labelHeight;
        boxedStyleNewsLblHeights[i] = labelHeight;
        boxedStyleNewsScrollViewsContentHeights[i] = initialContentHeight + labelHeight;
        squareStyleNewsLblHeights[i] = labelHeight;
        squareStyleNewsScrollViewsContentHeights[i] = initialContentHeight + labelHeight;
    }

    Data.notify("Data.SquareDataset");
    Data.notify("Data.wcSquareView_OutDSetnews");
    firstRunListWebclient = false;
}

function Project_wcListView_OnSyndicationSuccess(e) {
    // added new handler
    var tempNewsObj = JSON.parse(this.responseText);
    if (tempNewsObj.news.length > 0) {
        shareListViewNews.news = shareListViewNews.news.concat(tempNewsObj.news);

        var i;
        for (i = 0; i < tempNewsObj.news.length; i++) {
            Data.DS_News.add();
        }
        Pages.pgListView.rpbxLine.insertRows(Pages.pgListView.rpbxLine.count, tempNewsObj.news.length);
    }
    var timeout = setTimeout(function () {
            Pages.pgListView.rpbxLine.closePullItems();
            clearTimeout(timeout);
        }, 3000);
    Pages.pgListView.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
    var index = newsArrayList.length - 1;
    var parsedResponseList = [];
    var responseTextList = SMF.Net.wcListView.responseText;
    var q = JSON.parse(responseTextList);
    parsedResponseList = q.news;
    if (parsedResponseList.length > 0) {
        for (var i = 0; i < parsedResponseList.length; i++) {
            newsArrayList.push(parsedResponseList[i]);
            //Data.DS_News.add();
        }
        //Data.notify("Data.DS_News");
        var a = Pages.pgListView.rpbxLine.count;
        //Pages.pgListView.rpbxLine.insertRows(a, parsedResponseList.length);
    } else {}

    // Pages.pgListView.rpbxLine.closePullItems();
    Pages.pgLineStyle.svNewsContentPager.contentWidth = newsArrayList.length * Device.screenWidth;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent0.width = Device.screenWidth;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent1.width = Device.screenWidth;
    Pages.pgLineStyle.svNewsContentPager.svNewsContent2.width = Device.screenWidth;

    var imageHeightLine = Device.screenWidth / 1.5;
    var imageTop = 0;

    for (i = 0; i < 3; i++) {
        var lineStyleInnerSv = lineStyleNewsScrollViews[i];
        lineStyleInnerSv.controls[0].height = imageHeightLine;
        lineStyleInnerSv.controls[0].width = Device.screenWidth;
        lineStyleInnerSv.controls[0].top = imageTop;
        lineStyleInnerSv.controls[2].top = imageHeightLine;
        lineStyleInnerSv.controls[1].top = imageHeightLine + lineStyleInnerSv.controls[2].height;
        lineStyleInnerSv.controls[1].controls[0].height = Device.screenHeight * 5 / 100; ;
        lineStyleInnerSv.controls[1].controls[0].top = Device.screenHeight * 1 / 100;
        lineStyleInnerSv.controls[1].controls[1].top = Device.screenHeight * 10 / 100;
        lineStyleInnerSv.controls[1].controls[2].height = Device.screenHeight * 2 / 100;
        lineStyleInnerSv.controls[1].controls[2].top = Device.screenHeight * 6 / 100;
    }
    lineStyleNewsLblHeights = [];
    lineStyleNewsScrollViewsContentHeights = [];

    var labelWidth = Device.screenWidth * 90 / 100;
    var initialContentHeight = Device.screenHeight * 10 / 100;
    var horizontalPad = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.horizontalGap;
    var strokeWidth = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.borderWidth;

    for (i = 0; i < newsArrayList.length; i++) {
        var labelHeight = Pages.pgLineStyle.svNewsContentPager.svNewsContent0.content0.lblNewsContentDescription.font.calculateMinHeight({
                text : newsArrayList[i].description,
                horizontalGap : horizontalPad,
                borderWidth : strokeWidth,
                objectWidth : labelWidth
            });
        lineStyleNewsLblHeights[i] = labelHeight;
        lineStyleNewsScrollViewsContentHeights[i] = initialContentHeight + labelHeight;
    }

    if (!isUsingSwipe) {
        Pages.pgListView.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
        Data.notify("Data.wcListView_OutDSetnews");
    }
    if (index > 0 && index < newsArrayList.length - 1) {
        if (isUsingSwipe) {
            for (i = 0; i < 3; i++) {
                var innerSv = lineStyleNewsScrollViews[i];
                if (innerSv.left == Device.screenWidth * (index - 2)) {
                    innerSv.left = Device.screenWidth * (index + 1);
                    innerSv.controls[0].image = newsArrayList[index + 1].image[0].url;
                    innerSv.controls[1].controls[0].text = newsArrayList[index + 1].title;
                    innerSv.controls[1].controls[1].text = newsArrayList[index + 1].description;
                    innerSv.controls[1].controls[1].height = lineStyleNewsLblHeights[index + 1];
                    innerSv.controls[1].contentHeight = lineStyleNewsScrollViewsContentHeights[index + 1];
                    isUsingSwipe = false;
                }
            }

        }
    }
}