import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '../List/List';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(40),
    flexBasis: '33.33%',
    flexShrink: 1,
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary,
    margin: 'auto 0'
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
    arrays: {
      gradients: ['3 tablespoons butter',
        '1 teaspoon seasoning salt',
        '1 teaspoon onion powder',
        '4 skinless, boneless chicken breast halves',
        '2 teaspoons garlic powder',
        ],
      directions: [
        'Melt butter in a large skillet over medium high heat.',
        'Add chicken and sprinkle with garlic powder, seasoning salt and onion powder',
        'Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.'
      ]
    }
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes ,heading } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{heading}</Typography>
            <Typography className={classes.secondaryHeading}>click here to see full procedure</Typography>
          </ExpansionPanelSummary>
          <List obj={this.state} heading={heading} index={this.props.keys}/>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);