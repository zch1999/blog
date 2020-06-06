// function Flatten(arr) {
//   let result = []
//   function flatten(arr) {
//     for(let i=0; i< arr.length; i++){
//       if(Array.isArray(arr[i])){
//         flatten(arr[i])
//       }else {
//         result.push(arr[i])
//       }
//     }
//   }
//   flatten(arr)
//   return result
// }

// console.log(Flatten([1,[ 2,3], [[3], 4]]))

var longestConsecutive = function(nums) {
  partition(nums,0,nums.length)
  console.log(nums)
};

function swap(nums,i,j){
  [nums[j], nums[i]] = [nums[i], nums[j]]
}

var partition = function(nums,left,right) {
  if(left >= right) return
  let tmp = nums[left]
  let j = left
  for(let i=j+1; i< nums.length; i++){
      if(nums[i] < tmp){
          j++
          swap(nums, i ,j)
      }
  }
  swap(nums,left,j)
  partition(nums,left,j-1)
  partition(nums,j+1,right)
}

longestConsecutive([3,4,1,4,2,5,6,2])