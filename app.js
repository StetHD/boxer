var SceneWorker = new Worker('../../src/workers/SceneWorker.js');
var controller,
    header,
    footer,
    aside,
    mainContent;
var nodes = [{
    position: 'absolute',
    origin : [0.0,0.0,0.0],
    align : [0.0,0.0,0.0],
    size : [1.0,0.1,0],
    scale : [1.0,1.0,1.0],
    rotate: [0,0,0],
    id: 'app-header',
    opacity : 1.0
},
{
    position: 'absolute',
    origin : [0.0,0.0,0.0],
    align : [0.0,0.1,0.0],
    translate: [0,0,1],
    size : [0.3336,0.8,0],
    scale : [1.0,1.0,1.0],
    rotate: [0,0,0],
    id: 'app-sidebar',
    opacity : 1.0
},
{
    position: 'absolute',
    origin : [0.0,0.0,0.0],
    align : [0.3336,0.1,0.0],
    translate: [0,0,1],
    size : [0.6667,0.8,0],
    scale : [1.0,1.0,1.0],
    rotate: [0,0,0],
    id: 'app-content',
    opacity : 1.0
},
{
    position: 'absolute',
    origin : [0.0,1.0,0.0],
    align : [0.0,0.9,0.0],
    size : [1.0,0.1,0],
    scale : [1.0,1.0,1.0],
    rotate: [0,0,0],
    id: 'app-footer',
    opacity : 1.0
}];

controller = new ViewController(nodes, SceneWorker);

header = controller.getComponent({id:'app-header'});
aside = controller.getComponent({id:'app-sidebar'});
mainContent = controller.getComponent({id:'app-content'});
footer = controller.getComponent({id:'app-footer'});

header.setContent('<h1>Headline</h1>');
aside.setContent('<h3>Aside</h3>');
mainContent.setContent('<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>');
footer.setContent('<a href="https://github.com/infamous/boxer">Prototype CSS 3D Matrix Rendering Engine on Github</a>');
