import paper from 'paper';
import { useEffect } from 'react';
import './App.css';

function App() {
  

    useEffect(() => {
        // Initialisation du projet Paper.js

        paper.setup('canvas');

        const firstCircle = new paper.Path.Circle({
          center: paper.view.center,
          radius: 35,
          fillColor: "#ababab",
      });

      const secondCircle = new paper.Path.Circle({
          center: [120, 50],
          radius: 35,
          fillColor: "#ababab",
      });

      
      // Intersection des deux cercles
      // Fusionner les deux cercles en un seul chemin
      const combinedPath = firstCircle.unite(secondCircle);

      // Retirer le chemin d'intersection
      const intersectionPath = firstCircle.intersect(secondCircle);
      combinedPath.subtract(intersectionPath);

      // Créer un chemin le long du contour résultant
      const contourPath = combinedPath.clone();
      contourPath.strokeColor = new paper.Color({
        red: 0,    // Valeur de rouge (0-1)
        green: 0,  // Valeur de vert (0-1)
        blue: 1,   // Valeur de bleu (0-1)
        alpha: 1   // Transparence (0-1)
      }); // Couleur de la ligne de contour
      contourPath.fillColor = null; // Pas de remplissage pour le chemin de contour

      const svgContent = contourPath.exportSVG({ asString: true });
      
      const svgContainer = document.getElementById('svg-container');
        if (svgContainer) {
            svgContainer.innerHTML = svgContent as any;
        }

    }, []);

    return <>
      <canvas id="canvas" />
      <div id="svg-container"></div>
    </>
}

export default App;
