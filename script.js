
$.ajax({
    url: `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e91388af986144faa7542cbab8e4cfa5`,
    success:function(data){
        console.log(data)

  

    

        document.querySelector(".slide1").style ["background-image"] = `url(${data.articles[0].urlToImage})`;
        document.querySelector(".get-head1").innerHTML = `<p>${data.articles[0].title}</p>`;
        
        document.querySelector(".slide2").style ["background-image"] = `url(${data.articles[1].urlToImage})`;
        console.log(data.articles[1].title)
        document.querySelector(".get-head2").innerHTML = `<p>${data.articles[1].title}</p>`;
        
        document.querySelector(".slide3").style ["background-image"] = `url(${data.articles[2].urlToImage})`;
        document.querySelector(".get-head3").innerHTML = `<p>${data.articles[2].title}</p>`;
        
        document.querySelector(".slide4 ").style ["background-image"] = `url(${data.articles[3].urlToImage})`;
        document.querySelector(".get-head4").innerHTML = `<p>${data.articles[3].title}</p>`;
        
        document.querySelector(".slide5 ").style ["background-image"] = `url(${data.articles[4].urlToImage})`;
        document.querySelector(".get-head5").innerHTML = `<p>${data.articles[4].title}</p>`;
        
        document.querySelector(".slide6 ").style ["background-image"] = `url(${data.articles[5].urlToImage})`;
        document.querySelector(".get-head6").innerHTML = `<p>${data.articles[5].title}</p>`;
        
        document.querySelector(".slide7 ").style ["background-image"] = `url(${data.articles[6].urlToImage})`;
        document.querySelector(".get-head7").innerHTML = `<p>${data.articles[6].title}</p>`;

        document.querySelector(".slide8 ").style ["background-image"] = `url(${data.articles[7].urlToImage})`;
        document.querySelector(".get-head8").innerHTML = `<p>${data.articles[7].title}</p>`;
        
        document.querySelector(".slide9 ").style ["background-image"] = `url(${data.articles[8].urlToImage})`;
        document.querySelector(".get-head9").innerHTML = `<p>${data.articles[8].title}</p>`;
        
        document.querySelector(".slide10 ").style ["background-image"]= `url(${data.articles[9].urlToImage})`;
        document.querySelector(".get-head10").innerHTML = `<p>${data.articles[9].title}</p>`;
        
        for(let i = 0; i < 10; i++){
              document.querySelector(".container-main").innerHTML +=
             `<div class="news-card"> <a href="${data.articles[0].url}" target="blank" >
                <div class="img-title" style="background-image: url(${data.articles[i].urlToImage})"></div>
                <div class="headlines">
                  ${data.articles[i].title}
                </div>
                </a>
                <div class="channel-name">${data.articles[0].source.name}</div>
                <div class="date">${data.articles[0].publishedAt}</div>
              </div>`
        }
        // document.querySelector(".headlines").innerHTML = data.articles[0].title;

        


    }



})
  window.onload = function () {

 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
      delay: 2900,
      disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  mySwiper = document.querySelector('.swiper-container').swiper;
  mySwiper.slideNext();
  }
