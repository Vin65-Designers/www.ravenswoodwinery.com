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
<body class="home">

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

	<section class="content homepageContent wrapper v65-group">
		
		<div class="featurePromo"><cf_pods location="Feature Promo" type="description"></div>

		<article class="featureImage leftCol">
			<cf_pods location="Homepage Feature Image" type="image">
		</article>
				
		<article class="homepageText rightCol">
			<cf_mainContent>
		</article>
		
		<div class="homepageFeatures v65-group">
			<cf_pods location="Homepage Features" type="image,title,description">
		</div>
	</section><!--/homepageContent-->
	
	<footer>
		<div class="graphic footerBg"></div>
		<div class="footerContentBg">
			<div class="wrapper v65-group">
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

	<cf_js files="/assets/js/scripts.js">

	<cf_vin65GlobalFooterAssets>

</body>
</html> </cfoutput>
