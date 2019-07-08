'use strict';

function createUpdatedCollection(collectionA, objectB) {
  console.log(objectB["value"])
  for(var i =0 ; i< collectionA.length; i++){
    for(var key in collectionA[i]){
      console.log(collectionA[i]["key"])
      if (objectB["value"].indexOf(collectionA[i]["key"])>-1){
        collectionA[i]["count"]-=1
        break
      }else {
        continue
      }
    }
  }
  console.log(collectionA)
  return collectionA
}
