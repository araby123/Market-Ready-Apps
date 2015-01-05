function pgDevelopmentNotesAll_RepeatBox1_OnRowRender(e) {
    Pages.pgDevelopmentNotesAll.RepeatBox1.lblNote.text = notesDataSource[e.rowIndex].note.trimLeft();
}
function pgDevelopmentNotesAll_RepeatBox1_OnSelectedItem(e) {
    Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text = notesDataSource[e.rowIndex].note.trimLeft();
    noteToBeReplaced = notesDataSource[e.rowIndex].note;
    noteIndex = e.rowIndex;
    isFromEdit = true;
    Pages.pgDeveloperNotesAddNew.show(SMF.UI.MotionEase.decelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function pgDevelopmentNotesAll_Self_OnShow(e) {
    this.navigationItem.title = lang["comments"];
    this.navigationItem.titleView = {
        type : SMF.UI.TitleViewType.text,
        frame : [0, 0, 320, 44], // left, top, width, height
        text : lang["notes"],
        textColor : "#ffffff",
        backgroundColor : "#000000",
        alignment : SMF.UI.TextAlignment.center
    }
    var item1 = new SMF.UI.iOS.BarButtonItem({
            title : lang["back"],
            onSelected : function () {
                Pages.back();
            }
        });
    this.navigationItem.leftBarButtonItems = [item1];
    var item2 = new SMF.UI.iOS.BarButtonItem({
            title : lang["new"],
            onSelected : function () {
                isFromEdit = false;
                Pages.pgDeveloperNotesAddNew.ScrollView1.EditBox1.text = '';
                Pages.pgDeveloperNotesAddNew.show(SMF.UI.MotionEase.decelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
            }
        });
    this.navigationItem.rightBarButtonItems = [item2];
    setDataSource();
    var itemDelete = new SMF.UI.RepeatboxSwipeItem({
            width : "25%",
            height : "100%",
            left : "75%",
            top : "0%",
            text : lang.deleteNews,
            fontColor : "#F2F2F2",
            pressedFontColor : "#FFFFFF",
            fillColor : "#FF0000",
            onSelected : function (e) {
                noteToBeReplaced = notesDataSource[e.rowIndex].note.trimLeft() + 'myNoteSeperator||';
                notesDataSource.splice(e.rowIndex, 1);
                if (notesDataSource.length == 0) {
                    Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
                } else {
                    Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
                }
                Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
                Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
                deleteNote(noteToBeReplaced);
            }
        });
    var items = [itemDelete];
    Pages.pgDevelopmentNotesAll.RepeatBox1.setSwipeItems(items);
    if (notesDataSource.length == 0) {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
    } else {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
    }
}
function setDataSource() {
    var notesTxtFile = new SMF.IO.File(SMF.IO.applicationDataDirectory, "notes.txt");
    if (notesTxtFile.exists) {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = false;
        var streamReader = new SMF.IO.FileStream(SMF.IO.applicationDataDirectory, "notes.txt", SMF.IO.StreamType.read);
        var spliter = streamReader.readToEnd();
        streamedNotesArray = spliter.split("myNoteSeperator||");
        streamedNotesArray.pop();
        notesDataSource = [];
        var i;
        for (i = 0; i < streamedNotesArray.length; i++) {
            notesObject = {};
            var replacedEnterChar = streamedNotesArray[i].replace('\n', '');
            notesObject.note = replacedEnterChar;
            notesDataSource.push(notesObject);
        }
        notesDataSource.reverse();
        Pages.pgDevelopmentNotesAll.RepeatBox1.dataSource = notesDataSource;
        Pages.pgDevelopmentNotesAll.RepeatBox1.refresh();
    } else {
        Pages.pgDevelopmentNotesAll.lblNoNotes.visible = true;
    }
}