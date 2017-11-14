
	var foreachid = function (all){
	    var allarr=[];
		for(let i of all){
			for(let c of i.firstlist){
				for(let s of c.secondlist){
					allarr.push(s)
				}
			}
			
		}
		return allarr
	}


export {foreachid}