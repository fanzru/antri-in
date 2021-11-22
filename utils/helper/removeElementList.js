export const removeElementList = (arr, idx) => {
  const newList = []
  for (let i = 0 ; i < arr.length ; i ++){
    if (i != idx){
      newList.push(arr[i])
    }
  }
  return newList
}