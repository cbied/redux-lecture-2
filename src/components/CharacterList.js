import React, { Component } from "react";
import { connect } from 'react-redux';
import { getStarWarsCharacters } from '../redux/reducers/starWarsReducer'

class CharacterList extends Component {
constructor(props) {
  super(props)
}

  componentDidMount() {
    this.props.getStarWarsCharacters();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
          <h1>Breaking Bad Characters</h1>
          <div>
            {/* Breaking Bad Characters Here */}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
            {this.props.loading ? '...Loading' 
            : this.props.characters.map(char => {
              return(
                <p>{char.name}</p>
              )
            })}
          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState
}

export default connect(mapStateToProps, {
  getStarWarsCharacters
})(CharacterList);
