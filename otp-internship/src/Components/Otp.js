import '../App.css';
import React from 'react';

class Otp extends React.Component {

  state = {
    popup: false,
    temp: '    '
  }

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "",otp6: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {

    if(event.target.value < 10){
      this.setState({ [value1]: event.target.value });
    }
  }

  handleSubmit(event) {

    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace" || elmnt.code === "ArrowLeft") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus()
      }
    }

  }

  onClick = () => {
    if (this.state.popup) {
      this.setState({ popup: false });
      return
    }
    else {
      this.setState({ popup: true });
    }
  }

  handleOTP = (event) => {
    if (event.target.value.length > 3) {
      event.preventDefault();
      event.target.blur();
    }
    this.setState({ temp: event.target.value })
  }

  paste = () => {
    navigator.clipboard.readText().then(result=>{
      if(result[0]){
        this.setState({otp1: result[0]});
      }

      if(result[1]){
        this.setState({otp2: result[1]});
      }

      if(result[2]){
        this.setState({otp3: result[2]});
      }

      if(result[3]){
        this.setState({otp4: result[3]});
      }

      if(result[4]){
        this.setState({otp5: result[4]});
      }

      if(result[5]){
        this.setState({otp6: result[5]});
      }
      
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.popup ? (
            <div className='popup' >
              <h2>Phone Verification</h2>
              <hr />
              <p>
                Enter the OTP you received on 98765-xxxx
              </p>

              <div id="divOuter">
                <form onSubmit={this.handleSubmit}>
                  <div className="otpContainer">

                    <input
                      name="otp1"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp1}
                      onChange={e => this.handleChange("otp1", e)}
                      tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                    />
                    <input
                      name="otp2"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp2}
                      onChange={e => this.handleChange("otp2", e)}
                      tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                    />
                    <input
                      name="otp3"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp3}
                      onChange={e => this.handleChange("otp3", e)}
                      tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)} 

                    />
                    <input
                      name="otp4"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp4}
                      onChange={e => this.handleChange("otp4", e)}
                      tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)} 
                    />

                    <input
                      name="otp5"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp5}
                      onChange={e => this.handleChange("otp5", e)}
                      tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                    />

                    <input
                      name="otp6"
                      type="number"
                      autoComplete="off"
                      className="otpInput"
                      value={this.state.otp6}
                      onChange={e => this.handleChange("otp6", e)}
                      tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                    />
                  </div>
                  <div>
                    <a style={{cursor:'pointer'}} onClick={this.paste} >Paste from clipboard</a>
                  </div>
                  <button className='send-otp' onClick={this.onClick} style={{ margin: '20px 0px' }} type="submit">
                    Verify
                  </button>
                </form>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin:'0px 0px' }} >
                <a href='/' >Change Number</a>
                <a href='/' >Resend</a>
              </div>

              <div style={{textAlign:'left', padding:'20px'}} >
                It can perform all the tasks given in the questions - 
                <li>Once a digit is entered, the focus moves to the next input</li>
                <li>Backspace deletes the input and focus on the previous input</li>
                <li>The user can navigate the input boxes with arrow keys</li>
                <li>User can auto-fill the input boxes from clipboard</li>
              </div>
            </div>
          ) : (
            <button className='send-otp' onClick={this.onClick} >
              SEND OTP
            </button>
          )
        }
      </div>
    );
  }
}

export default Otp;
