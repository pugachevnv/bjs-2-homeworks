//Задача № 1
const md5 = require('./js-md5.js');

function cachingDecoratorNew(func) {
    let cache = [];
  const maxCacheValuesCount = 5;
  return (...args) => {
    
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    function wrapper(...args){
        clearTimeout(timeoutId);
        wrapper.allCount++;

        if(!timeoutId){
            func(...args);
            wrapper.count++;            
        }

        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    }

    wrapper.count = 0;
    wrapper.allCount = 0;
    
    return wrapper;
}


 