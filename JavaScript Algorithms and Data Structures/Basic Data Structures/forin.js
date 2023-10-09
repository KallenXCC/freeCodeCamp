const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let numOnline = 0;
    for(const users in allUsers) {
      if(allUsers[users].online == true) {
        numOnline++;
      }
    }
    return numOnline;
    // Only change code above this line
  }
  
  console.log(countOnline(users));