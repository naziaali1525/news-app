
$.ajax({
    url: `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e91388af986144faa7542cbab8e4cfa5`,
    success:function(data){
        console.log(data)

        

    

        document.querySelector(".slide1 ").innerHTML = `<img src="${data.articles[0].urlToImage}" class="img-div">`;
        document.querySelector(".slide2 ").innerHTML = `<img src="${data.articles[1].urlToImage}" class="img-div">`;
        document.querySelector(".slide3 ").innerHTML = `<img src="${data.articles[2].urlToImage}" class="img-div">`;
        document.querySelector(".slide4 ").innerHTML = `<img src="${data.articles[3].urlToImage}" class="img-div">`;
        document.querySelector(".slide5").innerHTML = `<img src="${data.articles[4].urlToImage}" class="img-div">`;
        document.querySelector(".slide6 ").innerHTML = `<img src="${data.articles[5].urlToImage}" class="img-div">`;
        document.querySelector(".slide7 ").innerHTML = `<img src="${data.articles[6].urlToImage}" class="img-div">`;
        document.querySelector(".slide8 ").innerHTML = `<img src="${data.articles[7].urlToImage}" class="img-div">`;
        document.querySelector(".slide9").innerHTML = `<img src="${data.articles[8].urlToImage}" class="img-div">`;
        document.querySelector(".slide10 ").innerHTML = `<img src="${data.articles[9].urlToImage}" class="img-div">`;
        
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
