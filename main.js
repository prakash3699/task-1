let likeCount=document.getElementById("count").innerText;
let likeCounts=document.getElementById("count");
let like=document.getElementById("empty");
let unLike=document.getElementById("fill");
likeCount=parseInt(likeCount);

like.addEventListener("click", function(){
	unLike.style.display="block";
	like.style.display="none";	
	likeCount++;
	likeCounts.innerText=`${likeCount}`;
});

unLike.addEventListener("click", function(){
	like.style.display="block";
	unLike.style.display="none";
	likeCount--;
	likeCounts.innerText=`${likeCount}`;
});