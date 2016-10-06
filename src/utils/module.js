import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

// for binding functions in smart components
export function bindFunctions(functions){
   functions.forEach((fnc)=> { this[fnc] = this[fnc].bind(this)});
}

//  for preventing component re-rendering
export class PureComponent extends Component{
  shouldComponentUpdate(nextProps,nextState){
    return shallowCompare(this,nextProps,nextState);
  }
}
