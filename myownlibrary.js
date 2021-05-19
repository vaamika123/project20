function collide(jerry, tom) {
  
    if(tom.x - jerry.x < (tom.width + jerry.width)/2){
      return true;
    }
    else{
      return false;
    }
  }