// import React from 'react';
// import {
//   FlexibleWidthXYPlot,
//   DiscreteColorLegend,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   VerticalBarSeries
// } from 'react-vis';
// import '../../node_modules/react-vis/dist/styles/legends.scss';

// export class Graph extends React.Component {
//     render() {  
//         return (
//             <div>
//                 <FlexibleWidthXYPlot 
//                     height={300} 
//                     xType="ordinal" 
//                     margin={{top:10,bottom: 30}} 
//                 >
//                 <DiscreteColorLegend  
//                     style={{position: 'absolute', left: '50px', top: '10px'}}
//                     orientation="horizontal"
//                     items={[
//                     {
//                         title: 'HealthUnsurance Price',
//                         color: '#12939A'
//                     },
//                     {
//                         title: 'Average Walk-up Price',
//                         color: '#79C7E3'
//                     }
//                     ]}
//                 />
//                 <VerticalGridLines />
//                 <HorizontalGridLines />
//                 <XAxis />
//                 <YAxis />
//                 <VerticalBarSeries
//                     color="#12939A"
//                     data={[
//                     {x: 'Spine MRI', y: 270},
//                     {x: 'Urgent Care', y: 100},
//                     {x: 'Physical Therapy', y: 60}
//                     ]}
//                 />
//                 <VerticalBarSeries
//                     color="#79C7E3"
//                     data={[
//                     {x: 'Spine MRI', y: 500},
//                     {x: 'Urgent Care', y: 150},
//                     {x: 'Physical Therapy', y: 85}
//                     ]}
//                 />
//                 </FlexibleWidthXYPlot>
//             </div>
//         );
//     }
// }