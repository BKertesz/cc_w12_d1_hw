var form;

document.addEventListener('DOMContentLoaded',()=>{
  console.log("Page loaded!")

  form = document.querySelector('#input-form')
  form.addEventListener('submit',handleInputForm)

})



const handleInputForm = function(event){
  event.preventDefault();
  const reading_list = document.querySelector("#reading-list")
  const item = document.createElement('li')
  item.textContent = `${this.title.value} by ${this.author.value} as a ${this.category.value}`
  reading_list.appendChild(item);
  form.reset()
}
