'use strict';

function countSameElements(collection) {
  var result = new Array()
  var dict = {}
  for(var i = 0;i < collection.length; i++){
    if(collection[i].indexOf("-")==-1){
      if(collection[i] in dict){
        dict[collection[i]]++
      }else {
        dict[collection[i]] = 1
      }
    }else {
      var temp_key = collection[i].split("-")[0]
      var temp_value = collection[i].split("-")[1]
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
    result.push(dict_form)
  }
  console.log(result)
  return result
}
