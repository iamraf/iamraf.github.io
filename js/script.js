var app = document.getElementById('typewritter');

var typewriter = new Typewriter(app,
{
    loop: true
});

typewriter.pauseFor(500)
    .typeString('Welcome to my <strong>page</strong>.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Scroll to find out <strong>more</strong>.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Follow me on <strong>Github</strong>!')
    .pauseFor(1500)
    .deleteAll()
    .pauseFor(2000)
    .start();

particlesJS.load('particles-js', './particles/particles.json', function()
{
    console.log('particles.js loaded');
});