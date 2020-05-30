
var photo=["1.jpg","2.jpg","3.jpg","4.jpg"];
var myclick= document.querySelector("img");
 var count=0;
function next(){
	count++;
	if(count>=photo.length){
		count=0;
		myclick.src=photo[count];
	}else{
		myclick.src=photo[count];
		}
}

function prev(){
	count--;
	if(count<0){
	count =photo.length -1;
		myclick.src=photo[count];
	}else{
		myclick.src=photo[count];
		}
	
}