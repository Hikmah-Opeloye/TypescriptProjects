

requirejs.config({
    baseUrl: 'lib',
    paths: {
        start_here: '../build'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['start_here/main']);


