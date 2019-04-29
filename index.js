
// The js component that does responsive image layout.
// https://github.com/ademilter/bricklayer/
var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

function loadImageToGallery(fpath, caption, scale) {
  // Generates this:
  // <div>
  //   <a href="images/tile1.jpg" target="_blank">
  //     <img src="images/tile1.jpg" style="width:100%">
  //     <div class="caption"><p>I am tile1</p></div>
  //   </a>
  // </div>

  var box = document.createElement('div');
  box.className = 'box';

  var anchor = document.createElement('a');
  anchor.href = fpath;
  anchor.target = '_blank';

  var img = document.createElement('img');
  img.src = fpath;
  img.style = 'display: block; margin-left: auto; margin-right: auto; width:'.concat(scale.toFixed(), '%');
  //img.style = 'width:100%';
  anchor.appendChild(img);

  var caption_c = document.createElement('div');
  caption_c.className = 'caption';

  var caption_p = document.createElement('p');
  var caption_text = document.createTextNode(caption);
  caption_p.appendChild(caption_text);

  caption_c.appendChild(caption_p);

  anchor.appendChild(caption_c);

  box.appendChild(anchor);

  return box;
}

