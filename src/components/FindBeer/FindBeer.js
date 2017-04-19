import React, { Component } from 'react';
import Form from '../Form';
import Display from '../Display';
import beerMap from '../../services/beerMap.js';

class FindBeer extends Component{
  constructor(props){
    super(props);
    this.action = this.action.bind(this);
    const defaultState = { locs: [], isNull: false };
    this.storageKey = 'beerLocations';
    this.state = defaultState;
  }

  action({value}){
    const LimitTo = n => arr => arr.slice(0,n);
    beerMap(value)
      .then(res => {
        if(res[0].id == null){
          this.setState(state => ({
            locs: [...state.locs],
            isNull: true
          }));
          return Promise.reject();
        }
        return res;
      })
      .then(res => [...LimitTo(10)(res)])
      .then(res => res.map(beer=>({
        name: beer.name,
        category: beer.status,
        address: beer.street,
        cityState: beer.city + ', ' + beer.state,
        link: beer.reviewlink,
        phone: beer.phone
      })))
      .then(res => {
        this.setState(state => ({
          locs: [...res],
          isNull: false
        }));
        sessionStorage.setItem(this.storageKey, JSON.stringify(this.state));
      })
  }

  render(){
    return(
      <div className="main">
        <div className="constrain">
          <h1>Search by city and state.</h1>
          <Form submitAction={this.action} />
          {
            this.state.isNull === false ?  
            this.state.locs.map((loc,key) => <Display {...loc} key={key} />):
            <div><br/>No results found</div>
          }
        </div>
      </div>
    )
  }
}

export default FindBeer;