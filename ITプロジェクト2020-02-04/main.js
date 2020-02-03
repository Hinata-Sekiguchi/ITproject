const articleData = {

}
/* < li class="active" > <a href="index.html"><strong>トップページ</strong><span>Top</span></a></li >
   <li><a href="subpage.html"><strong>ごあいさつ</strong><span>Greeting</span></a></li>
   <li><a href="subpage.html"><strong>サービス概要</strong><span>Service</span></a></li>
   <li><a href="subpage.html"><strong>弊社の取り組み</strong><span>Approach</span></a></li>
   <li><a href="subpage.html"><strong>会社情報</strong><span>Company</span></a></li>
   <li class="last"><a href="subpage.html"><strong>お問い合わせ</strong><span>Contact</span></a></li>
   */

Vue.component('header', {
  template: `
  <nav id="mainNav">
	<div class="inner">
  	<a class="menu" id="menu"><span>MENU</span></a>
		<div class="panel">   
    	<ul>
    		<li class="active"><a href="index.html"><strong>トップページ</strong><span>Top</span></a></li>
				<li><a href="subpage.html"><strong>ごあいさつ</strong><span>Greeting</span></a></li>
				<li><a href="subpage.html"><strong>サービス概要</strong><span>Service</span></a></li>
				<li><a href="subpage.html"><strong>弊社の取り組み</strong><span>Approach</span></a></li>
				<li><a href="subpage.html"><strong>会社情報</strong><span>Company</span></a></li>
				<li class="last"><a href="subpage.html"><strong>お問い合わせ</strong><span>Contact</span></a></li>
			</ul>   
    </div>
	</div> 
</nav>`
});

Vue.component('logo', {
  props: ['val'],
  template: `
    `
});

Vue.component('info', {
  props: ['val'],
  template: `
    `
});

Vue.component('mainNav', {
  props: ['val'],
  template: `
<nav id="mainNav">
	<div class="inner">
  	<a class="menu" id="menu"><span>MENU</span></a>
		<div class="panel">   
    	<ul>
    		<li class="active"><a href="top.html"><strong>トップページ</strong><span>Top</span></a></li>
				<li><a href="subpage.html"><strong>介護タクシー</strong><span>Greeting</span></a></li>
				<li><a href="subpage.html"><strong>料金表</strong><span>Service</span></a></li>
				<li><a href="subpage.html"><strong>ご利用チャート</strong><span>Approach</span></a></li>
				<li><a href="subpage.html"><strong>会社概要</strong><span>Company</span></a></li>
				<li><a href="subpage.html"><strong>介護事業所の方へ</strong><span>Approach</span></a></li>
				<li><a href="subpage.html"><strong>お役立ち資料</strong><span>Company</span></a></li>
				<li class="last"><a href="sub-mailform.html"><strong>お問い合わせ</strong><span>Contact</span></a></li>
			</ul>   
    </div>
	</div> 
</nav>
    `
})

Vue.component('wrapper', {
  props: ['val'],
  template: `
    `
})

Vue.component('mainBanner', {
  props: ['val'],
  template: `
    `
})

Vue.component('footer', {
  props: ['val'],
  template: `
    `
})

Vue.component('', {
  props: ['val'],
  template: `
    `
})
Vue.component('', {
  props: ['val'],
  template: `
    `
})

Vue.component('', {
  props: ['val'],
  template: `
    `
})
var app = new Vue({
  el: '#main',
  data: articleData,
})