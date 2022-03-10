const drink = {
  color: 'brown',
  carbonated: true,
  suger: 40
}

const pepsi: [string,boolean,number] = ['brown',true,40]

type Drink = [string,boolean,number]

const coke: Drink = ['brown',true,49]
const sprite: Drink = ['clear',true,50]
const tea: Drink = ['brown',false,0]