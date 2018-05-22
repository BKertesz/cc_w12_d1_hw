document.addEventListener('DOMContentLoaded',()=>{
  console.log("Page loaded!")

  const form = document.querySelector('#input-form')
  form.addEventListener('submit',handleInputForm)

  const deleteButton = document.querySelector('#delete-all')
  deleteButton.addEventListener('click',handleDeleteButton)

})



const handleInputForm = function(event){
  event.preventDefault();

  const infoToValidate = [this.title.value,this.author.value,this.category.value, this.genre.value]
  if(handleEmptyInput(infoToValidate)) return;

  const reading_list = document.querySelector("#reading-list")


  const item = document.createElement('li')

  item.textContent = `${this.title.value} -- ${this.author.value} -- ${this.category.value} -- ${this.genre.value}`

  reading_list.appendChild(item);

  resetForm();
}

const resetForm = function(){
  document.querySelector('#input-form').reset();
}

const handleDeleteButton = function(event){
  const reading_list= document.querySelector('#reading-list')
  reading_list.textContent = '';
}

const handleEmptyInput = function(infoToValidate){
  return infoToValidate.some((value) => value === '');
}
