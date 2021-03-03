
exports.min = function min (array) {
  if(Array.isArray(array)==false || array.length==0){
    return 0;
  }else{
    return Math.min.apply(null, array);
  }
  
}

exports.max = function max (array) {
  if(Array.isArray(array)==false || array.length==0){
    return 0;
  }
  else{
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if(Array.isArray(array)==false || array.length==0){
    return 0;
  }else{
    let s=0;
    array.forEach(element => {
      s+=element;
    });
    return s/array.length;
  }
}
