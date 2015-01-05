function pgDevelopmentNotes_Self_OnShow(e) {
    this.navigationItem.title = lang["comments"];
    var item1 = new SMF.UI.iOS.BarButtonItem({
            title : lang["add"],
            onSelected : function () {
                if (Pages.pgDevelopmentNotes.EditBox1.text != '') {
                    if (!isFromEdit) {
                        Data.DS_DevelopmentNotes.add();
                        Data.DS_DevelopmentNotes.Note = Pages.pgDevelopmentNotes.EditBox1.text;
                    } else {
                        Data.DS_DevelopmentNotes.seek(noteRowIndex);
                        Data.DS_DevelopmentNotes.deleteRow();
                        Data.DS_DevelopmentNotes.add();
                        Data.DS_DevelopmentNotes.Note = Pages.pgDevelopmentNotes.EditBox1.text;
                    }
                    Data.DS_DevelopmentNotes.commit();
                    Pages.back();
                } else {
                    alert("Please leave your comment");
                }
            }
        });
    var item2 = new SMF.UI.iOS.BarButtonItem({
            title : lang["back"],
            onSelected : function () {
                Pages.back();
            }
        });
    this.navigationItem.leftBarButtonItems = [item2];
    this.navigationItem.rightBarButtonItems = [item1];
    Pages.pgDevelopmentNotes.EditBox1.focus();
}
function pgDevelopmentNotes_EditBox1_OnReturnKey(e) {
    if (!isFromEdit) {
        Data.DS_DevelopmentNotes.add();
        Data.DS_DevelopmentNotes.Note = Pages.pgDevelopmentNotes.EditBox1.text;
    } else {
        Data.DS_DevelopmentNotes.seek(noteRowIndex);
        Data.DS_DevelopmentNotes.deleteRow();
        Data.DS_DevelopmentNotes.add();
        Data.DS_DevelopmentNotes.Note = Pages.pgDevelopmentNotes.EditBox1.text;
    }
    Data.DS_DevelopmentNotes.commit();
    Pages.back();
}