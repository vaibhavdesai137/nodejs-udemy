
var obj = {
    name: "Foo",
    greet: function (arg1, arg2) {
        console.log(this.name);
        console.log(arg1);
        console.log(arg2);
        console.log();
    }
};

obj.greet();

// update "this" reference using call
obj.greet.call({
    name: "Foo"   
}, 100, 200);

// update "this" reference using apply
obj.greet.apply({
    name: "Foo"   
}, [100, 200]);

// O/p:
// Foo
// undefined
// undefined

// Foo
// 100
// 200

// Foo
// 100
// 200