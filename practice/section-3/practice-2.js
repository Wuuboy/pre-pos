'use strict';

function createUpdatedCollection(collectionA, objectB) {
  console.log(objectB["value"])
  for(var i =0 ; i< collectionA.length; i++){
    for(var key in collectionA[i]){
      console.log(collectionA[i]["key"])
      if (objectB["value"].indexOf(collectionA[i]["key"])>-1){
        var sub = Math.floor(collectionA[i]["count"]/3)
        collectionA[i]["count"]-=sub
        break
      }else {
        continue
      }
    }
  }
  console.log(collectionA)
  return collectionA
}
