import React from "react";
import logo from "../../imgs/logo.png";
import agent from '../../agent'

const Banner = (props) => {
  const onSearchChange = (event) => {
    console.log('onchange', props)
    props.onSearchFilter(
      event.target.value,
      (page) =>
        agent.Items.byTitle(event.target.value),
        agent.Items.byTitle(event.target.value)
      )
    };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <form>
            <input
              type="text"
              placeholder='what you want'
              id='search'
              name='search'
              onChange={onSearchChange}
            ></input>
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
