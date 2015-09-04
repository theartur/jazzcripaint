(function(){
        function flowerCircle(gridSize, offset, angle) {
            var circle = document.createElement("div");
            circle.classList.add("base-circle-grid");
            circle.style.width = gridSize;
            circle.style.height = gridSize;
            circle.style.webkitTransform = "rotate(" + angle + "deg) translateY(" + offset + ") rotate(-" + angle + "deg)";
            
            return circle;
        }
        
        function createFlower (depth) {
            var baseCircleGridSize = "33vmin";
            var rotateCount = 0;
            var petal, depthPetal, buffPetal;
            
            document.body.appendChild(flowerCircle(baseCircleGridSize, "", rotateCount));
            
            for (var i = 0; i < 6; i++) {
                // inserindo o nó dentro dele mesmo funciona para todos os níveis
                petal = flowerCircle(baseCircleGridSize, "calc(-1 * (33vmin / 2))", rotateCount);
                
                if (depth > 0) {
                    buffPetal = petal;
                    depthPetal = petal.cloneNode();
                    
                    for (var j = 1; j < depth; j++) {
                        buffPetal = buffPetal.cloneNode();
                        buffPetal.appendChild(depthPetal);
                        depthPetal = buffPetal;
                    }
                    
                    petal.appendChild(depthPetal);
                }
                
                document.body.appendChild(petal);

                rotateCount += 60;
            }
            
            console.log("Done creating flower");
        }
        
        createFlower(10);
        
//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////
        
//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-2");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
                
// //////////////////////////////////////

//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-3");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////

//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-4");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////

//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-5");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////

//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-6");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////

//         var baseCircleGrid = document.createElement("div");
//         var baseCircleGridSize = "33vmin";
        
//         baseCircleGrid.classList.add("base-circle-grid");
//         baseCircleGrid.classList.add("base-circle-grid-7");
        
//         baseCircleGrid.style.width = baseCircleGridSize;
//         baseCircleGrid.style.height = baseCircleGridSize;

//         document.body.appendChild(baseCircleGrid);
        
// //////////////////////////////////////
        
    </script>
</body>