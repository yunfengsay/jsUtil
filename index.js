(function (global){
    String.prototype.xx={}
    global.showJsArmVersion = function(){
        console.log("version 0.0.1")
    }
    global.debounce = function(fn, wait, that) {
        var timer = null
        return (...args) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            that ? args? fn.call(that, ...args):fn.call() : fn()
          }, wait)
        }
      }
      
})(window)