

var animal = {
    type: 'Undefined',
    doSound: function(){
        console.log('Some sound.');
    }
};

var cat = Object.create(animal);
cat.type = 'Cat';
cat.doSound = function(){
    console.log('Meoow');
}

console.log(cat.type);
cat.doSound();
