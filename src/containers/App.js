import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// actions
import * as Actions from '../actions';
// components
// import TestContent from '../components/TestContent';
// style
import style from './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startx: 0,
      starty: 0,
      posx: 0,
      posy: 0,
      drag: true,
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleOnDrag = this.handleOnDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleFileUpload() {
    const file = this.refs.file.files[0];
    const img = document.getElementById('photo');
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  handleDragStart(e) {
    const target = e.target;
    if (!target.style.top) target.style.top = '0px';
    if (!target.style.left) target.style.left = '0px';

    // 記錄滑鼠起始位置
    this.state.startx = e.clientX;
    this.state.starty = e.clientY;

    // 記錄圖片位置
    this.state.posx = parseInt(target.style.left);
    this.state.posy = parseInt(target.style.top);

    this.state.drag = true;
  }

  handleOnDrag(e) {
    const target = e.target;

    target.style.left = `${this.state.posx + e.clientX - this.state.startx}px`;
    target.style.top = `${this.state.posy + e.clientY - this.state.starty}px`;
    return false;
  }

  handleDragEnd() {
    this.state.drag = false;
  }

  render() {
    return (
      <div>
        <input type="file" ref="file" onChange={ this.handleFileUpload } />
        <div className={ style.photoContainer }>
          <div className={ style.photoBox } >
            <img
              alt="dragpic"
              className={ style.photo }
              id="photo"
              onDragStart={ this.handleDragStart }
              onDrag={ this.handleOnDrag }
              onDragEnd={ this.handleDragEnd }
            />
          </div>
        </div>
      </div>
    );
  }
}

const getNumber = (state) => state.number;
const getNumberTransform = createSelector([getNumber], number => (number));
function mapStateToProps(state) {
  return {
    number: getNumberTransform(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
