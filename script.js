function mincost(arr)
{ 
//write your code here
// return the min cost
let len = arr.length

	let res=[]
	let costmin = 0
	res =arr
	while(len>1){
		res=res.sort((a,b)=>a-b)
		let cost = res[0]+res[1]
		costmin=costmin+cost
		
		
		res=res.splice(0,2)
		res=res.push(cost)

		len=len-1
	}
	return costmin
  
}

module.exports=mincost;
