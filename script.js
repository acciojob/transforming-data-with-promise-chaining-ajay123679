//your JS code here. If required.
const a=document.getElementById("ip");
const b=document.getElementById("btn");
const c=document.getElementById("output");
function task1(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText="Result: "+(a.value);
			resolve(a.value);
		},2000)
	})
}
function task2(m)
{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText="Result: "+(m*2);
			resolve(m*2);
		},2000)
	})
}
function task3(n)
{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText="Result: "+(n-3);
			resolve(n-3);
        },1000)
	})
}
function task4(o){
	return new Promise(()=>{
		setTimeout(()=>{
			c.innerText="Result: "+(0/2);
			resolve(o/2);
		},1000)
	})
}

function task5(p){
   	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText="Final Result: "+(p+10);
			resolve(p+10);
        },1000)
	})
}
async function fun(){
	const m=await task1();
	const n=await task2(m);
	const o=await task3(n);
	const p=await task4(o);
	const q=await task5(p);
}
b.addEventListener("click",fun);