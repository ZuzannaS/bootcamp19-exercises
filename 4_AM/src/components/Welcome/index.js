import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', gender: '', pronoun: '', 
    hometown:'', birthday:'', huid:'', concentration:''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePronoun = this.handleChangePronoun.bind(this);
    this.handleChangeHometown = this.handleChangeHometown.bind(this);
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
    this.handleChangeHUID = this.handleChangeHUID.bind(this);
    this.handleChangeConcentration = this.handleChangeConcentration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.name});
  }

  handleChangeGender(event) {
    this.setState({gender: event.target.gender});
  }

  handleChangePronoun(event) {
    this.setState({pronoun: event.target.pronoun});
  }

  handleChangeHometown(event) {
    this.setState({hometown: event.target.hometown});
  }

  handleChangeBirthday(event) {
    this.setState({birthday: event.target.birthday});
  }

  handleChangeHUID(event) {
    this.setState({huid: event.target.huid});
  }

  handleChangeConcentration(event) {
    this.setState({concentration: event.target.concentration});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name);
  }

  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" name={this.state.name} onChangeName={this.handleChangeName} />
        </label>
        <label>
          Gender:
          <select>
            <option gender={this.state.gender} onChangeGender={this.handleChangeGender}>Male</option>
            <option gender={this.state.gender} onChangeGender={this.handleChangeGender}>Female</option>
            <option> Other</option>
          </select>
        </label>
        <button type="submit" value="Submit"/>
      </div>
    );
  }
}

export default NameForm;
