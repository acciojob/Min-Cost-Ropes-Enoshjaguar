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
		mincost=costmin+cost
		let newarr;
		newarr.push(...res.slice(2),cost)
		res = newarr

		len=len-1
	}
	return costmin
  
}

module.exports=mincost;
