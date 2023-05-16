import React from "react";
import Joi from "joi";
import Input from "./common/input";
import Select from "./common/select";

// import auth from "../services/authService";

type StateType = {
  data: {
    [key: string]: string;
  };
  errors: {
    [key: string]: string;
  };
};

class RegisterForm extends React.Component<{}, StateType> {
  state: StateType = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
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
    //     const response = await userService.register(this.state.data);
    //     auth.loginWithJwt(response.headers["x-auth-token"]);
    //     window.location = "/";
    //   } catch (ex) {
    //     if (ex.response && ex.response.status === 400) {
    //       const errors = { ...this.state.errors };
    //       errors.username = ex.response.data;
    //       this.setState({ errors });
    //     }
    //   }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
