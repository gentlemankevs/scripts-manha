function constructorObserver(){
    var listenersList = [];
    var trigger = {cont : 1}
    var object = {
        count: function(){
            listenersList.forEach(function (val){
            val(trigger);
            });

        trigger.cont ++;

        }
    };

    function addListener(obj){
        listenersList.push(obj);
    }

   object.addListener = addListener;
    return object;

}

function listener (trigger){
    console.log("Contando 1: "+trigger.cont);
}

function listener2 (trigger){
    console.log("Contando 2: "+trigger.cont);
}

function listener3 (trigger){
    console.log("Contando 3: "+trigger.cont);
}

var contListeners = constructorObserver();
console.log (contListeners);

contListeners.addListener(listener);
contListeners.addListener(listener2);
contListeners.addListener(listener3);

contListeners.count();
contListeners.count();
contListeners.count();