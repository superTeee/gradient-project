function changeColor() {
    const colors = [
      'lightBlue',
      'red',
      'grey',
      'lightGreen',
      'coral',
      'crimson',
      'DarkOliveGreen'
    ];
      var randomColor = () => colors[Math.floor(Math.random()*colors.length)];
      document.getElementById('mydiv').style.backgroundColor = randomColor;
      
      const makeGradientString = (color1, color2) => `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`
    
    document.getElementById('mydiv').style.background = makeGradientString(randomColor(), randomColor());
    
    }
    
    