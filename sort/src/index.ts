import {Sorter} from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// const numbersCollection = new NumbersCollection([-1,2,3,-4,23,12])
// numbersCollection.sort()
// console.log(numbersCollection.data)

// const charaterCollection = new CharacterCollection('suck my dick Bro')
// charaterCollection.sort()
// console.log(charaterCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(34)

linkedList.sort()
linkedList.print()