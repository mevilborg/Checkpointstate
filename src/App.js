import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullName: 'Evilborg',
        bio: 'a gamer',
        imgSrc: '',
        profession: 'Software Developer',
      },
      show: false,
      intervalId: null,
      timer:0
    };
  }

  componentDidMount() {
    setInterval(()=>(this.setState({timer:this.state.timer + 1}) ),1000)
}

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.state.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timer } = this.state;

    return (
      <div className="App">
        <h1>Best gamer in the world </h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
            
        <p>{this.state.timer}</p>
          </div>
        )}

      </div>
    );
  }
}

export default App;
