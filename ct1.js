

// The script.js file is pretty straighforward. When the runBtn button is clicked, it gets the text of the textarea,
// passes it through showdown that converts the markdown into html. The output is then put inside the div
// (replacing the previous content).

// function run() {
//   var text = document.getElementById('sourceTA').value,
//       target = document.getElementById('targetDiv'),
//       converter = new showdown.Converter(),
//       html = converter.makeHtml(text);
    
//     target.innerHTML = html;
// }
