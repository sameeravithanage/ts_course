let apple: number = 5
apple = 10

let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

let now: Date = new Date()

let colors: string[] = ['red','green','blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true,false,true]

class Car {

}

let car: Car = new Car()

let point: {x: number ,y: number} = {
  x: 10,
  y: 20
}

const logNumber:(i:number)=>void = (i:number)=>{
  console.log(i)
}

const json = '{"x":10,"y":13}'
const coordinates: {x: number, y: number} = JSON.parse(json)
console.log(coordinates)

let numbers = [-10,12,-4,-3]
let numberAboveZero: boolean|number = false
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]>0){
    numberAboveZero = numbers[i]
  }
}