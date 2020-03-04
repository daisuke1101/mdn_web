Promise.reject(new Error('fail')).then(function() {
    // ここは呼ばれません
}, function(error) {
    console.log(error);
});
// Error: fail