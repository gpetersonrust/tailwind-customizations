
 const components = {".btn":{"border-radius":"0.5rem","font-size":"clamp(1rem, 2vw, 1.5rem)","font-weight":"bold","padding":"clamp(0.125rem, 1vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)","margin":"clamp(0.5rem, 1vw, 1rem)","transition":"all 0.3s ease-in-out","@apply text-white/70 bg-app-primary":{},
"&:hover":{"box-shadow":"0 0 1rem 0 rgba(0, 0, 0, 0.2)","color":"#fff"}},
".btn-secondary":{"border-radius":"0.5rem","font-size":"clamp(1rem, 2vw, 1.5rem)","font-weight":"bold","padding":"clamp(0.125rem, 1vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)","margin":"clamp(0.5rem, 1vw, 1rem)","transition":"all 0.3s ease-in-out","@apply text-white/70 bg-app-secondary":{},
"&:hover":{"box-shadow":"0 0 1rem 0 rgba(0, 0, 0, 0.2)","color":"#fff"}},
".btn-white":{"border-radius":"0.5rem","font-size":"clamp(1rem, 2vw, 1.5rem)","font-weight":"bold","padding":"clamp(0.125rem, 1vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)","margin":"clamp(0.5rem, 1vw, 1rem)","transition":"all 0.3s ease-in-out","@apply text-app-primary/70 bg-white hover:text-app-primary":{},
"&:hover":{"box-shadow":"0 0 1rem 0 rgba(0, 0, 0, 0.2)"}},
".btn-red":{"border-radius":"0.5rem","font-size":"clamp(1rem, 2vw, 1.5rem)","font-weight":"bold","padding":"clamp(0.125rem, 1vw, 0.5rem) clamp(0.75rem, 1vw, 1rem)","margin":"clamp(0.5rem, 1vw, 1rem)","transition":"all 0.3s ease-in-out","@apply text-white/70 bg-red-500 hover:text-white":{},
"&:hover":{"box-shadow":"0 0 1rem 0 rgba(0, 0, 0, 0.2)"}},
".card":{"width":"90%","position":"relative","border-radius":"6px","overflow":"hidden","box-shadow":"0 0 10px rgb(0 0 0 / 17%)"},
".parallax":{"background-attachment":"fixed","background-position":"center","background-repeat":"no-repeat","background-size":"cover","height":"450px","width":"100%"},
".site-container":{"max-width":"1800px","margin":"0 auto","padding":"0 15px","min-width":"320px","width":"95%"},
".auto-center":{"display":"flex","align-items":"center","justify-content":"center"},
".app-text":{"font-family":"'Lato', sans-serif"},
".app-second-text":{"color":"gold"},
".responsive-grid":{"@apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4":{}},
".img-fit":{"object-fit":"cover","width":"100%","height":"100%","position":"absolute","top":"0","left":"0"},
".modal":{"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","z-index":9999999999,"display":"flex","justify-content":"center","align-items":"center","background":"rgba(0, 0, 0, 0.6)","@apply flex-col off-screen transition duration-500":{}},
".modal.open-modal":{"@apply on-screen":{}},
".modal__content":{"width":"50%","min-width":"325px","color":"#fff","border":"1px solid #fff","@apply bg-gradient-to-br from-app-primary  to-app-secondary":{}},
".modal__header":{"display":"flex","justify-content":"space-between","align-items":"center","background":"#fff","padding":"0 2rem","@apply text-app-primary":{}},
".modal__title":{"font-size":"1.5rem","font-weight":"bold","@apply text-app-primary":{}},
".modal__close":{"cursor":"pointer","font-size":"clamp(.75rem, 2vw, 1.125rem)","border-radius":"50%","height":"clamp(1.25rem, 2vw, 2rem)","width":"clamp(1.25rem, 2vw, 2rem)","@apply text-app-primary/50 border border-solid border-app-primary/50 transition duration-500 hover:bg-app-secondary hover:border-app-primary hover:text-white":{}},
".modal__body":{"display":"flex","justifyContent":"center","alignItems":"center","margin":"0 auto","min-height":"200px","@apply text-lg text-center flex-1":{}},
".modal__footer":{"display":"flex","justify-content":"flex-end","align-items":"center","padding":"0 1rem","@apply text-white bg-app-primary border-0 border-t border-solid border-white":{}},
".content-overlay":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","z-index":10},
".full-width-height":{"width":"100%","height":"100%"},
".flex-col-12":{"width":"calc(100% / 12 )"},
".flex-col-8":{"width":"calc(100% / 8 )"},
".flex-col-6":{"width":"calc(100% / 6 )"},
".flex-col-4":{"width":"calc(100% / 4 )"},
".flex-col-2":{"width":"calc(100% / 2 )"},
".flex-col-1":{"width":"calc(100% / 1 )"},
".flex-3":{"flex":"3"},
".flex-2":{"flex":"2"},
".flex-4":{"flex":"4"},
".flex-block":{"display":"flex","flex-direction":"column"},
".flex-35":{"flex":"3.5"},
".flex-15":{"flex":"1.5"},
".off-screen":{"transform":"translateX(-100vw)"},
".on-screen":{"transform":"translateX(0)"},
".transition-quick":{"transition":"all 0.3s ease-in-out"},
".transition-medium":{"transition":"all 0.5s ease-in-out"},
".transition-slow":{"transition":"all 0.8s ease-in-out"},
".transition-slowest":{"transition":"all 1s ease-in-out"},
".transition-animation":{"transition":"all 10s linear"},
".listeo-category-box":{"@apply w-3/12 max-w-[200px] min-w-[175px] aspect-[1/1] flex justify-center items-center flex-col shadow-[0px_0px_5px_2px_#0000001c] rounded-[13px]":{},
"background":"#f8f8f8","@apply text-app-primary hover:bg-app-primary hover:-translate-y-4 hover:text-white cursor-pointer transition-medium":{},
"@apply hover:scale-105":{},
"&:hover span.listeo-category-count":{"@apply bg-white text-app-primary transition-medium":{}},
"span.listeo-category-count":{"@apply px-4 py-1 rounded-2xl":{},
"background":"#cfcdcd"},
".listeo-category-content":{"@apply flex flex-col text-center":{}}},
".featured-box":{"display":"flex","gap":".5rem","background":"#fff","width":"fit-content","padding-left":".5rem","padding-right":"2rem","border-radius":"15px","padding":".15rem 1.25rem .15rem .5rem","align-items":"center","span.featured-box__text":{"color":"#000000d1","font-size":"12px"}},
".listeo-listing-card":{"@apply max-w-[380px] aspect-[1/1] shadow-[0_0_8px_0_rgba(0,0,0,0.08)] flex flex-col w-6/12 min-w-[300px] rounded-[5px]":{},
"@apply transition duration-500 hover:-translate-y-4 hover:shadow-[0_0_16px_0_rgba(0,0,0,0.28)]":{},
".listeo-listing-card__header":{"height":"85%","position":"relative"},
".listeo-listing-card__content":{"position":"relative","z-index":"5","height":"100%","background":"linear-gradient(to top, black, transparent 70%)","color":"#fff","display":"flex","flex-direction":"column","justify-content":"space-between","padding":"1rem",".listeo-listing-card__content__features":{"display":"flex","flex-wrap":"wrap","gap":".5rem"},
".listeo-listing-card__content__main__title":{"margin":".45rem 0"},
"h2.listeo-listing-card__content__main__title__name":{"font-size":"1.75rem","line-height":"2.5rem","text-shadow":"0px 0px 10px #0000002b"}}},
".listeo-listing-card.blog":{"position":"relative","cursor":"pointer","aspect-ratio":"1/1.35","@apply hover:z-20":{},
".listeo-listing-card__header":{"height":"100%"},
".listeo-listing-card__content":{"padding":"0",".listeo-listing-card__content_container":{"display":"flex","flex-direction":"column","justify-content":"space-between","height":"100%","padding":"2rem 1rem"},
"p.listeo-listing-card__content__text":{"font-weight":"100","margin":"0.5rem"}}},
".listeo-testimonial-card":{"border-radius":"1rem","box-shadow":"0 10px 20px rgba(0, 0, 0, 0.1)","overflow":"hidden","width":"30%","padding":"1rem","@apply bg-app-primary cursor-pointer":{},
".listeo-testimonial-card__header__container":{"@apply flex gap-2 items-center":{}},
".listeo-testimonial-card__header__thumbnail":{"position":"relative","width":"6rem","height":"6rem","border-radius":"50%","border":"2px solid #fff","overflow":"hidden","img":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","object-fit":"cover"}},
".listeo-testimonial-card__header__name":{"margin-left":"1rem","__text":{"font-weight":"bold","color":"#fff","@apply text-[2rem]":{}},
".listeo-testimonial-card__header__name__occupation":{"font-size":"1.05rem","@apply text-white/60":{}}},
".listeo-testimonial-card__body":{"line-height":"2.5rem","max-height":"0","opacity":"0","@apply transition-medium":{},
"&.open":{"opacity":"1"},
".listeo-testimonial-card__body__text":{"font-size":"1rem","color":"#fff","padding":"1rem"}},
".listeo-testimonial-card__focus__key-statement":{"display":"inline-block","padding":"0.5rem 1rem","font-size":"1.25rem","font-weight":"bold","border-radius":"9999px","margin-bottom":"1rem","@apply bg-white shadow-2xl text-app-primary text-center":{}},
".listeo-testimonial-card__focus":{"margin-top":"2rem","@apply flex justify-center":{}},
".listeo-testimonial-card__header__name__text":{"font-weight":"bold","color":"#fff","@apply text-[2rem]":{}}},
".listeo-quick-info-card":{"width":"30%","display":"flex","flex-direction":"column","padding":"2rem","background":"#fff","align-items":"center","gap":"2rem","box-shadow":"0 2px 6px 0 rgba(0, 0, 0, .07)","@apply transition-medium cursor-pointer hover:listeo-hover":{}},
".listeo-hover":{"transform":"translateY(-3rem)","scale":" 1.05"},
".listeo-pill-button":{"border":0,"outline":0,"@apply px-8 py-3 rounded-full   text-white cursor-pointer transition-quick":{}},
".listeo-pill-button-lg":{"border":0,"outline":0,"@apply px-12 py-4 rounded-full text-lg   text-white cursor-pointer transition-quick":{}},
".listeo-pill-button-sm":{"border":0,"outline":0,"@apply px-8 py-2 rounded-full text-sm   text-white cursor-pointer transition-quick":{}},
".listeo-pill-button-secondary":{"@apply bg-app-secondary hover:bg-app-primary":{}},
".listeo-pill-button-primary":{"@apply bg-app-primary hover:bg-app-primary-light":{}},
".listeo-pill-button-silver":{"@apply  bg-app-light hover:bg-app-primary":{}},
".listeo-pill-button-white":{"@apply bg-white  text-app-primary hover:bg-app-primary hover:text-white":{}},
".listeo-pill-button-transparent":{"@apply bg-white/20 transition-quick border-0    text-white hover:bg-app-primary hover:text-white":{}},
".shopping-cart":{"width":"2.25rem","height":"2.25rem","color":"#fff","display":"flex","alignItems":"center","justifyContent":"center","position":"relative","cursor":"pointer","transitionProperty":"all","transitionDuration":"0.3s","transitionTimingFunction":"ease-in-out","borderRadius":"50%","backgroundColor":"rgba(255, 255, 255, 0.18)"},
".shopping-cart:hover":{"@apply bg-app-primary text-white":{}},
".shopping-cart:hover .cart-count":{"color":"#fff","@apply bg-app-primary":{}},
".shopping-cart span.cart-count":{"position":"absolute","width":"1.5rem","height":"1.5rem","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"0.75rem","transitionProperty":"all","transitionDuration":"0.3s","transitionTimingFunction":"ease-in-out","borderRadius":"50%","left":"72%","top":"-.5rem","@apply bg-app-primary":{}},
".listeo-container":{"max-width":"1380px","margin":"0 auto","padding":"0 15px","min-width":"320px","width":"80%"},
".listeo-header.site-header":{"@apply h-[800px] relative  bg-app-light flex flex-col":{},
".site-header-overlay":{"@apply opacity-20":{}},
".top-header":{"@apply border-0 border-b border-white/50  border-solid":{},
"@apply relative z-[9999999]":{},
".listeo-container":{"@apply h-[85px]":{},
"@apply flex items-center gap-8 justify-between":{},
".brand":{"@apply w-[135px] aspect-[3.3/1] -translate-y-1":{},
"@apply relative":{}},
".left-side, .right-side":{"@apply flex gap-8 items-center":{}}},
".site-navigation":{".site-navigation-list":{"@apply flex gap-2":{},
"li":{"@apply relative":{},
"a":{"@apply flex items-center gap-1":{},
"@apply text-white  listeo-pill-button-sm  hover:bg-app-primary transition-quick":{},
"@apply px-4":{}},
".sub-menu":{"@apply hidden absolute top-full w-[300%] left-0 rounded shadow-md bg-white m-0":{},
"li":{"@apply my-2":{},
"a":{"@apply text-black flex justify-between  hover:bg-app-primary hover:text-white rounded-none":{}},
".sub-menu":{"@apply hidden top-0 shadow-lg block left-[95%] w-[100%]":{}},
"&:hover > .sub-menu":{"@apply block":{}}}},
"&:hover > .sub-menu":{"@apply block":{}}},
"& > li a.active-page":{"@apply bg-app-primary text-white":{}}}}},
".hero-section":{"@apply flex-1 auto-center flex-col relative   z-10 text-white gap-4":{}}},
".netflix-card":{"@apply relative":{},
"height":"400px","flex":".75","@apply overflow-hidden transition-medium cursor-pointer":{},
".netflix-card__content":{"opacity":"0","@apply content-overlay auto-center flex-col text-white bg-black/50 px-16 gap-8 transition-slow":{},
"p":{"line-height":"2rem"}},
"&.active":{"@apply flex-[6]":{},
"img":{"@apply scale-125 transition-animation":{}},
".netflix-card__content":{"@apply opacity-100":{}}}},
".netflix-icon":{"@apply text-app-primary border-app-primary border-t border-t-white border-b border-solid shadow-md hover:bg-app-primary hover:text-white transition-quick hover:border hover:border-white":{}}};
 const base = {};
 const utilities = {".parallax":{"background-attachment":"fixed","background-position":"center","background-repeat":"no-repeat","background-size":"cover","height":"450px","width":"100%"},
".site-container":{"max-width":"1800px","margin":"0 auto","padding":"0 15px","min-width":"320px","width":"95%"},
".auto-center":{"display":"flex","align-items":"center","justify-content":"center"},
".app-text":{"font-family":"'Lato', sans-serif"},
".app-second-text":{"color":"gold"},
".responsive-grid":{"@apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4":{}},
".img-fit":{"object-fit":"cover","width":"100%","height":"100%","position":"absolute","top":"0","left":"0"},
".modal":{"position":"fixed","top":0,"left":0,"width":"100%","height":"100%","z-index":9999999999,"display":"flex","justify-content":"center","align-items":"center","background":"rgba(0, 0, 0, 0.6)","@apply flex-col off-screen transition duration-500":{}},
".modal.open-modal":{"@apply on-screen":{}},
".modal__content":{"width":"50%","min-width":"325px","color":"#fff","border":"1px solid #fff","@apply bg-gradient-to-br from-app-primary  to-app-secondary":{}},
".modal__header":{"display":"flex","justify-content":"space-between","align-items":"center","background":"#fff","padding":"0 2rem","@apply text-app-primary":{}},
".modal__title":{"font-size":"1.5rem","font-weight":"bold","@apply text-app-primary":{}},
".modal__close":{"cursor":"pointer","font-size":"clamp(.75rem, 2vw, 1.125rem)","border-radius":"50%","height":"clamp(1.25rem, 2vw, 2rem)","width":"clamp(1.25rem, 2vw, 2rem)","@apply text-app-primary/50 border border-solid border-app-primary/50 transition duration-500 hover:bg-app-secondary hover:border-app-primary hover:text-white":{}},
".modal__body":{"display":"flex","justifyContent":"center","alignItems":"center","margin":"0 auto","min-height":"200px","@apply text-lg text-center flex-1":{}},
".modal__footer":{"display":"flex","justify-content":"flex-end","align-items":"center","padding":"0 1rem","@apply text-white bg-app-primary border-0 border-t border-solid border-white":{}},
".content-overlay":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","z-index":10},
".full-width-height":{"width":"100%","height":"100%"},
".flex-col-12":{"width":"calc(100% / 12 )"},
".flex-col-8":{"width":"calc(100% / 8 )"},
".flex-col-6":{"width":"calc(100% / 6 )"},
".flex-col-4":{"width":"calc(100% / 4 )"},
".flex-col-2":{"width":"calc(100% / 2 )"},
".flex-col-1":{"width":"calc(100% / 1 )"},
".flex-3":{"flex":"3"},
".flex-2":{"flex":"2"},
".flex-4":{"flex":"4"},
".flex-block":{"display":"flex","flex-direction":"column"},
".flex-35":{"flex":"3.5"},
".flex-15":{"flex":"1.5"},
".off-screen":{"transform":"translateX(-100vw)"},
".on-screen":{"transform":"translateX(0)"},
".transition-quick":{"transition":"all 0.3s ease-in-out"},
".transition-medium":{"transition":"all 0.5s ease-in-out"},
".transition-slow":{"transition":"all 0.8s ease-in-out"},
".transition-slowest":{"transition":"all 1s ease-in-out"},
".transition-animation":{"transition":"all 10s linear"}};
 module.exports = {
    components,
    base,
    utilities,
  };