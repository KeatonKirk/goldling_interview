import React from 'react'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function Visualize(props){

    // init data var
    const data = {
        labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
        datasets: [{
            label: 'pie chart',
            backgroundColor: [
                '#855CF8',
                '#E289F2',
                '#7879F1',
                '#B085FF'
            ],
            data: [100, 12.5, 12.5, 25]
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: 'true',
                position: 'bottom',
                labels: {
                    usePointStyle: 'true',
                    pointStyle: 'circle'
                }
            }
        }
    }

    const COLORS =  {
        low: '#7879F1',
        medium: '#9B51E0'
    }

    const table = [
        {
            name: 'Strategy 1',
            tvl: '$100,000',
            volatility: 'low',
            collateral: '$1000',
            PNL: '+$100'
        },
        {
            name: 'Strategy 2',
            tvl: '$10,000',
            volatility: 'medium',
            collateral: '$1000',
            PNL: '-$100'
        }  
    ]

    // need to color just text for vol
    // need to color text for PNL
    // fix pie chart headers
    // rounded border corners
    return(
        <div style={{display: 'flex', backgroundColor: '#F7FAFC'}}>
            <div style={{boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.05)', marginRight: '50px'}}>
                <div style= {{display: 'flex', alignItems: 'center', padding: '10px'}}>
                    <h2 style={{paddingRight: '10px'}}>Lending Allocations</h2>
                    <h2 style={{alignItems: 'right'}}>$5000 USDC</h2>
                </div>
                <Pie data={data} options={options}/> 
            </div>
            <div>
                <h2 style={{fontFamily: 'Inter', textAlign: 'left'}}> Strategy Performance</h2>
                <table style={{alignItems: 'center', justifyContent: 'center'}}>
                    <thead style={{fontSize: '18px' }}>
                        <th>Strategy</th>
                        <th>TVL</th>
                        <th>Volatility</th>
                        <th>Collateral</th>
                        <th>PNL</th> 
                    </thead>
                    <tbody style={{fontSize: '12px', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.05)'}}>
                        {table.map((strategy, index) => {
                            return (
                                <tr style={{backgroundColor: '#FFFFFF', border: '1px solid gray'}}>
                                    <td style={{padding: '10px'}}>{strategy.name}</td>
                                    <td style={{padding: '10px'}}>{strategy.tvl}</td>
                                    <td style={{padding: '10px'}}>
                                        <p style={{backgroundColor: COLORS[strategy.volatility], borderRadius: '10px'}}>{strategy.volatility}</p>
                                        </td>
                                    <td style={{padding: '10px'}}>{strategy.collateral}</td>
                                    <td style={{padding: '10px'}}>{strategy.PNL}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Visualize