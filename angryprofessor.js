function angryProfessor(h, a) {
    let count = 0;
    for (let num of a) {
      if (num <= 0) {
        count++;
      }
    }
    if (count == h){
      return "NO";
    } 
    else{
      return "YES";
    }
  }