var cl1 = document.getElementsByClassName("cl1");
var cl2 = document.getElementsByClassName("cl2");
var cl3 = document.getElementsByClassName("cl3");
var cl4 = document.getElementsByClassName("cl4");

var concent_list01 = document.getElementById("concent_list01");
var concent_list02 = document.getElementById("concent_list02");
var concent_list03 = document.getElementById("concent_list03");
var concent_list04 = document.getElementById("concent_list04");

for(var i = 0;i<cl1.length;i++){
	cl1[i].index=i;
	if(i==0){
		concent_list01.children[0].style.display = "block";
	}
	cl1[i].onmousemove=function(){
		for(var j=0;j<cl1.length;j++){
			concent_list01.children[j].style.display = "none";
		}
		concent_list01.children[this.index].style.display = "block";
	}
}
for(var i = 0;i<cl1.length;i++){
	cl2[i].index=i;
	if(i==0){
		concent_list02.children[0].style.display = "block";
	}
	cl2[i].onmousemove=function(){
		for(var j=0;j<cl2.length;j++){
			concent_list02.children[j].style.display = "none";
		}
		concent_list02.children[this.index].style.display = "block";
	}
}
for(var i = 0;i<cl1.length;i++){
	cl3[i].index=i;
	if(i==0){
		concent_list03.children[0].style.display = "block";
	}
	cl3[i].onmousemove=function(){
		for(var j=0;j<cl3.length;j++){
			concent_list03.children[j].style.display = "none";
		}
		concent_list03.children[this.index].style.display = "block";
	}
}
for(var i = 0;i<cl1.length;i++){
	cl4[i].index=i;
	if(i==0){
		concent_list04.children[0].style.display = "block";
	}
	cl4[i].onmousemove=function(){
		for(var j=0;j<cl4.length;j++){
			concent_list04.children[j].style.display = "none";
		}
		concent_list04.children[this.index].style.display = "block";
	}
}

var beijing_time = document.getElementsByClassName("beijing_time")[0];
var date = new Date();
var year01 = 0;
year01= date.getYear();
console.log(year01);
year01 = String(year01).slice(1);
var H = date.getHours();
var min = date.getMinutes();
H>10? H:H="0"+H;
min>10? min:min="0"+min;
beijing_time.children[0].innerText = "北京时间 " + year01 +"年"+ (date.getMonth()+1)+"月"+date.getDate()+"日"+ date.getHours()+":"+date.getMinutes();
