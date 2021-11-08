class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];

    args.forEach(e => {
      if (e < smallest) {
        smallest = e 
      }
    })
    
    console.log(smallest)
    return smallest

    // return Math.min(...args) better
  }
}

new SmallestIntegerFinder().findSmallestInt([-3,1,20,12,30,2,4,40,0,-50])