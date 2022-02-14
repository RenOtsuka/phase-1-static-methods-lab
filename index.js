class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^a-zA-Z0-9-' ]+/gi, "");
  }

  static titleize(str){
    //return str.replace( /\w\S*/g, function(str){
      //return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    //})
    let notCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newS = str.split(" ");
    //console.log(newS);

    newS[0] = newS[0].slice(0, 1).toUpperCase() + newS[0].slice(1).toLowerCase();

    for (let i = 1; i < newS.length; i++) {
       if(!notCap.includes(newS[i].toLowerCase())){
         newS[i] = newS[i][0].toUpperCase() + newS[i].slice(1);
      }
      else{
        newS[i] = newS[i].toLowerCase();
      }
    }
    
    return newS.join(" ");
  }
  
}