(function(){
    search_wrap = document.getElementById('search_wrap'), // строка поиска
    search_input = document.getElementById('search_input');
document.addEventListener('click', toggle, false);

window.onresize = resizeContainers; 
function resizeContainers(){
  var page_container = document.getElementById('main'),
      apps_container = document.getElementById('apps_dropdown');
  if(window.innerHeight < 487 && page_container.style.height !== "487px"){
    page_container.style.height = "487px";
  };

  if(window.innerHeight < 600 ){
    apps_container.style.height =  (window.innerHeight - 100) + "px";
    apps_container.style.overflowY = "scroll"; // прокруточка вставляется
  }
  else if(apps_container.style.overflowY === "scroll"){
    apps_container.style.overflowY = "hidden"; // отображается только ччто внутри
  }
}
resizeContainers();

function toggle(e) {
  e = e;
  var target = e.target, // элемент который сгенерил событие
  apps_dropdown = document.getElementById('apps_dropdown'),
  display = apps_dropdown.style.display;
  apps_dropdown.style.display = ((target.id === 'apps') && (display === 'none' || !display))||isParent(target, apps_dropdown) ? "block" : "none"; 
}; // если таргет = аппс и его дисплей в нане то мы смотрим его парент если таргет внутри аппс_дропдаун то выставляем блок, если нет скрываем

function isParent(child, parent){
  while(child.parentNode){
    if(child === parent) return true;
    child = child.parentNode;
  }
  return false;
}
// определяет находится ли child в parent по дереву

search_input.addEventListener("focus", function(){
  search_wrap.style.outline = "-webkit-focus-ring-color auto 5px";
});
search_input.addEventListener("focusout", function(){
  search_wrap.style.outline = "";
});
})();