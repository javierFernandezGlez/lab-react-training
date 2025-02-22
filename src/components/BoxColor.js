function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

function BoxColor(props) {
    const triple = "rgb(" + props.r + "," + props.g + "," + props.b + ")";
    const hex = RGBToHex(props.r, props.g, props.b);
    
    return (
        <div className="color-card" style={{
            background: `rgb(${props.r}, ${props.g}, ${props.b})`
        }}>
            {triple}<br></br>
            {hex}
        </div>
    );
}
export default BoxColor;