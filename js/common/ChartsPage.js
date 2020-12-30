import React, { Component } from 'react';
import {LineChart,ScatterChart,PieChart,BarChart} from 'react-native-charts-wrapper';
import { StyleSheet, Text, View} from 'react-native';
export default class ChartsPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                    values: [{y: 100},
                            {y: 105},
                            {y: 102},
                            {y: 110},
                            {y: 114},
                            {y: 109},
                            {y: 105},
                            {y: 99},
                            {y: 95}],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('teal'),
                        barSpacePercent: 40,
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],
            },
            xAxis: {
                valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                granularityEnabled: true,
                granularity : 1,
            }
        };
        

    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{durationX: 2000}}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                    />
                {/* <ScatterChart
                    style={styles.chart}
                    data={this.state.data}
                    legend={this.state.legend}
                    marker={this.state.marker}
                    onSelect={this.handleSelect.bind(this)}
                    onChange={(event) => console.log(event.nativeEvent)} />
                <LineChart
                    style={styles.chart}
                    data={this.state.data}
                    legend={this.state.legend}
                    marker={this.state.marker}
                    onSelect={this.handleSelect.bind(this)}
                    onChange={(event) => console.log(event.nativeEvent)} />
                <BarChart
                    style={styles.chart}
                    data={this.state.data}
                    legend={this.state.legend}
                    marker={this.state.marker}
                    onSelect={this.handleSelect.bind(this)}
                    onChange={(event) => console.log(event.nativeEvent)} />
                <PieChart
                    style={styles.chart}
                    data={this.state.data}
                    legend={this.state.legend}
                    marker={this.state.marker}
                    onSelect={this.handleSelect.bind(this)}
                    onChange={(event) => console.log(event.nativeEvent)} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        
    },
    chart: {
        flex: 1
    },
    entryStyle: {
        color: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// // 1.散点图组件(ScatterChart)
// ScatterChart.propTypes = {
//     // 样式属性,详细见下面【1-1】
//     ...BarLineChartBase.propTypes,
//     //data属性，详细见下面【1-2】
//     data: scatterData
// };

// // 2.饼图
// PieChart.propTypes = {
//     /**
//      *样式继承属性，详细见下面【2-1】
//      */
//     ...PieRadarChartBase.propTypes,

//     /**
//      *是否显示饼状图中实体的Label文字标签（非数值Value标签，Value标签通过 
//      *ChartDataSetConfig.chartDataSetConfi.common设置）
//      *(搭配data——>config——>xValuePosition、ValuePosition:"OUTSIDE_SLICE"可显示在区域外部。
//      */
//     drawEntryLabels: PropTypes.bool,

//     /**
//      *实体Label文字标签颜色和大小（非Value数值标签，value标签设置可通过 
//      *ChartDataSetConfig.chartDataSetConfi.common中valueTextSize设置）。
//      */
//     entryLabelColor: PropTypes.number,
//     entryLabelTextSize: PropTypes.number,

//     //是否以百分比形式显示实体数值标签（搭配data->config->valueFormatter:'#.#\'%\''可显示百分比）
//     usePercentValues: PropTypes.bool,

//     centerText: PropTypes.string,        //饼状图中心标签文本
//     styledCenterText: PropTypes.shape({  //饼状图中文文字风格
//         text: PropTypes.string,            //文字，会被centerText属性覆盖
//         color: PropTypes.number,           //文字颜色
//         size: PropTypes.number						 //文字大小
//     }),
//     centerTextRadiusPercent: PropTypes.number,  //饼图中心标签半径百分比（决定文字排版方向和换行）
//     //饼图中心孔半径（搭配transparentCircleRadius(要大于该值)可实现交界处阴影效果）
//     holeRadius: PropTypes.number,
//     holeColor: PropTypes.number,                //饼图中心孔背景颜色
//     transparentCircleRadius: PropTypes.number,  //透明圆半径
//     transparentCircleColor: PropTypes.number,   //透明圆颜色
//     maxAngle: PropTypes.number,   //最大角度（决定最后一个实体距离第一个实体间距空隙，默认360）

//     /**
//      *数据属性，详细见下面【2-2】
//      *PieChart should have only one dataset
//      */
//     data: pieData
// };

// // 3. 折线图组件(LineChart)
// LineChart.propTypes = { 
//     ...BarLineChartBase.propTypes,
//     data: lineData,
// };

// // 4. 柱状图(BarChart)
// BarChart.propTypes = {
//     ...BarLineChartBase.propTypes,
//     //value绘制在柱状图之外（false-在柱状图顶部内侧绘制value值）
//     drawValueAboveBar: PropTypes.bool,
//     //是否绘制柱状图Item背景色（灰色）
//     drawBarShadow: PropTypes.bool,
//     //true-显示整个操作栏，false-突出显示某个值（仅适用于stacked堆叠柱状图）
//     highlightFullBarEnabled: PropTypes.bool,

//     //数据属性
//     data: barData
// }