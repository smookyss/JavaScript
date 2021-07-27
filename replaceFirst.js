function replaceFirst(list) {
    if (list.length < 1){
        return list }
    var first = list.shift()  
    list[list.length] = first 
    
    return list;
 
   }