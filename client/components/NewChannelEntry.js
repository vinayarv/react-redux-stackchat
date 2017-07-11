import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store';


function NewChannelEntry (props) {
 
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" value={props.newChannelEntry} onChange={props.handleChange}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function(state, ownProps){

  return {
    newChannelEntry: state.newChannelEntry
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
   
  return {
     handleChange(event){
      dispatch(writeChannelName(event.target.value));
    }, 
    handleSubmit(event){
      event.preventDefault();
      const channelName = event.target.channelName.value
      dispatch(postChannel({name: channelName}, ownProps.history));
      dispatch(writeChannelName(''));

    }
  };
}

 const container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
 export default container;
