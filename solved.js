
function getPINs(observed) {
    const adjasentKeys = [
      /* 0 */  ["0", "8"],
      /* 1 */  ["1", "2", "4"],
      /* 2 */  ["1", "2", "3", "5"],
      /* 3 */  ["2", "3", "6"],
      /* 4 */  ["1", "4", "5", "7"],
      /* 5 */  ["2", "4", "5", "6", "8"],
      /* 6 */  ["3", "5", "6", "9"],
      /* 7 */  ["4", "7", "8"],
      /* 8 */  ["5", "7", "8", "9", "0"],
      /* 9 */  ["6", "8", "9"]
    ]
    
    function generateVariations(array1, array2) {
      const variationArr = [];
        for (let i = 0; i < array1.length; i++) {
        //   console.log(array2);
        for (let j = 0; j < array2.length; j++) {
          variationArr.push(array1[i] + array2[j])
        }
      }
      return variationArr;
    }
   
    console.log(typeof ([...observed]));
    return [...observed]
      .reduce((acc, currKey) => {
          if (acc.length === 0) return adjasentKeys[currKey]   
         
        return generateVariations(acc, adjasentKeys[currKey])
      }, [])
  }

console.log(getPINs('32'));


/* function getPINs(observed) {
    const _ = undefined
    const pad = [
     ['1','2','3'],
     ['4','5','6'],
     ['7','8','9'],
     [ _ ,'0', _ ]
    ]
    const keys = observed.split('').map(o => getSiblingKeys(o.toString(), pad))
    const results = cartesian(keys).map(arr => arr.join(''))
    
    return results
    
    function getSiblingKeys(n, pad) {
      const e = []
      const y = pad.findIndex(arr => arr.indexOf(n) != -1)
      const x = pad[y].indexOf(n)
  
      e.push(n)
      if (y > 0) e.push(pad[y-1][x])
      if (y < 2 || n == '8') e.push(pad[y+1][x])
      if (x > 0 && n != '0') e.push(pad[y][x-1])
      if (x < 2 && n != '0') e.push(pad[y][x+1])
      
      return e
    }
  
    function cartesian(arr) {
      return arr.reduce((a,b) => (
        a.map((x) =>
          b.map((y) =>
            x.concat(y)
          )
        ).reduce((a,b) => (
          a.concat(b)
        ), [])
      ), [[]])
    }
  } */