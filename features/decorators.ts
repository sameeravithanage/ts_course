@classDecorator
class Boat {
  @testDecorator
  color: string = 'Red'

  @testDecorator
  get formattedColor():string {
    return `This boats color is ${this.color}`
  }

  @logError('something bad!')
  pilot(
    @parameterDecorater speed: string,
    @parameterDecorater generateWake: boolean
  ):void {
    if(speed === 'fast') {
      console.log('Swish')
    }else {
      console.log('Nothing')
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorater(target: any, key: string, index: number) {
  console.log(key,index)
}

function testDecorator(target: any, key: string) {
  console.log(target)
  console.log(key)
}

function logError(errorMessage: string) {
  return function logError(target: any, key: string, desc: PropertyDescriptor):void {
    const method = desc.value
    desc.value = function() {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }  
}
