export default class ChannelList extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  // componentDidMount () {
  //   // this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  // }

  // componentWillUnmount () {
  //   // this.unsubscribe();
  // }

 const mapStateToProps = function(state){
    return {}; 
 };

 let connector =connect(mapStateToProps);
  ChannelList

  render () {

    const { messages } = this.state;

    return (
      <ul>
        <li>
          <NavLink to={RANDOM_CHANNEL} activeClassName="active">
            <span># really_random</span>
            <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={GENERAL_CHANNEL} activeClassName="active">
            <span># generally_speaking</span>
            <span className="badge">{ messages.filter(message => message.channelId === 2).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={DOGS_CHANNEL} activeClassName="active">
            <span># dogs_of_fullstack</span>
            <span className="badge">{ messages.filter(message => message.channelId === 3).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={LUNCH_CHANNEL} activeClassName="active">
            <span># lunch_planning</span>
            <span className="badge">{ messages.filter(message => message.channelId === 4).length }</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
  }
}
