let affich = document.getElementById('affich');

let thumbsCol = document.getElementsByClassName('thumb');

let thumbs = Array.from(thumbsCol);
//console.log(thumbs);


thumbs.forEach(function(thumb) {
    let ImgUrl = thumb.src;
    thumb.onclick = function(){
        //console.log(thumb.src);
        affich.src = ImgUrl;
        affich.style.visibility = 'visible';
    }

  });

  affich.onclick = function(){

    affich.style.visibility = 'hidden';
  }

  