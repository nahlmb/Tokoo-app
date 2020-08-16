let rooter = new Navigo()

//ROUTING : routing umum
rooter.on(() => {
    const landingVar = {};
    landingVar['--background'] = "linear-gradient(180deg, #FAFAFA 0%, #FFF8E1 100%)"
    const landingCss = ".tokoo-main-button{background-color:#ffd740}.tokoo-basic-button{background-color:#e0e0e0}#landing-nav{border-bottom:1px solid rgba(0,0,0,.05);background-color:#fafafa;padding:6px 6px;box-shadow:none}#landing-nav .navbar-item{color:#000}#landing-nav .navbar-item:hover{font-weight:700}.navbar-item img{height:32px;width:auto;max-height:none}.landing{color:#000;line-height:1.1}.landing-image img{object-fit:scale-down}.landing-text{padding:48px 24px}.landing p{line-height:1.25;margin:20px 0}.landing .column{display:flex;flex-direction:column;justify-content:center}.landing-columns{padding:60px 0;border-bottom:1px solid #eee}.landing-footer{padding:48px 48px;margin:0!important;color:#fff;overflow:scroll;background-color:#000}.landing-footer a{color:#fff}.landing-footer a:hover{background:0 0;color:#fff;font-weight:700}#footer-links{font-size:18px}#footer-icons{font-size:24px}"
    injectPage('component/pages/landing.html')
    injectTheme(landingVar, landingCss)
}).resolve()