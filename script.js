//! 1 - SEARCH INPUT OPENED
// 'trigger-button' atribut adina sahib olan butun HTML tag-lerini cagiririq.
// console.log(triggerOpen);     > NodeList(3) [a, a, p, div, span ve.s]
const triggerOpen = document.querySelectorAll('[trigger-button]');
//! 2
// 'close-button' atribut adina sahib olan butun HTML tag-lerini cagiririq.
const triggerClose = document.querySelectorAll('[close-button]');
//! 3
// 'data-overlay' atribut adina sahib olan HTML tag-ini cagiririq.
const overlay = document.querySelector('[data-overlay]');
//! 4
// triggerOpen.length - bize 1 (bir) qaytaracaq cunki 'trigger-button' atribut adina sahib olan hal-hazirda 1 eded tag vardir o da 'a' tag-idir.
for (let i = 0; i < triggerOpen.length; i++) {
    //! 5
    // triggerOpen - bir Arraydir ve biz hal hazirda indeksi 0 (sifir) olan tag-i cagiririq. Bu ise 'a' tag-idir
    //* <a href="#0" trigger-button data-target="search-float"><i class="ri-search-line"></i></a>
    // hal-hazirda 'currentId' deyiskenin icerisinde 'data-target' atributunun deyeri olan 'search-float' var.
    let currentId = triggerOpen[i].dataset.target,
    //! 6
    // 'search-float' ID-sine sahib olan tag-i cagiririq ve hemin tag-i 'targetEl' deyiskenine veririk. Bu tag DIV tag-idir icindeki diger butun elementler ile.
    //*  <div id="search-float" class="search-float"> ... </div>
    targetEl = document.querySelector(`#${currentId}`);
    //! 9
    // Bu funksiyani 9-da cagiririq.
    const openData = function() {
        //! 11
        // Bu funksiyanin isi X (iks) duymesini basdiqda DIV tag-inin icinden ACTIVE klas adini silmekdir. 
        targetEl.classList.remove('active');
        // Hemcinin 'overlay' yeni 'data-overlay' atributuna sahib DIV tag-inin icinden de ACTIVE klas adi silinir.
        overlay.classList.remove('active');
    };
    //! 7
    // 'triggerOpen[i]' - bu 'a' tag-idir hansinin ki, icinde 'i' tag-i var. Yeni, lupa ikonu. Ve asagida demisik ki, eger biz hemin 'a' tag-ine klikleyerikse onda 
    triggerOpen[i].addEventListener('click', function(){
        //! 8
        // 'targetEl' yeni DIV tag-ine 'ACTIVE' klass adini elave et. 
        // Bu ACTIVE klas adi ile biz CSS terefde INPUT sahesini aciriq. Qapatmaq ucun ise 9 (doqquza) bax.
        targetEl.classList.add('active');
        // ve 'overlay' yeni 'data-overlay' atributuna sahib DIV tag-inede ACTIVE klas adi elave edirik.
        overlay.classList.add('active');
    });
    //! 10
    // DIV tag-ini cagiririq ve hemin tag-in icindeki 'close-button' atribut adina sahib olan 'i' tag-ine EVENT elave ederek deyirik ki, eger bu 'i' tag-i kliklenerse onda 'openData' funksiyasi işləsin. (9-a bax)
    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    //! 12
    // 'overlay' yeni 'data-overlay' atributuna sahib DIV tag-ine de klikledikde NOMRE 9 da olan funksiya işləyəcəkdir.
    // Bu DIV tag-i veb sehifenin tamamini tutur ve CSS-de demisik ki, eger hemin div tag-ine kliklenerse onda 'openData' funksiyasi islesin.
    overlay.addEventListener('click', openData);
}
// 1) HTML terefinde 'a' tag-i ucun 'trigger-button' adinda ATRIBUT adi elave edirik:           //* <a href="#0" trigger-button >
// 2) HTML terefinde 'a' tag-i ucun 'data-' ATRIBUTU ve bu atributa deyer elave edirik:         //* <a href="#0" trigger-button data-target="search-float">
// 3) TAG-lerin data- atributunu çağırmaq üçün JS-in 'dataset' xassesinden istifade edilir. Bunun ucun ise ilk once hemin TAG-e muraciet etmek lazimdir:
        //* HTML: <a class="test" data-numune="deyer" > 1 </a>
        //* JS:   const a = document.querySelector('.test');
        //*       var netice = a.dataset.numune;
        //*       console.log(netice);
        //*       'deyer'
