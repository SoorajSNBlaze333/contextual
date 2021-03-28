const Contexual = {
  init: function(triggers) {
    for (let i = 0; i < triggers.length; i++) {
      this.createContextMenu(triggers[i])
    }
  },
  menuFocus: function(menu) {

  },
  onContextMenu: function(trigger, menu) {
    trigger.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.style.top = (e.clientY) + "px";
      menu.style.left = (e.clientX) + "px";
      menu.classList.add('contextual-menu-show');
      menu.classList.add('contextual-menu-animate');
      menu.focus();
      setTimeout(function() {
        menu.classList.remove('contextual-menu-animate');
      }, 201);
    });
  },
  createContextMenu: function(trigger) {
    const contextMenuTrigger = trigger;
    if (contextMenuTrigger) {
      const menuId = contextMenuTrigger.getAttribute('contextual');
      const contextMenu = document.querySelector('#'+menuId);
      if (contextMenu) {
        this.onContextMenu(trigger, contextMenu)
        contextMenu.classList.add('contextual-menu');
        contextMenu.querySelectorAll('[contextual-item]').forEach(function(item) {
          item.classList.add('contextual-menu-item');
        });
      }
    }
  }
};

window.addEventListener('DOMContentLoaded', function() {
  const contextMenuTriggers = document.querySelectorAll("[contextual]");
  if (contextMenuTriggers.length) {
    Contexual.init(contextMenuTriggers);
    // document.body.addEventListener('click', function(e) {
    //   console.log(e)
    // })
  } 
})