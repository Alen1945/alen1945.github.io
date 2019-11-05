// function Plot(curve) {
//     CURVE={
//         "basis":d3.curveBasis,
//         "linear":d3.curveLinear
//     }
//     this.curve=CURVE[curve]
//     this.startX=null
//     this.stopX=null
//     this.rangeX=null
// }

// Plot.prototype.setX=function (startX,stopX,stepX=1) {
//     this.startX=startX
//     this.stopX=stopX
//     this.rangeX=d3.range(this.startX,this.stopX+1,stepX)
    
// }
// Plot.prototype.setY=null

// Plot.prototype.lineGenerator=function(d){
//    startX=this.startX
//    stopX=this.stopX
//    setY=this.setY
//    curve=this.curve
//    line=d3.line()
//             .x(function(d){return map(d,startX,stopX,0,width)})
//             .y(function(d){
//                 if(setY(startX)>=0){
//                     return map(setY(d),0,setY(stopX),height,0)
//                 }else{
//                     return map(setY(d),setY(startX),setY(stopX),height,0)
//                 }
                
//             })
//             .curve(curve)
//     return line(d)
// }

// Plot.prototype.show=function (canvas) {
//     if(this.rangeX && this.setY!=null){
//         cPath=new Path2D(this.lineGenerator(this.rangeX))
//         canvas.canvas.getContext('2d').stroke(cPath);
//     }else{
//         console.log("please setX and setY")
//     }
// }