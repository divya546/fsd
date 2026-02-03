// fetch("https://fakestoreapi.com/products")
//  .then((res)=>res.json())
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log("some error occured while fetching" ,err));

 const myFunction = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    try{
        if(res){
            let newResponse = await res.json();
            return newResponse;
        }
    }catch(error){
        return "unable to fetch";
    }
 }
 
 const divElement = document.getElementById("Product");
 const btn = document.getElementById("btn");
 btn.addEventListener("click",async(e)=>{
    e.preventDefault();  
    const data = await myFunction();
    
    data.map((d)=>{
        const insideDiv = document.createElement("div");
        insideDiv.innerHTML= d.title;
        divElement.appendChild(insideDiv);
        console.log(insideDiv); 
 })
});