import React, { Component } from 'react';
import { Pagination } from 'antd';

export default (Table) => {
    class Enhancer extends Component{
        constructor () {
            super();
            this.state = {
                data1: [
                    {
                        'name':'姓名',
                        'key': 0
                    },
                    {
                        'name':'年龄',
                        'key': 1
                    },
                    {
                        'name':'地址',
                        'key': 2
                    }
                ],
                data2: [
                    {
                        'name':'json',
                        'key': 0,
                        'age': 11,
                        'address': '北京市'
                    },
                    {
                        'name':'kitty',
                        'key': 1,
                        'age': 32,
                        'address': '天津市'
                    },
                    {
                        'name':'peter',
                        'key': 2,
                        'age': 21,
                        'address': '河北省'
                    }
                ]
            }
            this.change = this.change.bind(this);
        }
        change (page, pageSize) {
            console.log(page, pageSize)
        }
        render () {
            return <div>
                <Table data1={this.state.data1} data2={this.state.data2}/>
                <Pagination defaultCurrent={1} total={50} onChange={this.change}/>
            </div>
        }
    }
    return Enhancer
}