/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.addStylesSet( 'my_styles',
[
	// Block Styles
	{ name : 'Pull Quote: Right' , element : 'p', attributes : { 'class' : 'v65-quoteRight' } },
	{ name : 'Pull Quote: Left' , element : 'p', attributes : { 'class' : 'v65-quoteLeft' } },
	{ name : 'Feature Title' , element : 'h1', attributes : { 'class' : 'featureTitle' } },

	
	// Object Styles
	{ name : 'Image Right With Border' , element : 'img' , attributes : { 'class' : 'v65-featureRight' } },
	{ name : 'Image Right' , element:'img' , attributes : { 'class' : 'v65-right' } },

	{ name : 'Club Logo' , element:'img' , attributes : { 'class' : 'clubLogo' } },
		
	{ name : 'Image Left With Border' , element : 'img', attributes : { 'class' :'v65-featureLeft' } },
	{ name : 'Image Left' , element: 'img' , attributes : { 'class' :'v65-left' } },
		
	{ name : 'Border' , element: 'img' , attributes : { 'class' :'v65-border' } },
	

	// Inline Styles
	{ name : 'Arrow Link' , element : 'a' , attributes : { 'class' : 'arrow' } },
	{ name : 'Small' , element : 'span' , attributes : { 'class' : 'small' } },
	{ name : 'Smaller' , element : 'span' , attributes : { 'class' : 'smaller' } }
	
]);