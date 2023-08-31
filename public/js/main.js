// --Template Renderer--

let mTemplateRenderer = (data={}, mDOM) => {
let mDiv = document.createElement("div");
mDOM.appendChild(mDiv);
//set..
mDiv.innerHtml = `Content`;

//do your code..
console.log("Everything okay");
  
};

mTemplateRenderer({
   "meta": {},
   "data": {
    //add params based on content requirement
    }
}, document.body);