//! SEARCH INPUT CLOSED



//! 1 mobile-menu submenu OPENED
// SPAN tag-lerini cagiririq.
const submenu = document.querySelectorAll('.child-trigger');
//! 2
// 'submenu' nodeList qaytarir ve 'foreach()' metodu ile nodeList icerisinden SPAN tag-lerini çıxardırıq ve
// 'menu' parametrine otururuk. Netice ise bele olur: //* <span class="child-trigger">...</span>.
// Sonra bu SPAN tag-lerine 'click' EVENT-ini elave edirik. 
// Bu SPAN tag-ine kliklendikde ise funksiya işləyir. Həmin funksiyanın 'e' parametri EVENT kodlarini bize verir ki,
// hemin kodlari biz funksiyanin icinde cagiraraq istifade ede bilerik. 
submenu.forEach((menu) => menu.addEventListener('click', function(e){
    //! 2
    // Mumkun ola bilecek diger event-lari legv edirik.
    e.preventDefault();
    //! 3
    // Yeniden SPAN tag-lerini nodeList icerisinden cagiririq ve 'item' parametrine otururuk.
    // 'THIS' acar sozu hal-hazirda KLIKLENEN SPAN tag-ini ifade edir.
    // closest() bu metod SPAN tag-inin ustunde olan '.has-child' klas adina sahib ANA tag-e muraciet etmek ucundur.
    // Hemin ana elementin icerisinden 'ACTIVE' klas adini silirik.
    // Bu silme o vaxt heyata kecir ki, biz netice olaraq TRUE elde edek.
    // TRUE ne vaxt elde edilir ???
    // Bizim 2 dene SPAN tag-imiz var. 
    // Ve HAL-HAZIRDA kliklenen != (beaber deyil) HAL-HAZIRDA kliklenene dedikde yalan (FALSE) demis oluruq. 
    // Cunki biz onu klikleyirik ve onlar beraberdirler. Kliklenmeyen 2ci SPAN tag-i ise TRUE verir. Cunki o kliklenmir. 
    // Meselen, Hal-hazirda kliklenen 1ci SPAN tag-i beraber deyile 2ci SPAN tag-ine ve beraber olmadigi ucunde dogru (TRUE) demisik oluruq.
    // Kliklenen FALSE verdiyi ucun hemin SPAN tag-inden ACTIVE klas adi silinmir kliklenmeyenden ise silinir. 
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('active') : null); 

    //! 4
    // Eger SPAN tag-inin ANA elmenti ACTIVE klas adina sahib deyilse 
    if(this.closest('.has-child').classList != 'active') {
        // elva et deyirik.
        // toogle() yeni 1ci defe basdiqda elave edir 2ci defe basdiqda ise elave edileni qaldirir.
        // Bu akkardion kimi yigib acmaqda istifade edilir.
        //TODO: bir SPAN tag-i kliklendikde digeri qapansin deye yuxaridaki yeni 3 №-de yazilan kodlardan istifade etmisik.
        this.closest('.has-child').classList.toggle('active');
    }
}))
//! 1 mobile-menu submenu CLOSED



