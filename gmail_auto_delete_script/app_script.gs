function dayDelete() {
  console.log('Started dayDelete run.');
  var delayDays = 1;
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var label = GmailApp.getUserLabelByName("24hr Delete");
  var threads = label.getThreads();
    
  if(threads.length > 0){
      console.log('Found ' + threads.length + ' emails marked for deletion.');
    var counter = 0;
    try {
      for(var i =0; i < threads.length; i++){
        if (threads[i].getLastMessageDate()<maxDate){ 
          Logger.log('deleted email: ' + threads[i].getFirstMessageSubject());
          threads[i].markUnimportant();
          threads[i].markRead();
          threads[i].moveToTrash();
          counter++;
        }
      }
       console.log('Successfully moved ' + counter + 'emails to the trash.');
    }
    catch(e){
      console.error('Could Not Start Run: ' + e);
    }
  }
  else{
    console.log('Found ' + threads.length + 'emails marked for deletion. Exiting.');
  }
}

function weekDelete() {
  console.log('Started weekDelete run.');
  var delayDays = 7;
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var label = GmailApp.getUserLabelByName("1w Delete");
  var threads = label.getThreads();
    
  if(threads.length > 0){
      console.log('Found ' + threads.length + ' emails marked for deletion.');
    var counter = 0;
    try {
      for(var i =0; i < threads.length; i++){
        if (threads[i].getLastMessageDate()<maxDate){ 
          Logger.log('deleted email: ' + threads[i].getFirstMessageSubject());
          threads[i].markUnimportant();
          threads[i].markRead();
          threads[i].moveToTrash();
          counter++;
        }
      }
       console.log('Successfully moved ' + counter + 'emails to the trash.');
    }
    catch(e){
      console.error('Could Not Start Run: ' + e);
    }
  }
  else{
    console.log('Found ' + threads.length + 'emails marked for deletion. Exiting.');
  }
}
