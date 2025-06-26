const inp=document.getElementById('fact');
const output=document.getElementById('out')

function calculatefact(){
    let num=inp.Value;
    let output=1;
    for(let i=1;i<=num;i++){
        output*=i;
    }
    output.innerText=output;
}
console.log(calculatefact(inp));