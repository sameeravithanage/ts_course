"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([-1,2,3,-4,23,12])
// numbersCollection.sort()
// console.log(numbersCollection.data)
// const charaterCollection = new CharacterCollection('suck my dick Bro')
// charaterCollection.sort()
// console.log(charaterCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(34);
linkedList.sort();
linkedList.print();
