import React, { Component } from 'react';

class Table extends Component{
    render () {
        let {data1, data2} = this.props;
        return <table style={{width: '100%'}}>
            <thead>
                <tr>
                    {data1.map((v, k) => {
                        return <td key={v.key}>{v.name}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                {data2.map((v, k) => {
                    return <tr key={v.key}>
                        <td>{v.name}</td>
                        <td>{v.age}</td>
                        <td>{v.address}</td>
                    </tr>
                })}
            </tbody>
        </table>
    }
}
export default Table