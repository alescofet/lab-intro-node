class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
    
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>{return a-b})
    this.length=this.items.length
  }

  get(pos) {
    if (pos >= 0 && pos<this.items.length){
      return (this.items[pos])
    }else{throw new Error('OutOfBounds')}
  }

  max() {
    if (this.items.length !==0){
      return (this.items[this.items.length-1])
    }else{throw new Error('EmptySortedList')}
  }

  min() {
     if (this.items.length !==0){
      return (this.items[0])
    }else{throw new Error('EmptySortedList')}
  }
  

  sum() {
    if (this.items.length !==0){
      return (this.items.reduce((a,b)=>a+b,0))
    }else{return 0}
  }

  avg() {
    if (this.items.length !==0){
      return ((this.items.reduce((a,b)=>a+b,0))/this.items.length)
    }else{throw new Error('EmptySortedList')}
  }
}

module.exports = SortedList;
