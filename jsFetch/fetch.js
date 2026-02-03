// fetch("https://fakestoreapi.com/products")
//  .then((res)=>res.json())
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log("some error occured while fetching" ,err));

 const myFunction = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    try{
        if(res){
            let newResponse = await res.json();
            console.log(newResponse);
        }
    }catch(error){
        console.log("Some error occured");
    }


 }
 myFunction();