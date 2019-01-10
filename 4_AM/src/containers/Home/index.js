import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', gender: '', pronoun: '', foodone:'', foodtwo:'', foodthree:'',
    hometown:'', birthday:'', huid:'', concentration:'', showform: true};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePronoun = this.handleChangePronoun.bind(this);
    this.handleChangeHometown = this.handleChangeHometown.bind(this);
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
    this.handleChangeHUID = this.handleChangeHUID.bind(this);
    this.handleChangeConcentration = this.handleChangeConcentration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFood = this.handleChangeFood.bind(this);
    this.handleChangeFoodTwo = this.handleChangeFoodTwo.bind(this);
    this.handleChangeFoodThree = this.handleChangeFoodThree.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeGender(event) {
    this.setState({gender: event.target.value});
  }

  handleChangePronoun(event) {
    this.setState({pronoun: event.target.value});
  }

  handleChangeHometown(event) {
    this.setState({hometown: event.target.value});
  }

  handleChangeBirthday(event) {
    this.setState({birthday: event.target.value});
  }

  handleChangeHUID(event) {
    this.setState({huid: event.target.value});
  }

  handleChangeConcentration(event) {
    this.setState({concentration: event.target.value});
  }
  handleChangeFood(event) {
    this.setState({foodone: event.target.value});
  }
  handleChangeFoodTwo(event) {
    this.setState({foodtwo: event.target.value});
  }
  handleChangeFoodThree(event) {
    this.setState({foodthree: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showform: false});
  }

  render() {
    const showing = this.state.showform;
    return (
      <div>
        {showing ? (
        <div>
        <label>
          Name:
        <input type="text" name={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          Gender:
          <select>
            <option gender={this.state.gender} onChange={this.handleChangeGender}>Male</option>
            <option gender={this.state.gender} onChange={this.handleChangeGender}>Female</option>
            <option gender={this.state.gender} onChange={this.handleChangeGender}> Other</option>
          </select>
        </label>
        <label>
          Pronoun:
          <input type="radio"  value="He" name="pronoun" pronoun={this.state.pronoun} onChange={this.handleChangePronoun}/> He
          <input type="radio"  value="She" name="pronoun" pronoun={this.state.pronoun} onChange={this.handleChangePronoun}/> She
          <input type="radio"  value="They" name="pronoun" pronoun={this.state.pronoun} onChange={this.handleChangePronoun}/> They
        </label>
        <label>
          Hometown:
          <input type="text" hometown={this.state.hometown} onChange={this.handleChangeHometown} />
        </label>
        <label>
          Birthday:
          <input type="date" birthday={this.state.birthday} onChange={this.handleChangeBirthday} />
        </label>
        <label>
          HUID:
          <input type="text" huid={this.state.huid} onChange={this.handleChangeHUID} />
        </label>
        <label>
          Concentration:
          <input type="text" concentration={this.state.concentration} onChange={this.handleChangeConcentration} />
        </label>
        <label>
          Food1:
          <input type="text" foodone={this.state.foodone} onChange={this.handleChangeFood} />
        </label>
          <input type="text" foodtwo={this.state.foodtwo} onChange={this.handleChangeFoodTwo} />
          <input type="text" foodthree={this.state.foodthree} onChange={this.handleChangeFoodThree} />
        <button type="submit" value="Submit" onClick={this.handleSubmit}/>
        </div>
        ) : (
          <h1>User's name is {this.state.name}, and {this.state.pronoun} are from {this.state.hometown}. {this.state.pronoun} was born on {this.state.birthday}, and {this.state.pronoun} favorite foods are {this.state.foodone}, {this.state.foodtwo}, and {this.state.foodthree}. At Harvard, {this.state.name} studies {this.state.concentration}.</h1>
        )}
      </div>
    );
  }
}
export default Home;
