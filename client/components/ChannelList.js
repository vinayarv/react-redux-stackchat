import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from  'react-redux';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

// class ChannelList extends Component {

//   // constructor () {
//   //   super();
//   //   this.state = store.getState();
//   // }

//   // componentDidMount () {
//   //   // this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   // }

//   // componentWillUnmount () {
//   //   // this.unsubscribe();
//   // }

//   render () {

//     // const { messages } = this.state;

//     return (
//       <ul>
//         <li>
//           <NavLink to={RANDOM_CHANNEL} activeClassName="active">
//             <span># really_random</span>
//             <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to={GENERAL_CHANNEL} activeClassName="active">
//             <span># generally_speaking</span>
//             <span className="badge">{ messages.filter(message => message.channelId === 2).length }</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to={DOGS_CHANNEL} activeClassName="active">
//             <span># dogs_of_fullstack</span>
//             <span className="badge">{ messages.filter(message => message.channelId === 3).length }</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to={LUNCH_CHANNEL} activeClassName="active">
//             <span># lunch_planning</span>
//             <span className="badge">{ messages.filter(message => message.channelId === 4).length }</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/new-channel">Create a channel...</NavLink>
//         </li>
//       </ul>
//     );
//   }
// }

// /** Write your `connect` component below! **/
function ChannelList(props){
  console.log(props);
  const channels = props.channels;
  // console.log("Channels from ChannelList: ", channels);
  const messages = props.messages;
  return (
     <ul>
     { props.channels.map( channel => (
        <li key={channel.id}>
        <NavLink to={`channels/${channel.id}`} activeClassName="active">
          <span> {channel.name}</span>
          <span className="badge">{props.messages.filter(message => message.channelId === channel.id).length}</span>
        </NavLink>
      </li>
     ))
     }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
    );
}

const mapStateToProps = function(state){
  return {channels: state.channels, messages: state.messages};
}


 const ChannelListContainer = connect(mapStateToProps)(ChannelList);

 export default ChannelListContainer;
