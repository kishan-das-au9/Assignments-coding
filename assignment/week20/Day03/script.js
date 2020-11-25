
// fetch("http://jsonplaceholder.typicode.com/comments")

function fetchdata(){

    fetch("http://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(data=>
        constraints(data))
}
fetchdata();
    
function constraints(data){
l=data.length;
arr=[]
for(var i=0;i<l;i++){
    if((data[i].body).length>50){
        str=""
        for(var j=0;j<50;j++){
            str+=data[i].body[j];
        }
        
        arr.push({'postid':data[i].postId,'body':str});
        
        str=""
    }else{
        arr.push({'postid':data[i].postId,'body':data[i].body});
    }
    
    
// console.log(data[i].postId)
// console.log(data[i].body)   
}
for(j=0;j<arr.length;j++){
    

for(i=1;i<50;i++){
    if(arr[j].postid==i){
        console.log("PostID:",":-",arr[j].postid);
        console.log(arr[j].body)
    }
    
}
count=1       

        
        
    }
}


