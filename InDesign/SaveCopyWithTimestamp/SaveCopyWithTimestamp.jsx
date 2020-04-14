// Define App, Document, Filepath, Current Document Name
myApp = Application;
doc = app.activeDocument;
docPath =doc.filePath;
docName = doc.name

// Get current Timestamp & strip unwanted characters
myDate = new Date().toString();
cleanDate = myDate.replace(/:/g, "");
cleanDate = cleanDate.replace(" GMT-0400", "");

// Create new names for PDF and INDD document with timestamp appended to end
newDocName = docName.replace(".indd",  "-[Saved " + cleanDate + "].indd");
exportDocName = docName.replace(".indd",  "-[Saved " + cleanDate + "].pdf");

// create a folder to hold archived copies in same directory as the source file. Store the path to new folder.
archiveFolder = new Folder(docPath + "/Archive/");
archiveFolder.create();
aPath = archiveFolder.getRelativeURI();

// Save Document if it has been modified
if(doc.modified == true){
    doc.save();
    }

// Export the PDF in the archive folder, Prompt user for settings.
doc.exportFile(ExportFormat.pdfType, File(aPath + "/" + exportDocName), true);

// Save a copy of the Indesign file in the archive folder. 
doc.saveACopy(File(aPath + "/" + newDocName), false);




