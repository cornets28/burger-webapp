import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDraw.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDraw = props => {
  let attachedClasses = [classes.SideDraw, classes.Close]
  if (props.opened) {
    attachedClasses = [classes.SideDraw, classes.Open]
  }
  return (
   
    <Aux>
      <Backdrop show={props.opened} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
   
  );
};

export default sideDraw;
