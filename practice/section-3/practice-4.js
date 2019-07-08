'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var C = new Array()
  var dict = {}
  for(var i = 0;i < collectionA.length; i++){
    if(collectionA[i].indexOf("-")==-1){
      if(collectionA[i] in dict){
        dict[collectionA[i]]++
      }else {
        dict[collectionA[i]] = 1
      }
    }else {
      var temp_key = collectionA[i].split("-")[0]
      var temp_value = collectionA[i].split("-")[1]
      if(temp_key in dict){
        dict[temp_key]++
      }else {
        dict[temp_key] = Number(temp_value)
      }
    }
  }
  //处理输出格式
  for ( var key in dict){
    var dict_form = {
      key : key,
      count : dict[key]
    }
    C.push(dict_form)
  }
  console.log(C)
  // return result

  console.log(objectB["value"])
  for(var i =0 ; i< C.length; i++){
    for(var key in C[i]){
      console.log(C[i]["key"])
      if (objectB["value"].indexOf(C[i]["key"])>-1){
        var sub = Math.floor(C[i]["count"]/3)
        C[i]["count"]-=sub
        break
      }else {
        continue
      }
    }
  }
  console.log(C)
  return C

}
