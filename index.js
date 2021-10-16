
function Binding(b){
    this.element = b.element;  //div from html
    this.value = b.object[b.property];  //obj["key"]
    this.attribute = b.attribute; // type og dom "innerHTML"

    this.valueGetter = () =>{
        return  this.value   //div.innerHTML=obj["key"]
    }

    this.valueSetter = (val) =>{
        this.value = val;
        this.element[this.attribute] = val;
    }

    Object.defineProperty(b.object , b.property,{
      get: this.valueGetter,
      set: this.valueSetter  
    })

    b.object[b.property] = this.value;
    this.element[this.attribute] = this.value;

}


const Title = document.getElementById("Title");
const Summary = document.getElementById("Summary");
const year = document.getElementById("year");
const Actor = document.getElementById("Actor");
const Producer = document.getElementById("Producer");
const Genre = document.getElementById("Genre");

const obj = {
    Title    :     Title.value,
    Summary  :   Summary.value,
    Year     :      Year.value,  
    Actor    :     Actor.value,
    Producer :  Producer.value,
    Genre    :     Genre.value
}


const bindingTitle = document.getElementById("binding-title");
new Binding({
  object: obj,
  property: "Title",
  element: bindingTitle,
  attribute: "innerHTML",
});

Title.addEventListener("input", (e) => {
  obj.Title = e.target.value;
});

const bindingSummary = document.getElementById("binding-summary")

new Binding({
  object: obj,
  property: "Summary",
  element: bindingSummary,
  attribute: "innerHTML",
});

Summary.addEventListener("input", (e) => {
  obj.Summary = e.target.value;
});

const bindingYear = document.getElementById("binding-year")
new Binding({
  object: obj,
  property: "Year",
  element: bindingYear,
  attribute: "innerHTML",
});
Year.addEventListener("input", (e) => {
  obj.Year = e.target.value;
});

const bindingActor = document.getElementById("binding-actor")
new Binding({
  object: obj,
  property: "Actor",
  element: bindingActor,
  attribute: "innerHTML",
});
Actor.addEventListener("input", (e) => {
  obj.Actor = e.target.value;
});

const bindingProducer = document.getElementById("binding-producer")
new Binding({
  object: obj,
  property: "Producer",
  element: bindingProducer,
  attribute: "innerHTML",
});
Producer.addEventListener("input", (e) => {
  obj.Producer = e.target.value;
});


const bindingGenre = document.getElementById("binding-genre")
new Binding({
  object: obj,
  property: "Genre",
  element: bindingGenre,
  attribute: "innerHTML",
});
Genre.addEventListener("input", (e) => {
  obj.Genre = e.target.value;
});


