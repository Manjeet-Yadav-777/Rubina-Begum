const arr = [
    {
        Image:'./Images/Love.jpg',

        heading : "Wazifa for Love Marriage",

        para : "When every door seems close to marrying a lover take the help of Dua which makes it easy to do love marriage and bring true love together for their lifetime.",
    },

    {
        Image:'./Images/Husband.jpg',

        heading : "Wazifa for Husband",

        para : "Get love and respect of a husband again by performing Wazifa for husband with the help of Rubina ji, which makes a woman to make her married life happy and loving."
    },

    {
        Image:'./Images/Parents.jpg',

        heading : "Wazifa for Parents Approval",

        para : "When parents are against any important decision use Wazifa, which is best to take parents approval and make them soon agree with their child’s decisions."
    },

    {
        Image:'./Images/Child.jpg',

        heading : "Wazifa for Childless Couple",

        para : "A childless couple can use some dua and Islamic prayers, which helps to overcome the problems and get blessings in form of a baby that completes their family.",
    },

    {
        Image:'./Images/Divorse.jpg',
        
        heading : "Wazifa For Divorce",
        
        para : "The separation in marriage is painful and Wazifa For Divorce helps a couple to end the differences between them and bring love into their relationship in a very easy manner.",
    },

    {
        Image:'./Images/Inter.jpg',
    
        heading : "Wazifa for Intercaste Marriage",
    
        para : "There are still problems in Intercaste marriage but now Islamic Dua surely helps a person to marry desired person and make their marriage to happen.",
    },
]


var clutter = [];

arr.forEach(function(card){
    clutter = clutter + `    <div class="card">
    <div class="card-img">
        <img src=${card.Image} alt="">
    </div>

    <div class="head1">
        <h2>${card.heading}</h2>
        <p>⭐⭐⭐⭐⭐</p>
    </div>
    <p>${card.para}</p>

    <div class="contact">
        <a href="tel:+91-6283138130" class="fis"><i class="ri-phone-line"></i> CALL US</a>
        <a href="https://wa.me/442080404134" class="sec"><i class="ri-whatsapp-line"></i> CHAT US</a>
    </div>

</div>
`
})

document.querySelector(".cards").innerHTML = clutter;


const res = [
    {
        Image: './Images/hw.jpg',
        heading : "Husband Wife Problems",
        para : "Service Offered by Rubina Begam"
    },

    {
        Image: './Images/Hdua.jpg',
        heading : "Dua For Husband Love",
        para : "Service Offered by Rubina Begam"
    },

    {
        Image: './Images/Carr.jpg',
        heading : "Career Problems",
        para : "Service Offered by Rubina Begam"
    },

    {
        Image: './Images/Busi.jpg',
        heading : "Business Problems",
        para : "Service Offered by Rubina Begam"
    },

    {
        Image: './Images/Lback.jpg',
        heading : "Love Back Dua",
        para : "Service Offered by Rubina Begam"
    },

    {
        Image: './Images/Gf.jpg',
        heading : "Ex Love Dua",
        para : "Service Offered by Rubina Begam"
    },
]

var glutter = [];

res.forEach(function(res){
    glutter = glutter + `<div class="res-card">
    <div>
       <img src=${res.Image} alt="">
    </div>

    <h2>${res.heading}</h2>
    <p>${res.para}</p>
</div>`
})

document.querySelector(".result").innerHTML = glutter;







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay:4500,
        disableOnInteraction:false
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  
