/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

class InputSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      options: [],
    };
  }

  componentDidMount() {
    this.parseOptions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.options !== this.props.options) {
      this.parseOptions();
    }
  }

  parseOptions() {
    const {
      options,
      optionLabel,
      optionValue,
      multilanguage,
      translateFunction,
    } = this.props;
    if (options && options.length > 0) {
      const newOptions = options.map((op) => {
        let dat = null;
        if (multilanguage) {
          dat = {
            value: op[optionValue],
            label: translateFunction(op[optionLabel]),
          };
        } else {
          dat = { value: op[optionValue], label: op[optionLabel] };
        }

        if (
          this.props.field &&
          this.props.field.value &&
          this.props.field.value === op[optionValue]
        ) {
          this.setState({ selectedOption: dat });
        }
        return dat;
      });

      this.setState({ options: newOptions });
    }
  }

  async handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  render() {
    const {
      name,
      labelField,
      placeholder,
      id,
      divClassName,
      mandatory,
      visible,
      tooltip,
    } = this.props;

    return (
      <div
        id={`${id}_Container`}
        className={`${
          visible !== undefined && visible === false ? "field-hidden" : ""
        } form-group`}
      >
        <div
          className={`labelDiv ${divClassName}`}
          title={tooltip || labelField}
        >
          <label
            id={`${id}_labelField`}
            className={mandatory ? "control-label mandatory" : "control-label"}
            htmlFor={id}
          >
            {`${labelField}${mandatory ? " *" : ""}`}
          </label>
        </div>
        <div className={`${divClassName}`}>
          <Select
            name={name}
            value={this.state.selectedOption}
            onChange={(val, event) => this.handleChange(val, event)}
            options={this.state.options}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

InputSelect.propTypes = {
  id: PropTypes.string,
  labelField: PropTypes.string,
  divClassName: PropTypes.string,
  visible: PropTypes.bool,
  mandatory: PropTypes.bool,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  multilanguage: PropTypes.bool,
  translateFunction: PropTypes.func,
};

export default InputSelect;
