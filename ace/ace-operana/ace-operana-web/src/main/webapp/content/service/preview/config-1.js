var option1 = {
	title : {
		x : 'left',
		text : '',
		subtext : '',
		textStyle : {
			color : '#000000'
		}
	},
	color : ['#3398DB', 'red'],
	tooltip : {
		trigger : 'axis',
		axisPointer : {
			type : 'cross',
			crossStyle : {
				color : 'red'
			}
		}
	},
	calculable : true,
	grid : {
		borderWidth : 1,
		// borderColor:'blue',
		y : 70,
		y2 : 70
	},
	toolbox : {
		feature : {
			dataView : {
				show : true,
				readOnly : false
			},
			magicType : {
				show : true,
				type : ['bar']
			},
			restore : {
				show : true
			},
			saveAsImage : {
				show : true
			}
		}
	},
	legend : {
		data : ['指标值', {
			name : '目标值',
			textStyle : {
				color : '#000000'
			}
		}]
	},
	xAxis : [{
		type : 'category',
		data : [],
		axisPointer : {
			type : 'shadow'
		},
		splitLine : {
			show : false
		}
	}],
	yAxis : [{
		type : 'value',
		name : '',
		axisLabel : {
			formatter : '{value} '
		}
	}],
	series : [{
		name : '指标值',
		type : 'bar',
		barWidth : 40,
		data : [],
		itemStyle : {
			normal : {
				label : {
					show : true,
					position : 'top',
					formatter : '{c}',
					textStyle : {
						color : '#000000'
					}
				}
			}
		},
		markLine : {
			itemStyle : {
				normal : {
					lineStyle : {
						type : 'solid',
						color : 'red'
					},
					label : {
						show : true,
						position : 'right',
						formatter : '目标值{c}',
						textStyle : {
							color : 'red'
						}
					}
				}
			},
			data : [[{
				name : 'A',
				value : 0.03,
				xAxis : -1,
				yAxis : 0.03
			}, {
				name : 'B',
				xAxis : '2017年累计',
				yAxis : 0.03
			}]]
		},
	}, {
		name : '目标值',
		type : 'line',
		yAxisIndex : 1,
		data : []
	}]
};