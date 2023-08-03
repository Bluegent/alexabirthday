function PictureFrame(link, text) {
    this.link = link;
    this.text = text;
  }
var index = 0;

var frames =[];

frames.push({link:"https://i.imgur.com/QGVDVZu.png",text:"Happy birthday! In the past few months that I've known you, you've become the most important person in my life and my \"happy place\". We've done a lot of things that I've always wanted to do and shared a lot of memories, some happy and some... funny. Here are, in no particular order, some things that I remember fondly from the time we've spent together."});
frames.push({link:"https://i.imgur.com/1slM6fX.png",text:"That time you decided to show up and bring beer when I jokingly said you should and we walked to the fort in the snow and then had to help that drunk old man and made pancakes and and..."});
frames.push({link:"https://i.imgur.com/R0qM7Bn.png",text:"The night you surprised/pranked me by asking if I could keep you company on your night drive and instead showed up to my house to spend my birthday with me."});
frames.push({link:"https://i.imgur.com/bM47G2O.png",text:"When we spent the whole evening/night trying to clean the coffee machine and get it running."});
frames.push({link:"https://i.imgur.com/uKekVyC.png",text:"The time when you braided my hair."});
frames.push({link:"https://i.imgur.com/Zlbi8VG.png",text:"Brushing our teeth together in the evening."});
frames.push({link:"https://i.imgur.com/9cha5IN.png",text:"Our morning \"cafelutsa\". What's odd is that I could never stand the smell of smoke but I don't feel it as much when it's you. I wonder if that's because of the type of cigarettes or if my brain likes you so much it just ignores it."});
frames.push({link:"https://i.imgur.com/HZzDGye.png",text:"Cooking together."});
frames.push({link:"https://i.imgur.com/CGwnpvm.png",text:"And of course eating together!"});
frames.push({link:"https://i.imgur.com/zUjYlqW.png",text:"Trying to get the 2.5kg black thing to tolerate you."});
frames.push({link:"https://i.imgur.com/nYY5TA0.png",text:"Cuddling on the couch, lazily watching a movie."});
frames.push({link:"https://i.imgur.com/k8X7heG.png",text:"Getting you flowers. When you said nobody had ever got you flowers before that sounded so sad, so I'm glad I can be a positive change in your life."});
frames.push({link:"https://i.imgur.com/J7OcIrE.png",text:"Walking, holding hands, especially by the pinky while we swing our arms like silly, happy kids."});
frames.push({link:"https://i.imgur.com/eqJvGTQ.png",text:"No comment."});
frames.push({link:"https://i.imgur.com/PzUjMcj.png",text:"Playing video games together, even if we lose at Mario Party."});
frames.push({link:"https://i.imgur.com/IsPrtwX.png",text:"Hiking up T&acirc;mpa together on that windy day. (the sandwich was really good, though)"});
frames.push({link:"https://i.imgur.com/3edE8GZ.png",text:"The time you <em>really</em> cleaned the muffin pan. I'm really not upset at you that this happened. It was really funny and now it's a precious memory."});
frames.push({link:"https://i.imgur.com/mg1Z29L.png",text:"Falling asleep while holding each-other."});
frames.push({link:"https://i.imgur.com/xbtS4Jk.png",text:"Spending a day together visting Doftana's Valley."});
frames.push({link:"https://i.imgur.com/5UPrfOF.png",text:"Sneaking into the abandoned Doftana penitenciary. Don't people usually break <em>OUT</em> of prison?"});
frames.push({link:"https://i.imgur.com/9trs8tN.png",text:"Partaking in my silly rituals."});
frames.push({link:"https://i.imgur.com/tY7zgEV.png",text:"Helping me pick and build the new table."});
frames.push({link:"https://i.imgur.com/GQae4G7.png",text:"Going for music-filled night car rides in the mini Uber."});
frames.push({link:"https://i.imgur.com/qpTZnzU.png",text:"Showering together, even if we splash water here and there."});
frames.push({link:"https://i.imgur.com/OzO8EZE.png",text:"Squish the m&acirc;&tcedil;, boop the m&acirc;&tcedil;, kiss the m&acirc;&tcedil;!"});
frames.push({link:"https://i.imgur.com/0KGie2Q.png",text:"As a small bonus, this silly thing came out. :)"});


const maxIndex = frames.length;

function init()
{
    setPage();
    //document.getElementById('image-gallery').addEventListener('click', next);

    const galleryContainer = document.getElementById('body');
    const descriptionContainer = document.getElementById('image-description');

    // Set image and description alignment to center
    galleryContainer.style.display = 'flex';
    galleryContainer.style.alignItems = 'center';
    galleryContainer.style.justifyContent = 'center';
    descriptionContainer.style.textAlign = 'center';
    
    galleryContainer.addEventListener('click', function (e) {
    if (e.clientX > window.innerWidth / 2) {
      // Clicked on the right half of the screen
      next();
    } else {
      // Clicked on the left half of the screen
      prev();
    }
  });

  galleryContainer.addEventListener('touchend', function (e) {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchEndX > window.innerWidth * 0.35 ) {
      // Tapped on the right half of the screen
      next();
    } else {
      // Tapped on the left half of the screen
      prev();
    }
  });
}


function setPage()
{
    const galleryContainer = document.getElementById('image-gallery');
    const descriptionContainer = document.getElementById('image-description');



      // Clear previous content
    galleryContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';

    const image = new Image();
    image.src = frames[index].link;
    image.classList.add('img-fluid', 'rounded');
    galleryContainer.appendChild(image);

    // Display image description
    descriptionContainer.innerHTML = "<p>"+ frames[index].text +"</p>";
}

function next(){
    ++index;
    if(index >= maxIndex)
        index = 0;
    setPage();
}
function prev()
{
    --index;
    if(index<0)
    index = maxIndex-1;
    setPage();
}

init();