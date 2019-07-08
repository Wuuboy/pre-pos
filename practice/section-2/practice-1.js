'use strict';

function countSameElements(collection) {
  var result = new Array()
  var dict = {}
  for(var i = 0;i < collection.length; i++){
      if(collection[i] in dict){
        dict[collection[i]]++
      }else {
        dict[collection[i]] = 1
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
