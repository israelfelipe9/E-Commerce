import React from "react";
import Input from "./common/input";
import Select from "./common/select";

import Joi from "joi";

// import auth from "../services/authService";
// import { redirect } from "react-router-dom";

type StateType = {
  data: {
    [key: string]: string;
  };
  errors: {
    [key: string]: string;
  };
};

class LoginForm extends React.Component<{}, StateType> {
  state: StateType = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  validate = () => {
    const options = { abortEarly: false };

    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors: {
      [key: string]: string;
    } = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }: { name: string; value: string }) => {
    const schema = this.schema.extract(name);
    const { error } = schema.validate(value);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = (currentTarget: any) => {
    const { name, value } = currentTarget.target;

    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty({ name, value });

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };

  renderButton(label: string) {
    return (
      <button disabled={this.validate() !== null} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderSelect(name: string, label: string, options: any) {
    const { data, errors } = this.state;

    return (
      <Select
        options={options}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name: string, label: string, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  doSubmit = async () => {
    // try {
    //   const { data } = this.state;
    //   await auth.login(data.username, data.password);
    //   const { state } = this.props.location;
    //   window.location = state ? state.from.pathname : "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.username = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    // if (auth.getCurrentUser()) return redirect("/");

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
