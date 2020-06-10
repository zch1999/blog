// new Promise((resolve, reject) => {
//   console.log("promise1")
//   resolve()
// })
// .then(() => {
//   console.log("then11")
//   new Promise((resolve, reject) => {
//     console.log("promise2")
//     resolve()
//   }) 
//   .then(() => {
//     console.log("then21")
//     new Promise((resolve, reject) => {
//       console.log("promise3")
//       resolve()
//     }).then(() => {
//       console.log("then31")
//     }).then(() => {
//       console.log("then32")
//     })
//   })
//   .then(() => {
//     console.log("then22")
//   })
// }).then(() => {
//   console.log("then12")
// })


for(var i=0; i<3; i++) {
  (function(i) {
  setTimeout(() => {
      console.log(i)
  },2000)})(i)
}