//!1  in OPENED
// Bu JS kodlari 'A' tag-ine ve 'DIV' tag-ine eyni vaxtda ACTIVE klas adini elave etmek ucun yazilmisdir.
    //! 2
    // A tag-ini cagirirq.
    const trigger = document.querySelectorAll('.tabbed-trigger'),
    // DIV tag-ini cagiririq.
          content = document.querySelectorAll('.tabbed > div');
    //! 3
    trigger.forEach((btn) => {
        //! 4
        btn.addEventListener('click', function() {
            //! 5
            // kliklenen 'A' tag-inin 'data-' atributunun deyerine esassen...
            let dataTarget = this.dataset.id,
            // ...hemin deyere uygun gelen 'DIV' tag-ini teyin edirik ve 'body' deyiskenine bu tag-i yazdiririq ki,
            // asagida hemin DIV tag-ini cagiraraq, onun icine 'ACTIVE' klas adini elave ede bilek.
                body = document.querySelector(`#${dataTarget}`);
                
            //! 6
            // 'a' TAG-i 'li' TAG-inin icinde yerlesdiyi ucun bizde burda 'a' tag-inin ANA elementi (parentNode) dedikde 'li' tagler-ini elde etmisik oluruq.
            // Ilk once 'a' tag-ine kliklendikde LI tagler-inin icinden ACTIVE klass adlarini silirik ve 7 nomreli kodda gosterildiyi kimi LI tag-ine yeninden ACTIVE
            // klas adini elave edirik.
            // TODO: Ne ucun 'A' tag-ini klikledikde butun LI tag-lerinden ACTIVE klas adi silinir ancaq butun LI tag-lerine ACTIVE klas adi elave edilmir ??????
            // Cunki forEach() metodu butun LI tag-lerini cagirir ancaq asagida Yeni 7 nomreli kodda bele yazmisiq: "this.parentNode.classList.add('active');"
            // THIS !!!! Yeni hal-hazirda kliklenen 1 eded 'A' tag-i demekdir. Onun ucun biz elave etdikde, 1 eded LI tag-ine ACTIVE klas adi elave edilir ancaq forEach()
            // metodu ile butun LI tag-leri dediyimiz ucun hamisindan ACTIVE klas adi silinir.
            trigger.forEach((b) => b.parentNode.classList.remove('active'));
            // Hemcinin DIV tag-leri ucunde eyni qayda da.
            content.forEach((s) => s.classList.remove('active'));

            //! 7
            // 'A' tag-ine kliklendikde hemin kilklenen A tag-inin ana elementi olan LI tag-ine ACTIVE klas adi elave edilsin. Yuxardaki kod ise diger butun LI tag-lerinden ACTIVE klas adini silir.
            this.parentNode.classList.add('active');
            // 'A' tag-ine kliklendikde DIV tag-ine ACTIVE klas adi elave edilsin. Yuxardaki kod ise diger butun DIV tag-lerinden ACTIVE klas adini silir.
            body.classList.add('active');
        })
    })
//!  in CLOSED







//! SLIDER SWIPER OPENED
const swiper = new Swiper('.sliderbox', {

    loop: true,
    effect: 'fade',
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

});
//! SLIDER SWIPER CLOSED


//! CAROUSEL SWIPER OPENED
const carousel = new Swiper('.carouselbox', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  
    // If we need pagination
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,
        }
    }

  });
//! CAROUSEL SWIPER CLOSED





//! 1  SORTER OPENED
// DIV tag-ini cagiririq
const sorter = document.querySelector('.sort-list');

//! 2 
// Eger bele bir DIV tag-i movcuddursa deyirik
if(sorter) {
    //! 3
    // DIV tag-ini icinde olan butun LI tag-lerini cagiririq.
    const sortLi = sorter.querySelectorAll('li');
    //! 4
    // DIV tag-inin icinde olan H3 tag-ini cagiraraq ona klik EVENT-ini veririk. 
    sorter.querySelector('.opt-trigger').addEventListener('click', function() {
        //! 5
        // H3 tag-ine klikledikde DIV tag-ini icinde olan UL tag-ine 'show' klas adi elave edilecek.
        // toggle() yeni 1 defe klikdendikde elave edilecek 2ci defe kliklendikde silinecek.
        sorter.querySelector('ul').classList.toggle('show');
    })

    //! 6
    // forEach() ile her LI tag-ini secme imkani yaradiriq ve klik EVENT-ini hemin TAG-ler ucun tetbiq edirik.
    sortLi.forEach((item) => item.addEventListener('click', function() {
        //! 8
        // Burda yeniden her LI tag-ini forEach() metodu ile secirik. 
        // secilen LI tag-i hemin LI tag-ine beraber deyilse 'ACTIVE' klas adini butun LI tag-lerinden sil deyirik.
        sortLi.forEach((li) => li != this ? li.classList.remove('active') : null);

        //! 7
        // kliklenen LI tag-i ucun 'ACTIVE' klas adini elave edirik.
        this.classList.add('active');

        //! 9
        // kliklenen LI tag-inin mezmununu SPAN tag-inin mezmununa elave edirik.
        sorter.querySelector('.opt-trigger span.value').textContent = this.textContent;

        //! 10
        // Yuxarida H3 tag-ine demisdik, burda ise LI tag-ine klikledikde UL tag-ine show klas adini elave et yaxud sil deyirik.
        sorter.querySelector('ul').classList.toggle('show');
    }))

    
}
//! SORTER CLOSED










//! product IMAGE OPENED
const thumbImage = new Swiper('.thumbnail-image', {

    loop: true,
    direction: 'vertical',
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,

  });
  
const mainImage = new Swiper('.main-image', {

    loop: true,
    autoHeight: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: thumbImage,
    },

});
//! product IMAGE CLOSED

