import React from 'react';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import queryString from 'qs';
import {getItems} from '../store/action/item';

import Pagination from '../component/Pagination';

class Home extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     sort: 'desc'
        // }

        this.changeSort = this.changeSort.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        // axios({
        //     url: '/api/items'
        // }).then(res => {
        //     // console.log('res', res);
        //     this.props.dispatch({
        //         type: 'GET_ITEMS',
        //         payload: res.data
        //     });
        // });

        this.props.dispatch( getItems() ).then(res => {
            console.log(res);
        });
    }

    addItem() {
        // console.log(this.props);
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: 7,
                name: 'Kaikeba',
                price: 7799900
            }
        });
    }

    changeSort({target: {value: sort}}) {
        let {history: {push}} = this.props;
        // console.log(push);
        push('/?sort=' + sort);
    }

    render(){
        // console.log(this.props);
        // console.log(window.location);
        let {items, location: {search}} = this.props;
        // let {sort} = this.state;
        let page = parseInt(this.props.match.params.page) || 1;
        // console.log(page);

        // console.log(search);
        // let qs = new URLSearchParams(search);
        // let sort = qs.get('sort');
        // console.log(sort1);

        let qsTest = queryString.parse(search, {ignoreQueryPrefix: true});
        // console.log(qsTest);
        let sort = qsTest.sort || 'desc';

        // 根据state中sort值进行排序
        items = items.sort((a, b) => sort === 'asc'  ? a.price - b.price : b.price - a.price);

        return(
            <div>
                <h2>商品列表</h2>
                <select defaultValue={sort} onChange={this.changeSort}>
                    <option value="desc">从高到低</option>
                    <option value="asc">从低到高</option>
                </select>
                <button onClick={this.addItem}>添加一条新数据</button>
                <ul className="item-list">
                    <li className="head">
                        <span>名称</span>
                        <span>价格</span>
                    </li>
                    {
                        items.length > 0 && items.map(item=>(
                            <li key={item.id}>
                                <span>
                                    <Link to={'/item/' + item.id}>  {item.name}
                                    </Link>
                                </span>
                                <span>￥ {(item.price / 100).toFixed(2)}</span>
                            </li>
                        ))
                    }
                </ul>

                <Pagination pages={10} page={page} />
            </div>
        );
    }

}

export default connect( store => {
    return {
        items: store.items
    }
} )(Home);