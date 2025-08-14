function dayArchive() {
  console.log('Started dayArchive run.');
  var delayDays = 1;
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var label = GmailApp.getUserLabelByName("24hr Archive");
  var threads = label.getThreads();
    
  if(threads.length > 0){
      console.log('Found ' + threads.length + ' emails marked for archival.');
    var counter = 0;
    try {
      for(var i =0; i < threads.length; i++){
        if (threads[i].getLastMessageDate()<maxDate){ 
          Logger.log('archived email: ' + threads[i].getFirstMessageSubject());
          threads[i].markUnimportant();
          threads[i].markRead();
          threads[i].moveToArchive();
          counter++;
        }
      }
       console.log('Successfully moved ' + counter + 'emails to the archive.');
    }
    catch(e){
      console.error('Could Not Start Run: ' + e);
    }
  }
  else{
    console.log('Found ' + threads.length + 'emails marked for archival. Exiting.');
  }
}

function weekArchive() {
  console.log('Started weekArchive run.');
  var delayDays = 7;
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var label = GmailApp.getUserLabelByName("1w Archive");
  var threads = label.getThreads();
    
  if(threads.length > 0){
      console.log('Found ' + threads.length + ' emails marked for archival.');
    var counter = 0;
    try {
      for(var i =0; i < threads.length; i++){
        if (threads[i].getLastMessageDate()<maxDate){ 
          Logger.log('archived email: ' + threads[i].getFirstMessageSubject());
          threads[i].markUnimportant();
          threads[i].markRead();
          threads[i].moveToArchive();
          counter++;
        }
      }
       console.log('Successfully moved ' + counter + 'emails to the archive.');
    }
    catch(e){
      console.error('Could Not Start Run: ' + e);
    }
  }
  else{
    console.log('Found ' + threads.length + 'emails marked for archival. Exiting.');
  }
}
