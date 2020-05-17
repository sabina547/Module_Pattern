//Basic structure
/*(function() {
    //Declare private variables and functions

    return {
        //Declare public variables and function
        //we can only access public varibles not private.
    }

})();*/

//STANDARD MODULE PATTERN 
/*const UICtrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();
console.log(UICtrl.text); //we cannot access private varibles*/

//REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added....');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id:1, name:'Sabina'});
ItemCtrl.add({id:2, name: 'John'});
console.log(ItemCtrl.get(1));
