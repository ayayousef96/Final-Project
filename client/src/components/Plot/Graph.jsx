import functionPlot from "function-plot";

let width = 600;
let height = 400;
function Graph(props){
    const parameters = {
        target: "#root",
        width,
        height,
        data: [{
          fn:props.graphToPlot, 
          color: 'red'
        }],
        grid: true,
        yAxis: {domain: [-10, 10]},
        xAxis: {domain: [-10, 10]}
      };
    functionPlot(parameters);
    console.log("Function");
    return null;
}
export default Graph;