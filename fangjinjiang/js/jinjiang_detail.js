var beijing_time = document.getElementsByClassName("beijing_time")[0];
var date = new Date();
var year01 = 0;
year01 = date.getYear();
console.log(year01);
year01 = String(year01).slice(1);
var H = date.getHours();
var min = date.getMinutes();
H > 10 ? H : H = "0" + H;
min > 10 ? min : min = "0" + min;
beijing_time.innerText = "北京时间 " + year01 + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() +
	":" + date.getMinutes();




// 轮播图
var img_change = document.getElementsByClassName("img_change")[0];
var uls = img_change.children[0].children;
var ols = img_change.children[1].children;
var num = 0;

for (var i = 0; i < ols.length; i++) {
	if (i == 0) {
		ols[i].style.backgroundColor = "#69AAEC";
		uls[i].style.display = "block";
	}
	ols[i].index = i;
	ols[i].onmousemove = function() {
		for (var j = 0; j < ols.length; j++) {
			ols[j].style.backgroundColor = "#FFFFFF";
			uls[j].style.display = "none";
		}
		ols[this.index].style.backgroundColor = "#69AAEC";
		uls[this.index].style.display = "block";
		num = this.index;
	}
}

setInterval(function() {
	for (var j = 0; j < ols.length; j++) {
		ols[j].style.backgroundColor = "#FFFFFF";
		uls[j].style.display = "none";
	}
	num == 2 ? num = 0 : num++;
	ols[num].style.backgroundColor = "#69AAEC";
	uls[num].style.display = "block";


}, 3000)
// 轮播图 end
// vip金榜 完结金榜 千字金榜
var uls01 = document.getElementsByClassName("middle01_left_content");
var lis01 = document.getElementsByClassName("middle01_left_top")[0].children;
for (var i = 0; i < lis01.length; i++) {
	if (i == 0) {
		lis01[i].className = "con";
		uls01[i].style.display = "block";
	}
	lis01[i].index = i;
	lis01[i].onmousemove = function() {
		for (var j = 0; j < lis01.length; j++) {
			lis01[j].className = "";
			uls01[j].style.display = "none";
		}
		lis01[this.index].className = "con";
		uls01[this.index].style.display = "block";

	}
}
// vip金榜 完结金榜 千字金榜 end

//vip强力推荐 读者栽培榜
var lis02 = document.getElementsByClassName("c1");
var uls02 = document.getElementsByClassName("chart_box")[0].children;
for (var i = 0; i < lis02.length; i++) {
	if (i == 0) {
		lis02[i].className = "con02 c1";
		uls02[i].style.display = "block";
	}
	lis02[i].index = i;
	lis02[i].onclick = function() {
		for (var j = 0; j < lis02.length; j++) {
			lis02[j].className = "c1";
			uls02[j].style.display = "none";
		}
		lis02[this.index].className = "con02 c1";
		uls02[this.index].style.display = "block";

	}
}

//vip强力推荐 读者栽培榜 end

//霸王票周榜 霸王周榜  勤奋指数榜 快手拼文榜
var lis03 = document.getElementsByClassName("bawang_name")[0].children[0].children;
var uls03 = document.getElementsByClassName("bc");
var lis04 = document.getElementsByClassName("qinfen_name")[0].children[0].children;
var uls04 = document.getElementsByClassName("qc");

function zhoubang(lis, uls) {

	for (var i = 0; i < lis.length; i++) {
		if (i == 0) {
			lis[i].className = "con03";
			uls[i].style.display = "block";
		}
		lis[i].index = i;
		lis[i].onclick = function() {
			for (var j = 0; j < lis.length; j++) {
				lis[j].className = "";
				uls[j].style.display = "none";
			}
			lis[this.index].className = "con03";
			uls[this.index].style.display = "block";

		}
	}


}
zhoubang(lis03, uls03);
zhoubang(lis04, uls04);
//霸王票周榜 霸王周榜  勤奋指数榜 快手拼文榜 end

var diyi = document.getElementsByClassName("diyi");
var dier = document.getElementsByClassName("dier");
var diyiye = document.getElementsByClassName("diyiye");
var dierye = document.getElementsByClassName("dierye");

for (var i = 0; i < diyi.length; i++) {
	diyi[i].onclick = function() {
		for (var j = 0; j < diyi.length; j++){
			diyi[j].className = "diyi con04";
			diyiye[j].style.display = "block";
			}

		for (var v = 0; v < dier.length; v++) {
			dier[v].className = "dier";
			dierye[v].style.display = "none";
		}
	}

}

for (var i = 0; i < dier.length; i++) {
	dier[i].onclick = function() {
		for (var j = 0; j < dier.length; j++){
			dier[j].className = "dier con04";
			dierye[j].style.display = "block";
			}

		for (var v = 0; v < diyi.length; v++) {
			diyi[v].className = "diyi";
			diyiye[v].style.display = "none"
		}
	}

}

var lis05 = document.getElementsByClassName("qianyue01")[0].children;
var lis06 = document.getElementsByClassName("qianyue02")[0].children;
var uls05 = document.getElementsByClassName("left_box_content");
var uls06 = document.getElementsByClassName("right_box_content");


function qiannyue(lis,uls) {

	for (var i = 0; i < lis.length; i++) {
		if (i == 0) {
			lis[i].className = "con05";
			uls[i].style.display = "block";
		}
		lis[i].index = i;
		lis[i].onclick = function() {
			for (var j = 0; j < lis.length; j++) {
				lis[j].className = "";
				uls[j].style.display = "none";
			}
			lis[this.index].className = "con05";
			uls[this.index].style.display = "block";

		}
	}


}
qiannyue(lis05,uls05);
qiannyue(lis06,uls06);

var lis07 = document.getElementsByClassName("middle_box08_right")[0].children[0].children;
var uls07 = document.getElementsByClassName("middle_box08_right")[0].children[1].children;

for (var i = 0; i < lis07.length; i++) {
		if (i == 0) {
			lis07[i].className = "con06";
			uls07[i].style.display = "block";
		}
		lis07[i].index = i;
		lis07[i].onclick = function() {
			for (var j = 0; j < lis07.length; j++) {
				lis07[j].className = "";
				uls07[j].style.display = "none";
			}
			lis07[this.index].className = "con06";
			uls07[this.index].style.display = "block";

		}
	}


var laba = document.getElementById("laba");
var gb = laba.children[1];
var target=-100;
var leader = 990;

setInterval(function(){
	leader = leader + target/100;
	gb.style.left = leader +"px";
	if(leader<=-1000){
		leader=990;
		
	}
},10)


