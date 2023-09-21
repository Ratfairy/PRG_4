let data =[12,"JavaScript",true]
data[3] = false
console.log(data)

let data2 =[12,"Javascript",true]
data.push("GSI")
console.log(data)

let data3 =[12,"Javascript",true]
delete data3[2]
console.log(data3)

let data4 =[12,"Javascript",true]
data4.shift(0)
console.log(data4)

let data5 =[12,"Javascript",true]
data5.splice(1,1)
console.log(data5)

let data6 =[12,"Javascript",true]
data6.pop()
console.log(data6)

let angka =[1,2,3,4,5,6,7,8]
console.log(angka.filter((element)=>{return element % 2== 0}))

let angka2 =[1,2,3,4,5,6,7,8]
console.log(angka2.includes(1))

let angka3 =[1,2,3,4,5,6,7,8]
console.log(angka3.sort())