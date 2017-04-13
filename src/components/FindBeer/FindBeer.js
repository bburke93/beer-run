import React, { Component } from 'react';
import Form from '../Form';
import Display from '../Display';
import beerMap from '../../services/beerMap.js';

class FindBeer extends Component{
  constructor(props){
    super(props);
    this.action = this.action.bind(this);
    const defaultState = { locs: [] };
    this.storageKey = 'beerLocations';
    this.state = JSON.parse(localStorage.getItem(this.storageKey)) || defaultState;
  }

  action({value}){
    beerMap(value)
      .then(res => {
        if(res[0].id == null){
          return Promise.reject();
        }
      })
      .then(res => res[0])
      .then(res => ({
        name: res.name,
        category: res.status,
        address: res.street
      }))
      .then(res => {
        this.setState(state => ({
          locs: [res, ...state.locs]
        }));
        localStorage.setItem(this.storageKey, JSON.stringify(this.state))
      })
  }

  render(){
    return(
      <div className="main">
        <div className="constrain">
          <h1>Search by city and state.</h1>
          <Form submitAction={this.action} />
          {
            this.state.locs.length ?  
            this.state.locs.map((loc,key) => <Display {...loc} key={key} />):
            <div>No results found</div>
          }
        </div>
      </div>
    )
  }
}

export default FindBeer;