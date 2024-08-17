const buildInvertedIndex = (arr, str, cs, em) => {
    let rg = new RegExp('.*' + str + '.*', 'i')
   if(cs && em) 
      rg = new RegExp('(^|[^a-zA-Z0-9])' + str + '($|[^a-zA-Z0-9])')
    else if(cs)
      rg = new RegExp('.*' + str + '.*')
    else if(em)
   rg = new RegExp('(^|[^a-zA-Z0-9])' + str + '($|[^a-zA-Z0-9])', 'i')
    return arr.map((x, i) => i + 1).filter(x => rg.test(arr[x - 1]))
  }