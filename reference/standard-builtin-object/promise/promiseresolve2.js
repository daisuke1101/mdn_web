Promise.resolve('Success').then(function(value) {
    console.log(value);
}, function(value) {
    // ここは呼ばれません
});
// Success