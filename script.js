//your JS code here. If required.
const a=document.getElementById("ip");
const b=document.getElementById("btn");
const c=document.getElementById("output");
function task1(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innertext=a.value;
			resolve(a);
		},2000)
	})
}
function task2(m)
{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText=m*2;
			resolve(m*2);
		},2000)
	})
}
function task3(n)
{
	retuen new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerText=n-3;
			resolve(n-3);
        },1000)
	})
}
function task4(o){
	return new Promise(()=>{
		setTimeout(()=>{
			c.innerText=0/2;
			resolve(o/2);
		},1000)
	})
}

function task5(p){
   	return new Promise((resolve)=>{
		setTimeout(()=>{
			c.innerHTML=p+10;
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
btn.addEventListener("click",fun);