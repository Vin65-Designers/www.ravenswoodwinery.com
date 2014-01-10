<cfoutput> <!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<cf_metaTags>

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

	<cf_vin65GlobalAssets>

	<cf_css files="/assets/css/screen.min.css">
	
	<!--[if lt IE 9]>
		<script src="/assets/js/html5shiv-printshiv.js"></script>
		<script src="/assets/js/respond.min.js"></script>
	<![endif]-->

	<script type="text/javascript" src="http://fast.fonts.net/jsapi/47ce77c2-63b8-455c-96c4-bbc962245527.js"></script>
</head>
<body>

	<header class="primary v65-group">
		<div class="wrapper">
			<div id="user-tools">
				<cf_modalCart>	
				<cf_login>
			</div><!--/user-tools-->
			
			<h1 class="logo hideText">
				<a href="/" accesskey="h"><cf_websiteName></a>
			</h1>
			
			<nav class="mainMenu">
				<cf_layoutHeaderNav depth="2">
				<a href="##footerMenu" class="footerMenuLink"><i class="icon-menu"></i></a>
			</nav>
		</div>
	</header>
	
	<section class="content pageContent wrapper v65-group">
		<a class="backToTop" href="##"><i class="icon-up-bold"></i>TOP</a>

		<div class="pageWrapper">
			<article class="page">
				<cf_mainContent>
			</article>
			<div class="rightFeature"></div>
		</div>
		
		<aside class="narrowLeftCol">
			<a name="footerNav"></a> 
			<h3><cf_leftNavSectionTitle depth="2"></h3>
			<div class="subMenu">
				<div class="subMenuWrapper">
					<cf_layoutLeftNav>
				</div>
			</div>
			<div class="leftFeature">
				<cf_pods location="Left Column Feature" type="title,description">
			</div>
		</aside>
	</section><!--/pageContent-->
	
	<footer>
		<div class="graphic footerBg"></div>
		<div class="footerContentBg">
			<div class="wrapper v65-group">
				<div class="graphic tree"></div>
				<a name="footerMenu"></a>
				
				<ul class="contactDetails">
					<cf_pods location="Footer Contact Details" type="title" wrapper="li">
				</ul>

				<nav>
					<cf_layoutFooterNav>
				</nav>
				
				<ul class="legal">
					<li><cf_copyright></li>
					<li><cf_vin65Accolade></li>
				</ul>
			</div>
		</div>
	</footer>

	<cf_js files="/assets/js/scripts.js,/assets/nivo/jquery.nivo.slider.pack.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
