<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css"/>
		<title>${Personal}</title>
	</head>
	<body>
		<div id="header">
			<h1 class="heading"><a href="index.html">Our Story</a></h1>
			<div id="navbar">
				<ul>
					<li class="top"><a href="page2_story.html">Story</a></li>
					<li class="top"><a href="PersonalPage.html">My Page</a></li>
					<li class="top"><a href="RegisterPage.html">Register</a></li>
					<li class="top"><a href="/Personal">SignIn</a></li>
					<li class="top"><a href="articalPage.html">Find</a></li>
				</ul>
			</div>
		</div>
		<table id="picture">
			<!--<th colspan="3">About Amber</th>-->
			<tr>
				<td><img src="http://www.wmpic.me/wp-content/uploads/2013/07/20130720235747315.jpg" alt=""/></td>
				<td>
					<div class="grid_8">
            			<div class="top-1 right-1">
                			<h3 id="h3-border">About<strong> Amber</strong></h3>
                			<div id="week">
                			<div>Today is: ${dayOfWeek}</div>
                			<#if dayOfWeek == "Monday">
        						<div class="notification">Monday Task: write an Email for him</div>

							<#elseif dayOfWeek == "Tuesday">
        						<div class="notification">Tuesday Task: Take an picture</div>

							<#elseif dayOfWeek == "Wednesday">
        						<div class="notification">Wednesday Task: Buy her a flower</div>

							<#elseif dayOfWeek == "Thursday">
        						<div class="notification">Thursday Task: write a blog</div>

							<#elseif dayOfWeek == "Friday">
        						<div class="notification">Friday Task: make a phone call</div>

							<#else>
        						<div class="notification">Why are you working on the weekend?!</div>

							</#if>
							</div>
                    	<div id="box-1">
                    		<img src="http://www.fzlqqqm.com/uploads/allimg/20150214/201502141541021096.jpg" alt="">
                    	</div>
                    	<ul id="selfIntro">
                    		<li >This is a girl who loves reading and writing </li>
                    		<li >Cooking is also a good choice for weekends</li>
                    		<li>I am studing in Pittsburgh while he is in the UK</li>
                    		<li>But we believe our story will have a happy ending</li>
                    	</ul>
                		</div>
            		</div>
					
				</td>
			</tr>
			<tr>
				<td>
				<div class="top-1 right-1">
                    <h2 id="h2-border">Love <span>story:</span></h2>
                    <p class="p1 top-2">Amber&John. Our story start for only a few month. It is hard to believe we will face such long-distance relationship for almost two years. But it is good for us to meet such a good website to share our story and photo, even share some music and movie list. </p>
                    <p class="p-border">We use almost all kinds of communication media to share every moment in our daily life. Such as Wechat and <a class="link" href="http://weibo.com/AmberLovesDiandian/home?wvr=5&lf=reg" target="_blank" rel="nofollow">Weibo</a>. </p>
                    <p class="p-border clr-1 top-3">Besides, we have a common <a href="https://outlook.live.com/owa/#path=/mail">email box</a>. These methods can help us have a better understanding of each other.</p>
                    <a href="#" class="link-1"> Read more</a>
				</div>
				</td>
				<td><img src="http://www.nuanxin.cc/uploads/allimg/c160107/145214GE414Z-15923.jpg" alt=""/></td>
			</tr>
			
		</table>
		</html>