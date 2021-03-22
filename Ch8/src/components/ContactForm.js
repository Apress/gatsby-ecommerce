import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mleoekdr"
        method="POST"
        className="contactform"
      >
        <label htmlFor="emailaddress" aria-label="add email address">Email:</label>
        <input type="email" name="email" id="emailaddress" />
        <label htmlFor="message" aria-label="add message">Message:</label>
        <input type="text" name="message" id="message" />
        {status === "SUCCESS" ? <p>Thank you for your message - we will be in contact within 48 hours.</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was a problem sending - please try again.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}